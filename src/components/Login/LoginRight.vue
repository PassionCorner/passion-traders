<template>
  <div class="flex flex-col items-center justify-center h-full">
    <div
      class="group  font-nuno font-light text-2xl text-lightTeal tracking-wide mb-10"
    >
      <span
        @click="toggleSignIn"
        ref="signIn"
        class="active font-nuno font-light border-b border-transparent hover:text-white hover:border-teal cursor-pointer transition duration-150 ease-in"
        >Sign In</span
      >
      or
      <span
        @click="toggleSignUp"
        ref="signUp"
        class="font-nuno font-light hover:text-white border-b border-transparent hover:border-teal cursor-pointer transition duration-150 ease-in"
        >Sign Up</span
      >
    </div>
    <!-- sign in -->
    <form v-if="activeForm" class="transition duration-150 ease-in">
      <label>e-mail</label>
      <input
        class="border-b focus:outline-none bg-transparent"
        type="email"
        placeholder="Your e-mail goes here"
      />
      <label>password</label>
      <input type="password" />

      <button>Sign In</button>
    </form>
    <!-- sing up -->
    <form v-else class="transition duration-150 ease-in">
      <label>full name</label>
      <input type="text" placeholder="Enter your full name" />
      <label>password</label>
      <input type="password" />
      <label>e-mail</label>
      <input type="email" placeholder="Your e-mail goes here" />
      <label>I agree all statements in terms of service</label>
      <input type="checkbox" />
      <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const signIn = ref(null)
    const signUp = ref(null)
    const activeForm = ref(true)
    const toggleSignIn = () => {
      signIn.value.classList.add("active")
      signUp.value.classList.remove("active")
      activeForm.value = true
    }
    const toggleSignUp = () => {
      signUp.value.classList.add("active")
      signIn.value.classList.remove("active")
      activeForm.value = false
    }

    return { signIn, signUp, activeForm, toggleSignIn, toggleSignUp }
  }
}
</script>

<style scoped>
.active {
  color: #fff;
  border-color: #6de0ca;
}
</style>
