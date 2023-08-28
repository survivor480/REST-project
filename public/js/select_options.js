let requests_options = document.getElementById("requests-options");
console.log(requests_options);


let changeColor = () => {
    console.log("This function was called");
    var color = requests_options.options[requests_options.selectedIndex].style.color;
    console.log(color);
    console.log(requests_options.selectedIndex)
    console.log(requests_options.options);
    requests_options.style.color = color;
}

requests_options.addEventListener("change", changeColor);




// Get the modal
var modal = document.getElementById('user-login-modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let user_login_button = document.getElementById('user-button');

let showModal = () => {
    console.log("This is working");
    modal.style.display = 'flex';
}

user_login_button.addEventListener('click', showModal);






// // Carousel Logic

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }