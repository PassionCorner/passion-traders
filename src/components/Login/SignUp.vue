<template>
  <form
    @submit.prevent="handleSubmit"
    class="transition duration-150 ease-in flex flex-col md:mb-8"
  >
    <label class="font-nuno font-light text-md text-white uppercase mb-7"
      >full name</label
    >
    <input
      class="font-nuno font-light text-md text-white bg-transparent border-b border-lightTeal focus:outline-none"
      type="text"
      placeholder="Enter your full name"
      v-model="displayName"
    />
    <label class="font-nuno font-light text-md text-white uppercase my-7"
      >e-mail</label
    >
    <input
      class="font-nuno font-light text-md text-white bg-transparent border-b border-lightTeal focus:outline-none"
      type="email"
      placeholder="Enter your email"
      v-model="email"
    />
    <label class="font-nuno font-light text-md text-white uppercase my-7"
      >password</label
    >
    <input
      class="font-nuno font-light text-md text-white bg-transparent border-b border-lightTeal focus:outline-none"
      type="password"
      placeholder="Create your password"
      v-model="password"
    />
    <div>
      <label class="checkbox my-7 flex">
        <span class="checkbox__input">
          <input type="checkbox" name="checkbox" required />
          <span class="checkbox__control">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                d="M1.73 12.91l6.37 6.37L22.79 4.59"
              />
            </svg>
          </span>
        </span>
        <span class="radio__label text-md text-gray-500 ml-3"
          >I agree all statements in
          <span class="text-white border-b border-teal "
            ><router-link :to="{ name: 'Home' }">terms of service</router-link>
          </span></span
        >
      </label>
    </div>
    <div class="md:text-left text-center">
      <button
        class="font-nuno font-light text-md bg-teal text-white py-2 w-40 rounded-full transition duration-150 ease-in hover:text-teal hover:bg-lightTeal focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-2xl"
      >
        Sign Up
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue"
import useSignup from "@/composables/useSignup"
export default {
  setup() {
    const displayName = ref("")
    const email = ref("")
    const password = ref("")
    const { signup, isPending, error } = useSignup()
    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        console.log("User signed up")
      }
    }

    return { displayName, email, password, isPending, error, handleSubmit }
  }
}
</script>

<style lang="scss" scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

.checkbox {
  font-size: 1rem;
  color: var(--color);
  &--disabled {
    color: var(--disabled);
  }
}

.checkbox__control {
  width: 1.2em;
  height: 1.2em;
  border-radius: 3px;
  border: 1px solid darkgray;

  svg {
    transition: transform 0.1s ease-in 25ms;
    transform: scale(0);
    transform-origin: bottom left;
    color: #4c5d72;
  }
}

.checkbox__input {
  margin-top: 2px;
  display: grid;
  grid-template-areas: "checkbox";
  > * {
    grid-area: checkbox;
  }
  input {
    opacity: 0;
    width: 1em;
    height: 1em;
    &:checked + .checkbox__control svg {
      transform: scale(1);
      background: #6de0ca;
      border-radius: 3px;
    }
    &:checked + .checkbox__control {
      border: 0;
    }
  }
}
</style>
