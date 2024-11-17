<?php
// エラーレポートをオフにする
ini_set('display_errors', '0');
error_reporting(0);
?>

<?php
// POSTデータを受け取る
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($_POST['email1'], ENT_QUOTES, 'UTF-8');
$content = htmlspecialchars($_POST['content'], ENT_QUOTES, 'UTF-8');

// ここでメール送信処理を実装（オプション）
// mail($email, 'お問い合わせありがとうございます', $content, 'From: no-reply@example.com');
?>

<?php 
// // 管理者のメールアドレスを設定
// $adminEmail = 'admin@example.com';

// // メールの件名
// $subject = '【お問い合わせ】TOKYOくらふとコーラへのお問い合わせ';

// // メール本文の作成
// $message = "以下の内容でお問い合わせを受け付けました。\n\n"
//          . "【お名前】:\n" . $name . "\n\n"
//          . "【メールアドレス】:\n" . $email . "\n\n"
//          . "【お問い合わせ内容】:\n" . $content;


?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../src/css/reset.css" />
    <link rel="stylesheet" href="../src/css/complete.css" />
    <title>送信完了</title>
</head>
<body>
    <!-- header -->
    <header>
        <div class="header-inner">
            <div class="header-left">
                <h1>
                    <img src="../img/logo/logo.png" srcset="../img/logo/logo.png 1x, ../img/logo/logo-2x.png 2x" alt="TOKYOくらふとコーラのロゴ" />
                </h1>
            </div>
        </div>
    </header>

    <!-- contact 完了メッセージ -->
    <section id="contact">
        <p class="complete-message">送信が完了しました。<br />お問い合わせありがとうございました。</p>
        <form action="../index.html">
            <input type="submit" value="トップに戻る" class="submit-button">
        </form>
    </section>

    <!-- footer -->
    <footer>
        <p class="copy-right">&copy; 2024 TOKYOくらふとコーラ All rights reserved.</p>
    </footer>
</body>
</html>