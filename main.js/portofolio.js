var curoser = document.querySelector('.curoser');

window.addEventListener('mousemove',function(e){
    curoser.style.top = e.pageY + "px";
    curoser.style.left = e.pageX + "px";
})
