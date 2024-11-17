document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".mobile-nav");
  const overlay = document.querySelector(".overlay");

  // ハンバーガーボタンがクリックされたとき
  hamburger.addEventListener("click", function (event) {
    event.stopPropagation(); // イベントの伝播を防ぐ
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll"); // スクロール無効化
  });

  // オーバーレイがクリックされたとき
  overlay.addEventListener("click", function (event) {
    event.stopPropagation(); // イベントの伝播を防ぐ
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll"); // スクロール再開
  });

  // ドキュメント全体がクリックされたとき
  document.addEventListener("click", function () {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

// スムーススクロールの処理
const menuLinks = document.querySelectorAll(".mobile-nav ul li a");
menuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // デフォルトのページ遷移を防止
    const targetId = this.getAttribute("href"); // クリックしたリンクのhref属性を取得
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop; // 対象要素の位置を取得
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // スムーススクロール
      });
    }

    // メニューを閉じる処理
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

// pc版のスムース

const PcMenuLinks = document.querySelectorAll("nav ul li a");
PcMenuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // デフォルトのページ遷移を防止
    const targetId = this.getAttribute("href"); // クリックしたリンクのhref属性を取得
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop; // 対象要素の位置を取得
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // スムーススクロール
      });
    }
  });
});

// スクロールに合わせてふわっと表示
document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // 一度表示したら監視を解除
        }
      });
    },
    {
      threshold: 0.1, // 10% 見えたらアニメーション開始
    }
  );

  fadeInElements.forEach((el) => observer.observe(el));
});
