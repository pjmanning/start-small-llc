<template>
  <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 pb-24">
    <div class="flex flex-col">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
        >
          <div class="bg-blue-600 px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-white">
              List of Grantees
            </h3>
          </div>
          <ul>
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
    DonationListItem,
  },
  props: {
    sheetData: {
      type: Array,
      required: true,
    },
  },
}
</script>
