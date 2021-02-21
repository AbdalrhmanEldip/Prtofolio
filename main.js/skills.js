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

//Number-Animation
   var h1 = document.querySelectorAll('.row-1 h1');
   var num1 = 0;
   var num2 = 0;
   var num3 = 0;
   var num4 = 0;

   window.addEventListener('load',numadd1)
   function numadd1(){
       if(num1 < 12){
           num1++;
       }
       h1[0].innerHTML = num1;
       setTimeout(numadd1,100)
   }
   window.addEventListener('load',numadd2)
   function numadd2(){
       if(num2 < 91){
           num2++;
       }
       h1[1].innerHTML = num2;
       setTimeout(numadd2,25)
   }
   window.addEventListener('load',numadd3)
   function numadd3(){
       if(num3 < 97){
           num3++;
       }
       h1[2].innerHTML = num3;
       setTimeout(numadd3,25)
   }
   window.addEventListener('load',numadd4)
   function numadd4(){
       if(num4 < 52){
           num4++;
       }
       h1[3].innerHTML = num4;
       setTimeout(numadd4,50)
   }
//Number-Animation