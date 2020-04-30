<template>
  <div class="max-w-7xl mx-auto sm:px-6 sm:py-16 lg:px-8">
    <div class="flex flex-col">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Grantee
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <DonationListItem
                v-for="item of sheetData"
                :key="item.id"
                :date="item.node.Date"
                :amount="item.node.Amount"
                :category="item.node.Category"
                :grantee="item.node.Grantee"
                :link="item.node.Link"
                :why="item.node.Why"
              />
            </tbody>
          </table>
          <ul>
            <DonationListItem2
              v-for="item of sheetData"
              :key="item.id"
              :date="item.node.Date"
              :amount="item.node.Amount"
              :category="item.node.Category"
              :grantee="item.node.Grantee"
              :link="item.node.Link"
              :why="item.node.Why"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DonationListItem from './DonationListItem'
import DonationListItem2 from './DonationListItem2'

export default {
  components: {
    DonationListItem,
    DonationListItem2,
  },
  props: {
    sheetData: {
      type: Array,
      required: true,
    },
  },
}
</script>
