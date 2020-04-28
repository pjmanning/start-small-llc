<template>
  <Layout>
    <HeroHeader />
  </Layout>
</template>

<script>
import HeroHeader from '../components/HeroHeader'
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  components: {
    HeroHeader,
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
