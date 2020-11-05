let image1 = {src:"img1.png", alt:"123", bannertext:"Omsorg for mennesker"};
let image2 = {src:"img2.png", alt:"345", bannertext:"Ligelig fordeling af ressourcer"};
let image3 = {src:"img3.png", alt:"567", bannertext:"Omsorg for Jorden"};

var images = [image1, image2, image3,];

window.onload=function(){
  for(i = 0; i < images.length; i++){
    var nr = images[i];
    var elem = document.createElement("div");
    elem.id = "sliderId_"+[i];
    elem.className = "slide";
    elem.setAttribute('style', 'opacity: 0;');
    document.getElementById("imageSlides").appendChild(elem);
    if(i == 0){
      elem.setAttribute('style', 'opacity: 1;');
    }
    if(i == i){
      var elem2 = document.createElement("img");
      elem2.src = ("src", "img/"+nr.src);
      elem2.alt = ("alt", +nr.alt);
      document.getElementById("sliderId_"+[i]).appendChild(elem2);
      var elem3 = document.createElement("h3");
      var h = document.createTextNode(nr.bannertext);
      elem3.appendChild(h);
      document.getElementById("sliderId_"+[i]).appendChild(elem3);
    }
  }
}
let x = 1;
let prev = 0;

function slide() {
    document.getElementById("sliderId_"+x).style.opacity = 1;
    document.getElementById("sliderId_"+prev).style.opacity = 0;
    console.log("x = "+x);
    prev = x;
    if(x === images.length - 1){
      x = 0;
    }else{
      x++;
    }
}
setInterval(slide, 3000);
