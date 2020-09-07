# テーブル

## Example

- テーブルには `.table` クラスを付与します。
- `.is-outlined` クラスを付与すると、枠付きになります。

```html sandbox h=280 bp=768
<div class="table-container">
  <table class="table is-outlined">
    <thead>
      <tr>
        <th>日付</th>
        <th>分類</th>
        <th>メモ</th>
        <th>領収書</th>
        <th>金額</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2019/08/01</td>
        <td>交通費</td>
        <td>業務システム使い方レクチャーの為名古屋出張</td>
        <td>領収書XXXXXX.pdf</td>
        <td>10,000円</td>
      </tr>
      <tr>
        <td>2019/08/01</td>
        <td>交通費</td>
        <td>業務システム使い方レクチャーの為名古屋出張</td>
        <td>領収書XXXXXX.pdf</td>
        <td>10,000円</td>
      </tr>
      <tr class="row-danger">
        <td>2019/08/01</td>
        <td>交通費</td>
        <td>業務システム使い方レクチャーの為名古屋出張</td>
        <td>領収書XXXXXX.pdf</td>
        <td>10,000円</td>
      </tr>
    </tbody>
  </table>
</div>
```

## レスポンシブ

`.table-container` で囲むと、画面幅が狭まったとき、テーブルが横にスクロールします。

```html sandbox h=280 bp=768
<div class="table-container">
  <table class="table is-outlined">
    <thead>
      <tr>
        <th>日付</th>
        <th>分類</th>
        <th>メモ</th>
        <th>領収書</th>
        <th>金額</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2019/08/01</td>
        <td>交通費</td>
        <td>業務システム使い方レクチャーの為名古屋出張</td>
        <td>領収書XXXXXX.pdf</td>
        <td>10,000円</td>
      </tr>
      <tr>
        <td>2019/08/01</td>
        <td>交通費</td>
        <td>業務システム使い方レクチャーの為名古屋出張</td>
        <td>領収書XXXXXX.pdf</td>
        <td>10,000円</td>
      </tr>
    </tbody>
  </table>
</div>
```

`.is-mobile-stacked` クラスを付与すると、モバイル幅で、セルが縦に積まれます。

```html sandbox h=280 bp=768
<table class="table is-outlined is-mobile-stacked">
  <thead>
    <tr>
      <th>日付</th>
      <th>分類</th>
      <th>メモ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2019/08/01</td>
      <td>交通費</td>
      <td>業務システム使い方レクチャーの為名古屋出張</td>
    </tr>
    <tr>
      <td>2019/08/01</td>
      <td>交通費</td>
      <td>業務システム使い方レクチャーの為名古屋出張</td>
    </tr>
  </tbody>
</table>
```

## 行のハイライト

- `.is-hoverable` クラスを付与すると、マウスオーバーした行をハイライトします。
- `<tr>` 要素 に `.row-danger` クラスを付与すると、エラーを示す表示になります。

```html sandbox h=280 bp=768
<div class="table-container">
  <table class="table is-outlined is-hoverable">
    <thead>
      <tr>
        <th>日付</th>
        <th>分類</th>
        <th>メモ</th>
        <th>領収書</th>
        <th>金額</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2019/08/01</td>
        <td>交通費</td>
        <td>業務システム使い方レクチャーの為名古屋出張</td>
        <td>領収書XXXXXX.pdf</td>
        <td>10,000円</td>
      </tr>
      <tr class="row-danger">
        <td>2019/08/01</td>
        <td>交通費</td>
        <td>業務システム使い方レクチャーの為名古屋出張</td>
        <td>領収書XXXXXX.pdf</td>
        <td>10,000円</td>
      </tr>
    </tbody>
  </table>
</div>
```

## セル幅を最小化する

`.cell-minimum` クラスを付与したセルは、幅がコンテンツの幅まで縮まります。

```html sandbox h=280 bp=768
<div class="table-container">
  <table class="table is-outlined">
    <thead>
      <tr>
        <th>ファイル名</th>
        <th>サイズ</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="cell-minimum">20190824-納品書-称賛システム スマホアプリ開発案件.zip</td>
        <td class="cell-minimum">123.4KB</td>
        <td class="text-right">
          <button type="button" class="icon-button">
            <i class="material-icons">get_app</i>
          </button>
        </td>
      </tr>
      <tr>
        <td class="cell-minimum">20190824-納品書-称賛システム スマホアプリ開発案件.zip</td>
        <td class="cell-minimum">123.4KB</td>
        <td class="text-right">
          <button type="button" class="icon-button">
            <i class="material-icons">get_app</i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## 行間の狭いテーブル

`.is-narrow` クラスを付与すると、行間の狭いシンプルな表示が適用されます。

```html sandbox h=240 bp=420
<table class="table is-mobile-stacked is-narrow is-outlined">
  <tbody>
    <tr>
      <td class="cell-minimum">
        <div class="flexbox align-center">
          2019/08/20
        </div>
      </td>
      <td class="cell-ellipsis">
        動作保証環境以外では正常に表示・動作しない場合がございますので予めご了承願います。
      </td>
    </tr>
    <tr>
      <td class="cell-minimum">
        <div class="flexbox align-center">
          2019/08/20
        </div>
      </td>
      <td class="cell-ellipsis">
        消費税増税対応の第1弾として、見積書と注文書から消費税の項目をなくしております。
      </td>
    </tr>
  </tbody>
</table>
```

## 定義テーブル

ヘッダーと値が一行に並ぶタイプの定義テーブルを表現するには、`.is-definition` クラスを付与します。

```html sandbox h=320 bp=768
<table class="table is-definition">
  <tbody>
    <tr>
      <th>ARI PJコード</th>
      <td>MSLB19009</td>
    </tr>
    <tr>
      <th>契約金額</th>
      <td class="text-xl">3,000,000円</td>
    </tr>
    <tr>
      <th>契約期間</th>
      <td>2019/08/01〜2019/10/30 予定</td>
    </tr>
  </tbody>
</table>
```
