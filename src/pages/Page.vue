<template>
  <div>
    <Cover title="Title of the Article" is-single="true"/>
    <Panel/>
    <Banner title="Title L" subtitle="This is subtitle" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    <Banner title="Title R" subtitle="This is subtitle" isRigth="true" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
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
