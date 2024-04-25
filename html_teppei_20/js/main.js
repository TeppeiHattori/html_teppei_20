// jsを記述する際はここに記載していく

//logoの表示
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});


$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $("#container").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
    $("#container").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
});


// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){

    // 背景色が伸びて出現（左から右）
	$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
		}else{
			$(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
		}
	});	

   // 文字列を囲う子要素
	$('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
		}else{
			$(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
		}
	});		
}

// // 画面をスクロールをしたら動かしたい場合の記述
// 	$(window).scroll(function (){
// 		BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
// 	});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
	// $(window).on('load', function(){
	// 	BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
	// });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

  setTimeout(function () {
    BgFadeAnime();
    //時間を遅らせて動かしたいソースコードを記述する
 }, 2000);//この場合1秒後


 var slider;
 var sliderFlag = false;
 var breakpoint = 768;//768px以下の場合
	 
 function sliderSet() {
				 var windowWidth = window.innerWidth;
				 if (windowWidth >= breakpoint && !sliderFlag) {//768px以上は1行でスライダー表示
						 slider = $('.slider').bxSlider({
						 touchEnabled:false,//リンクを有効にするためスライドをマウスでドラッグした際にスライドの切り替えを可能にする機能を無効化
			 mode: 'vertical',//縦スライド指定
			 controls: false,//前後のコントロールを表示させない。
			 auto: 'true',//自動的にスライド
			 pager: false//ページ送り無効化
		 });
						 sliderFlag = true;
				 } else if (windowWidth < breakpoint && sliderFlag) {
						 slider.destroySlider();//bxSliderのOptionであるdestroySliderを使用してスライダーの動きを除去
						 sliderFlag = false;
				 }
		 }
 
 $(window).on('load resize', function() {
				 sliderSet();
 });