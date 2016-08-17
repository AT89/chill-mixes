

  $('div, .header1').on('click', function() {
      $(this).toggleClass('show-description');
  })


// var $carousel = $('.carousel'), slickAnimClass = 'slick-animate'


// $carousel.hide();

// $carousel
//   .slick(carouselSettings)
//   .fadeIn(800);
$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

  });


  });
//try giving the chill divs class carousel
//console.log all the the $select .carousel>div
