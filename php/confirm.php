<?php
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8') : '';
$email = isset($_POST['email1']) ? htmlspecialchars($_POST['email1'], ENT_QUOTES, 'UTF-8') : '';
$content = isset($_POST['content']) ? htmlspecialchars($_POST['content'], ENT_QUOTES, 'UTF-8') : '';

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../src/css/reset.css" />
    <link rel="stylesheet" href="../src/css/confirm.css" />
    <title>お問い合わせ内容確認</title>


    
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

    <!-- contact 確認内容表示 -->
    <section id="contact">
        <h3 class="section-title contact-title">内容確認</h3>
        <div class="contact-confirm">
            <p class="confirm-content-title">【お名前】</p>
            <p class="confirm-content"><?php echo $name; ?></p>
            <p class="confirm-content-title">【メールアドレス】</p>
            <p class="confirm-content"><?php echo $email; ?></p>
            <p class="confirm-content-title">【お問い合わせ内容】</p>
            <p class="confirm-content content"><?php echo nl2br($content); ?></p>
        </div>
        <form action="complete.php" method="post">
            <input type="hidden" name="name" value="<?php echo $name; ?>">
            <input type="hidden" name="email1" value="<?php echo $email; ?>">
            <input type="hidden" name="content" value="<?php echo $content; ?>">

            <input type="submit" formaction="../index.html" formmethod="get" value="内容を修正する" class="submit-button back-button">
            <input type="submit" value="送信する" class="submit-button">
        </form>
        
    </section>

    <!-- footer -->
    <footer>
        <p class="copy-right">&copy; 2024 TOKYOくらふとコーラ All rights reserved.</p>
    </footer>
</body>
</html>