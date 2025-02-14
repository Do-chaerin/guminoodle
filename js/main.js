window.addEventListener("click" , ()=>{
    const tab = document.querySelectorAll(".tab li")
    tab.forEach(function(list){
        
        list.addEventListener("click" , ()=>{
        list.classList.toggle(".active")
        })
    })
})