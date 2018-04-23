<template>
  <section class="cover" :class="{ 'cover--single': isSingle}">
    <div class="cover__filter"></div>
    <div class="cover__caption">
      <div class="cover__caption__copy">
        <h1>{{title}}</h1>
        <h2 v-show="subtitle">{{subtitle}}</h2>
        <a href="" class="button" v-show="isSingle !== true">{{button}}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    button: {
      type: String
    },
    isSingle: {
      type: Boolean
    }
  }
}
</script>

<style scoped>

/*-----------------------------
Cover
-----------------------------*/
.cover{
  height: 60vh;
  background-image: url("https://source.unsplash.com/category/buildings");
  background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  background-position: center center;
  position:relative;
}
.cover__filter{ background: #000; width:100%; height:100%; position: absolute; z-index: 0; opacity: 0.5; }
.cover__caption{ display: table; height: 100%; width:100%; position: relative; z-index:1; padding: 0 20px;}
.cover__caption__copy{display: table-cell;vertical-align: middle;text-align: center;color:#fff;}

.cover--single{height: 50vh}
.cover--single h1{font-size: 42px;}

/*-----------------------------
Smartphone
-----------------------------*/
@media (max-width: 767px){
  /* Cover */
  .cover{height:100vh;}
}
</style>
