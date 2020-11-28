$(document).ready(function (e) {
    $('#annie-footer').load('footer.html');
    $('#sidebar').load('sidebar.html', function(e, x, y){
        $("#navigations").find('li').removeClass('active');
        var href = window.location.href;
        var currentPage = href.substring(href.lastIndexOf('/')+1);
        $("#navigations").find('li a[href="'+currentPage+'"]').parent().addClass('active');
    });
    
});