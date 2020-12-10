<template>
  <form class="transition duration-150 ease-in flex flex-col md:mb-48">
    <label class="font-nuno font-light text-lg text-white uppercase mb-7"
      >e-mail</label
    >
    <input
      class="font-nuno font-light text-md text-white bg-transparent border-b border-lightTeal focus:outline-none"
      type="email"
    />
    <label class="font-nuno font-light text-lg text-white uppercase my-7"
      >password</label
    >
    <input
      class="font-nuno font-light text-md text-white bg-transparent border-b border-lightTeal focus:outline-none"
      type="password"
    />
    <div class="md:text-left text-center">
      <button
        class="font-nuno font-light text-md bg-teal text-white py-2 w-40 rounded-full transition duration-150 ease-in hover:text-teal hover:bg-lightTeal focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-2xl mt-7"
      >
        Sign In
      </button>
    </div>
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
