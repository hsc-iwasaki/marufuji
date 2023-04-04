<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- slickのCSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/css/reset.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Sarabun:wght@700;800&display=swap" rel="stylesheet">

    <title>丸藤交通</title>
</head>

<body>
    <header>
        <div>
            <a href="<?php echo home_url(); ?>/">
                <img src="<?php echo get_template_directory_uri() ?>/img/logo.png" alt="logo">
            </a>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="<?php echo home_url(); ?>/use">ご利用について</a>
                </li>
                <li>
                    <a href="<?php echo home_url(); ?>/bus">貸切バスの種類</a>
                </li>
                <li>
                    <a href="<?php echo home_url(); ?>/tour">ツアーのご案内</a>
                </li>
                <li>
                    <a href="<?php echo home_url(); ?>/contact">お問い合わせ</a>
                </li>
                <li>
                    <a href="<?php echo home_url(); ?>/company">会社概要</a>
                </li>
            </ul>
        </nav>
        <div class="opbtn">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>