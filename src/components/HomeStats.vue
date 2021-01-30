<template>
    <div class="bg-transparent sm:-mt-14">
        <div class="pb-12 mt-0 bg-gray-50 sm:pb-16">
            <div class="relative">
                <div class="absolute inset-0 h-1/2"></div>
                <div
                    class="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8"
                >
                    <div class="max-w-4xl mx-auto">
                        <dl
                            class="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3"
                        >
                            <div
                                class="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r"
                            >
                                <dt
                                    class="flex items-center justify-center order-2 mt-2 text-lg font-medium leading-6 text-gray-500"
                                    id="item-1"
                                >
                                    Total Value
                                    <div
                                        class="relative inline-block text-left"
                                    >
                                        <div>
                                            <button
                                                class="flex items-center text-gray-400 focus:outline-none"
                                            >
                                                <svg
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    width="20"
                                                    height="20"
                                                    class="ml-2"
                                                    @mouseover="
                                                        totalValueInfo = true
                                                    "
                                                    @mouseleave="
                                                        totalValueInfo = false
                                                    "
                                                >
                                                    <path
                                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>

                                        <div
                                            v-if="totalValueInfo"
                                            class="absolute w-56 mt-2 origin-center rounded-md shadow-lg -ml-36"
                                        >
                                            <div
                                                class="rounded-md shadow-xs bg-gray-50"
                                            >
                                                <div
                                                    class="flex flex-col items-end py-1"
                                                >
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        <p
                                                            v-if="
                                                                numberOfShares
                                                            "
                                                        >
                                                            {{
                                                                numberOfShares.toLocaleString()
                                                            }}
                                                        </p>
                                                        <p
                                                            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                        >
                                                            # shares
                                                        </p>
                                                    </div>
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        <p class="mr-4">x</p>
                                                        <p>{{ stockPrice }}</p>
                                                        <p
                                                            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                        >
                                                            SQ price
                                                        </p>
                                                    </div>
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        <p class="mr-2">+</p>
                                                        <p>
                                                            {{
                                                                dafValue.toLocaleString()
                                                            }}
                                                        </p>
                                                        <p
                                                            class="block px-4 py-2 text-sm leading-5 text-gray-700 mr-7 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                        >
                                                            DAF
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </dt>
                                <dd
                                    v-if="numberOfShares > 0"
                                    class="order-1 text-3xl font-extrabold leading-none text-blue-500 sm:text-2xl lg:text-3xl"
                                    aria-describedby="item-1"
                                >
                                    $&nbsp;{{
                                        totalAmount.toLocaleString(undefined, {
                                            maximumFractionDigits: 0
                                        })
                                    }}
                                </dd>
                                <g-image
                                    v-else
                                    width="50"
                                    height="50"
                                    class="mx-auto -mt-3 -mb-2"
                                    src="../assets/images/spinner.gif"
                                />
                            </div>
                            <div
                                class="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r"
                            >
                                <dt
                                    class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500"
                                >
                                    Dispersed
                                </dt>
                                <dd
                                    class="order-1 text-3xl font-extrabold leading-none text-yellow-500 sm:text-2xl lg:text-3xl"
                                >
                                    -$&nbsp;{{
                                        dispersedAmount.toLocaleString()
                                    }}
                                </dd>
                            </div>
                            <div
                                class="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l"
                            >
                                <dt
                                    class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500"
                                >
                                    Remaining
                                </dt>
                                <dd
                                    class="order-1 text-3xl font-extrabold leading-none text-green-400 sm:text-2xl lg:text-3xl"
                                >
                                    $&nbsp;{{
                                        remainingAmount.toLocaleString(
                                            undefined,
                                            { maximumFractionDigits: 0 }
                                        )
                                    }}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            <p
                class="px-4 mt-3 text-xs leading-7 text-center text-gray-500 sm:px-0 sm:mt-4"
            >
                *Currently not affiliated with Jack/Twitter/Square.
                <br class="sm:hidden" />Data is pulled from a copy of his
                <a
                    href="https://docs.google.com/spreadsheets/d/1-eGxq2mMoEGwgSpNVL5j2sa6ToojZUZ-Zun8h2oBAR4/edit?usp=sharing"
                    target="_blank"
                    class="text-blue-500 hover:text-blue-700"
                    >Google sheet</a
                >.
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: {
        sheetData: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            numberOfShares: 15210009,
            numberOfDAFShares: 4623391,
            dafValue: 418146883,
            stockPrice: null,
            totalValueInfo: false
        }
    },

    async mounted() {
        try {
            const price = await axios.get(process.env.GRIDSOME_IEX_URL)
            this.stockPrice = price.data
        } catch (error) {
            console.log(error)
        }
    },

    computed: {
        totalAmount() {
            return this.numberOfShares * this.stockPrice + this.dafValue
        },

        dispersedAmount() {
            let total = 0
            this.sheetData.forEach(grant => {
                return (total += Number(grant.node.Amount))
            })
            return total
        },

        remainingAmount() {
            return this.totalAmount - this.dispersedAmount
        }
    }
}
</script>

<style scoped></style>
