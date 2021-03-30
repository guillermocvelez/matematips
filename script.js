const toggler = document.querySelector('.toggler');
const togglerNav = document.querySelector('.toggler-nav');
const closeNav = document.querySelector('.close-toggler');

toggler.addEventListener('click', ()=>{
    togglerNav.classList.add("showNav")
})
closeNav.addEventListener('click', ()=> {
    togglerNav.classList.remove("showNav")
})