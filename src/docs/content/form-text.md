# テキスト入力

## Example

```html sandbox h=200 bp=768
<form>
  <p class="text-sm text-danger mb-2">※マークは必須項目です</p>
  <div class="form-group">
    <label class="form-label is-required">項目名</label>
    <div class="form-wrap">
      <input type="text" name="" value="" class="form-control" placeholder="項目" />
    </div>
  </div>
  <!-- 項目名を併記しない場合の表示 -->
  <div class="form-group">
    <input type="text" name="" value="" class="form-control" placeholder="項目" />
  </div>
</form>
```

## エラー

```html sandbox h=140 bp=768
<!-- エラー時はinput要素にis-errorクラスを付与する -->
<div class="form-group">
  <label class="form-label">項目名</label>
  <div class="form-wrap">
    <input type="text" name="" value="" class="form-control is-error" placeholder="メールアドレスを入力"/>
    <p class="form-note is-error">エラー文が入ります</p>
  </div>
</div>
```

## 非活性

```html sandbox h=140 bp=768
<!-- input要素にdisabled(無効化)を設定した場合の表示 -->
<div class="form-group">
  <label class="form-label">項目名</label>
  <div class="form-wrap">
    <input type="text" name="" value="" class="form-control" disabled placeholder="メールアドレスを入力" />
  </div>
</div>
```

## 右寄せ

```html sandbox h=120 bp=768
<div class="form-group">
  <label class="form-label">項目名</label>
  <div class="form-wrap">
    <input type="number" name="" value="1200" class="form-control is-text-right" placeholder="金額" />
  </div>
</div>
```

## 複数行

```html sandbox h=400 bp=768
<form>
  <div class="form-group">
    <label class="form-label is-required">項目名</label>
    <div class="form-wrap">
      <textarea name="" value="" class="form-control" rows="5"></textarea>
      <p class="form-note">見積の内容や確認する上での注意事項を記載してください</p>
    </div>
  </div>
  <!-- エラー時はtextarea要素にis-errorクラスを付与する -->
  <div class="form-group">
    <label class="form-label is-required">項目名</label>
    <div class="form-wrap">
      <textarea name="" value="" class="form-control is-error" rows="5"></textarea>
      <p class="form-note">見積の内容や確認する上での注意事項を記載してください</p>
    </div>
  </div>
  <!-- textarea要素にdisabled(無効化)を設定した場合の表示 -->
  <div class="form-group">
    <label class="form-label is-required">項目名</label>
    <div class="form-wrap">
      <textarea name="" value="" class="form-control" rows="5" disabled></textarea>
      <p class="form-note">見積の内容や確認する上での注意事項を記載してください</p>
    </div>
  </div>
</form>
```
