window.addEventListener("scroll",function(){
    var nav = this.document.querySelector("navbar");
    navbar.classList.toggle("sticky", this.window.scrollY > 0);
})