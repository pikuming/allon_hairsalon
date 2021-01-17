$(function(){
	// ハンバーガーメニュー
	$('#nav_toggle').on('click', function() {
	$('header').toggleClass('open');
	});
  
	$('#gNav_list li').on('click', function() {
	$('header').removeClass('open');
	});

// スマホ時にslickを有効にする
function checkBreakPoint() {
	w = $(window).width();
	if (w <= 767) {
		// スマホ向け（767px以下のとき）
		$('.slider_sp').not('.slick-initialized').slick({
			//スライドさせる
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 300,
			infinite: true
		});
	} else {
		// PC向け
		$('.slider_sp.slick-initialized').slick('unslick');
	}
}
// ウインドウがリサイズする度にチェック
$(window).resize(function(){
	checkBreakPoint();
});
// 初回チェック
checkBreakPoint();

// モーダルウインドウ
$('.js-modal-open').each(function(){
    $(this).on('click',function(){
        var target = $(this).data('target');
        var modal = document.getElementById(target);
        $(modal).fadeIn();
        return false;
    });
});
$('.js-modal-close').on('click',function(){
    $('.js-modal').fadeOut();
    return false;
}); 
});