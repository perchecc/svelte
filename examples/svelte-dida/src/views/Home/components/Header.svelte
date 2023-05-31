<script>
  import { Icon } from "svelte-awesome";
  import { sort, bars, ellipsisH } from "svelte-awesome/icons";
</script>

<div class="header">
  <div class="hd-left">
    <Icon data={bars} scale={1.5} />
    <span class=" ml-2">dou</span>
  </div>
  <div class="hd-right">
    <Icon data={sort} scale={1.5} />
    <Icon data={ellipsisH} scale={1.5} class={"ml-2"} />
  </div>
</div>

<style lang="scss">
  .header {
    padding: 16px 20px 8px;
    @apply flex items-center justify-between;

    .hd-left {
      font-size: 24px;
      @apply text-black flex items-center;
    }
  }
</style>
