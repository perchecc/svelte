<script>
  import Button from "@/lib/Button.svelte";
  import Input from "@/lib/Input.svelte";
  import { link, push } from "svelte-spa-router";
  // 创建仓库
  import { writable } from "svelte/store";
  // 声明一个可写的 state 并指定初始值
  const token = writable("");

  let password = "";
  let phone = "";
  let tokenSub = "";

  console.log(tokenSub);

  // 订阅
  token.subscribe((val) => {
    // 订阅 store-state
    tokenSub = val;
  });

  const onSubmit = () => {
    // 存入缓存
    token.update((t) => (t = "112312312"));
    push("/home").then(() => {
      console.log("登录成功,token更新：");
      console.log(tokenSub);
    });
  };
</script>

<div class="Login">
  <div class="container-main">
    <div class="card">
      <div class="logo">
        <img src={`images/Snipaste_2023-05-31_12-49-19.png`} alt="" />
      </div>
      <div class="card-section">
        <section class="mb-4">
          <Input label={"手机号"} value={phone} />
          <Input label={"密码"} value={password} />
          <div class="mt-10">
            <Button label={"登录"} size={"large"} block={true} on:click={onSubmit} />
          </div>
        </section>

        <section class="flex justify-between items-center">
          <a class="text-xs" use:link={"/resetPassword"}>忘记密码</a>
          <a class="text-xs" use:link={"/signup"}>注册</a>
        </section>
      </div>
    </div>
  </div>
</div>

<style src="./index.scss" lang="scss"></style>
