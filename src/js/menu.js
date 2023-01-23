const menuClick = document.querySelector('#menuClick');
const menu = document.querySelector('#menu');

menuClick.addEventListener('click', () =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } 
    else{
        menu.classList.add('hidden');
    }
})