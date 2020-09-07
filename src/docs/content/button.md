# Button

## Example

`.button` クラスを付与すると、ボタンの見た目が適用されます。

```html sandbox h=180 bp=768
<button class="button">Button</button>
<button class="button" disabled>Button</button>
```

## 枠線のみ

```html sandbox h=180 bp=768
<button type="button" class="button is-outline">Button</button>
<button type="button" class="button is-outline" disabled>Button</button>
```

## 小さいサイズ

```html sandbox h=120 bp=768
<button type="button" class="button is-small">Button</button>
<button type="button" class="button is-small is-outline">Button</button>
```

## カテゴリ別

```html sandbox h=180 bp=768
<button type="button" class="button is-small is-category1">Button</button>
<button type="button" class="button is-small is-category2">Button</button>
<button type="button" class="button is-small is-category3">Button</button>
<button type="button" class="button is-small is-category4">Button</button>
<button type="button" class="button is-small is-category5">Button</button>
```

## アイコン

```html sandbox h=120 bp=768
<button type="button" class="button is-small is-outline is-icon"><i class="material-icons">attach_file</i>Button</button>
<button type="button" class="button is-small is-outline is-icon" disabled><i class="material-icons">get_app</i>Button</button>
```

## アイコン＋テキスト

```html sandbox h=90 bp=768
<button type="button" class="icon-button"><i class="material-icons">add</i></button>
<button type="button" class="icon-button is-active"><i class="material-icons">attach_file</i></button>
```

## グルーピング

```html sandbox h=160 bp=768
<div class="button-group">
  <button type="button" class="button is-outline">Button</button>
  <button type="button" class="button">Button</button>
</div>
```
