<script>
  import Button from "@/lib/Button.svelte";
  import Input from "@/lib/Input.svelte";

  let password = "";
  let phone = "";
</script>

<div class="Login">
  <div class="container-main">
    <div class="card">
      <div class="logo">
        <img src="~@/assets/Snipaste_2023-05-31_12-49-19.png" alt="" />
      </div>
      <div class="card-section">
        <section class="mb-4">
          <Input label={"手机号"} value={phone} />
          <Input label={"密码"} value={password} />
          <div class="mt-10">
            <Button label={"登录"} size={"large"} block={true} />
          </div>
        </section>

        <section class="flex justify-between items-center">
          <a class="text-xs" href="/sign/requestRestPassword">忘记密码</a><a class="text-xs" href="/signup">注册</a>
        </section>
      </div>
    </div>
  </div>
</div>

<style src="./index.scss" lang="scss"></style>
