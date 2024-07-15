$(document).ready(function(){
    // $(".aside-secondary").addClass('d-none');
    $("#kt_aside_toggle").addClass('d-lg-none');
    $(".index-body").attr("data-kt-aside-minimize", "on");

    $('.aside-nav .nav-item').click(function(){
        $("#kt_aside_toggle").removeClass('d-lg-none');
        $("#kt_body").attr("data-kt-aside-minimize", "off");
    });
    $('.aside-nav .nav-item-dashboard').click(function(){
        $("#kt_aside_toggle").addClass('d-lg-none');
        $("#kt_body").attr("data-kt-aside-minimize", "on");
    });
    $('.aside-footer .btn-setting').click(function(){
        $("#kt_aside_toggle").addClass('d-lg-none');
        $("#kt_body").attr("data-kt-aside-minimize", "on");
    });
});
