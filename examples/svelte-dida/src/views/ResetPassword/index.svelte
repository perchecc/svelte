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
            <Button label={"重置密码"} size={"large"} block={true} />
          </div>
        </section>
      </div>
    </div>
  </div>
</div>

<style src="./index.scss" lang="scss"></style>
