const imageArray = [
    './assets/image1.jpg', 
    './assets/image2.jpg', 
    './assets/image3.jpg', 
    './assets/image4.jpg', 
    './assets/image5.jpg', 
    './assets/image6.jpg'
]
let sliderImage = document.getElementById('sliderImage')
let sliderIndex = 0
sliderImage.src = imageArray[sliderIndex]


function nextImage(){
    if (sliderIndex < imageArray.length - 1){
        sliderIndex++
    } else{
        sliderIndex = 0
    }
    sliderImage.src = imageArray[sliderIndex]
}

function previousImage(){
    if (sliderIndex > 0){
        sliderIndex--
    } else{
        sliderIndex = imageArray.length - 1
    }
    sliderImage.src = imageArray[sliderIndex]
}