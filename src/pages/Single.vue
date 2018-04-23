<template>
  <div id="criteria">
    <Cover title="Title of the Article" :is-single="true"/>
    <Panel title="Subtitle of the home page" date="10.10.2016" categories="News" author="Andrea" />
    <Cards/>
  </div>
</template>

<script>
import Cover from '@/components/Cover'
import Cards from '@/components/Cards'
import Panel from '@/components/Panel'

export default {
  name: 'Single',
  data () {
    return {}
  },
  components: {
    Cover,
    Cards,
    Panel
  },
  methods: {}
}
</script>

<style scoped>
</style>
