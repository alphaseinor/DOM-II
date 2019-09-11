// Your code goes here
// * [ ] `mouseover`
const allMenuItems = document.querySelectorAll('.nav-link')

allMenuItems.forEach((a) => {
  a.addEventListener("mouseenter", (event) => {
    console.log("mouseenter")
    a.style.fontWeight = "bold"
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