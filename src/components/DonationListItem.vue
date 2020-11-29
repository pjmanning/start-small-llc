<template>
    <li>
        <a
            :href="link"
            target="_blank"
            class="block transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-50"
        >
            <div class="flex items-center px-4 py-4 sm:px-6">
                <div class="flex items-start flex-1 min-w-0">
                    <div class="flex-shrink-0 hidden md:flex">
                        <!-- <img
                            class="w-6 h-6 rounded-full"
                            :src="
                                `https://www.google.com/s2/favicons?domain=${link}`
                            "
                            :alt="grantee"
                        /> -->
                    </div>
                    <div
                        class="grid items-start flex-1 min-w-0 grid-cols-4 row-gap-3 px-1 md:px-4 sm:row-gap-2 md:grid-cols-12 md:grid-rows-1"
                    >
                        <div class="col-span-3 md:col-span-3">
                            <div
                                class="text-sm font-medium leading-5 text-blue-600"
                            >
                                {{ grantee }}
                            </div>
                            <div
                                class="flex items-center mt-2 text-sm leading-5 text-gray-500"
                            >
                                <span
                                    class="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full"
                                    >{{ category }}</span
                                >
                            </div>
                        </div>

                        <div class="md:col-span-2 md:col-start-4">
                            <div>
                                <div
                                    class="font-semibold leading-5 text-right text-gray-900 text-green-500 text-md"
                                >
                                    ${{ amountNumber.toLocaleString() }}
                                </div>
                                <div
                                    class="mt-2 text-xs leading-5 text-right text-gray-500"
                                >
                                    {{ date }}
                                </div>
                            </div>
                        </div>
                        <div class="col-span-4 md:col-start-7 md:col-span-6">
                            <div class="text-xs text-gray-800">{{ why }}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <svg
                        class="w-5 h-5 text-gray-400"
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
            required: false
        },
        amount: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        grantee: {
            type: String,
            required: true
        },
        twitter: {
            type: String,
            required: false
        },
        link: {
            type: String,
            required: false
        },
        why: {
            type: String,
            required: false
        }
    },

    computed: {
        amountNumber() {
            return Number(this.amount)
        }
    }
}
</script>

<style scoped></style>
