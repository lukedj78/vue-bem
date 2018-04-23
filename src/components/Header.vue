<template>
  <header class="header clearfix">
    <a href="index.html" class="header__logo">Logo</a>
    <a href="" class="header__icon-bar" @click.prevent="isOpen">
      <span></span>
      <span></span>
      <span></span>
    </a>
    <NavBar :opened="opened"/>
  </header>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'Header',
  data () {
    return {
      opened: false
    }
  },
  components: {
    NavBar
  },
  methods: {
    isOpen () {
      this.opened = !this.opened
      console.log(this.opened)
    }
  }
}
</script>

<style scoped>
/*-----------------------------
header
-----------------------------*/
.header{background: #333}
.header__logo{color:#fff; float:left;display: block;padding:20px;text-decoration: none;}
.header__icon-bar{display: block;float: right;padding:20px;display: none;}
.header__icon-bar span{display: block;height:3px; width: 30px;background: #fff; margin-bottom: 5px;cursor: pointer;}

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
@media (max-width: 998px){}

  /*-----------------------------
  Smartphone
  -----------------------------*/
  @media (max-width: 767px){

    .header{position:fixed;z-index: 100;left: 0;right: 0;}
    .header__icon-bar{display: block;}

    .nav__menu{width:100%;height:0px; overflow: hidden;}
    .nav__menu__item{display: block;}
    .is-open{height:300px; overflow: auto;}
  }
  </style>
