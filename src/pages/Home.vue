<template>
  <div>
    <Cover title="Primary message of the Home" subtitle="Subtitle of the home page" button="Call to action" is-single="false"/>
    <Cards/>
    <Banner/>
    <Cards/>
    <Banner/>
  </div>
</template>

<script>
import Cover from '@/components/Cover'
import Cards from '@/components/Cards'
import Banner from '@/components/Banner'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Cover,
    Cards,
    Banner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
