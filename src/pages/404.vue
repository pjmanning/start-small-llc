<template>
    <Layout>
        <div class="flex flex-col justify-center h-screen text-center">
            <h2
                class="text-4xl italic font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
            >
                Derrrrr...
            </h2>
            <g-image
                src="../assets/images/caveman.png"
                alt="caveman"
                class="w-4/5 mx-auto my-4 sm:w-2/3 md:w-1/2 lg:w-1/3"
            ></g-image>
            <p
                class="max-w-md mx-auto mb-3 text-base text-gray-500 sm:text-lg md:mb-5 md:text-xl md:max-w-3xl"
            >
                Sorry this page does not exist.
            </p>
            <div class="inline-flex mx-auto rounded-md">
                <g-link
                    to="/"
                    class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                >
                    Go Back Home
                    <svg
                        class="w-5 h-5 ml-3 -mr-1"
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
        title: 'Wipeout - No Page Found'
    }
}
</script>

<style scoped></style>
