console.log("Script running...")
// Task 1: Intro section
// Select the location button
let button1 = document.getElementById("location")
console.log(button1)
// Select the empty p tag under the button
let use1 = document.getElementById("locationText")
console.log(use1)
// Add an event listener on the location button such that when it is clicked, the text in the p tag is "1300 Boynton Ave (moving soon!)"
button1.addEventListener("click", function(event){
  use1.textContent = "1300 Boynton Ave (Moving soon)"
})


// Task 2: Our Values section
// Select the h3 with S under "Our Values"
let select1 = document.getElementById("score1")

// Add an event listener on the h3 such that when it is clicked, the text changes to "Self-Awareness"
select1.addEventListener("click", function(event){
  select1.textContent = "Self Awareness"
})


// Select the h3 with C under "Our Values"
// Make sure to add an id/class as needed in the HTML to do this
let select2 = document.getElementById("score2")

// Add an event listener on the h3 such that when it is clicked, the text changes to "Consistency"
select2.addEventListener("click", function(event){
  select2.textContent = "Consistency"
})


// Task 3: Uniform section
// Select the joggers image
let image = document.getElementById("joggers")

// Add an event listener on the image such that when the mouse is over it, the src becomes joggers-back.webp
image.addEventListener("mouseover", function(event){
  image.src = "joggers-back.webp"
})


// Add an event listener on the image such that when the mouse is off it, the src becomes joggers-front.webp
image.addEventListener("mouseout", function(event){
  image.src = "joggers-front.webp"
})



// EXTRA CREDIT
// Set up the DOM manipulation flows for the rest of the SCORE values (ownership, resilience, excellent)
let select3 = document.getElementById("score3")

select3.addEventListener("click", function(event){
  select3.textContent = "Ownership"
})

let select4 = document.getElementById("score4")

select4.addEventListener("click", function(event){
  select4.textContent = "Resilience"
})

let select5 = document.getElementById("score5")

select5.addEventListener("click", function(event){
  select5.textContent = "Excellent"
})
// Set up the DOM manipulation flow for the sweater (sweater-back.webp with mouse on, and sweater-front.webp with mouse off)

let image1 = document.getElementById("sweater")

image1.addEventListener("mouseover", function(event){
  image1.src = "sweater-back.webp"
})

image1.addEventListener("mouseout", function(event){
  image1.src = "sweater-front.webp"
})

select1.addEventListener("mouseover", changeColor)


