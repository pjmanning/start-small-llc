<template>
    <Layout class="bg-gray-50">
        <HeroHeader />
        <HomeStats :sheetData="$page.allGoogleSheet.edges" />
        <DonationList
            id="list"
            :sheetData="$page.allGoogleSheet.edges"
            :pageData="$page.allGoogleSheet.pageInfo"
            :total="$page.allGoogleSheet.totalCount"
        />
        <FAQList id="faq" />
        <HomeCTA id="cta" />
        <SubmissionList />
        <TheFooter />
    </Layout>
</template>

<page-query>
 query {
    allGoogleSheet {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          Date
          Amount
          Category
          Grantee
          Twitter
          Link
          Why
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
import SubmissionList from '../components/SubmissionList'
import TheFooter from '../components/TheFooter'

export default {
    components: {
        HeroHeader,
        HomeStats,
        DonationList,
        FAQList,
        HomeCTA,
        SubmissionList,
        TheFooter
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
                content: '$1B Fund for Global COVID-19 Relief'
            },
            {
                name: 'twitter:description',
                content:
                    "Jack Dorsey's $1B Square equity fund for global COVID-19 relief, UBI, and girl's health and education."
            },
            {
                name: 'twitter:image',
                content: 'https://i.postimg.cc/ZK4vbZ7p/startsmallblue.png'
            },
            // facebook card https://developers.facebook.com/tools/debug/
            {
                property: 'og:title',
                content: '$1B Fund for Global COVID-19 Relief'
            },
            { property: 'og:type', content: 'website' },
            {
                property: 'og:image',
                content: 'https://i.postimg.cc/ZK4vbZ7p/startsmallblue.png'
            },
            { property: 'og:url', content: 'https://startsmall.llc' },
            {
                property: 'og:description',
                content:
                    "Jack Dorsey's $1B Square equity fund for global COVID-19 relief, UBI, and girl's health and education."
            }
            // { property: 'fb:app_id', content: 'xxxxxx' },
        ]
    }
}
</script>

<style>
.home-links a {
    margin-right: 1rem;
}
</style>
