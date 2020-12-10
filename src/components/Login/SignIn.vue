<template>
  <form
    @submit.prevent="handleSubmit"
    class="transition duration-150 ease-in flex flex-col md:mb-48"
  >
    <label class="font-nuno font-light text-md text-white uppercase mb-7"
      >e-mail</label
    >
    <input
      class="font-nuno font-light text-md text-white bg-transparent border-b border-lightTeal focus:outline-none"
      type="email"
      v-model="email"
    />
    <label class="font-nuno font-light text-md text-white uppercase my-7"
      >password</label
    >
    <input
      class="font-nuno font-light text-md text-white bg-transparent border-b border-lightTeal focus:outline-none"
      type="password"
      v-model="password"
    />
    <div v-if="error" class="error">{{ error }}</div>
    <div class="md:text-left text-center">
      <SubmitBtn v-if="!isPending" />
      <SubmitBtnLoad v-else />
    </div>
  </form>
</template>

<script>
import SubmitBtn from "@/components/Login/SubmitBtn.vue"
import SubmitBtnLoad from "@/components/Login/SubmitBtnLoad.vue"
import useLogin from "@/composables/useLogin"
// import getUser from "@/composables/getUser"
import { ref } from "vue"
import { useRouter } from "vue-router"
export default {
  components: {
    SubmitBtn,
    SubmitBtnLoad
  },
  setup() {
    const router = useRouter()
    const { error, login, isPending } = useLogin()
    // const { user } = getUser()
    const email = ref("")
    const password = ref("")
    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        router.push({ name: "Home" })
      }
    }
    return { email, password, handleSubmit, error, isPending }
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>
