/* globals $ */

////// ハンバーガーメニュー //////
$(document).ready(function () {
    $(".hamburger").on("click", function () {
        $(this).toggleClass("active"); // hamburgerにactiveクラスを切り替える
        $(".header__nav-sp").toggleClass("active"); // header__nav-spにactiveクラスを切り替える
    });
});

// メニュー項目をクリックしたらメニューを閉じる
$(".header__nav-sp a").on("click", function () {
    $(".hamburger").removeClass("active"); // hamburgerのactiveクラスを削除
    $(".header__nav-sp").removeClass("active"); // header__nav-spのactiveクラスを削除
});
