var $slider = $('.carousel')
var $sliderContainer = $('.carousel-image-container')
var $slides = $('.carousel-image')

var $slideWidth = $slides.width()
var $slideHeight = $slides.height()
var $slideCount = $slides.length
var $totalWidth = $slideCount * $slideWidth

$slider.css( {
    width: $slideWidth,
    height: $slideHeight
})

$sliderContainer.css ({
    width: $totalWidth,
    marginLeft: -$slideWidth
})

var currentSlide = 1;
var slideTime = 2500;
var animation = 1000;

setInterval(function(){
    $sliderContainer.animate({
        left: -$slideWidth
    }, animation, function(){
        currentSlide++;
        if(currentSlide == $slideCount) {
            currentSlide = 1;
        }
        $('.carousel-image:first-child').appendTo('.carousel-image-container')
        $('.carousel-image-container').css({
            left:0
        })
    });;
}, slideTime);

$('#left-arrow').on('click', function(){
    $sliderContainer.animate({
        left: +$slideWidth
    }, 'slow', () => {
        $('.carousel-image:last-child').prependTo('.carousel-image-container')
        $('.carousel-image-container').css({
            left: 0
        })
    })
})

$('#right-arrow').on('click', function(){
    $sliderContainer.animate({
        left: -$slideWidth
    }, 'slow', () => {
        $('.carousel-image:first-child').appendTo('.carousel-image-container')
        $('.carousel-image-container').css({
            left: 0
        })
    })
})