<template>
  <article class="panel">
    <div class="panel__copy">
      <h2 class="panel__copy__title">Subtitle of the home page</h2>
      <p class="panel__copy__meta"> 10.10.2016, in <a href="">News</a> by <a href="">Andrea</a></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga quae aperiam eaque id, illum delectus repudiandae natus minus, ullam! Impedit excepturi quaerat delectus provident consectetur laboriosam deleniti at, temporibus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga quae aperiam eaque id, illum delectus repudiandae natus minus, ullam! Impedit excepturi quaerat delectus provident consectetur laboriosam deleniti at, temporibus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga quae aperiam eaque id, illum delectus repudiandae natus minus, ullam! Impedit excepturi quaerat delectus provident consectetur laboriosam deleniti at, temporibus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga quae aperiam eaque id, illum delectus repudiandae natus minus, ullam! Impedit excepturi quaerat delectus provident consectetur laboriosam deleniti at, temporibus.</p>
    </div>
  </article>
</template>

<script>
export default {
}
</script>

<style scoped>
/*-----------------------------
Panel
-----------------------------*/
.panel{
  margin-top: -60px;
}
.panel__copy{max-width: 800px;margin: 0px auto;background: #fff;padding:20px 40px;position: relative;z-index: 1;}
.panel__copy__meta{font-weight: bold;font-size: 16px;	}
.panel__copy__title{font-size: 32px;}
</style>
