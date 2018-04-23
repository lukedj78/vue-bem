<template>
  <div>
    <Cover/>
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
    return {}
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
