<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
html,body{height:100%;}
body{background: #eee;}

/*-----------------------------
general
-----------------------------*/
html,
body {
   margin:0;
   padding:0;
   height:100%;
}

#app {
  min-height:100%;
  position:relative;
}
.animate{
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.button{display: inline-block; background: #fff; color:#000;padding: 15px 30px; border-radius:3px; text-decoration: none;}
p{line-height: 22px}
a{color:#16dd94}
a:hover{color: #1af3a4;}

/* clearfix */
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

* html .clearfix{ zoom: 1; } /* IE6 */
*:first-child+html .clearfix { zoom: 1; } /* IE7 */

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
