//ハンバーガー
document.addEventListener("DOMContentLoaded", function () {
  // ページの内容（HTMLやCSSなど）を全て読み込み準備が整ったら実行
  document
    .querySelector(".btnHamburger")
    .addEventListener("click", function () {
      // .btnHamburgerがクリックされた時の処理
      document.querySelector(".btnHamburger").classList.toggle("is-active");
      document.querySelector("nav").classList.toggle("is-active");
      document.querySelector("#coverlayer").classList.toggle("is-active");
    });

  // ページ内リンクの場合の設置
  var navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // .btnHamburgerがクリックされた時の処理
      document.querySelector(".btnHamburger").classList.remove("is-active");
      document.querySelector("nav").classList.remove("is-active");
      document.querySelector("#coverlayer").classList.remove("is-active");
    });
  });
});
