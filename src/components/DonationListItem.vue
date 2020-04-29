<template>
  <tr class="hover:bg-gray-100">
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div class="text-sm leading-5 text-gray-900">{{ date }}</div>
    </td>
    <td
      class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
    >
      {{ amount }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
      >
        {{ category }}
      </span>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-8 w-8">
          <img
            class="h-8 w-8 rounded-full"
            :src="`https://www.google.com/s2/favicons?domain=${link}`"
            :alt="grantee"
          />
        </div>
        <div class="ml-4">
          <div class="text-sm leading-5 font-medium text-gray-900">
            {{ grantee }}
          </div>
          <div class="text-sm leading-5 text-gray-500">
            <!-- {{ why }} -->
          </div>
        </div>
      </div>
    </td>
    <td
      class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
    >
      <a
        :href="link"
        target="_blank"
        class="text-indigo-600 hover:text-indigo-900"
        >View Site</a
      >
    </td>
  </tr>
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
