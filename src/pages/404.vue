<template>
  <Layout>
    <div class="h-screen flex flex-col justify-center text-center">
      <h2
        class="text-4xl italic tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
      >
        Derrrrr...
      </h2>
      <g-image
        src="../assets/images/caveman.png"
        alt="caveman"
        class="w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto my-4"
      ></g-image>
      <p
        class="mb-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mb-5 md:text-xl md:max-w-3xl"
      >
        Sorry this page does not exist.
      </p>
      <div class="inline-flex rounded-md mx-auto">
        <g-link
          to="/"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        >
          Go Back Home
          <svg
            class="ml-3 -mr-1 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill-rule="evenodd"
              d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
              clip-rule="evenodd"
            />
          </svg>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Wipeout - No Page Found',
  },
}
</script>

<style scoped></style>
