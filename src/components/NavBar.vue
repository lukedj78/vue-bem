<template>
  <nav class="nav">
    <ul class="nav__menu animate" :class="{ 'is-open': opened}">
      <li class="nav__menu__item"><router-link to="/">Home</router-link></li>
      <li class="nav__menu__item"><router-link to="/single">Single</router-link></li>
      <li class="nav__menu__item"><router-link to="/page">{{$t('navbar.page')}}</router-link></li>
      <li class="nav__menu__item"><router-link to="/experiences">{{$t('navbar.experiences')}}</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['opened'],
  name: 'NavBar',
  data () {
    return {
      menu: [{
        title: 'Home',
        link: '/',
        icon: ''
      },
      {
        title: 'Single',
        link: '/single',
        icon: ''
      },
      {
        title: 'Page',
        link: '/page',
        icon: ''
      },
      {
        title: 'Experiencies',
        link: '/experiences',
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
  .is-open{height:100%; overflow: auto;}
}
</style>
