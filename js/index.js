// Your code goes here
// * [ ] `mouseover`
const allMenuItems = document.querySelectorAll('.nav-link')

allMenuItems.forEach((a) => {
  a.addEventListener("mouseenter", (event) => {
    a.style.fontWeight = "bold"
  })
  a.addEventListener("mouseleave", (event) => {
    a.style.fontWeight = "normal"
  })
  a.addEventListener('click', event => {
    event.preventDefault()
  })
})

// * [ ] `keydown`
const bodyKeyDown = document.querySelector('body')
const funBusLogo = document.querySelector('.logo-heading')

bodyKeyDown.addEventListener("keydown", (event) => {
  if(event.keyCode === 70){
    funBusLogo.style.fontWeight = "bold"
    console.log("You just put the F in Fun Bus!")
  }
})


// * [ ] `wheel`
const funBusImg = document.querySelector('.intro img')
const header = document.querySelector('.main-navigation')

header.style.zIndex = "1000"

funBusImg.addEventListener("wheel", z => {
  console.log("scroll", z.deltaY)
  if(z.deltaY > 0){
    //scroll up
    funBusImg.style.transform = "scale(.5)"
  }else{
    //scroll down
    funBusImg.style.transform = "scale(1)"
  }
})


// * [ ] `drag / drop`

const images = document.querySelectorAll("img")

images.forEach((x) => {
  x.addEventListener("drag", (event) => {
    event.preventDefault()
    // console.log("denied")
    // this prevents the drag of an image
  })
})

// * [ ] `load`
window.addEventListener("load", (event) =>{
  if(event.returnValue === true){
    console.log("Page loaded successfully")
  }else{
    console.log("Something went wrong")
  }
})


// * [ ] `focus`

const buttons = document.querySelectorAll(".btn")

buttons.forEach( x => {
  x.addEventListener('focus', event => {
    console.log("focus")
  }, true)
})


// * [ ] `resize`
window.addEventListener('resize', event => {
  console.log(window.innerWidth, window.innerHeight)
})


// * [ ] `scroll`
window.addEventListener("scroll", event => {
  console.log(`scroll event happened at ${event.timeStamp}`)
})


// * [ ] `select`
const inputBox = document.querySelector('input')

inputBox.addEventListener('select', event => {
  console.log("don't select the copyright!")
})

// * [ ] `dblclick`
pText = document.querySelectorAll('p')


pText.forEach( x => {
  x.addEventListener('dblclick', event => {
    x.style.fontWeight = "bold"
  })
})