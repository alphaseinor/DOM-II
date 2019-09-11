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



// * [ ] `wheel`



// * [ ] `drag / drop`



// * [ ] `load`



// * [ ] `focus`



// * [ ] `resize`



// * [ ] `scroll`



// * [ ] `select`



// * [ ] `dblclick`