# ステップ

このコンポーネントは、ウィザード形式になった工程の現在地を示すために使用します。

## Example

- `.step` 内の `.step-baloon` に `.is-active` を付与すると吹き出しが表示されます。
- `.step-baloon` は `.step` 内の一番目の子要素として配置してください。

```html sandbox h=120 bp=768
<div class="step">
  <span class="step-baloon is-active">検収中</span>
  <span class="step-item">納品前</span>
  <span class="step-item is-active">納品</span>
  <span class="step-item">検収</span>
</div>
```
