var contentEle = document.body.querySelector(".content");

function makeHome(){
  contentEle.innerHTML="";
  contentEle.innerHTML="Home Page"
}

function makeAbout(){
  contentEle.innerHTML="";
  var headEle = document.createElement("h1");
  headEle.innerHTML="About Page"
  contentEle.appendChild(headEle);
}

function makeInt(){
  contentEle.innerHTML="";
  contentEle.innerHTML="Interact Page"
}

function counter(number){
  var ele = document.createElement("div");
  ele.innerHTML=number;
}
for(var i=0; i<1; i++){
  counter("0");
}
document.body.querySelector(".homeButt").addEventListener("click", function(){
  makeHome();
})

document.body.querySelector(".aboutButt").addEventListener("click", function(){
  makeAbout();
  var nameEle = document.createElement("h3");
  nameEle.innerHTML="Seth Johnson"
  contentEle.appendChild(nameEle);
})

document.body.querySelector(".intButt").addEventListener("click", function(){
makeInt();
})
document.body.querySelector(".cButt").addEventListener("click", function(){
  counter(i++);
})