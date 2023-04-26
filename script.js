const vanGogh = document.getElementById('vanGogh_box')
const monet = document.getElementById('monet_box')
const rembrandt = document.getElementById('rembrandt_box')

vanGogh.addEventListener('click', ()=>{
    vanGogh.classList.toggle('select')
    monet.classList.toggle('deselect')
    rembrandt.classList.toggle('deselect')
})
monet.addEventListener('click', ()=>{
    vanGogh.classList.toggle('deselect')
    monet.classList.toggle('select')
    rembrandt.classList.toggle('deselect')
})
rembrandt.addEventListener('click', ()=>{
    vanGogh.classList.toggle('deselect')
    monet.classList.toggle('deselect')
    rembrandt.classList.toggle('select')
})






