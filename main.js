const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe')
const gradients = document.querySelectorAll('.gradient')
const shoeBg = document.querySelector('.shoeBackground')

let PrevColor = "blue"

animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'))
    this.classList.add('active')
}

function colorChange(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary')
    let color = this.getAttribute('color')
    let shoe = document.querySelector(`.shoe[color="${color}"]`)
    let gradient = document.querySelector(`.gradient[color="${color}"]`)
    let prevGrad = document.querySelector(`.gradient[color="${PrevColor}"]`)

    colors.forEach(color => color.classList.remove('active'))
    this.classList.add('active')

    document.documentElement.style.setProperty('--primary', primary)
    shoes.forEach(shoe => shoe.classList.remove('show'))
    shoe.classList.add('show')

    gradients.forEach(gradient => gradient.classList.remove('first', 'second'))
    gradient.classList.add('first')
    prevGrad.classList.add('second')

    PrevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', ()=>{
        animationEnd = true;
    })


}

sizes.forEach(size => size.addEventListener('click', changeSize))
colors.forEach(color => color.addEventListener('click', colorChange))

let x = window.matchMedia("(max-width: 1000px)")

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height =`${shoeHeight * 0.9}px`
    }else{
        shoeBg.style.height = '475px'
    }
}

changeHeight()

window.addEventListener('resize', changeHeight)