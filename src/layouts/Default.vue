<template>
  <div id="app">
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style src="../assets/css/main.css"></style>
