# モーダルウィンドウ

## Example

- モーダルを開く要素に `data-modal-open` 属性を付与します。値は、対象のモーダルの `id` 属性です。
- モーダルを閉じる要素には `data-modal-close` 属性を付与します。

```html sandbox h=180 bp=768
<button class="button" data-modal-open="modal-1">demo modal</button>

<div class="modal" id="modal-1" aria-hidden="true">
  <div class="overlay" tabindex="-1" data-modal-close>
    <div class="modal-container" role="dialog" aria-modal="true">
      <header class="modal-header">
        <h2 class="title">Hello modal!</h2>
        <button class="modal-close-button">
          <i class="material-icons modal-close-icon" data-modal-close>close</i>
        </button>
      </header>
      <div class="modal-content">
        modal content
      </div>
    </div>
  </div>
</div>
```
