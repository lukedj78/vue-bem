<template>
  <div>
    <Cover title="Title of the Article" is-single="true"/>
    <Panel/>
    <Banner/>
    <Banner/>
  </div>
</template>

<script>
import Cover from '@/components/Cover'
import Banner from '@/components/Banner'
import Panel from '@/components/Panel'

export default {
  name: 'Page',
  data () {
    return {}
  },
  components: {
    Cover,
    Banner,
    Panel
  }
}
</script>

<style scoped>
</style>
