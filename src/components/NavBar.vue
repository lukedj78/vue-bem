<template>
  <nav class="nav">
    <ul class="nav__menu animate">
      <li class="nav__menu__item"><a href="index.html">Home</a></li>
      <li class="nav__menu__item"><a href="single.html">Single</a></li>
      <li class="nav__menu__item"><a href="page.html">Page</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      menu: [{
        title: 'Home',
        link: '',
        icon: ''
      },
      {
        title: 'Single',
        link: '',
        icon: ''
      },
      {
        title: 'Page',
        link: '',
        icon: ''
      }]
    }
  }
}
</script>

<style scoped>

/*-----------------------------
nav
-----------------------------*/
.nav{margin:0; padding:0;}
.nav__menu{float:right;margin:0; padding:0;}
.nav__menu__item{display: inline-block;}
.nav__menu__item a{color:#fff;display: block;padding:20px;text-decoration: none}
.nav__menu__item a:hover{background: #000}

/*-----------------------------
Tablet
-----------------------------*/
@media (max-width: 998px){
}

/*-----------------------------
Smartphone
-----------------------------*/
@media (max-width: 767px){
  .nav__menu{width:100%;height:0px; overflow: hidden;}
  .nav__menu__item{display: block;}
  .is-open{height:300px; overflow: auto;}
}
</style>
