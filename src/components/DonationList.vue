<template>
    <div class="max-w-6xl pb-24 mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-col">
            <div
                class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            >
                <div
                    class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
                >
                    <div
                        class="flex items-center justify-between px-4 py-5 bg-blue-600 border-b border-gray-200 sm:px-6"
                    >
                        <h3 class="text-lg font-medium leading-6 text-white">
                            List of Grantees
                        </h3>
                        <div class="relative inline-block text-left">
                            <div>
                                <span class="rounded-md shadow-sm">
                                    <button
                                        @click="sortOpen = !sortOpen"
                                        type="button"
                                        class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                                    >
                                        Sort By
                                        <svg
                                            class="w-5 h-5 ml-2 -mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                                                clip-rule="evenodd"
                                                fill-rule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                            <transition
                                enter-active-class="transition duration-100 ease-out transform"
                                enter-class="scale-95 opacity-0"
                                enter-to-class="scale-100 opacity-100"
                                leave-active-class="transition duration-75 ease-in transform"
                                leave-class="scale-100 opacity-100"
                                leave-to-class="scale-95 opacity-0"
                            >
                                <div
                                    v-show="sortOpen"
                                    class="absolute right-0 w-32 mt-2 origin-top-right rounded-md shadow-lg"
                                >
                                    <div class="bg-white rounded-md shadow-xs">
                                        <div class="py-1">
                                            <div
                                                @click="filterByDate"
                                                class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                            >
                                                <svg
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    class="w-4 h-4 mr-1"
                                                >
                                                    <path
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                Date
                                            </div>
                                            <div
                                                @click="filterByAmount"
                                                class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                            >
                                                <svg
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    class="w-4 h-4 mr-1"
                                                >
                                                    <path
                                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                Amount
                                            </div>
                                            <!-- <a
                        href="#"
                        class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      >
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          class="w-4 h-4 mr-1"
                        >
                          <path
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                        Category
                      </a>-->
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                    <ul>
                        <DonationListItem
                            v-for="item of filteredSheetData"
                            class="bg-white border-b border-gray-200 border-solid even:bg-gray-50"
                            :key="item.id"
                            :date="item.node.Date"
                            :amount="item.node.Amount"
                            :category="item.node.Category"
                            :grantee="item.node.Grantee"
                            :link="item.node.Link"
                            :why="item.node.Why"
                        />
                        <!-- <div
              class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6"
            >
              <div class="flex justify-between flex-1 sm:hidden">
                <g-link
                  v-show="pageData.currentPage === 2"
                  :to="`/`"
                  class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
                >Previous</g-link>
                <g-link
                  v-show="pageData.currentPage > 2"
                  :to="`/${pageData.currentPage - 1}#list`"
                  class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
                >Previous</g-link>
                <g-link
                  v-show="pageData.totalPages > pageData.currentPage"
                  :to="`/${pageData.currentPage + 1}#list`"
                  class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
                >Next</g-link>
              </div>
              <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p class="text-sm leading-5 text-gray-700">
                    Showing
                    <span class="font-medium">1</span>
                    to
                    <span class="font-medium">10</span>
                    of
                    <span class="font-medium">{{total}}</span>
                    results
                  </p>
                </div>
                <div>
                  <nav class="relative z-0 inline-flex shadow-sm">
                    <button
                      type="button"
                      class="relative inline-flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-l-md hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500"
                      aria-label="Previous"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fill-rule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
                    >1</button>
                    <button
                      type="button"
                      class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
                    >2</button>
                    <button
                      type="button"
                      class="relative items-center hidden px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 md:inline-flex hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
                    >3</button>
                    <span
                      class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 bg-white border border-gray-300"
                    >...</span>
                    <button
                      type="button"
                      class="relative items-center hidden px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 md:inline-flex hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
                    >8</button>
                    <button
                      type="button"
                      class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
                    >9</button>
                    <button
                      type="button"
                      class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
                    >10</button>
                    <button
                      type="button"
                      class="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-r-md hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500"
                      aria-label="Next"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>
            </div>-->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DonationListItem from './DonationListItem'

export default {
    components: {
        DonationListItem
    },

    props: {
        sheetData: {
            type: Array,
            required: true
        },
        pageData: {
            type: Object,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            sortOpen: false,
            filter: 'date'
        }
    },

    methods: {
        filterByDate() {
            this.filter = 'date'
            this.sortOpen = false
        },

        filterByAmount() {
            this.filter = 'amount'
            this.sortOpen = false
        }
    },

    computed: {
        filteredSheetData() {
            if (this.filter === 'date') {
                console.log('filter by date')
                return this.sheetData
            } else if (this.filter === 'amount') {
                console.log('filter by amount')
                // Make new array
                let filteredArray = [...this.sheetData]
                return filteredArray.sort(
                    (a, b) => b.node.Amount - a.node.Amount
                )
            }
        }
    }
}
</script>
