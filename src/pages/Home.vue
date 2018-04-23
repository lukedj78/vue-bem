<template>
  <div>
    <Cover title="Primary message of the Home" subtitle="Subtitle of the home page" button="Call to action"/>
    <Cards/>
    <Banner title="Title L" subtitle="This is subtitle" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    <Cards/>
    <Banner title="Title R" subtitle="This is subtitle" isRigth="true" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
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
