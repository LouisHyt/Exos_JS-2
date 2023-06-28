const carres = document.querySelectorAll(".carre");
for(const carre of carres){
    carre.addEventListener("click", function(){
        this.classList.toggle("active");
    })
}