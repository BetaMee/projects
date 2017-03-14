window.onload=function(){
  document.getElementsByClassName("item")[0].addEventListener('animationend', function(){
    console.log("0 is ok");
    var d='page1 item';
    document.getElementsByClassName("item")[0].className=d;    
  });

   document.getElementsByClassName("item")[1].addEventListener('animationend', function(){
    console.log("1 is ok");
    var g='page2 item active';
    document.getElementsByClassName("item")[1].className=g;
  });
}

function moveElement(){
  var items=document.getElementsByClassName("item");
  var e='page1 item active animated slideOutRight';
  var f='page2 item active animated slideInLeft';
  items[0].className=e;  
  items[1].className=f; 
}


class Carousel{
  constructor(element,config){
    this.element=element;
    this.position=config.position;
    this.previous=0;//先前的
    this.active=0;//现在的
  }

  move=()=>{
    let items=document.getElementsByClassName(this.element);
    items[this.active].className="carousel-item carousel-active";

  }
}

