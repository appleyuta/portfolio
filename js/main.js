//alert("call main.js!");

function callFunction(){
    $(".box").hide();
}


function toggleNavigation() {
	  $(this).toggleClass("active");
      $(this).next().toggleClass("onanimation");
      var menu = $('#hamburger-menu');
      var change = $(".icon_change");
      if(menu[0].className.indexOf("open") > -1){
          $('ul dd a').hide();
          var area = $('#navigate-area');
          area.css('background','none');
          menu.removeClass("open");
          change.html('<i class="fas fa-bars"></i>');
      }
      else{
        change.html('<i class="fas fa-times"></i>');
        $('ul dd a').hide();
        $('ul dd a').each(function(i) {
            $(this).delay(80 * i).fadeIn(500);
        });
        var area = $('#navigate-area');
        area.css('background-color','rgba(0,0,0,0.3)');
        menu.addClass("open");
      }
    };
