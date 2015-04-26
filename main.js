$(document).on('ready', function() {
    $('#right').on('click', function() {
        var element = document.getElementById('text-bubble').innerHTML =
            "I'm right!";
    });
    $('#left').on('click', function() {
        var element = document.getElementById('text-bubble').innerHTML =
            "No, I'm right!";
    });
    $('.big-box').mouseover(function() {
    	$(this).css('backgroundColor', 'tomato');
        alert("hey, I told you not to hover over me!");
    $('.big-box').mouseleave(function() {
    	$(this).css('backgroundColor', '#66757f');
    })    
    })

    $('.ghosting').mouseenter(function() {
        $(this).css('backgroundColor', 'black');
        $(this).toggle(function(){
        });
        $('.ghosting').mouseleave(function() {
            $(this).css('backgroundColor', 'white');
              $(this).toggle(function(){

        });
        });
    });
});