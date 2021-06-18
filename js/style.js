

$("#btnUp").click(function(){
   $("body").animate({scrollTop:(0)},1000);
})

$("a").click(function(){
   var srs=$(this).attr("href");
   var gets=$(srs).offset().top;
    $("html,body").animate({scrollTop:gets},1000);
})











var bds=document.getElementById("body");
/*
bds.addEventListener("click",function(e){
   bds.style.textAlign="center";
})
*/
(function(){
  $("#body").click(function(){
     $("#body").css("textAlign","center");
  })

  var style;


       if(localStorage.getItem("styleUser")==null){
         style={color:"black"};

       }else{
          style=JSON.parse(localStorage.getItem("styleUser"));
       }

       $(".sec-nav").css("backgroundColor",style.color);




  $("#toogle-btn").click(function(){
    $("#color-option").toggle();
  })


  var lis=$("#color-option ul li");
   var ran=["black","teal","red","#09c"];

    for(var i=0;i<lis.length;i++){
       var r=Math.round(Math.random()*lis.length);
       lis.eq(i).css("backgroundColor",ran[r]);
  }

  lis.click(function(){
     var color=$(this).css("backgroundColor");
       style.color=color;
         localStorage.setItem("styleUser",JSON.stringify(style));
       $(".sec-nav").css("backgroundColor",color);
  })

  $(".image-change").click(function(){
          var img=$(this).attr("src");
          $("body").css("backgroundImage","url(./"+img+")");
          $("body").css("backgroundSize","100% 100%");
  })


  $("#plus").click(function(){
    if($("body").css("fontSize")>="40px"){
       $("body").css("fontSize","40px");
    }else{
      $("body").css("fontSize","+=1");

    }
  })


  $("#minus").click(function(){
    if($("body").css("fontSize")<="10px"){
      $("body").css("fontSize","10px");
    }else{
      $("body").css("fontSize","-=1");
    }
  })

})();
$(window).scroll(function(){

    var windowScroll=$(window).scrollTop();
    var hsOffset=$("#sc1").offset().top;
    if(windowScroll>hsOffset -100){
      $(".sec-nav").css("backgroundColor","rgba(0,0,0,0.6)");
    }else{
      $(".sec-nav").css("backgroundColor",style.color);
    }
})





$(document).ready(function(){
  $("#wall").fadeOut(2000,function(){
     $("body").css("overflow","auto");
  })
})



var data=[];
var getPosts= new Promise(function(resolved,rejected){

var req= new XMLHttpRequest();
req.open("get","https://jsonplaceholder.typicode.com/posts");
req.send();
  req.onload=function(){
    if(req.status==200){
    var myData= JSON.parse(req.response);
      resolved(myData);
    }else{
      rejected("error");
    }
  }

})
getPosts.then(function(res){

   for(var i=0;i<res.length;i++){
     if(res[i].id==18){
       console.log(res[i].id);

 }else{
   console.log("hwud");
 }
   }

},function(err){
   console.log("Error"+err);
})


var home=0;

$(window).scroll(function(){
var home=$(window).scrollTop();
var sec=$(".sec3").offset().top;
  if(home>450){
 $("<style>a:nth-child(1):after{display:none}</style>").appendTo("head");
 $("a:nth-child(1)").css("backgroundColor","transparent");
$("<style>a:nth-child(2):after{display:block}</style>").appendTo("head");
$("a:nth-child(2)").css("backgroundColor","red");
} if(home>sec){
$("<style>a:nth-child(2):after{display:none}</style>").appendTo("head");
$("a:nth-child(2)").css("backgroundColor","transparent");
$("<style>a:nth-child(3):after{display:block}</style>").appendTo("head");
$("a:nth-child(3)").css("backgroundColor","red");

}if(home<sec && home>450){
$("<style>a:nth-child(3):after{display:none}</style>").appendTo("head");
$("a:nth-child(3)").css("backgroundColor","transparent");
$("<style>a:nth-child(2):after{display:block}</style>").appendTo("head");
$("a:nth-child(2)").css("backgroundColor","red");

}if(home<450 && home>0){
$("<style>a:nth-child(2):after{display:none}</style>").appendTo("head");
$("a:nth-child(2)").css("backgroundColor","transparent");
$("<style>a:nth-child(1):after{display:block}</style>").appendTo("head");
$("a:nth-child(1)").css("backgroundColor","red");

}
})



$(".burger").click(function(){
   $(".togler").css("transform","translateX(0)");

})

$("i").click(function(){
   $(".togler").css("transform","translateX(900px)");
   $(".togler").css("transition","all 0.6s");

})
