<template>
  <Layout>
    <HeroHeader />
    <HomeStats />
    <DonationList id="list" :sheetData="$page.allGoogleSheet.edges" />
    <FAQList id="faq" />
    <HomeCTA id="cta" />
    <TheFooter />
  </Layout>
</template>

<page-query>
 query {
    allGoogleSheet {
      edges {
        node {
          Date
          _Amount_
          Category
          Grantee
          Link
          Why_
        }
      }
    }
  }
</page-query>

<script>
import HeroHeader from '../components/HeroHeader'
import HomeStats from '../components/HomeStats'
import DonationList from '../components/DonationList'
import FAQList from '../components/FAQList'
import HomeCTA from '../components/HomeCTA'
import TheFooter from '../components/TheFooter'

export default {
  components: {
    HeroHeader,
    HomeStats,
    DonationList,
    FAQList,
    HomeCTA,
    TheFooter,
  },
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
        content: 'https://i.postimg.cc/jj9THSvy/startsmall.png',
      },
      // facebook card https://developers.facebook.com/tools/debug/
      {
        property: 'og:title',
        content: '$1B Fund for Global COVID-19 Relief',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        content: 'https://i.postimg.cc/jj9THSvy/startsmall.png',
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
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
