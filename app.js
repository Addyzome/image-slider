// Variables
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let slider = document.querySelector('.slider')
let sliderList = document.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

// Move the first thumbnail item to the end (initial setup)
thumbnail.appendChild(thumbnailItems[0])

// Function for the next button
nextBtn.onclick = function () {
    moveSlider('next')
}

// Function for the prev button
prevBtn.onclick = function () {
    moveSlider('prev')
}

// Function for moveSlider
function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0]) 
        slider.classList.add('next')
    } else {
        sliderList.insertBefore(sliderItems[sliderItems.length - 1], sliderItems[0]); // Move last item to the start
        thumbnail.insertBefore(thumbnailItems[thumbnailItems.length - 1], thumbnailItems[0]); // Move last thumbnail to the start
        slider.classList.add('prev')
    }

    // Handle the end of the animation
    slider.addEventListener('animationend', function() {
        if (direction === 'next') {
            slider.classList.remove('next')     
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove event listener after it's triggered once
}
