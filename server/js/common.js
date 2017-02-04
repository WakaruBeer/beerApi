/* url_bar
---------------------------------------------------------*/
$(window).bind('load',function(){
window.scrollTo(0,1);
},1);
/* anchor
---------------------------------------------------------*/
$(function(){
$('a[href^=#]').click(function() {var speed = 300;var href= $(this).attr("href");var target = $(href == "#" || href == "" ? 'html' : href);var position = target.offset().top;$($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');return false;});
});
/* anchor
---------------------------------------------------------*/



$(function(){
function lowerAndroid(n) {
    var bo = false;
    var ua = navigator.userAgent.toLowerCase();
    var version = ua.substr(ua.indexOf('android')+8, 3);
    if(ua.indexOf("android")) if( parseFloat(version) < n) if( 4.1 < parseFloat(version)) bo = true;
    return bo;
}


if(lowerAndroid(4.3)){
if($('#slide_contents').length) {
  $(function(){$('.ttl_slide').css({"top":"0" , "left":"0", "position":"absolute"});});
};
}else{$(function(){$('.ttl_slide').css({"top":"0" , "left":"0", "position":"fixed"});});}
});

/* hashchange_setting
---------------------------------------------------------*/
/** common_setting **/
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);
/* hashchange_reset */
$(window).hashchange();
/* hashchange_categoryslide */
$(function(){

if (navigator.userAgent.indexOf('Android') > 0) {
if($('#slide_contents').length) {
if($('.list_otoku').length) {
if(window.location.hash == "#sl_category") {
  $('.wrapper').css("display","none");
  $('#slide_contents').css("display","block");
  $('#slide_contents_open').click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'fast');
    $('.wrapper').css("display","none");
    $('#slide_contents').css("display","block");
        var newURL = location.protocol + "//" + location.host + location.pathname + "#" + "sl_category";
        history.pushState("", "", newURL);
  });
  $('#slide_contents_close').click(function() {
    $('html,body').animate({ scrollTop: 300 }, 'fast');
    $('.wrapper').css("display","block");
    $('#slide_contents').css("display","none");
        var newURL = location.protocol + "//" + location.host + location.pathname;
        history.pushState("", "", newURL);
  });
}else{
  $('#slide_contents_open').click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'fast');
    $('.wrapper').css("display","none");
    $('#slide_contents').css("display","block");
        var newURL = location.protocol + "//" + location.host + location.pathname + "#" + "sl_category";
        history.pushState("", "", newURL);
  });
  $('#slide_contents_close').click(function() {
    $('html,body').animate({ scrollTop: 300 }, 'fast');
    $('.wrapper').css("display","block");
    $('#slide_contents').css("display","none");
        var newURL = location.protocol + "//" + location.host + location.pathname;
        history.pushState("", "", newURL);
  });
}
}else{
  $('#slide_contents_open').click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'fast');
    $('.wrapper').css("display","none");
    $('#slide_contents').css("display","block");
        var newURL = location.protocol + "//" + location.host + location.pathname + "#" + "sl_category";
        history.pushState("", "", newURL);
  });
  $('#slide_contents_close').click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'fast');
    $('.wrapper').css("display","block");
    $('#slide_contents').css("display","none");
        var newURL = location.protocol + "//" + location.host + location.pathname;
        history.pushState("", "", newURL);
  });
/*}*/
};
};



}else{
/** hashchange_categoryslide_firstin **/
if($('#slide_contents').length) {
if($('.list_otoku').length) {
if(window.location.hash == "#sl_category") {
  $('.wrapper').css("display","none");
  $('#slide_contents').css("display","block");
  $('#slide_contents_open').click(function() {
      $('.wrapper').slideUp('normal', function() {
        $('html,body').animate({ scrollTop: 0 }, 'fast');
        $('#slide_contents').show();
        var newURL = location.protocol + "//" + location.host + location.pathname + "#" + "sl_category";
        history.pushState("", "", newURL);
      });
  });
  $('#slide_contents_close').click(function() {
      $('.wrapper').slideDown('slow', function() {
        $('html,body').animate({ scrollTop: 300 }, 'fast');
        $('#slide_contents').hide();
        var newURL = location.protocol + "//" + location.host + location.pathname;
        history.pushState("", "", newURL);
      });
  });
}else{
  $('#slide_contents_open').click(function() {
      $('.wrapper').slideUp('normal', function() {
        $('html,body').animate({ scrollTop: 0 }, 'fast');
        $('#slide_contents').show();
        var newURL = location.protocol + "//" + location.host + location.pathname + "#" + "sl_category";
        history.pushState("", "", newURL);
      });
  });
  $('#slide_contents_close').click(function() {
      $('.wrapper').slideDown('slow', function() {
        $('html,body').animate({ scrollTop: 300 }, 'fast');
        $('#slide_contents').hide();
        var newURL = location.protocol + "//" + location.host + location.pathname;
        history.pushState("", "", newURL);
      });
  });
}
}else{
  $('#slide_contents_open').click(function() {
      $('.wrapper').slideUp('normal', function() {
        $('html,body').animate({ scrollTop: 0 }, 'fast');
        $('#slide_contents').show();
        var newURL = location.protocol + "//" + location.host + location.pathname + "#" + "sl_category";
        history.pushState("", "", newURL);
      });
  });
  $('#slide_contents_close').click(function() {
      $('.wrapper').slideDown('slow', function() {
        $('html,body').animate({ scrollTop: 0 }, 'fast');
        $('#slide_contents').hide();
        var newURL = location.protocol + "//" + location.host + location.pathname;
        history.pushState("", "", newURL);
      });
  });
/*}*/
};
};
};
});

