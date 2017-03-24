function FileUpload(){  
    this.formData=new FormData();
    this.titleVal=null;
    this.linkVal=null;
    this.cateVal=null;

    //额外保存一个图标节点
    this.iconNode=null;
    
    this.getInput=function(){
        //获取输入框的内容
        this.titleVal=document.getElementById("title").value;
        this.linkVal=document.getElementById("pageUrl").value;
        this.cateVal=document.getElementById("categories").value;        
        //放入formData变量中
        if(this.titleVal=="" || this.linkVal=="" || this.cateVal==""){
            return false;
        }else{
            this.formData.append('title',this.titleVal);
            this.formData.append('pageUrl',this.linkVal);
            this.formData.append('categories',this.cateVal);
            return true;   
        }
    
    };
    //选择图片文件
    this.fileSelect=function(event){
        //阻止默认事件
        event.stopPropagation();
        event.preventDefault();
        //首先清空拖拽区域
        this.resetDrag();

        var files=event.dataTransfer.files;  
        //类型判断
        var fileType=files[0].type;
        if(fileType!='image/png' && fileType!='image/jpg' && fileType!='image/jpeg'){
            alert("please choose pic");
            return false;
        }
        //展示缩略图
        var imgURL = window.URL.createObjectURL(files[0]);//获取文件的路径 
        var fileSize = Math.floor((files[0].size)/1024);  
        if(fileSize>512){ 
            alert("上传大小不能超过512K."); 
            return false; 
        } 
        var imgStyle="width:60%;opacity:0.4;border-radius:5px";
        var img_node=document.createElement("img");
        img_node.setAttribute("src",imgURL);
        img_node.setAttribute("style",imgStyle);
        img_node.setAttribute("draggable",false);//当放置完图片，设为不能再拖拽

        var li_node=document.getElementById("md_icon");
        this.iconNode=li_node;//保存这个图标节点
        var pre_node=document.getElementsByClassName("preview")[0];
        pre_node.replaceChild(img_node,li_node);

        //置入formData变量中       
        this.formData.append('pic', files[0]);         
        //写入信息到界面上
        var infoTxt1=document.createTextNode(files[0].name);
        var infoTxt2=document.createTextNode(`${Math.floor(files[0].size/1024)}KB`);
        var infoTxt3=document.createTextNode(files[0].type);
        
        var fileInfo=document.getElementsByClassName("fileInfo");
        fileInfo[0].appendChild(infoTxt1);
        fileInfo[1].appendChild(infoTxt2);
        fileInfo[2].appendChild(infoTxt3);        
    };
    //拖动结束效果
    this.dragOver=function(event){
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    };

    this.upload=function(event){
        event.stopPropagation();
        event.preventDefault();
        //获取文本输入
        if(!this.getInput()){
            showInfo("请填写完整字段");            
            return false;
        }
        if(!this.formData.has('pic')){
            showInfo("请正确添加图片");                        
            return false;
        }
        var fd=this.formData;
        //保存类别变量，调用子域的刷新函数进行刷新
        var categories=this.cateVal;  
        //手动that
        _that=this;
        $.ajax({
            url: "/collection/upload",
            type: "POST",
            data: fd, 
            cache: false,
            contentType: false,           //告诉jquery不要设置content-type头部
            processData: false            //告诉jquery不要对参数进行处理
        }).done(function(res) {
            //上传成功处理流程
            showInfo("添加成功");            
            //调用子域的刷新函数进行刷新
            preChild.window.refresh(categories);
            //改变tab的样式
            styleChange(categories);
            //重置
            _that.resetAfterUpload();
        }).fail(function(e) {
            //上传失败处理流程
            showInfo("添加失败");                        
            console.log(e);
        });
    };

    this.resetDrag=function(){
        var pre_node=document.getElementsByClassName("preview")[0];//预览区
        if(this.iconNode!==null){
            this.removeAllChild(pre_node);//清空所有子元素            
            pre_node.appendChild(this.iconNode);    
            this.iconNode=null;        
        }
    }
    this.reset=function(event){
        event.stopPropagation();
        event.preventDefault();
        //重置表单对象
        this.formData.delete("title");
        this.formData.delete("pageUrl");
        this.formData.delete("categories");
        this.formData.delete("pic");
        this.titleVal=null;
        this.linkVal=null;
        this.cateVal=null;
        //清空输入框
        document.getElementById("title").value="";
        document.getElementById("pageUrl").value="";
        //清空拖拽区域
        this.resetDrag();
        showInfo("重置成功");
    };
    this.resetAfterUpload=function(){
        //重置表单对象
        this.formData.delete("title");
        this.formData.delete("pageUrl");
        this.formData.delete("categories");
        this.formData.delete("pic");
        this.titleVal=null;
        this.linkVal=null;
        this.cateVal=null;
        //清空输入框
        document.getElementById("title").value="";
        document.getElementById("pageUrl").value="";
        //清空拖拽区域
        this.resetDrag();
    };

    this.removeAllChild=function(parent){
    if(parent.nodeType!==1)return false;
        while(parent.hasChildNodes()) //当div下还存在子节点时 循环继续
        {
            parent.removeChild(parent.firstChild);
        }
    }
}



