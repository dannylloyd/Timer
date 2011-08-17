function resetTimer()
{
    $("span").removeClass('alert warning');
    $("span").text('2');
}
function startTimer(){
    (function() {
    var theInterval;
    function startFlashing() {
        $('#stop').fadeIn('slow');
        theInterval = setInterval(function() {
            if ($("span").hasClass('alert')) {
                $("span").removeClass('alert');
            }
            else {
                $("span").addClass('alert');
            }
        }, 700);
    }

    $(document).ready(function() {
        var refreshIntervalId = setInterval(function() {
            var currentCount = $('span').text();
            if (currentCount === '') {
                currentCount = 60;
            }
            currentCount -= 1;
            $('span').text(currentCount);


            if (currentCount > 10 && currentCount < 20) {
                $('span').addClass('warning');
            }
            else if (currentCount < 11) {
                $('span').removeClass('warning').addClass('alert');
            }
            if (currentCount === 0) {
                clearInterval(refreshIntervalId);
                startFlashing();
            }

        }, 1000);
        $("#stop").click(function() {
            clearInterval(theInterval);
            $("span").removeClass('alert');
            $('#stop').hide();
            $('#start').show();
        });
    });
}());
}

$('#stop').hide();
$('#start').click(function(){
    resetTimer();
    $("#start").hide();
    startTimer();
});