$(document).ready(function(){
    console.log("listo");
    $("#divDesarrollador").toggle(2000);
    function changeIn(){
        $(this).css("background","#dc3545").css("color","white").css("font-size","20px");
    }
    function changeOut(){
        $(this).css("background","#FFF3F4").css("color","black").css("font-size","20px");
    }

    $('.container .row .resalta').hover(changeIn,changeOut);

    $("#desarrollador").click(function(){
        $("#divDesarrollador").fadeIn(500);
        $("#divEncuesta").hide();
    })

    $("#encuesta").click(function(){
        $("#divEncuesta").fadeIn(500);
        $("#divDesarrollador").hide();
    })


})
function Face() {
    return confirm("Deseas ir a Facebook?")
}
function Link() {
    return confirm("Deseas ir a LinkedIn?")
}
function Insta() {
    return confirm("Deseas ir a Instagram?")
}