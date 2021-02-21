var text = ["Abdalrhman","Eldip","Front End","Developer"];
var index = 0;
var count = 0; 
var currentText = "";
var letter = "";

(function type(){
   if(count === text.length){
       count = 0;
   }
   currentText = text[count];
   letter = currentText.slice(0,++index);
   document.querySelector('.type').innerText = letter;
   if(letter.length === currentText.length){
       index = 0 ;
       count++; 
   }
   setTimeout(type,400);
})();
//-------------Sec-1----------
var faCog = document.querySelector(".fa-cog");
var faClose = document.querySelector(".fa-close");
var colorChange = document.querySelector('.colorchange');
var curs = document.querySelector('.curs');
var images = document.querySelectorAll('.images img');
function show(){
    var color = this.getAttribute('color');
    document.documentElement.style.setProperty("--main-Color",color)
}
images.forEach(s => s.addEventListener('click',show));
faCog.addEventListener('click',function(){
   colorChange.style.left = "0";
   curs.style.left = '-100%';
})
faClose.addEventListener('click',function(){
    colorChange.style.left = "-100%";
    curs.style.left = '0%';
 })
//-------------Sec-2----------
//---------Load-Animation-----
var loadanimate = document.querySelector('.loadanimate');
function hidden(){
    loadanimate.classList.add('loadanimate-active');
}
window.addEventListener('load',hidden);
//---------Load-Animation-----