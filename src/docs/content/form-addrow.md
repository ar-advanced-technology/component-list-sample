# 行追加

## Example

```html sandbox h=420 bp=768
<div class="js-smartinput smart-input">
  <div class="js-smartinput-row smart-input-row">
    <div class="smart-input-col">
      <div class="form-date">
        <input type="text" class="form-control" placeholder="日付">
      </div>
    </div>
    <div class="smart-input-col">
      <div class="form-select">
        <select class="form-control">
          <option value="">分類</option>
          <option>b</option>
          <option>c</option>
        </select>
      </div>
    </div>
    <div class="smart-input-col is-fluid">
      <input type="text" class="form-control" placeholder="メモ">
    </div>
    <div class="smart-input-col">
      <input
        type="number"
        class="form-control is-text-right js-smartinput-calc"
        placeholder="金額"
      />
    </div>
    <div class="smart-input-col has-actions">
      <label class="icon-button js-smartinput-uploader">
        <i class="material-icons">attach_file</i>
      </label>
      <input type="file" class="hidden js-smartinput-file" />
      <button type="button" class="icon-button js-smartinput-remove">
        <i class="material-icons">delete</i>
      </button>
    </div>
  </div>
  <div class="text-right mt-2 mb-2">
    <button type="button" class="icon-button js-smartinput-add">
      <i class="material-icons">add</i>
    </button>
  </div>
  <div class="smart-input-footer">
    <div class="smart-input-row">
      <div class="smart-input-col is-fluid">
        <label class="smart-input-label">経費合計金額</label>
      </div>
      <div class="smart-input-col">
        <input
          type="text"
          class="form-control is-text-right js-smartinput-total"
          disabled
          value="0"
        />
      </div>
    </div>
  </div>
</div>
```
