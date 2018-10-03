$(document).ready(function() {
  $("section").addClass( "is-animated" );
});

// $( "#canvas-on" ).click(function() {
//   $("#canvas-off").attr("id", "canvas");
// });


// document.addEventListener("DOMContentLoaded", function() { 

//   var rolesArray = ["+ music producer","+ DJ","+ front end developer"];
//   var i = 0;
//   var intv;
  
//   setTimeout(function() { //delay start for 3s
    
//     function initInterv(i){

//     if (i < rolesArray.length){
      
//         intv = setInterval(function() {  // setInterval makes it run repeatedly
//           document
//               .getElementById('roles')
//               .innerHTML = rolesArray[i++ % rolesArray.length];
//         }, 200);
//       }
      
//       else if (i = rolesArray.length) clearInterval(intv);
//     }
//   }, 3000);
// });

// Swiper carousel init

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: false,
    autoHeight: true, //enable auto height
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    // },

  })

  var mySwiper = new Swiper('.swiper-container-autoplay', {
    direction: 'horizontal',
    loop: true,
    grabCursor: false,
    autoHeight: true, //enable auto height
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 4000,
    },
  });
});

// Tabs init

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});

// Footer Reveal init

$(document).ready(function(){
  $('footer').footerReveal({ shadow: false });
});



$(document).ready(function(){

  // init ScrollMagic
  var controller = new ScrollMagic.Controller();

  $('.fadeOn').each(function(){

    var tween = TweenMax.fromTo($(this), 1, { yPercent:5 , opacity:0 }, { yPercent:0 , opacity:1 , ease:Power1.easeInOut});

    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: "onEnter",
      duration: "50%",
    })
    .setTween(tween)
    .addTo(controller);
  })

});



$(document).ready(function(){
  $('.card').hover(
    function(){ $(this).children("div.more").addClass('fadeLeft') },
    function(){ $(this).children("div.more").removeClass('fadeLeft') }
  )
});



$(document).ready(function(){

  let randomButton = document.querySelector('.randomize');
  let emojiField = document.querySelector('.emoji-area__emoji')

  function setEmoji(emoji) {
      emojiField.innerHTML = emoji;
  }

  function getRandom() {
      fetch('https://ranmoji.herokuapp.com/emojis/api/v.1.0/')
      .then(response => {
          response.json().then(data => {
              console.log('response data', data.emoji)
              setEmoji(data.emoji)
          })
      });
    setTimeout(getRandom, 5000);
  }

  function init() {
      bind_events();
      getRandom();
  }

  function bind_events() {
      randomButton.addEventListener('click', e => {
          e.preventDefault();
          getRandom();
      })
  }

  init();
});

