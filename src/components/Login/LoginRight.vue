<template>
  <div class="flex flex-col items-center justify-center h-full">
    <div class="w-full md:px-32 px-10">
      <div
        class="group font-nuno font-light text-3xl text-lightTeal tracking-wide mb-10"
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
      <transition name="component-fade" mode="out-in">
        <component :is="view"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, shallowRef } from "vue"
import SignUp from "@/components/Login/SignUp.vue"
import SignIn from "@/components/Login/SignIn.vue"
export default {
  components: {
    SignUp,
    SignIn
  },
  setup() {
    const view = shallowRef(SignIn)
    const signIn = ref(null)
    const signUp = ref(null)
    const activeForm = ref(true)
    const toggleSignIn = () => {
      signIn.value.classList.add("active")
      signUp.value.classList.remove("active")
      activeForm.value = true
      view.value = SignIn
    }
    const toggleSignUp = () => {
      signUp.value.classList.add("active")
      signIn.value.classList.remove("active")
      activeForm.value = false
      view.value = SignUp
    }

    return { signIn, signUp, activeForm, toggleSignIn, toggleSignUp, view }
  }
}
</script>

<style lang="scss" scoped>
.active {
  color: #fff;
  border-color: #6de0ca;
}
//animations
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
