      window.onload=function(){
        
        $('select').material_select();


        function fileSelect(evt){
            // console.log("fileSelect");                      
            // console.log(evt.dataTransfer.files[0]);
            evt.stopPropagation();
            evt.preventDefault();

            var files=evt.dataTransfer.files;
        
            var imgURL = window.URL.createObjectURL(files[0]);//获取图片的路径 
            var fileName = files[0].name; //图片名称 
            var fileSize = Math.floor((files[0].size)/1024);  
            if(fileSize>1024){ 
                alert("上传大小不能超过1024K."); 
                return false; 
            } 

            var imgStyle="width:95%";
            var img_node=document.createElement("img");
            img_node.setAttribute("src",imgURL);
            img_node.setAttribute("style",imgStyle);
            img_node.setAttribute("draggable",false);

            var li_node=document.getElementById("md_icon");
            var pre_node=document.getElementsByClassName("preview")[0];
            pre_node.replaceChild(img_node,li_node);

            //  $(".preview").html(str); 
            //发送数据
            // var fd = new FormData(); 
            // fd.append('mypic', files[0]); 
            // console.log("");
            // fetch("http://localhost:3000/collection/postData",{
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "multipart/form-data"
            //     },
            //     body:fd
            // }).then(function(res){
            //   if(res.ok){
            //     console.log("ok");
            //   }else if(res.status==401){

            //   }
            // },function(e){
            //   console.log("error");
            // });

          }

          function dragOver(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            evt.dataTransfer.dropEffect = 'copy';
          }
          // 监听器
          var dropZone = document.getElementById('drop_zone');
          dropZone.addEventListener('dragover', dragOver, false);
          dropZone.addEventListener('drop', fileSelect, false);
      }