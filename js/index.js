/*google.addEventListener('click', function(e){
    e.preventDefault();
    alert('Now we won't go to google');
});*/
$(function() {
    $('#btn').click(function(e) {
        e.preventDefault();
        var str = $('#inpt').val();
        var res = str.split('').reverse().join('');
        $('#result').html(res);
        $('p').addClass('done');
    });
    //btn.addEventListener('click', function(e) {
    // e.preventDefault();
    //var str = inpt.value;
    //var res = str.split(' ').reverse().join(' ');
    //result.innerHTML = res;
    //});
});


//$(function() {
   // $('#result').html('Hello jQuery!');
//});

