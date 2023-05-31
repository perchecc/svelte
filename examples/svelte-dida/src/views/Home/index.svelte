<script>
  import Header from "./components/Header.svelte";
</script>

<div class="home">
  <div class="home-main">
    <Header />
    登录成功
  </div>
</div>

<style lang="scss">
  .home {
    @apply w-full h-full;
    background: url(https://cncdn.dida365.com/static/build/app/i/c3a9f89fd713fff64837fa956095849c.png)
      no-repeat;
    background-size: cover;
    background-position: 0px 100%;

    .home-main {
      background-color: #fff;
      opacity: 0.9;
      @apply w-full h-full;
    }
  }
</style>
