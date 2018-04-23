<template>
  <div>
    <Cover title="Title of the Page" subtitle="Subtitle of the page" :is-single="true"/>
    <Panel/>
    <Banner title="Title L" subtitle="This is subtitle" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas autem quam, explicabo pariatur sit nisi, adipisci saepe."/>
    <Banner title="Title R" subtitle="This is subtitle" isRigth="true" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas autem quam, explicabo pariatur sit nisi, adipisci saepe."/>
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
