$(document).ready(function () {
<<<<<<< HEAD
  var sidebarTop = $('.header-inner').height() + 10;

  $('#sidebar').css({ 'margin-top': sidebarTop }).show();
=======
  var $headerInner = $('.header-inner');
  var $sidebar = $('#sidebar');
  var getSidebarTop = function(){
    return $headerInner.height() + CONFIG.sidebar.offset;
  };
  var setSidebarMarginTop = function(sidebarTop){
    return $sidebar.css({ 'margin-top': sidebarTop });
  };
  var mql = window.matchMedia('(min-width: 991px)');
  setSidebarMarginTop(getSidebarTop()).show();
  mql.addListener(function(e){
    if(e.matches){
      setSidebarMarginTop(getSidebarTop());
    }
  });
>>>>>>> 8c40c3aee3d90785f7d41dac1adb72d258ce7017
});
