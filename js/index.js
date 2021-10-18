$(function(){
  // const elBurger = document.querySelector('.menu-trigger');
  // const eldiv = document.querySelector('.nav');
  // elBurger.addEventListener('click',function(){
  //     this.classList.toggle('active-1');
  //     eldiv.classList.toggle('active');
  // })
  // $(".ham").click(function(){
  //   $(this).toggleClass("active")
  // });

    $('.top_menu li').on('click',function(e){
      // e.preventDefault();

      // $('#full-page').trigger('mousewheel');
    });



    document.addEventListener('DOMContentLoaded',function(event){
      // array with texts to type in typewriter
      var dataText = [ "Passion Patience Practice"] ;
      
      // type one text in the typwriter
      // keeps calling itself until the text is finished
      function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
          // add next character to h1
         document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
    
          // wait for a while and call this function again for next character
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
          }, 200);
        }
        // text finished, call callback if there is a callback function
        // else if (typeof fnCallback == 'function') {
        //   // call callback after timeout
        //   setTimeout(fnCallback, 2000);
        // }
      }
      // start a typewriter animation for a text in the dataText array
       function StartTextAnimation(i) {
         if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
              StartTextAnimation(0);
            }, 20000);
         }
         // check if dataText[i] exists
        if (i < dataText[i].length) {
          // text exists! start typewriter animation
         typeWriter(dataText[i], 0, function(){
           // after callback (and whole text has been animated), start next text
           StartTextAnimation(i + 1);
         });
        }
      }
      // start the text animation
      StartTextAnimation(0);
    });
  
    $(document).ready(function(){
      setTimeout(function(){
          $('.site').slick({
              arrows:true,
              dots: true,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:false,
              autoplaySpeed:2000,
              fade: true,
              cssEase:'linear' 
           });
      },2000)
      
  });
  

    
new fullpage('#full-page',{
  licenskey:'',
  // sectionsColor:['#f0f5f9','#f7f7f7','#f0f5f9','#f7f7f7'], 
  sectionsColor:['#fff','transparent','transparent','#fff'],       
  menu: '.top_menu',
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
  navigation: true,
  navigationTooltips: ['Home','About', 'Work', 'Contact'],
  onLeave: function(origin, destination, direction){
      console.log(destination.index)
      $('.fix').removeClass('active');
      setTimeout(()=>{$('.fix').addClass('active');},10);

      //about
      if(destination.index ==1){
          $('.films').addClass('active');
      }else{
          $('.films').removeClass('active');
      }
  }   
});  
$(window).load(function(){
  $('.loader').delay('1000').fadeOut();
  $('.wrap').delay('1000').fadeIn();
});


});
