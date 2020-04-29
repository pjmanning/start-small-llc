<template>
  <Layout>
    <HeroHeader />
  </Layout>
</template>

<script>
import HeroHeader from '../components/HeroHeader'
export default {
  metaInfo: {
    title: '#startsmall',
    meta: [
      // twitter-card: https://cards-dev.twitter.com/validator
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@jack' },
      { name: 'twitter:creator', content: '@pj_manning' },
      {
        name: 'twitter:title',
        content: '$1B Fund for Global COVID-19 Relief',
      },
      {
        name: 'twitter:description',
        content:
          "Jack Dorsey's $1B Square equity fund for global COVID-19 relief, UBI, and girl's health and education.",
      },
      {
        name: 'twitter:image',
        content: '../assets/images/startsmall.png',
      },
      // facebook card https://developers.facebook.com/tools/debug/
      {
        property: 'og:title',
        content: '$1B Fund for Global COVID-19 Relief',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        content: '../assets/images/startsmall.png',
      },
      { property: 'og:url', content: 'https://startsmall.llc' },
      {
        property: 'og:description',
        content:
          "Jack Dorsey's $1B Square equity fund for global COVID-19 relief, UBI, and girl's health and education.",
      },
      // { property: 'fb:app_id', content: '416774685599230' },
    ],
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
