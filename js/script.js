const toggle =document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul');
const menuItens = menu.querySelector('li a');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menuItens.forEach(item => {
    item.addEventListener('click', ()=> {
        menu.classList.remove('active');
    })
})