/** hashchange_categoryslide_fitstinend **/
if (navigator.userAgent.indexOf('Android') > 0) {
$(window).hashchange( function(){
if($('#slide_contents').length) {
if($('.list_otoku').length) {
if(window.location.hash == "#sl_category") {
    $('.wrapper').css("display","none");
    $('#slide_contents').css("display","block");
  $('#slide_contents_close').click(function() {
    $('.wrapper').css("display","block");
    $('#slide_contents').css("display","none");
    var newURL = location.protocol + "//" + location.host + location.pathname;
    history.pushState("", "", newURL);

});
}else{
    $('.wrapper').css("display","block");
    $('#slide_contents').css("display","none");
}
}
else{
if(window.location.hash == "#sl_category") {
    $('.wrapper').css("display","none");
    $('#slide_contents').css("display","block");
  $('#slide_contents_close').click(function() {
    $('.wrapper').css("display","block");
    $('#slide_contents').css("display","none");
    var newURL = location.protocol + "//" + location.host + location.pathname;
    history.pushState("", "", newURL);
});
}else{
  $('.wrapper').slideDown('slow', function() {
  $('#slide_contents').hide();
  });
}
};
};
});
}else{
$(window).hashchange( function(){
if($('#slide_contents').length) {
if($('.list_otoku').length) {
if(window.location.hash == "#sl_category") {
  $('.wrapper').slideUp('slow', function() {
  $('#slide_contents').show();
  });
  $('#slide_contents_close').click(function() {
    $('.wrapper').slideDown('slow', function() {
      $('#slide_contents').hide();
        var newURL = location.protocol + "//" + location.host + location.pathname;
        history.pushState("", "", newURL);
});
});
}else{
  $('.wrapper').slideDown('slow', function() {
  $('#slide_contents').hide();
  });
}
}
else{
if(window.location.hash == "#sl_category") {
  $('.wrapper').slideUp('slow', function() {
  $('#slide_contents').show();
  });
  $('#slide_contents_close').click(function() {
    $('.wrapper').slideDown('slow', function() {
      $('#slide_contents').hide();
        var newURL = location.protocol + "//" + location.host + location.pathname;
        history.pushState("", "", newURL);
});
});
}else{
  $('.wrapper').slideDown('slow', function() {
  $('#slide_contents').hide();
  });
}
};
};
});
};



$(function(){
if($('.sale .common .sub ul li > dl dt').length) {
$.fn.flat = function(){
var h = 0;
$(this).each(function(){
if( h < $(this).height() ){
h = $(this).height();
}
});
$(this).css('minHeight', h);
};
$('.sale .common .sub ul li > dl dt').flat();
$('.sale .common .sub ul li dl dd.sum').flat();
};
window.addEventListener("orientationchange", function () {
if($('.sale .common .sub ul li > dl dt').length) {
$.fn.flat = function(){
var h = 0;
$(this).each(function(){
if( h < $(this).height() ){
h = $(this).height();
}
});
$(this).css('minHeight', h);
};
$('.sale .common .sub ul li > dl dt').flat();
$('.sale .common .sub ul li dl dd.sum').flat();
};
});
});
/*menu_modal*/

/**縦横の変化**/
window.addEventListener("orientationchange", function () {
    var mW = $(wn).find('.modalBody').innerWidth() / 2;
    var mH = $(wn).find('.modalBody').innerHeight() / 2;
    var mH2 = $(wn).find('.modalBody').innerHeight();
    var wH = $(window).height();
    var wH = wH+25;
    var initin = wH-mH2;
    var initint = -initin;
    var initint2 = initint +50;
    $(wn).find('.modalBody').css({'margin-left':-mW,'margin-top':-mH});
    if($(wn).css('display') == 'block') {(window).on('touchmove.noScroll', function(e) {e.preventDefault();})};   
    if(initin < 40){
      var locationBarProp = window.locationbar;
      if(locationBarProp.visible){
        $('.modalBody p.close').css("top", initint2 + "px");
      }else{$('.modalBody p.close').css("top", initint + "px");}
    }else{$('.modalBody p.close').css("top", "-15px");}
});
$('.close,.modalBK').click(function(){
    $(wn).fadeOut(200);
    $(window).off('.noScroll');
    $("a").css({'-webkit-tap-highlight-color':'', 'pointer-events' : 'auto'});
  });





/*  topBack
---------------------------------------------------------*/
var $goTopBtn = $('.btn_go_top');
if($goTopBtn.length) {
  $(function(){
    $goTopBtn.css('display', 'none');
    $(window).scroll(function(){
    var winTop = $(this).scrollTop();
    if(winTop > 100){
      $goTopBtn.fadeIn(400);
    }else{
      $goTopBtn.fadeOut(200);
    }
  });
});





}else{}