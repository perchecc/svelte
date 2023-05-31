<script>
  export let label = ""; // 名称
  export let value = ""; // value
  export let placeholder = "请输入"; // placeholder
</script>

<div class="relative row">
  <span>{label}</span>
  <input bind:value {placeholder} />
</div>
<span class="inputBar" />

<style lang="scss">
  .inputBar {
    position: relative;
    display: block;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 1px;
    transition: border-color 0.15s ease-in-out;

    &::before {
      left: 50%;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &::after {
      right: 50%;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .row {
    > span {
      color: #333;
    }

    > input {
      border: 0;
      font-size: 16px;
      padding: 10px 10px 8px 8px;
      width: calc(100% - 70px);
      color: #333;
      outline: none;

      &::placeholder {
        color: #d1d1d1;
      }
    }
  }
</style>
