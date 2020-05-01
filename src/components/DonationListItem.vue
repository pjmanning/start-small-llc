<template>
  <li>
    <a
      :href="link"
      target="_blank"
      class="block hover:bg-gray-500 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
    >
      <div class="flex items-center px-4 py-4 sm:px-6">
        <div class="min-w-0 flex-1 flex items-center">
          <div class="hidden md:flex flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              :src="`https://www.google.com/s2/favicons?domain=${link}`"
              :alt="grantee"
            />
          </div>
          <div
            class="min-w-0 flex-1 px-1 md:px-4 grid grid-cols-4 row-gap-3 sm:row-gap-2 md:grid-cols-12 md:grid-rows-1 items-center"
          >
            <div class="col-span-3 md:col-span-4">
              <div class="text-sm leading-5 font-medium text-blue-600 truncate">
                {{ grantee }}
              </div>
              <div
                class="mt-2 flex items-center text-sm leading-5 text-gray-500"
              >
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
                >
                  {{ category }}
                </span>
              </div>
            </div>

            <div class="md:col-span-1 md:col-start-5">
              <div>
                <div
                  class="text-md leading-5 text-gray-900 font-medium text-green-500 text-right sm:text-left"
                >
                  ${{ amountNumber.toLocaleString() }}
                </div>
                <div
                  class="mt-2 text-xs leading-5 text-gray-500 text-right sm:text-left"
                >
                  {{ date }}
                </div>
              </div>
            </div>
            <div class="col-span-4 md:col-start-7 md:col-span-6">
              <div class="text-xs text-gray-800">
                {{ why }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg
            class="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: false,
    },
    amount: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    grantee: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    why: {
      type: String,
      required: false,
    },
  },

  computed: {
    amountNumber() {
      return Number(this.amount)
    },
  },
}
</script>

<style scoped></style>
