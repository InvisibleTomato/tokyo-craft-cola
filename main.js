// ハンバーガーメニューの動作
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".mobile-nav");
  const overlay = document.querySelector(".overlay");

  // ハンバーガーボタンがクリックされたときの処理
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  // メニュー外（オーバーレイ）がクリックされたときに閉じる
  overlay.addEventListener("click", function () {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});
