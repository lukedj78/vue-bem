<template>
  <div>
    <Cover title="Primary message of the Home" subtitle="Subtitle of the home page" button="Call to action"/>
    <Cards/>
    <Banner title="Title L" subtitle="This is subtitle" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas autem quam, explicabo pariatur sit nisi, adipisci saepe."/>
    <Cards/>
    <Banner title="Title R" subtitle="This is subtitle" isRigth="true" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas autem quam, explicabo pariatur sit nisi, adipisci saepe."/>
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
