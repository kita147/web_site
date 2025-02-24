/* globals $ */

////// ハンバーガーメニュー //////
$(document).ready(function () {
    // ハンバーガーメニューを開閉
    $(".hamburger").on("click", function () {
        $(this).toggleClass("active"); // hamburgerにactiveクラスを切り替える
        $(".header__nav-sp").toggleClass("active"); // header__nav-spにactiveクラスを切り替える
    });

    // メニュー項目をクリックしたらメニューを閉じる
    $(".header__nav-sp a").on("click", function () {
        $(".hamburger").removeClass("active"); // hamburgerのactiveクラスを削除
        $(".header__nav-sp").removeClass("active"); // header__nav-spのactiveクラスを削除
    });
});

////////// swiperの設定 //////////
const swiper = new Swiper(".swiper", {

    // 無限ループの設定
    loop: false,
    loopAdditionalSlides: 1,

    // スライド数の設定
    slidesPerView: 1,
    spaceBetween: 10,

    // スライド数が不足している時でもページネーションを表示する
    watchOverflow: false,

    // ページネーションの設定
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});