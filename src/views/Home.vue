<template>
  <div class="home">
    <h1 class="font-nuno text-pink-500">Home Page</h1>
    <button @click="handleClick">Log Out</button>
  </div>
</template>

<script>
import useLogout from "@/composables/useLogout"
import { useRouter } from "vue-router"
export default {
  name: "Home",
  setup() {
    const route = useRouter()
    const { logout, error } = useLogout()
    const handleClick = async () => {
      await logout()
      console.log("User logged out")
      route.push({ name: "Login" })
    }

    return { error, handleClick }
  }
}
</script>
