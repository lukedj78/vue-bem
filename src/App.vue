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

.btn {
  display: block;
  text-align: center;
  height: 40px;
  text-decoration: none;
  border: none;
  background-color: #e9971b;
  color: #fff;
  font-weight: 600;
  padding: 0 15px;
  line-height: 40px;
  position: relative
}

.btn:focus {
  outline: none;
  color: #fff
}

.btn i,
.btn.big {
  display: inline-block
}

.btn.big {
  margin: 2em 0;
  padding: 1.5em;
  line-height: 1;
  height: auto;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px
}

.btn i {
  margin-right: .3em;
  position: relative;
  top: 1px
}

.btn.full {
  display: block;
  margin: 2em 0;
  width: 100%
}

.btn.noMargin {
  margin: 0 0 2em
}

.btn:hover {
  color: #fff;
  text-decoration: none;
  background-color: #edac4a
}

.btn.delete {
  background: #c15048
}

.btn.small {
  display: inline-block;
  height: auto;
  line-height: 1;
  padding: 1em
}

.btn.light {
  background: #efefef;
  color: #333
}

.btn.light i {
  color: #8b8b8b
}

.btn.right {
  float: right!important
}

.btn.loading:hover {
  background-color: #e9971b!important
}

.btn.loading:before,
.item .content .icon .single {
  display: block;
  background-repeat: no-repeat;
  background-position: center center
}

.btn.invert {
  background-color: #fff;
  color: #e9971b
}

.btn.invert,
.btn.invert:hover {
  border: 1px solid #e9971b
}

.button-option {
  font-size: 14px;
  text-align: center;
  padding: 5px 10px;
  line-height: 1.2;
  font-weight: 300;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid
}

.btn.invert:hover,
.button-option.button-option-primary {
  color: #fff;
  background-color: #e9971b
}

.button-option.button-option-primary:hover {
  background-color: transparent;
  color: #e9971b;
  font-weight: 600
}

.button-option.button-option-primary-invert {
  background-color: transparent;
  color: #e9971b
}

.button-option.button-option-primary-invert:hover {
  color: #fff;
  background-color: #e9971b
}

.button-plain {
  color: #333f4d;
  font-size: 13px;
  margin: 5px
}

.button-plain i {
  margin-right: 6px;
  position: relative;
  color: #e9971b;
  font-size: 11px;
  top: 0
}


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
