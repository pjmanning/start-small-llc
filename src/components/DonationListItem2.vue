<template>
  <li>
    <a
      :href="link"
      target="_blank"
      class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
    >
      <div class="flex items-center px-4 py-4 sm:px-6">
        <div class="min-w-0 flex-1 flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              :src="`https://www.google.com/s2/favicons?domain=${link}`"
              :alt="grantee"
            />
          </div>
          <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
            <div>
              <div
                class="text-sm leading-5 font-medium text-indigo-600 truncate"
              >
                {{ grantee }}
              </div>
              <div
                class="mt-2 flex items-center text-sm leading-5 text-gray-500"
              >
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="truncate">{{ amount }}</span>
              </div>
            </div>
            <div class="hidden md:block">
              <div>
                <div class="flex items-center text-sm leading-5 text-gray-900">
                  <svg
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                    ></path>
                    <path
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  {{ amount }}
                </div>
                <div
                  class="mt-2 flex items-center text-sm leading-5 text-gray-500"
                >
                  Funded on
                  <time datetime="2020-01-07">{{ date }}</time>
                </div>
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
}
</script>

<style scoped></style>
