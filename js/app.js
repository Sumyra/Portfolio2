$(function(){
    $('.ux').rProgressbar({
        percentage: 100,
        width: 500,
        borderRadius:15,
        fillBackgroundColor:'#F266AB',
        ShowProgressCount:false
      });
      $('.websiteDesign').rProgressbar({
      
        percentage: 95,
        width: 500,
        borderRadius:15,
        fillBackgroundColor:'#F266AB',
        ShowProgressCount:false
        
      
      });
      $('.appDesign').rProgressbar({
      
        percentage: 90,
        width: 500,
        borderRadius:15,
        fillBackgroundColor:'#F266AB',
        ShowProgressCount:false
      });
      $('.graphicDesign').rProgressbar({
      
        percentage: 100,
        width: 500,
        fillBackgroundColor:'#F266AB',
        ShowProgressCount:false
        
      
      });
 let button =$('.butn')
  button.click(function(){
  $(this).toggleClass("active");
  })
  $('.projectSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false
  })
  $('.testimonialSlider').slick({
    centerMode: true,
    centerPadding: '60px',
    arrows:false,
    dots: true,
    slidesToShow:3,
    slidesToScroll:3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  


        })


