$(document).ready(function () { 
    $('.popup').click(function() {
        var src = $(this).attr('src');
        $('.modal').modal('show');
        $('#popup-img').attr('src',src);
    
      })
});
$(document).ready(function() {
    $('.next').on('click', function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next();


        if(nextImg.length)  {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });
    $('.prev').on('click', function() {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();


        if(prevImg.length)  {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
});

