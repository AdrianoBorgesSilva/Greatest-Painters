const vanGogh = document.getElementById('vanGogh_box')
const monet = document.getElementById('monet_box')
const rembrandt = document.getElementById('rembrandt_box')
const vanGoghInfo = document.getElementById('vanGoghInfo')
const monetInfo = document.getElementById('monetInfo')
const rembrandtInfo = document.getElementById('rembrandtInfo')
const infoContainer = [...document.querySelectorAll('.info_container')]

vanGogh.addEventListener('click', ()=>{
    vanGogh.classList.toggle('select')
    monet.classList.toggle('deselect')
    rembrandt.classList.toggle('deselect')
    vanGoghInfo.classList.toggle('show_info')
})
monet.addEventListener('click', ()=>{
    vanGogh.classList.toggle('deselect')
    monet.classList.toggle('select')
    rembrandt.classList.toggle('deselect')
    monetInfo.classList.toggle('show_info')
})
rembrandt.addEventListener('click', ()=>{
    vanGogh.classList.toggle('deselect')
    monet.classList.toggle('deselect')
    rembrandt.classList.toggle('select')
    rembrandtInfo.classList.toggle('show_info')
})

infoContainer.forEach((el)=>{
    el.addEventListener('click', (evt)=>{
        evt.stopPropagation()
    })
})







