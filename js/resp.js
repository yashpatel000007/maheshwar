burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnNav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    rightnNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

function myFunction() {
    alert("Your Detail's Is Submitted!");
  }