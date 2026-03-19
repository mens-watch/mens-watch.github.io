// 共通の説明文
const commonDescription = `
下のリンクから最新価格や在庫状況をご確認いただけます。
<br>
（売切れの場合があるので複数のショップを掲載しています）
`;

// スプレッドシートから変換したデータ
const commonRawData = `
> automatic-20260218-2029
price ｜ 4430
features ｜ オートマチック,日付,カレンダー,クロノグラフ風,ストラップ,ブレスレット
link1 ｜ ショップ 1 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c4BjvGnt
link2 ｜ ショップ ２ AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c3sb6cP1
link3 ｜ ショップ ３ AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c3zwdvhv
link4 ｜ ブレスレットタイプ AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c2vmHBUn
link5 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c42PjO1l
link6 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c3SLqRVZ

> automatic-20260219-0924
price ｜ 5900
features ｜ オートマチック,スケルトン,シースルー,ストラップ,日付なし
link1 ｜ ショップ 1 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c34QlACL
link2 ｜ ショップ ２ AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c31kTeox
link3 ｜ ショップ ３ AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c3z3yvix
link4 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c3Vjnrzh
link5 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c3awQHOb
link6 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c4eiLrX5
link7 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c32vhmpl

> automatic-20260219-0929
price ｜ 5900
features ｜ オートマチック,スケルトン,シースルー,ストラップ,日付なし
link1 ｜ ショップ 1 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c34QlACL
link2 ｜ ショップ ２ AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c31kTeox
link3 ｜ ショップ ３ AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c3z3yvix
link4 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c3Vjnrzh
link5 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c3awQHOb
link6 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c4eiLrX5
link7 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c32vhmpl

> automatic-20260219-0941
price ｜ 13000
features ｜ オートマチック,日付,ブレスレットタイプ,シースルー,サファイアガラス
link1 ｜ ショップ 1 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c4leVDPl
link2 ｜ ショップ ２ AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c4XDl3F9
link3 ｜ ショップ ３ AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c2u2PaSR
link4 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c3tf9EHd
link5 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c355eX7d

> automatic-20260219-1717
price ｜ 6500
features ｜ オートマチック,日付なし,ブレスレットタイプ,シースルー
link1 ｜ ショップ 1 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c41GZbvv
link2 ｜ ショップ ２ AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c3LeamaB
link3 ｜ ショップ ３ AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c2RrhMll
link4 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c3gfSaC3
link5 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c4FB0uUb
link6 ｜ 似ている時計 AliExpress で見る ｜ https://s.click.aliexpress.com/e/_c4BTB2eJ

> automatic-20260220-0845
price ｜ 4500
features ｜ オートマチック,日付,カレンダー,クロノグラフ風,ブレスレット
caption ｜ 現在この時計のスタイルでオートマチックは販売されていません。<br>下のリンクからクォーツタイプでお探しください。
link1 ｜ 似ている クォーツ時計 アリエクスプレスで見る ｜ https://s.click.aliexpress.com/e/_c4Dr6I0f
link2 ｜ 似ている クォーツ時計 アリエクスプレスで見る ｜ https://s.click.aliexpress.com/e/_c4DSYWBz
link3 ｜ 似ている クォーツ時計 アリエクスプレスで見る ｜ https://s.click.aliexpress.com/e/_c2z1NMkX
link4 ｜ 似ている クォーツ時計 アリエクスプレスで見る ｜ https://s.click.aliexpress.com/e/_c35iI1Hz
link5 ｜ 似ている クォーツ時計 アリエクスプレスで見る ｜ https://s.click.aliexpress.com/e/_c4b7rICX
link6 ｜ 似ている クォーツ時計 アリエクスプレスで見る ｜ https://s.click.aliexpress.com/e/_c3bruLNd
`;