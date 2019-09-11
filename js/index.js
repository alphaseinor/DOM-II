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
    console.log("denied")
  })
})

// * [ ] `load`



// * [ ] `focus`



// * [ ] `resize`



// * [ ] `scroll`



// * [ ] `select`



// * [ ] `dblclick`