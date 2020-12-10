<template>
  <div class="login flex justify-evenly relative">
    <LoginNav class="absolute py-5 px-5 w-full" />
    <div class="login-left bg-teal w-screen h-screen md:block hidden">
      <!-- <p>Left</p> -->
      <LoginLeft />
    </div>
    <div class="login-right bg-darkTeal w-screen h-screen">
      <!-- <p>Right</p> -->
      <LoginRight />
    </div>
  </div>
</template>

<script>
import LoginNav from "@/components/Login/LoginNav.vue"
import LoginLeft from "@/components/Login/LoginLeft.vue"
import LoginRight from "@/components/Login/LoginRight.vue"
export default {
  components: {
    LoginNav,
    LoginLeft,
    LoginRight
  }
}
</script>

<style></style>
