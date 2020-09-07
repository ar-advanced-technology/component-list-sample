# セレクトボックス

## Example

カスタムデザインのセレクトボックスを表示するには、`select` 要素を `.form-select` クラスで囲みます。

```html sandbox h=140 bp=768
<div class="form-group">
  <label class="form-label is-required" for="sample-1">項目名</label>
  <div class="form-wrap">
    <div class="form-select">
      <select class="form-control" id="sample-1" name="sample-1">
        <option value="">選択</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  </div>
</div>
```

## エラー

```html sandbox h=140 bp=768
<!-- エラー時はselect要素にis-errorクラスを付与する -->
<div class="form-group">
  <label class="form-label is-required" for="sample-2">項目名</label>
  <div class="form-wrap">
    <div class="form-select">
      <select class="form-control is-error" id="sample-2" name="sample-2">
        <option value="" disabled selected>選択</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
    </div>
    <p class="form-note is-error">エラー文が入ります</p>
  </div>
</div>
```

## 非活性

```html sandbox h=140 bp=768
<!-- select要素にdisabled(無効化)を設定した場合の表示 -->
<div class="form-group">
  <label class="form-label is-required">項目名</label>
  <div class="form-wrap">
    <div class="form-select">
      <select class="form-control" disabled>
        <option value="">選択</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  </div>
</div>
```
