<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MENS WATCH CATALOG</title>
    <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #fff; color: #333; margin: 0; padding: 0; }
        header { text-align: center; padding: 40px 0; border-bottom: 1px solid #eee; }
        h1 { font-weight: 200; letter-spacing: 5px; text-transform: uppercase; margin: 0; font-size: 24px; }
        .sub-title { font-size: 12px; color: #888; margin-top: 10px; }
        
        /* カテゴリー欄のスタイル */
        .category-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 20px; max-width: 800px; margin: 0 auto; }
        .category-btn { padding: 8px 16px; border: 1px solid #ccc; background: none; font-size: 13px; cursor: pointer; border-radius: 2px; transition: 0.3s; }
        .category-btn:hover { background-color: #000; color: #fff; border-color: #000; }

        .gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; padding: 20px; }
        .item { border: 1px solid #f9f9f9; padding: 15px; text-align: center; }
        .item img { max-width: 100%; height: auto; margin-bottom: 10px; }
        .btn { display: inline-block; margin-top: 15px; padding: 10px 20px; background: #000; color: #fff; text-decoration: none; font-size: 14px; }
    </style>
</head>
<body>

<header>
    <h1>Mens Watch Catalog</h1>
    <div class="sub-title">厳選された時計コレクション</div>
</header>

<div class="category-container">
    <button class="category-btn">クォーツ</button>
    <button class="category-btn">オートマチック</button>
    <button class="category-btn">２針、３針</button>
    <button class="category-btn">クロノグラフ</button>
    <button class="category-btn">デジタルアナログ</button>
    <button class="category-btn">スポーツ</button>
</div>

<div class="gallery">
    <div class="item">
        <p>ここに時計の写真が表示されます</p>
        <div class="btn">AliExpressで詳細を見る</div>
    </div>
</div>

</body>
</html>
