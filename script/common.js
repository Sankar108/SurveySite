// Toggle mobile menu
function openNav() {
    document.getElementById("mySidenav").style.width = "220px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// Toggle mobile menu

function PreviewImg(divId) {
    $('#' + divId).removeClass('hide');
    var input = event.target;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#' + divId).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}

$(document).ready(function() {
    $('.carousel').carousel({
        interval: 5000
    })
});