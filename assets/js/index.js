$(document).ready(function(){
    // $(".services li").click(function(){
    //     $('#modal').on('shown.bs.modal', function (ev) {
    //         console.log(
    //         ev.relatedTarget.dataset.key
    //         $('#myInput').focus();
    //         $("#modalTitle").text(ev.target.dataset.title);
    //     });
    // });
    $("#site").click(function(){
        $('#modal').on('shown.bs.modal', function () {
            $('#myInput').focus();
            $("#modalTitle").text("Sites");
        });
    });
    
    $("#local").click(function(){
        $('#modal').on('shown.bs.modal', function () {
            $('#myInput').focus();
            $("#modalTitle").text("Sistemas - Locais");
        });
    });
    $("#app").click(function(){
        $('#modal').on('shown.bs.modal', function () {
            $('#myInput').focus();
            $("#modalTitle").text("Aplicativos Mobile");
        });
    });
    $("#web").click(function(){
        $('#modal').on('shown.bs.modal', function () {
            $('#myInput').focus();
            $("#modalTitle").text("Sistemas - Web");
        });
    });
    $("#commerce").click(function(){
        $('#modal').on('shown.bs.modal', function () {
            $('#myInput').focus();
            $("#modalTitle").text("E-Commerce");
        });
    });
});