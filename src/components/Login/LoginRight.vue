<template>
  <div class="flex flex-col items-center justify-center h-full">
    <div class="w-full px-32">
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
      <!-- sign in -->
      <form
        v-if="activeForm"
        class="transition duration-150 ease-in flex flex-col"
      >
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
      <form v-else class="transition duration-150 ease-in flex flex-col">
        <label class="font-nuno font-light text-xl text-white uppercase mb-7"
          >full name</label
        >
        <input
          class="font-nuno font-light text-md text-lightTeal bg-transparent border-b border-lightTeal"
          type="text"
          placeholder="Enter your full name"
        />
        <label class="font-nuno font-light text-xl text-white uppercase my-7"
          >password</label
        >
        <input
          class="font-nuno font-light text-md text-lightTeal bg-transparent border-b border-lightTeal"
          type="password"
        />
        <label class="font-nuno font-light text-xl text-white uppercase my-7"
          >e-mail</label
        >
        <input
          class="font-nuno font-light text-md text-lightTeal bg-transparent border-b border-lightTeal"
          type="email"
          placeholder="Your e-mail goes here"
        />
        <div>
          <!-- <input type="checkbox" class="mr-5 my-10 checkbox" />
          <label class="font-nuno font-light text-md text-gray-500 my-5"
            >I agree all statements in terms of service</label
          > -->

          <label class="checkbox my-7 flex">
            <span class="checkbox__input">
              <input type="checkbox" name="checkbox" />
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
              >I agree all statements in terms of service</span
            >
          </label>
        </div>
        <button>Sign Up</button>
      </form>
    </div>
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

<style lang="scss" scoped>
.active {
  color: #fff;
  border-color: #6de0ca;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.checkbox {
  // display: grid;
  // grid-template-columns: min-content auto;
  // grid-gap: 0.5em;
  font-size: 1rem;
  color: var(--color);

  &--disabled {
    color: var(--disabled);
  }
}

.checkbox__control {
  // display: inline-grid;
  width: 1.2em;
  height: 1.2em;
  border-radius: 2px;
  border: 0.1em solid darkgray;

  svg {
    transition: transform 0.1s ease-in 25ms;
    transform: scale(0);
    transform-origin: bottom left;
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

    // &:focus + .checkbox__control {
    //   box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
    // }

    &:checked + .checkbox__control svg {
      transform: scale(1);
      background: #6de0ca;
      border: 0;
    }

    // &:disabled + .checkbox__control {
    //   border: 0;
    // }
  }
}
</style>
