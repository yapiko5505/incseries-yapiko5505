<script>
$(function () {
 //ハンバーガーメニュー用JS
  $('#sp_menu_btn').click(function () {
    $('#sp_menu_btn').toggleClass("active");
    $('#sp_menu').toggleClass('sp_menu_open');
    $('body').toggleClass('sp_menu_open');
  });
  $("#sp_gnavi a").click(function () {
    $('#sp_menu').removeClass('sp_menu_open');
    $('body').removeClass('sp_menu_open');
  });
  
  //　スムーススクロール　
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(window).scroll(function () {
  //120px下にスクロールすると、headerにclass="scroll"を付ける／戻ると外す
  //120px下にスクロールすると、#page_topにclass="scroll"を付ける／戻ると外す
  if ($(this).scrollTop() > 120) {
    $('header').addClass('scroll');
    $('#page_top').addClass('scroll');
  }
  if ($(this).scrollTop() < 121) {
    $('header').removeClass('scroll');
    $('#page_top').removeClass('scroll');
  }
  //#footerまでスクロールしたら、#page_topにclass="bottom"を付ける／戻ると外す
  scrollHeight = $(document).height();
  scrollPosition = $(window).height() + $(window).scrollTop();
  footHeight = $("footer").innerHeight();
  if (scrollHeight - scrollPosition <= footHeight) {
    $('#page_top').addClass('bottom');
  } else {
    $('#page_top').removeClass('bottom');
  }
  // スクロールして、effectクラスの付いた要素が画面内に入ったらactiveクラス付与
  $('.effect').each(function () {
    var hit = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();
    var customTop = 100;
    if (typeof $(this).data('effect') !== 'undefined') {
      // data-effect="任意の値" が設定されている場合
      customTop = $(this).data('effect');
    }
    if (hit + customTop < wHeight + scroll) {
      $(this).addClass("active");
    }
  });
});

//ファーストビューの高さをデバイスの高さとそろえる　iPhone表示ずれ対策
var OPENING = OPENING || {};
OPENING.VIEW_HEIGHT = {
    init : function(){
        this.setParameters();
        this.setKvHeight();
        this.bind();
    },
    setParameters : function(){
        this.$window = $(window);
        this.$target = $('#first_view');
    },
    bind : function(){
        var _self = this;
        this.$window.on('resize',function(){
            _self.setKvHeight();
        });
    },
    setKvHeight : function(){
        this.$target.css('height',this.$window.height());
        }
};
$(function(){
    OPENING.VIEW_HEIGHT.init();
});
</script>