function styleChange(categories){
    if(categories==null){
        return false;
    }
    if(categories==="美人志"){
        document.getElementById('topic1').style.color="#e53935";       
        document.getElementById('topic2').style.color="#424242";                
        document.getElementById('topic3').style.color="#424242";               
        document.getElementById('topic4').style.color="#424242";        
         
    }else if(categories==="青年观察"){
        document.getElementById('topic1').style.color="#424242";       
        document.getElementById('topic2').style.color="#e53935";                
        document.getElementById('topic3').style.color="#424242";               
        document.getElementById('topic4').style.color="#424242";                
    }else if(categories==="美食志"){
        document.getElementById('topic1').style.color="#424242";       
        document.getElementById('topic2').style.color="#424242";                
        document.getElementById('topic3').style.color="#e53935";               
        document.getElementById('topic4').style.color="#424242";               
    }else if(categories==="have a chat"){
        document.getElementById('topic1').style.color="#424242";       
        document.getElementById('topic2').style.color="#424242";                
        document.getElementById('topic3').style.color="#424242";               
        document.getElementById('topic4').style.color="#e53935";         
    }
}

function showInfo(message){
      Materialize.toast(message, 4000);
}

window.onload=function(){
    $('select').material_select();

    var fileUpload=new FileUpload();
     // 监听器
    var dropZone = document.getElementById('drop_zone');
    //监听拖拽事件
    dropZone.addEventListener('dragover', fileUpload.dragOver, false);
    dropZone.addEventListener('drop',(e)=>{fileUpload.fileSelect(e)}, false);
    //上传功能
    var uplaod=document.getElementById("upload");
    upload.addEventListener('click',(e)=>{fileUpload.upload(e)},false);
    //重置功能
    var reset=document.getElementById("reset");
    reset.addEventListener('click',(e)=>{fileUpload.reset(e);},false);

    //处理tab的切换
    var topic1=document.getElementById('topic1');
    var topic2=document.getElementById('topic2');
    var topic3=document.getElementById('topic3');
    var topic4=document.getElementById('topic4');
    
    topic1.addEventListener('click',(e)=>{
        e.stopPropagation();
        e.preventDefault();
        styleChange("美人志");
        preChild.window.refresh(topic1.firstChild.nodeValue);
    },false);
    topic2.addEventListener('click',(e)=>{
        e.stopPropagation();
        e.preventDefault();
        styleChange("青年观察");        
        preChild.window.refresh(topic2.firstChild.nodeValue);
    },false);
    topic3.addEventListener('click',(e)=>{
        e.stopPropagation();
        e.preventDefault();
        styleChange("美食志");                
        preChild.window.refresh(topic3.firstChild.nodeValue);
    },false);
    topic4.addEventListener('click',(e)=>{
        e.stopPropagation();
        e.preventDefault();
        styleChange("have a chat");                
        preChild.window.refresh(topic4.firstChild.nodeValue);
    },false);
}