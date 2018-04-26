<template>
  <div>
    <div id="toPrint" ref="toPrint">
      <div v-for="(item, index) in experiencies" >
        <div class="experience-detail exptype-experience" style="">
          <div class="experience-preview">
            <div class="image image-preview" :style='{ backgroundImage: "url(https://fluidtravel.it/media/" + item.data[0].value.experience.defaultImage.uri + "_m.jpeg)" }'></div>
            <img class="image image-thumb" :src="'https://fluidtravel.it/media/'+item.data[0].value.experience.defaultImage.uri+'_m.jpeg'">
            <div class="experience-location table-elm">
              <div class="table-row">
                <i class="ico-location table-cell"></i>
                <div class="info-location table-cell">
                  <span class="city">{{item.data[0].value.experience.ws.where.alidaysGeography[0].location}}</span>
                  <span class="address">{{item.data[0].value.experience.geocodes[0].address.extendedAddress}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="info">
            <div class="experience-header">
              <span class="type">Esperienza</span>
              <a class="title">
                {{item.data[0].value.experience.title}}
              </a>
              <ul class="media-tools">
                <li><a href="#" data-medialightbox="images"><i class="ico-camera"></i></a></li>
                <li><a href="#" title="Share" data-socialshare="" data-tooltip=""> <i class="ico-share"></i></a></li>
              </ul>
              <div class="separator"></div>
            </div>
            <div class="experience-meta clearfix"></div>
            <div class="tabbed">
              <div data-tabs="">
                <div id="descview" class="tabbed-content active">
                  <div class="descview">
                    <div class="nano">
                      <div class="nano-content" tabindex="0" style="right: -15px;">
                        <span class="subtitle">{{item.data[0].value.experience.shortDesc}}</span>
                        <span class="desctext">
                          {{item.data[0].value.experience.longDesc}}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="values">
            <div class="values-wrapper">
              <div class="handlebar" data-toggle-values="">
                <div class="handlebar-ribbon">
                  <i class="ico ico-menu"></i>
                </div>
              </div>
              <span class="ws-label">Valori</span>
              <div class="widget widget-why" data-widget-why="">
                <ul class="seeds">
                  <li>
                    <div class="relax" :class="{'inactive-seed': item.data[0].value.experience.ws.why.category[0].value === 0}">
                      <a class="preventOnMobile" href=""><i class="ico-relax"></i></a>
                    </div>
                  </li>
                  <li>
                    <div class="landscapes" :class="{'inactive-seed': item.data[0].value.experience.ws.why.category[1].value  === 0}">
                      <a class="preventOnMobile" href=""><i class="ico-landscapes"></i></a>
                    </div>
                  </li>
                  <li>
                    <div class="discovering" :class="{'inactive-seed': item.data[0].value.experience.ws.why.category[2].value  === 0}">
                      <a class="preventOnMobile" href=""><i class="ico-discovering"></i></a>
                    </div>
                  </li>
                  <li>
                    <div class="cultures" :class="{'inactive-seed': item.data[0].value.experience.ws.why.category[3].value  === 0}">
                      <a class="preventOnMobile" href=""><i class="ico-cultures"></i></a>
                    </div>
                  </li>
                  <li>
                    <div class="fun" :class="{'inactive-seed': item.data[0].value.experience.ws.why.category[4].value  === 0}">
                      <a class="preventOnMobile" href=""><i class="ico-fun"></i></a>
                    </div>
                  </li>
                  <li>
                    <div class="adventures" :class="{'inactive-seed': item.data[0].value.experience.ws.why.category[0].value  === 0}">
                      <a class="preventOnMobile" href=""><i class="ico-adventures"></i></a>
                    </div>
                  </li>
                </ul>
              </div>
              <span class="ws-label">Temi</span>
              <div class="widget widget-what" data-widget-what="">
                <ul class="what-list">
                  <li v-for="(category, index) in item.data[0].value.experience.ws.what.category">
                    <a class="preventOnMobile" href="" title="category.name">{{category.name}}</a>
                  </li>
                </ul>
              </div>
              <span class="ws-label">Mesi</span>
              <div class="widget widget-when" data-widget-when="">
                <ul class="when-list">
                  <li>
                    <span class="lb">Gen</span>
                    <div class="when-rate ">
                    </div>
                  </li>

                  <li>
                    <span class="lb">Feb</span>
                    <div class="when-rate ">
                    </div>
                  </li>

                  <li>
                    <span class="lb">Mar</span>
                    <div class="when-rate ">
                    </div>
                  </li>

                  <li>
                    <span class="lb">Apr</span>
                    <div class="when-rate ">
                    </div>
                  </li>

                  <li>
                    <span class="lb">Mag</span>
                    <div class="when-rate ">
                    </div>
                  </li>

                  <li>
                    <span class="lb">Giu</span>
                    <div class="when-rate ">
                    </div>
                  </li>

                  <li>
                    <span class="lb">Lug</span>
                    <div class="when-rate ">
                    </div>
                  </li>

                  <li>
                    <span class="lb">Ago</span>
                    <div class="when-rate ">
                    </div>
                  </li>

                  <li>
                    <span class="lb">Set</span>
                    <div class="when-rate ">
                    </div>
                  </li>

                  <li>
                    <span class="lb">Ott</span>
                    <div class="when-rate ">
                    </div>
                  </li>

                  <li>
                    <span class="lb">Nov</span>
                    <div class="when-rate ">
                    </div>
                  </li>

                  <li>
                    <span class="lb">Dic</span>
                    <div class="when-rate ">
                    </div>
                  </li>
                </ul>
              </div>
              <span class="ws-label">Tipologie Viaggiatori</span>
              <div class="widget widget-who" data-widget-who="">
                <ul class="who-list">
                  <li>
                    <div class="who-rate ">
                      <i class="ico-alone"></i>
                    </div>
                  </li>
                  <li>
                    <div class="who-rate ">
                      <i class="ico-partners"></i>
                    </div>
                  </li>
                  <li>
                    <div class="who-rate ">
                      <i class="ico-family"></i>
                    </div>
                  </li>
                  <li>
                    <div class="who-rate ">
                      <i class="ico-friends"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import axios from 'axios'

export default {
  data () {
    return {
      expID: ['546e170b7fdf87ae1df677e1','53bd16f1671029428184ca62','54bccc1e43d7b8734127d085','53bd16f7671029428184cd05','56c1fa67e4b035f76fe49024','5704e23fe4b0e6824314aa82','54afac87abdf8e3d30bd53f2','53bd16f8671029428184cd80','546e17557fdf87ae1df6786d','546e17617fdf87ae1df67885'],
      experiencies: []
    }
  },
  created () {
    for (var key in this.expID) {
      var id = this.expID[key]
      axios.get('https://fluidtravel.it/api/alidays/applications/fluidtravel/public/catalogs/experiences/'+id)
      .then((response) => {
        this.experiencies.push(response.data)
      })
    }
  },
  methods: {
    printPdf () {
      console.log(this.$refs.toPrint)
      html2canvas(this.$refs.toPrint).then(function(canvas) {
        console.log(canvas)
      });
    }
  }
}
</script>

<style scoped>
.lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4
}

@media (min-width:768px) {
  .lead {
    font-size: 21px
  }
}

.small,
small {
  font-size: 85%
}

cite {
  font-style: normal
}

.mark,
mark {
  background-color: #fcf8e3;
  padding: .2em
}

.text-left {
  text-align: left
}

.text-right {
  text-align: right
}

#cookiebar,
.text-center {
  text-align: center
}

.text-justify {
  text-align: justify
}

.text-nowrap {
  white-space: nowrap
}

.text-lowercase {
  text-transform: lowercase
}

.text-uppercase {
  text-transform: uppercase
}

.text-capitalize {
  text-transform: capitalize
}

#signup .whiteBox p,
.textleft {
  text-align: left
}

.textright {
  text-align: right
}



.tabbed [data-tabs] .tabbed-content {
  display: none;
  visibility: hidden;
  transition: opacity .15s linear;
  -webkit-transition: opacity .15s linear;
  -moz-transition: opacity .15s linear;
  -ms-transition: opacity .15s linear;
  -o-transition: opacity .15s linear
}

.tabbed [data-tabs] .tabbed-content.active {
  display: block;
  visibility: visible
}

.experience {
  font-size: 2.1em
}

.experience .row {
  margin-left: -6px;
  margin-right: -6px
}

.experience,
.experience [class*=' col-'],
.experience [class^=col-] {
  padding-left: 3px;
  padding-right: 3px
}

@media screen and (max-width:768px) {
  .experience [class*=' col-'],
  .experience [class^=col-] {
    padding: 0;
    margin: 0
  }
}

.portrait .pack {
  height: 806px
}

@media screen and (max-width:768px) {
  .portrait .pack {
    height: 400px
  }
}

.vertical-wrap {
  display: table;
  height: 100%;
  width: 100%;
  text-align: center
}

.vertical-wrap .middle {
  display: table-cell;
  vertical-align: middle
}

.actions-list {
  margin-right: -5px
}

.actions-list>li {
  display: inline-block;
  margin: 0 .5em .5em 0
}

.actions-list>li>a {
  width: 4.7em;
  height: 4.7em;
  display: block;
  padding: 5px;
  border: .174em solid #fff;
  color: #fff;
  text-decoration: none;
  text-align: center;
  transition: all .3s ease;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease
}

.actions-list>li>a i {
  margin: 15px 0 20px;
  display: inline-block;
  font-size: 1.143em
}

.actions-list>li>a b {
  display: block;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.2;
  font-size: .429em
}

.actions-list>li>a:hover {
  color: #e9971b;
  background-color: #fff
}

@media screen and (max-width:768px) {
  .actions-list>li {
    display: block;
    width: 100%;
    margin: 0 auto 0 -3px
  }
  .actions-list>li a {
    width: 90%;
    height: auto;
    padding: 10px;
    margin: 0 auto 10px
  }
  .actions-list>li a i {
    margin: 0
  }
}

.seeds {
  padding: 0;
  line-height: 1;
  list-style: none;
  margin: 0 -8px 0 0
}

.seeds>li {
  width: 30px;
  height: 30px;
  line-height: 100%;
  margin: 0 6px 8px 0;
  text-align: center;
  float: right
}

.seeds>li>div,
html {
  height: 100%
}

.seeds>li i {
  color: #fff;
  font-size: 17px;
  top: 2px;
  line-height: 26px
}

@media screen and (max-width:768px) {
  .seeds>li i {
    top: 3px
  }
}

#cookiebar {
  background: #333f4d;
  color: #fff;
  min-height: 40px;
  padding: 6px 5%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999991;
  -webkit-transition: -webkit-transform .3s ease;
  -moz-transition: -moz-transform .3s ease;
  -ms-transition: -ms-transform .3s ease;
  transition: transform .3s ease;
  -webkit-transition-delay: 0;
  -moz-transition-delay: 0;
  -ms-transition-delay: 0;
  transition-delay: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  -moz-transform: translate3d(0, 100%, 0);
  -ms-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0)
}

@media screen and (min-width:1200px) {
  #cookiebar {
    padding: 6px 20%
  }
}

.cookiebar-onscreen #cookiebar {
  -webkit-transition-delay: 1s;
  -moz-transition-delay: 1s;
  -ms-transition-delay: 1s;
  transition-delay: 1s;
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0)
}

.no-csstransitions #cookiebar {
  bottom: -100%
}

.no-csstransitions .cookiebar-onscreen #cookiebar {
  bottom: 0
}

.cookiebar-onscreen #habla_window_div * {
  display: none!important
}

#cookiebar p {
  padding: 4px 0;
  font-size: .9em;
  line-height: 1.5em;
  margin: 0
}

#cookiebar a {
  color: #fff;
  font-weight: 700;
  text-decoration: underline
}

#cookiebar-btn {
  background: #e9971b;
  color: #fff!important;
  text-decoration: none!important;
  display: inline-block;
  padding: 2px 10px;
  cursor: pointer;
  vertical-align: middle;
  margin: 3px;
  font-weight: 400!important
}

.dark {
  background-color: #393b49;
  color: #fff
}

.orange {
  background-color: #e9971b
}

.white {
  background-color: #f1f1f1
}

.gray {
  background-color: #dedad1
}

.relax {
  background-color: rgba(233, 151, 27, .8)
}

.landscapes {
  background-color: rgba(255, 127, 102, .8)
}

.discovering {
  background-color: rgba(177, 119, 143, .8)
}

.cultures {
  background-color: rgba(193, 80, 72, .8)
}

.fun {
  background-color: rgba(120, 154, 179, .8)
}

.adventures {
  background-color: rgba(127, 182, 8, .8)
}

.inactive-seed {
  background-color: #d5d5d5
}

a:hover {
  color: #393b49;
  text-decoration: none
}

a:active,
a:focus,
a:link {
  outline: 0;
  text-decoration: none
}

.colorbar {
  width: 100%;
  height: 4px
}

.colorbar b,
.colorbar div,
.colorbar em,
.colorbar i,
.colorbar p,
.colorbar span {
  width: 16.666667%;
  float: left;
  display: block;
  margin: 0;
  padding: 0;
  height: 100%
}

.colorbar div {
  background-color: #ff7f66
}

.colorbar span {
  background-color: #b1778f
}

.colorbar i {
  background-color: #c15048
}

.colorbar p {
  background-color: #789ab3
}

.colorbar b {
  background-color: #7fb608
}

.colorbar em {
  background-color: #e9971b
}

hr.sep {
  height: 4px;
  margin: 0;
  padding: 0
}

button {
  outline: none;
  margin-top: 1em
}

.sep-dot:before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #f1f1f1;
  border-radius: 50%;
  vertical-align: middle;
  margin-left: 5px
}

.button {
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px
}

.button.dark {
  color: #fff;
  text-transform: uppercase
}

.button.dark:hover {
  background-color: #4f5266
}

.button.block {
  display: block;
  padding: 1.8em 2em
}

.button:hover {
  text-decoration: none
}

.bottom {
  margin-bottom: 4em
}

.list-inline,
.list-inline>* {
  display: inline-block
}

.field input,
.nice {
  width: 100%;
  padding: .7em 1em
}

.field input,
.field select,
.field textarea,
.nice {
  border: 1px solid #dedad1;
  line-height: normal;
  font-size: 1.275em!important;
  background-color: #fff;
  margin: 0;
  color: #333f4d;
  font-weight: 400
}

.field textarea {
  padding: .7em 1em
}

.nice:focus {
  box-shadow: none;
  outline: none;
  border-color: rgba(233, 151, 27, .85);
  -webkit-box-shadow: 0 0 0 2px rgba(160, 135, 68, .2);
  box-shadow: 0 0 0 2px rgba(160, 135, 68, .2)
}

.field-select {
  border: 1px solid #dedad1;
  margin-bottom: 1em;
  overflow: hidden;
  height: 50px;
  position: relative;
  width: 100%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yNzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpd2uYWAAAAVklEQVQIHR2JSw5AMBBAX0sXziA+VTZNiOsTR3KBLqZjYvc+7roffQu0rqJScY2nCwEfY/xjI0KwSRWWNOO3dSENPZYQdaRpJNtozTn2TCkFVeU8MgZ8/C8de+yvRSIAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-position: 96% 55%;
  background-color: #fff
}

.field-select.field-error {
  border-color: red
}

.field-select select {
  border: none;
  line-height: normal;
  font-size: 1.275em!important;
  margin: 0;
  width: 104%;
  color: #333f4d;
  padding: .7em 1em;
  outline: none;
  background-color: transparent!important;
  background-image: none;
  -webkit-appearance: none;
  box-shadow: none;
  font-weight: 400;
  height: 49px
}

.field-select select::focus {
  outline: none;
  border: none
}

.field {
  margin-bottom: 1em
}

#filtersbar-explore.sidebar input::-webkit-input-placeholder,
.field input::-webkit-input-placeholder {
  color: #a4a4a4
}

#filtersbar-explore.sidebar input:active::-webkit-input-placeholder,
#filtersbar-explore.sidebar input:focus::-webkit-input-placeholder,
.field input:active::-webkit-input-placeholder,
.field input:focus::-webkit-input-placeholder {
  color: #000
}

#filtersbar-explore.sidebar input::-moz-placeholder,
.field input::-moz-placeholder {
  color: #a4a4a4
}

#filtersbar-explore.sidebar input:active::-moz-placeholder,
#filtersbar-explore.sidebar input:focus::-moz-placeholder,
.field input:active::-moz-placeholder,
.field input:focus::-moz-placeholder {
  color: #000
}

#filtersbar-explore.sidebar input:-ms-input-placeholder,
.field input:-ms-input-placeholder {
  color: #a4a4a4
}

#filtersbar-explore.sidebar input:active::-ms-input-placeholder,
#filtersbar-explore.sidebar input:focus::-ms-input-placeholder,
.field input:active::-ms-input-placeholder,
.field input:focus::-ms-input-placeholder {
  color: #000
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  box-shadow: none;
  outline: none;
  border-color: rgba(233, 151, 27, .85);
  -webkit-box-shadow: 0 0 0 2px rgba(160, 135, 68, .2);
  box-shadow: 0 0 0 2px rgba(160, 135, 68, .2)
}

.dotBefore:before,
.field label {
  display: inline-block;
  line-height: 1
}

.field label {
  font-weight: 500;
  padding: 1em 0;
  font-size: .775em;
  color: #999
}

.field select {
  text-indent: .5em;
  width: 100%;
  padding: 0 .5em;
  height: 40px;
  border-radius: 0!important
}

.field textarea {
  width: 100%;
  min-height: 150px;
  height: 150px;
  max-height: 150px;
  min-width: 100%;
  max-width: 100%
}

.field.field-error input,
.field.field-error textarea {
  border-color: red
}

.openInfo {
  font-style: italic;
  color: #999;
  line-height: 1.5;
  font-size: .875em;
  padding: 0 3em
}

input {
  font-weight: 400!important
}

.input {
  position: relative;
  overflow: hidden
}

.input input {
  padding-right: 100px
}

.input .submit {
  width: auto;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -14px;
  height: 28px;
  line-height: 28px;
  padding: 0 .5em;
  background-color: #fff;
  color: #e9971b;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  cursor: pointer;
  border: none;
  outline: none
}

.input:hover .submit {
  background-color: #e9971b;
  color: #fff
}

.ws-label {
  font-size: .875em;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
  margin: 1em 0 .5em;
  cursor: default
}

.controls {
  margin: 2em 0
}

.controls .btn {
  float: left
}

.medias {
  padding: 0;
  overflow: hidden;
  margin: 0 0 1em
}

.medias>li {
  background: #fafafa;
  border: 1px solid #dadada;
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
  text-align: center
}

.medias>li i {
  font-size: 2em;
  position: relative;
  top: 1.5em;
  color: #dadada
}

.dotBefore:before {
  content: '.';
  font-size: 20px;
  color: #fff;
  position: relative;
  top: -3px;
  left: -5px
}

.callRed {
  background-color: #c15048;
  color: #fff
}

.wowTitle {
  font-family: 'CornerStoreJF', Georgia, Verdana, Sans-serif;
  font-size: 30px;
  text-transform: initial!important
}

.advanced-filters>h3 {
  font-size: .875em;
  text-transform: uppercase;
  padding: 1em 0;
  color: #7e7568;
  text-align: left;
  font-weight: 800;
  border: 1px solid #c9c2b3;
  border-width: 0 0 1px;
  margin: 2.5em 0 .5em;
  -webkit-box-shadow: inset 0 -4px 0 0 #dedad1;
  box-shadow: inset 0 -4px 0 0 #dedad1
}

.advanced-filters .meta-type .check ul,
.advanced-filters .meta-when .check ul,
.advanced-filters .meta-who .check ul {
  width: 100%!important
}

.advanced-filters .meta-when .check ul li {
  width: 33.33333%!important
}

.advanced-filters .meta-who .check ul li {
  width: 24%!important
}

.advanced-filters .meta-type .check ul li {
  width: 30%!important
}

.advanced-filters .meta-type .check ul li:nth-child(2) {
  margin-left: -30px
}

.advanced-filters [data-author-filter],
.advanced-filters [data-fts-filter] {
  clear: both;
  margin-bottom: 8px;
  padding-top: 15px;
  position: relative
}

.advanced-filters [data-author-filter] [data-input-field],
.advanced-filters [data-fts-filter] [data-input-field],
.advanced-filters [data-location-filter] [data-input-field] {
  position: relative;
  width: 366px
}

.advanced-filters .search-location [data-input-field] [data-input-reset],
.advanced-filters [data-author-filter] [data-input-field] [data-input-reset],
.advanced-filters [data-fts-filter] [data-input-field] [data-input-reset],
.advanced-filters [data-location-filter] [data-input-field] [data-input-reset] {
  position: absolute;
  top: -5px;
  right: 5px;
  background-color: transparent;
  border: 0
}

.advanced-filters [data-location-filter] {
  clear: both;
  margin-bottom: 8px;
  position: relative
}

.advanced-filters .search-location [data-input-field],
.owl-theme .owl-controls .owl-pagination .owl-page.active span {
  position: relative
}

.advanced-filters input[type=checkbox] {
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 0
}

.advanced-filters .check .column,
.advanced-filters .check>li {
  width: 33.33%;
  position: relative;
  float: left
}

.advanced-filters .check>li .group-label {
  font-size: .8em;
  font-weight: 600;
  text-transform: uppercase
}

.advanced-filters .check>li .group-label.active,
.detailContent .action-links a:hover {
  text-decoration: underline
}

.advanced-filters .check>li ul,
.groupwrapper li {
  width: 100%;
  position: relative;
  float: left
}

.groupwrapper,
.whys>ul>li>.cell-2 {
  width: 100%
}

.groupwrapper li {
  margin: 6px 0 0;
  height: 20px;
  text-align: left
}

#filtersbar .groupwrapper>ul,
#filtersbar-explore .groupwrapper>ul {
  margin-bottom: 16px
}

.filtersgroup {
  clear: both
}

.filtersgroup label,
.owl-theme .owl-controls .owl-pagination .owl-page span {
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box
}

.filtersgroup label {
  cursor: pointer;
  position: absolute;
  top: 0;
  border: 2px solid #999;
  font-size: 11px;
  font-weight: 400;
  width: 13px;
  height: 13px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px
}

.filtersgroup label span {
  display: inline-block;
  position: absolute;
  top: -1px;
  color: #a7a5a3;
  width: 126px;
  white-space: normal;
  padding-left: 20px;
  line-height: 12px
}

.filtersgroup label:after {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  content: '';
  position: absolute;
  width: 7px;
  height: 7px;
  background: #e9971b;
  top: 1px;
  left: 1px
}

.filtersgroup label:hover:after {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
  filter: alpha(opacity=30);
  opacity: .5
}

.filtersgroup .checked label span {
  font-weight: 600;
  color: #333f4d
}

.filtersgroup .checked label:after {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: alpha(opacity=100);
  opacity: 1
}

.detailContent .content .seeds>li a,
.filtersgroup.meta-where .group-label {
  cursor: pointer
}

.filtersgroup.meta-where .groupwrapper>ul {
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s ease-in;
  -webkit-transition: max-height .5s ease-in;
  -moz-transition: max-height .5s ease-in;
  -ms-transition: max-height .5s ease-in;
  -o-transition: max-height .5s ease-in
}

.filtersgroup.meta-where .groupwrapper.expanded>ul,
.filtersgroup.meta-where .groupwrapper.isLocked>ul {
  max-height: 800px
}

.label-simple {
  display: inline-block!important;
  padding: 2px 8px;
  margin: 0 5px 5px 0;
  float: left;
  font-size: 13px;
  border: 1px solid #e8dfc8;
  color: #7d6934
}

#blueimp-gallery .video-content {
  width: 68%!important
}

.blueimp-gallery.blueimp-force-controls>.close,
.blueimp-gallery.blueimp-force-controls>.indicator,
.blueimp-gallery.blueimp-force-controls>.next,
.blueimp-gallery.blueimp-force-controls>.play-pause,
.blueimp-gallery.blueimp-force-controls>.prev,
.blueimp-gallery.blueimp-force-controls>.slides>.slide>.slide-content {
  display: block!important
}

.blueimp-gallery.blueimp-force-controls.blueimp-single-media>.indicator,
.blueimp-gallery.blueimp-force-controls.blueimp-single-media>.next,
.blueimp-gallery.blueimp-force-controls.blueimp-single-media>.play-pause,
.blueimp-gallery.blueimp-force-controls.blueimp-single-media>.prev {
  display: none!important
}

.owl-theme .owl-controls {
  margin: 0!important;
  height: 0
}

.owl-theme .owl-controls .owl-buttons .owl-next,
.owl-theme .owl-controls .owl-buttons .owl-prev {
  background-color: rgba(57, 59, 73, .98);
  height: 72px;
  width: 52px;
  margin: -36px 0 0;
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  border-radius: 1px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  opacity: .8;
  filter: alpha(opacity=80)
}

.owl-theme .owl-controls .owl-buttons .owl-next i,
.owl-theme .owl-controls .owl-buttons .owl-prev i {
  color: #fff!important;
  -webkit-box-shadow: 0 0 0 3px rgba(255, 255, 255, .5);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .5);
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  width: 30px!important;
  height: 30px;
  padding-top: 4px;
  background: 0 0
}

.owl-theme .owl-controls .owl-buttons .owl-next.disabled,
.owl-theme .owl-controls .owl-buttons .owl-prev.disabled {
  display: none
}

.owl-theme .owl-controls .owl-pagination {
  max-width: 1140px;
  z-index: 10;
  width: 100%;
  display: block;
  text-align: left;
  top: -56px;
  position: relative;
  margin: 0 auto 0 100px
}

.owl-theme .owl-controls .owl-pagination .owl-page {
  display: inline-block;
  padding: 0 1px
}

.owl-theme .owl-controls .owl-pagination .owl-page span {
  display: block;
  width: 50px;
  height: 5px;
  margin: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  background: rgba(241, 241, 241, .8);
  opacity: .6;
  filter: alpha(opacity=60)
}

iframe {
  float: left!important
}

.whiteBox iframe {
  margin: -4em -4em -2em
}

.admin-modal {
  min-width: 400px;
  padding: 35px
}

.admin-modal h2,
.savebeta .savetravel-body h3,
.savetravel .savetravel-body h3 {
  margin: 0 0 1em
}

.admin-modal .btn {
  margin-bottom: 0
}

.boxed-message {
  border: 1px solid;
  margin: 1em;
  padding: 1em;
  color: #333f4d
}

.boxed-message.-info>strong,
.jBox-Notice .jBox-container .jBox-content b,
.navigationbar ul li:hover>a {
  color: #e9971b
}

.tooltip {
  display: none;
  position: absolute;
  border: 1px solid #333;
  background-color: #161616;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  font-size: 12px Arial
}

.pac-container {
  z-index: 99991
}

.mappa.noclick,
.mappa.noclick .leaflet-clickable,
.mappa.nodrag,
.mappa.nodrag .leaflet-container {
  cursor: default
}

.mappa .leaflet-control-attribution {
  text-align: right;
  background-color: transparent!important
}

.mappa .leaflet-control-attribution>a {
  font-size: 10px;
  line-height: 12px;
  display: block
}

.loader-ico,
header#main .mainNav .colorbar.top,
header#main .mainNav ul.menu>li.userLogged.open ul.userMenu {
  display: block
}

[data-action="remove|journey"],
[data-action="remove|wishlist"] {
  display: none!important
}

[data-addtowishlist] {
  display: inline-block!important
}

.cmd.addToWishlist,
[data-action="add|wishlist"],
[data-removefromwishlist] {
  display: none!important
}

.loggedin [data-action="add|wishlist"],
.loggedout .cmd.addToWishlist {
  display: block!important
}

.inwishlist [data-action="add|wishlist"] {
  display: none!important
}

.inwishlist [data-action="remove|wishlist"] {
  display: inline-block!important
}

.inwishlist .addToWishlist {
  display: none!important
}

.inwishlist .removeFromWish {
  display: inline-block!important
}

.injourney [data-action="add|journey"] {
  display: none!important
}

.injourney [data-action="remove|journey"] {
  display: inline-block!important
}

.loggedout [data-signin] {
  display: inline-block
}

.loggedin [data-signin],
[data-signin],
[data-signup] {
  display: none
}

.loggedout [data-signup] {
  display: inline-block
}

.loggedin [data-signup],
[data-howto-button] {
  display: none
}

.loggedout [data-howto-button] {
  display: inline-block
}

.come-funziona [data-howto-button],
.loggedin [data-howto-button],
.loggedout header#main .mainNav ul.menu [data-usersession],
.loggedout header#main .mainNav ul.menu [data-usersession]+.separator,
header#main .mainNav ul.menu [data-usersession] {
  display: none
}

.embeddeds.loggedout #exploreStandaloneHeader .auth-action-signin,
.embeddeds.loggedout #exploreStandaloneHeader .auth-action-signup,
.loggedin header#main .mainNav ul.menu [data-usersession],
.loggedin header#main .mainNav ul.menu [data-usersession]+.separator {
  display: inline-block
}

[data-creautente-btn],
[data-creaviaggio-btn] {
  display: none!important
}

[data-creautente-btn] i,
[data-creaviaggio-btn] i {
  color: #fff!important
}

.loggedin [data-creaviaggio-btn],
.loggedout [data-creaviaggio-btn] {
  display: inline-block!important
}

.embeddeds #exploreStandaloneHeader .auth-action-signin,
.embeddeds #exploreStandaloneHeader .auth-action-signup,
.loggedout [data-creautente-btn] {
  display: none
}

.loggedin [data-creautente-btn] {
  display: block!important
}

@media screen and (max-width:767px) {
  .loggedin [data-creautente-btn] {
    display: none!important
  }
}

.role-endusers [data-creautente-btn],
[data-area-personale] {
  display: none!important
}

.loggedin #userbaskets-link,
.loggedin [data-addtoshortlist],
.loggedin [data-area-personale],
.loggedin [data-save-journey],
.loggedout [data-addtoshortlist],
.loggedout [data-collabora-btn],
.role-endusers [data-collabora-btn],
.role-travelagents.basket-assigned [data-saved-journey] {
  display: inline-block!important
}

[data-saved-journey] {
  cursor: default
}

#userbaskets-link,
.loggedin.role-endusers.has-ta-shortlist [data-findtravelagent],
.loggedin.role-travelagents [data-addtoshortlist],
.role-travelagents #userbaskets-link span,
.role-travelagents.basket-assigned [data-save-journey],
[data-addtoshortlist],
[data-collabora-btn],
[data-save-journey],
[data-saved-journey] {
  display: none!important
}

.loggedin.role-endusers.has-ta-shortlist .agenti-widget .tabs-control>li:nth-child(1) {
  width: 100%
}

.loggedin.role-endusers.has-ta-shortlist .agenti-widget .tabs-control>li:nth-child(2) {
  display: none
}

.nano {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden
}

.nano>.nano-content {
  position: absolute;
  overflow: scroll;
  overflow-x: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0
}

.nano>.nano-content:focus {
  outline: thin dotted
}

.nano>.nano-content::-webkit-scrollbar {
  display: none
}

.has-scrollbar>.nano-content::-webkit-scrollbar {
  display: block
}

.nano>.nano-pane {
  background: rgba(0, 0, 0, .25);
  position: absolute;
  width: 10px;
  right: 0;
  top: 0;
  bottom: 0;
  visibility: hidden\9;
  opacity: .01;
  -webkit-transition: .2s;
  -moz-transition: .2s;
  -o-transition: .2s;
  transition: .2s;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px
}

.nano>.nano-pane>.nano-slider {
  background: #444;
  background: rgba(0, 0, 0, .5);
  position: relative;
  margin: 0 1px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px
}

.nano-pane.active,
.nano-pane.flashed,
.nano:hover>.nano-pane {
  visibility: visible\9;
  opacity: .99
}

.nl-form {
  width: 100%;
  margin: .3em auto 0;
  font-size: 4em;
  line-height: 1.5
}

.nl-form ul {
  list-style: none;
  margin: 0;
  padding: 0
}

.nl-form button,
.nl-form input,
.nl-form select {
  border: none;
  background: 0 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none
}

.nl-form button {
  color: inherit;
  line-height: inherit;
  display: inline-block
}

.nl-form input:focus,
.widget-chat .message-form textarea:focus {
  outline: none
}

.nl-field {
  display: inline-block;
  position: relative
}

.nl-field.nl-field-open {
  z-index: 10000
}

.nl-field-toggle,
.nl-form input,
.nl-form select {
  line-height: inherit;
  display: inline-block;
  color: #b14943;
  cursor: pointer;
  border-bottom: 1px dashed #b14943
}

.nl-field ul {
  position: absolute;
  visibility: hidden;
  background: #76c3bd;
  left: -.5em;
  top: 50%;
  font-size: 80%;
  opacity: 0;
  -webkit-transform: translateY(-40%) scale(.9);
  -moz-transform: translateY(-40%) scale(.9);
  transform: translateY(-40%) scale(.9);
  -webkit-transition: visibility 0s .3s, opacity .3s, -webkit-transform .3s;
  -moz-transition: visibility 0s .3s, opacity .3s, -moz-transform .3s;
  transition: visibility 0s .3s, opacity .3s, transform .3s
}

.nl-field.nl-field-open ul {
  visibility: visible;
  opacity: 1;
  -webkit-transform: translateY(-50%) scale(1);
  -moz-transform: translateY(-50%) scale(1);
  transform: translateY(-50%) scale(1);
  -webkit-transition: visibility 0s 0s, opacity .3s, -webkit-transform .3s;
  -moz-transition: visibility 0s 0s, opacity .3s, -moz-transform .3s;
  transition: visibility 0s 0s, opacity .3s, transform .3s
}

.nl-field ul li {
  color: #fff;
  position: relative
}

.nl-dd ul li {
  padding: 0 1.5em 0 .5em;
  cursor: pointer;
  white-space: nowrap
}

.nl-dd ul li.nl-dd-checked,
.no-touch .nl-dd ul li:hover:active {
  color: #478982
}

.no-touch .nl-dd ul li:hover {
  background: rgba(0, 0, 0, .05)
}

.nl-dd ul li.nl-dd-checked:before,
.nl-field-go:before,
.nl-submit:before {
  font-family: 'nlicons';
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased
}

.nl-dd ul li.nl-dd-checked:before {
  content: "\e000";
  position: absolute;
  right: 1em;
  font-size: 50%;
  line-height: 3
}

.nl-ti-text ul {
  min-width: 8em
}

.coolquiz .nl-ti-text ul li.nl-ti-input input,
.nl-ti-text ul li.nl-ti-input input {
  width: 100%;
  padding: .2em 2em .2em .5em;
  border-bottom: none;
  color: #fff
}

.nl-form .nl-field-go {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  cursor: pointer;
  background: rgba(0, 0, 0, .1);
  width: 1.8em;
  text-align: center;
  color: transparent
}

.nl-field-go:before {
  content: "\e001";
  font-size: 75%;
  color: #fff;
  width: 100%;
  line-height: 2.5;
  display: block
}

input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, .8)
}

.coolquiz input:active::-webkit-input-placeholder,
.coolquiz input:focus::-webkit-input-placeholder,
input:active::-webkit-input-placeholder,
input:focus::-webkit-input-placeholder {
  color: rgba(255, 255, 255, .2)
}

input::-moz-placeholder {
  color: rgba(255, 255, 255, .8)
}

.coolquiz input:active::-moz-placeholder,
.coolquiz input:focus::-moz-placeholder,
input:active::-moz-placeholder,
input:focus::-moz-placeholder {
  color: rgba(255, 255, 255, .2)
}

input:-ms-input-placeholder {
  color: rgba(255, 255, 255, .8)
}

.coolquiz input:active::-ms-input-placeholder,
.coolquiz input:focus::-ms-input-placeholder,
input:active::-ms-input-placeholder,
input:focus::-ms-input-placeholder {
  color: rgba(255, 255, 255, .2)
}

.nl-ti-text ul li.nl-ti-example {
  font-size: 40%;
  font-style: italic;
  font-weight: 400;
  padding: .4em 1em;
  color: rgba(0, 0, 0, .2);
  border-top: 1px dashed rgba(255, 255, 255, .7)
}

.nl-ti-text ul li.nl-ti-example em {
  color: #fff
}

.nl-submit-wrap {
  margin-top: .4em
}

.nl-form .nl-submit {
  line-height: 3;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  background: #76c3bd;
  color: #fff;
  padding: 0 1em 0 0;
  font-size: 40%;
  font-weight: 700;
  letter-spacing: 3px
}

.nl-submit:before {
  content: "\e001";
  color: #fff;
  float: left;
  padding: 0 .7em;
  margin: 0 .8em 0 0
}

.nl-submit:before,
.no-touch .nl-form .nl-submit:active,
.no-touch .nl-form .nl-submit:hover {
  background: #69b1a9
}

.no-touch .nl-form .nl-submit:hover:before {
  background: #58a199
}

.nl-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  opacity: 0;
  z-index: 9999;
  visibility: hidden;
  -webkit-transition: visibility 0s .3s, opacity .3s;
  -moz-transition: visibility 0s .3s, opacity .3s;
  transition: visibility 0s .3s, opacity .3s
}

.nl-field.nl-field-open~.nl-overlay {
  opacity: 1;
  visibility: visible;
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  transition-delay: 0s
}

@media screen and (max-width:45em) {
  .nl-form {
    font-size: 3em
  }
}

@media screen and (max-width:25em) {
  .nl-form {
    font-size: 2em
  }
}

.printed-logo,
header#main .mainNav .colorbar,
header#main .mainNav ul.menu>li.userLogged .userLoggedEvent .name .name-full,
header#main .mainNav ul.menu>li.userLogged+.separator {
  display: none
}

header#main {
  height: 0
}

header#main:after,
header#main:before {
  content: " ";
  display: table
}

header#main:after {
  clear: both
}

header#main .nav {
  font-size: 0;
  margin-left: -10px;
  padding: 0
}

header#main .nav li {
  font-size: 10px;
  border-right: 1px solid #aaa;
  line-height: 1;
  display: inline-block;
  padding: 0 10px
}

header#main .nav li:last-child {
  border-right: none
}

header#main .nav li a {
  color: #aaa;
  text-transform: uppercase;
  text-decoration: none
}

header#main .nav li a i {
  padding-right: 5px;
  font-size: 12px;
  position: relative;
  line-height: 9px;
  bottom: -1px
}

header#main #alert {
  background-color: #f8ffb7;
  padding: .5em 0;
  text-align: center;
  border-bottom: 1px solid #e2cf86;
  font-weight: 600
}

header#main #alert a {
  font-weight: 600
}

header#main #alert .container {
  padding-top: 0;
  padding-bottom: 0
}

header#main .mainNav {
  position: fixed;
  z-index: 9999;
  background: #fff;
  width: 100%;
  -webkit-box-shadow: 0 5px 0 0 rgba(255, 255, 255, .15);
  box-shadow: 0 5px 0 0 rgba(255, 255, 255, .15)
}

header#main .mainNav .container {
  padding-top: 25px;
  padding-bottom: 25px;
  transition: padding .3s ease;
  -webkit-transition: padding .3s ease;
  -moz-transition: padding .3s ease;
  -ms-transition: padding .3s ease;
  -o-transition: padding .3s ease
}

@media (min-width:992px) and (max-width:1024px) {
  header#main .mainNav .container {
    width: auto
  }
}

@media screen and (max-width:768px) {
  header#main .mainNav .container {
    padding: 0
  }
}

header#main .mainNav ul.menu {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: right
}

header#main .mainNav ul.menu>li {
  position: relative;
  display: inline-block;
  margin-left: 5px;
  vertical-align: middle
}

header#main .mainNav ul.menu>li .upper {
  text-transform: uppercase;
  font-weight: 600
}

header#main .mainNav ul.menu>li.separator {
  border-right: 1px solid #ccc;
  height: 22px;
  position: relative;
  top: 5px
}

header#main .mainNav ul.menu>li a {
  font-size: 13px
}

header#main .mainNav ul.menu>li a i {
  margin-right: 6px;
  position: relative;
  color: #e9971b;
  font-size: 11px;
  top: 0
}

header#main .mainNav ul.menu>li a.btn {
  text-transform: uppercase;
  background-color: #e9971b;
  color: #fff;
  padding: 0 15px;
  line-height: 40px
}

.detailContent .action-links .evidence:hover,
header#main .mainNav ul.menu>li a:hover {
  text-decoration: none
}

header#main .mainNav ul.menu>li.logo {
  width: 205px;
  z-index: 2;
  float: left;
  height: 40px;
  margin: 0
}

header#main .mainNav ul.menu>li.logo a {
  display: block;
  height: 47px;
  width: 205px
}

header#main .mainNav ul.menu>li.logo a img {
  max-width: 100%
}


header#main .mainNav ul.menu>li.logo,
header#main .mainNav ul.menu>li:last-child {
  border-right: none
}

header#main .mainNav ul.menu>li.userNotLogged {
  margin: 7px 0 0
}

header#main .mainNav ul.menu>li.userLogged {
  height: 25px;
  z-index: 1;
  margin: -10px 15px 0 20px
}

header#main .mainNav ul.menu>li.userLogged .name i {
  float: right;
  font-size: 20px;
  position: relative;
  top: 7px
}

header#main .mainNav ul.menu>li.userLogged .userLoggedEvent {
  display: block;
  margin-left: -15px;
  margin-right: -15px;
  padding-right: 2px;
  padding-left: 10px;
  padding-bottom: 15px;
  z-index: 5;
  position: relative;
  text-align: left
}

header#main .mainNav ul.menu>li.userLogged .userLoggedEvent .name {
  display: inline-block;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 12px;
  color: #333f4d;
  line-height: 1;
  min-width: 10px
}

header#main .mainNav ul.menu>li.userLogged ul.userMenu {
  display: none;
  position: absolute;
  right: -10px;
  top: 45px;
  left: auto;
  min-width: 150px;
  background: #fff;
  padding: 15px 0;
  text-align: left;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-shadow: 0 1px 0 1px rgba(51, 63, 77, .15);
  box-shadow: 0 1px 0 1px rgba(51, 63, 77, .15)
}

header#main .mainNav ul.menu>li.userLogged ul.userMenu>li a {
  display: block;
  padding: 4px 20px;
  color: #e9971b;
  font-weight: 600
}

.user-hub .userMenu>li a:hover,
header#main .mainNav ul.menu>li.userLogged ul.userMenu>li a:hover {
  color: #c15048
}

.user-hub .userMenu>li p,
header#main .mainNav ul.menu>li.userLogged ul.userMenu>li p {
  margin-bottom: 10px;
  padding: 0 20px 10px;
  color: #333f4d;
  font-size: 12px;
  font-weight: 700;
  text-overflow: ellipsis
}

header#main .mainNav ul.menu>li.userLogged ul.userMenu>li:last-child {
  border: none
}

header#main .mainNav ul.menu>li.userLogged ul.userMenu li.sep {
  border-top: 0;
  border-bottom: 1px solid #ccc;
  margin: 10px 20px
}

header#main .mainNav.stuck {
  position: fixed;
  top: 0;
  background-color: #fff
}

header#main .mainNav.stuck .container {
  padding-top: 12px;
  padding-bottom: 14px
}

header#main .mainNav.stuck li.logo a i {
  width: 37px!important
}

header#main .mainNav.stuck li.logo a span {
  width: 120px!important
}

header#main .mainNav.stuck .colorbar.line {
  height: 1px;
  display: block;
  margin: 0
}

header#main .mainNav.stuck .colorbar.top {
  display: none
}

.tool-page header#main .mainNav.stuck .container {
  padding-top: 10px;
  padding-bottom: 10px
}

.tool-page header#main .mainNav ul.menu>li.logo a {
  height: 44px;
  overflow: hidden
}

@media screen and (max-width:1023px) {
  header#main .mainNav ul.menu,
  header#main .mainNav ul.menu li.userLogged ul.userMenu,
  header#main .mainNav ul.menu>li.userLogged ul.userMenu {
    overflow: hidden;
    transition: max-height .35s ease;
    -webkit-transition: max-height .35s ease;
    -moz-transition: max-height .35s ease;
    -ms-transition: max-height .35s ease;
    -o-transition: max-height .35s ease;
    max-height: 54px
  }
  header#main .mainNav ul.menu li,
  header#main .mainNav ul.menu>li {
    display: none;
    width: 100%;
    height: auto!important;
    clear: both;
    text-align: left;
    opacity: 0;
    filter: alpha(opacity=0)
  }
  header#main .mainNav ul.menu li.separator,
  header#main .mainNav ul.menu>li.separator {
    display: none!important
  }
  header#main .mainNav ul.menu li.logo,
  header#main .mainNav ul.menu>li.logo {
    display: block;
    opacity: 1;
    filter: alpha(opacity=100);
    border: none;
    margin: 0 15px 5px
  }
  header#main .mainNav ul.menu li.logo a,
  header#main .mainNav ul.menu>li.logo a {
    padding: 0
  }
  header#main .mainNav ul.menu li.logo a i,
  header#main .mainNav ul.menu li.logo a span,
  header#main .mainNav ul.menu>li.logo a i,
  header#main .mainNav ul.menu>li.logo a span {
    margin-top: 0;
    height: 50px
  }
  header#main .mainNav ul.menu li.dotBefore,
  header#main .mainNav ul.menu>li.dotBefore {
    margin-left: 10px
  }
  header#main .mainNav ul.menu li.dotBefore:before,
  header#main .mainNav ul.menu>li.dotBefore:before {
    display: none
  }
  header#main .mainNav ul.menu li.userLogged,
  header#main .mainNav ul.menu>li.userLogged {
    padding: 2px 0
  }
  header#main .mainNav ul.menu li.userLogged .userLoggedEvent,
  header#main .mainNav ul.menu>li.userLogged .userLoggedEvent {
    padding-bottom: 13px;
    padding-top: 0
  }
  header#main .mainNav ul.menu li.userLogged .notify,
  header#main .mainNav ul.menu>li.userLogged .notify {
    top: 12px
  }
  header#main .mainNav ul.menu li.userLogged ul.userMenu,
  header#main .mainNav ul.menu>li.userLogged ul.userMenu {
    display: block;
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: 0 0;
    margin: 0;
    padding: 0;
    max-height: 0
  }
  header#main .mainNav ul.menu li.userLogged ul.userMenu>li,
  header#main .mainNav ul.menu>li.userLogged ul.userMenu>li {
    padding: 10px 0
  }
  header#main .mainNav ul.menu li.userLogged.open ul.userMenu,
  header#main .mainNav ul.menu>li.userLogged.open ul.userMenu {
    max-height: 300px
  }
  header#main .mainNav ul.menu.open {
    max-height: 500px
  }
  header#main .mainNav ul.menu.open li,
  header#main .mainNav ul.menu.open>li {
    display: block;
    opacity: 1;
    filter: alpha(opacity=100)
  }
}

@media screen and (max-width:767px) {
  header#main .mainNav ul.menu>li.logo a {
    margin: 0;
    padding: 3px 0 0
  }
}


.detailContent {
  height: 350px;
  font-size: 1em;
  overflow: hidden
}

.embeddeds .detailContent .addToJourney,
.embeddeds .detailContent .addToWishlist {
  display: none!important
}

.detailContent .media-tools {
  margin: 0;
  padding: 0;
  list-style: none outside none;
  color: #333f4d;
  position: relative;
  top: -18px;
  font-size: 10px
}

.detailContent .media-tools>li {
  display: inline;
  float: right;
  margin-left: 8px
}

.detailContent .media-tools>li a {
  color: #333f4d;
  display: inline-block;
  font-size: 1.6em
}

.detailContent .detail-row {
  margin-right: 50px;
  overflow: hidden;
  padding: 2em 10px;
  height: 100%
}

.detailContent .actions-col {
  border-left: 5px solid #f9ecd7;
  padding-left: 1em
}

.detailContent .tabbed [data-switch] {
  overflow: hidden;
  padding-bottom: .5em
}

.detailContent .tabbed [data-switch] span {
  display: inline-block;
  font-size: .875em;
  width: 50%;
  float: left;
  cursor: pointer;
  text-align: center;
  padding: 0 0 .5em;
  color: #555;
  border-bottom: 3px solid #ccc;
  font-weight: 800
}

.detailContent .tabbed [data-switch] span.current {
  border-bottom: 3px solid #393b49;
  color: #393b49
}

.detailContent .action-links a i,
.detailContent .tabbed [data-switch] span i,
.experience-detail .tabbed [data-switch] span i {
  margin-right: .5em;
  position: relative;
  top: 1px
}

.detailContent .action-links {
  padding: 0
}

.detailContent .action-links a {
  display: inline-block;
  background-color: transparent;
  font-size: 11px;
  font-weight: 500;
  vertical-align: middle;
  color: #393b49;
  margin-right: 10px
}

.detailContent .action-links a i {
  font-size: 15px;
  line-height: 0;
  top: 2px
}

.detailContent .action-links a.removeFromWish,
.detailContent .action-links a.removeItem {
  color: #c15048;
  background-color: transparent;
  border-color: #c15048
}

.detailContent .action-links a.addToJourney,
.detailContent .action-links a.addToWishlist {
  font-weight: 900
}

.detailContent .action-links .sep {
  border: none;
  display: inline-block;
  vertical-align: middle
}

.detailContent .action-links .evidence {
  display: inline-block;
  padding: 1em .5em;
  border: 1px solid #e9971b;
  background-color: #e9971b;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 .5em 0 0
}

@media screen and (max-width:1290px) {
  .detailContent .action-links .evidence {
    padding: 1em .2em
  }
  .detailContent .action-links .evidence i {
    margin-right: 0
  }
}

.detailContent .action-links .normal-links {
  white-space: nowrap;
  display: inline-block;
  margin: 1em 0;
  float: right
}

@media screen and (max-width:1270px) {
  .detailContent .action-links .normal-links {
    float: left
  }
}

.detailContent .action-links .normal-links a {
  text-decoration: underline
}

.detailContent .content {
  padding: 0;
  position: relative
}

.detailContent .content .seeds {
  font-size: 1em;
  margin: .5em 0 1em;
  overflow: hidden
}

.detailContent .content .seeds>li {
  float: left;
  margin-bottom: 0
}

.detailContent .content .type {
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 10px;
  color: #e9971b;
  text-transform: uppercase
}

.detailContent .content .title {
  font-weight: 900;
  font-size: 2em;
  line-height: 1.3;
  margin: .1em 0 .5em;
  color: #333f4d;
  text-decoration: none;
  cursor: pointer
}

.detailContent .content .title i {
  font-size: 18px;
  opacity: .8;
  filter: alpha(opacity=80)
}

.detailContent .content .title:hover {
  text-decoration: none;
  color: #e9971b
}

.detailContent .content .city {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 900;
  padding: 1em 0 .5em;
  letter-spacing: 1px
}

.detailContent .content .city i {
  margin-right: 5px;
  position: relative;
  top: 1px;
  color: #e9971b
}

.detailContent .content .what h3,
.detailContent .content .ws-label {
  font-size: .875em;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
  margin: 1em 0 .5em
}

#tool .pack .commands [data-action="add|journey"],
#tool .pack .commands [data-action="add|wishlist"],
#tool .pack .injourney .commands [data-action="remove|journey"],
.detailContent .content .ws-label.-blk {
  display: block
}

.detailContent .content .address {
  font-size: .875em;
  font-style: italic;
  font-weight: 400;
  line-height: 1.3
}

.detailContent .content .what {
  overflow: hidden;
  padding: .5em 0 1em
}

.detailContent .content .what h3 {
  font-weight: 500;
  font-size: 12px;
  color: #7c7c7c;
  margin: 10px 0 5px
}

.detailContent .content .what span {
  display: inline-block!important;
  padding: 2px 8px;
  margin: 3px 5px 0 0;
  float: left;
  font-size: 13px;
  border: 1px solid #e8dfc8;
  color: #7d6934
}

.detailContent .content .nano>.nano-content {
  padding-right: 20px
}

.detailContent .content .set {
  width: 10%;
  float: left
}

.sep {
  margin: 5px 0;
  border-top: 6px solid #e5e5e5
}

.info-author {
  min-height: 160px
}

.descview {
  width: 100%;
  font-size: 1em;
  line-height: 1.5;
  margin: 0;
  float: right;
  height: 140px
}

.descview .subtitle {
  font-weight: 600;
  padding-bottom: 10px;
  display: block
}

.descview .desctext {
  padding-bottom: 10px
}

.descview .nano {
  height: 300px;
  font-size: 14px;
}

.descview .nano .nano-pane {
  background: #dddad5;
  width: 7px!important;
  opacity: .4;
  filter: alpha(opacity=40)
}

.descview .nano .nano-slider {
  background: #afa89d
}

.descview .nano .nano-content {
  padding-right: 25px;
  text-align: justify;
  outline: none!important
}

.descview:hover .nano .nano-pane {
  opacity: 1;
  filter: alpha(opacity=100)
}

.btn,
.descview .title {
  text-transform: uppercase
}

.descview .title {
  letter-spacing: 1px;
  font-size: 12px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #7c7c7c
}

#mapview .map-detail,
#mapview .map-detail #mappa-canvas {
  width: 100%;
  height: 150px
}

#mapview .address,
#mapview .city {
  font-size: 11px;
  display: inline-block;
  line-height: 13px
}

#mapview .address.city,
#mapview .city.city {
  font-weight: 600;
  display: block;
  line-height: 1;
  padding-top: 1em
}

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

.item {
  float: left;
  clear: both;
  width: 100%;
  position: relative;
  background: #fff
}

.item .content {
  overflow: hidden;
  font-size: .875em;
  padding: 15px;
  line-height: 1.15;
  float: left;
  width: 90%;
  cursor: pointer
}

.item .content .typo {
  display: block;
  float: left;
  width: 190px;
  overflow: hidden
}

.item .content .title {
  width: 100%;
  display: block
}

.item .content>span {
  display: block;
  color: #aaa
}

.item .content .icon {
  width: 40px;
  height: 40px;
  float: left;
  overflow: hidden;
  margin-right: 15px;
  position: relative
}

.item .content .icon .single {
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -ms-behavior: url(/assets/css/backgroundsize.htc);
  behavior: url(/assets/css/backgroundsize.htc);
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box
}

#tool .pack .injourney .commands [data-action="add|journey"],
.item .content .icon .single-thumb {
  display: none
}

#filterscontrol.stucked #fullreset,
.item .content:hover .icon>span {
  opacity: 0
}

.item .content:hover .icon:before {
  background-color: #404252;
  font-family: 'fluidtravel\';
  font-size: 21px;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  content: "\e643";
  z-index: 10;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  line-height: 42px;
  text-align: center
}

#wishlistbar .item .content:hover .icon:before {
  background-color: #e9971b
}

.item .content .title,
.item .content .type {
  text-transform: uppercase;
  font-weight: 400;
  font-size: .875em
}

.item .content .title {
  font-weight: 600;
  font-size: 1.1em;
  color: #393b49;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}

.item .content .city,
.item .content .title em {
  transition: all 3s linear .5s;
  -webkit-transition: all 3s linear .5s;
  -moz-transition: all 3s linear .5s;
  -ms-transition: all 3s linear .5s;
  -o-transition: all 3s linear .5s
}

.item .content .title em {
  position: relative;
  font-style: normal
}

.item .content .city {
  text-transform: uppercase;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap
}

.item .set {
  float: left;
  width: 10%
}

.item .set a,
.item .set>span {
  display: block;
  color: #e9971b;
  text-align: center;
  height: 72px;
  margin: -1px -1px -1px 0
}

.item .set a i,
.item .set>span i {
  position: relative;
  top: 27px
}

.item .set a:hover,
.item .set>span:hover {
  background-color: #e9971b;
  color: #fff
}

.pack .seeds {
  position: absolute;
  top: 0;
  right: 0;
  transition: opacity .3s ease-in;
  -webkit-transition: opacity .3s ease-in;
  -moz-transition: opacity .3s ease-in;
  -ms-transition: opacity .3s ease-in;
  -o-transition: opacity .3s ease-in
}

.pack .seeds>li {
  -webkit-box-shadow: 1px 1px 0 rgba(0, 0, 0, .1);
  box-shadow: 1px 1px 0 rgba(0, 0, 0, .1)
}

.pack .commands {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  font-size: 19px;
  overflow: hidden;
  opacity: 0;
  -moz-transform: translate3d(0, 40%, 0);
  -webkit-transform: translate3d(0, 40%, 0);
  transform: translate3d(0, 40%, 0);
  -moz-transition: opacity .3s ease-in, -moz-transform .35s;
  -webkit-transition: opacity .3s ease-in, -webkit-transform .35s;
  transition: opacity .3s ease-in, transform .35s
}

.pack .commands .cmd {
  color: #fff;
  background: 0 0;
  height: 65px;
  width: 50%;
  text-align: center;
  padding: .5em .6em;
  margin: 0;
  float: left;
  display: none;
  box-sizing: border-box
}

.pack .commands .cmd>i,
.user-hub .userMenu>li a {
  display: inline-block;
  font-weight: 600;
  font-size: .9em
}

.pack .commands .cmd>span {
  display: block;
  line-height: 1.3;
  font-weight: 600;
  font-size: .5em
}

.pack .commands .cmd:hover {
  background-color: #fff;
  color: #333f4d
}

@media screen and (max-width:800px) {
  .pack .commands {
    top: 30px;
    font-size: 18px
  }
  .pack .commands .cmd {
    height: 80px
  }
}

#tool .pack .inwishlist .commands [data-action="remove|wishlist"],
.exploreStandalone .pack .commands .addToJourney {
  display: block
}

#tool .pack .inwishlist .commands [data-action="add|wishlist"],
.exploreStandalone .pack .commands [data-action="add|journey"] {
  display: none
}

.exploreStandalone .pack .commands [data-action="add|wishlist"],
.exploreStandalone .pack .inwishlist .commands [data-action="remove|wishlist"] {
  display: block
}

.exploreStandalone .pack .inwishlist .commands [data-action="add|wishlist"],
.search-experience .pack .advs {
  display: none
}

.search-experience .pack .commands [data-viewfull] {
  display: block;
  margin: 0 auto;
  float: none
}

.search-experience .pack:hover .seeds {
  opacity: 0!important
}

.experience-single-page .pack .advs,
.experience-single-page .pack .seeds {
  opacity: 1
}

.loggedout .pack .commands .addToJourney,
.loggedout .pack .commands .addToWishlist {
  display: block
}

.loggedout .pack .commands [data-action="add|journey"],
.loggedout .pack .commands [data-action="add|wishlist"] {
  display: none
}

.embeddeds .pack .commands .addToWishlist,
.user-hub.open ul.userMenu {
  display: block
}

.embeddeds .pack .commands [data-action="add|wishlist"],
.embeddeds .pack .commands [data-action="remove|wishlist"],
.embeddeds.no-basket .pack .commands .addToJourney,
.embeddeds.no-basket .pack .commands [data-action="add|journey"],
.embeddeds.no-basket .pack .commands [data-action="remove|journey"],
.embeddeds.no-basket.no-wishlist .pack .commands,
.embeddeds.no-wishlist .pack .commands .addToWishlist,
.embeddeds.no-wishlist .pack .commands [data-action="add|wishlist"] {
  display: none
}

.embeddeds.no-wishlist .pack .commands [data-action="remove|wishlist"] {
  display: none!important
}

.pack .adv {
  width: 59px;
  height: 59px
}

.pack .adv .adv-logo {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%
}

.pack .corner {
  position: absolute;
  transition: opacity .3s ease-in;
  -webkit-transition: opacity .3s ease-in;
  -moz-transition: opacity .3s ease-in;
  -ms-transition: opacity .3s ease-in;
  -o-transition: opacity .3s ease-in
}

.pack .corner.corner-topright {
  top: -20px;
  right: -16px
}

.pack .corner.corner-topleft {
  top: 0;
  left: 0
}

.pack .corner.corner-bottomright {
  bottom: 0;
  right: 0
}

.pack .corner.corner-bottomleft {
  bottom: 0;
  left: 0
}

.pack .corner.tritag {
  top: -1em;
  left: -1em;
  color: #fff;
  height: 0;
  width: 0
}

.pack .corner.tritag i,
.pack .corner.tritag small {
  position: absolute;
  top: 20px;
  left: 8px;
  font-size: 25px
}

.pack .corner.tritag span {
  position: absolute;
  top: 30px;
  left: 18px;
  font-weight: 600;
  font-size: .75em;
  text-shadow: 0 0 10px #393b49;
  transform: rotate(-45deg)
}

.pack .corner.tritag .exp-pack,
.pack .corner.tritag .exp-perc,
.pack .corner.tritag .exp-travel {
  border-style: solid;
  border-width: 110px 110px 0 0
}

.pack .corner.tritag .exp-pack,
.pack.experiencepack .corner.tritag .exp-perc {
  border-color: rgba(127, 182, 8, .8) transparent transparent
}

.pack .corner.tritag .exp-pack>i,
.pack .corner.tritag .exp-travel>i {
  font-size: 22px;
  left: 10px;
  top: 10px
}

.pack .corner.tritag .exp-travel,
.pack.experiencetravel .corner.tritag .exp-perc {
  border-color: rgba(255, 127, 102, .8) transparent transparent
}

.pack .corner.tritag .exp-perc {
  border-color: rgba(57, 59, 73, .8) transparent transparent
}

.pack,
.pack .corner .seeds-list {
  position: relative;
  width: 210px
}

.pack .corner .seeds-list .seeds {
  position: relative!important
}

.pack .info,
.pack .pad {
  position: absolute;
  left: 0
}

.pack .info {
  width: auto;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, .15), 0 0 15px rgba(0, 0, 0, .08);
  font-size: .48em;
  bottom: 25%;
  right: 30%
}

.pack .info h2 {
  padding: 0 0 .275em;
  margin: 0;
  line-height: 1;
  color: #fff;
  font-size: 1.429em
}

.pack {
  display: block;
  width: 100%;
  height: 400px
}

.pack .pad {
  display: block;
  height: auto;
  bottom: 0;
  top: 0;
  right: 0;
  margin: 1em;
  z-index: 1;
  background: rgba(0, 0, 0, 0)
}

.pack .hover,
.pack .hover .delay {
  transition: all .3s ease;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease
}

.pack .hover {
  position: absolute;
  overflow: hidden;
  height: auto;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: -webkit-linear-gradient(bottom, rgba(71, 71, 71, 0) 0, rgba(20, 20, 20, .8) 75%);
  background: linear-gradient(to top, rgba(71, 71, 71, 0) 0, rgba(20, 20, 20, .8) 75%);
  z-index: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-width: 0;
  opacity: 1;
  filter: alpha(opacity=100)
}

.pack .hover .delay {
  opacity: 0;
  filter: alpha(opacity=0)
}

.pack .hover .middle {
  vertical-align: top;
  padding-top: 1.5em
}

.pack .tapped .hover,
.pack:hover .hover {
  z-index: 2;
  border-width: .5em
}

.pack .tapped .commands,
.pack:hover .commands {
  opacity: 1;
  -moz-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0)
}

.col-md-4 .pack .hover {
  font-size: 21px
}

.thumbs {
  font-size: 1.5em;
  width: auto!important;
  height: 300px!important;
  display: block!important;
  background-color: #fff;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden
}

.thumbs .advs {
  margin-top: 40px
}

.thumbs>li {
  width: 33.33333333%;
  float: left;
  padding-right: 3px;
  padding-left: 3px
}

.thumbs .pack {
  -webkit-box-shadow: inset 0 -4em 5em -1.5em rgba(0, 0, 0, .6);
  box-shadow: inset 0 -4em 5em -1.5em rgba(0, 0, 0, .6)
}

.thumbs .pack .info h2 {
  padding: 0
}

.thumbs .complete figure .pack:hover {
  background: #4e7fb4
}

.thumbs,
.thumbs .pack-selected,
.tuner-results,
.tuner-results .pack-selected,
.visual-list,
.visual-list .pack-selected {
  transition: all ease 150ms;
  -webkit-transition: all ease 150ms;
  -moz-transition: all ease 150ms;
  -ms-transition: all ease 150ms;
  -o-transition: all ease 150ms
}

.tuner-results figure {
  width: 100%;
  height: 300px
}

.thumbs figure,
.visual-list figure {
  float: left;
  margin: 0 0 5px;
  width: 100%
}

.thumbs figure {
  height: 300px
}

.thumbs .pack-selected,
.tuner-results .pack-selected,
.visual-list .pack-selected {
  border: 5px solid #e9971b
}

.thumbs .pack,
.visual-list .pack {
  box-shadow: none;
  cursor: pointer
}

.thumbs .pack {
  height: 100%
}

.thumbs .pack .pack-image,
.tuner-results .pack .pack-image,
.visual-list .pack .pack-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -ms-behavior: url(/assets/css/backgroundsize.htc);
  behavior: url(/assets/css/backgroundsize.htc);
  transition: opacity .35s ease;
  -webkit-transition: opacity .35s ease;
  -moz-transition: opacity .35s ease;
  -ms-transition: opacity .35s ease;
  -o-transition: opacity .35s ease;
  opacity: 1;
  filter: alpha(opacity=100);
  overflow: hidden;
  z-index: 0
}

.thumbs .pack .pack-image img,
.tuner-results .pack .pack-image img,
.tuner-results .pack img,
.visual-list .pack .pack-image img {
  top: -100%;
  left: -100%;
  right: -100%;
  bottom: -100%;
  margin: auto;
  position: absolute
}

.thumbs .pack .pack-image:before,
.tuner-results .pack .pack-image:before,
.visual-list .pack .pack-image:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #474747;
  background: -webkit-linear-gradient(top, rgba(71, 71, 71, 0) 0, rgba(20, 20, 20, .8) 75%);
  background: linear-gradient(to bottom, rgba(71, 71, 71, 0) 0, rgba(20, 20, 20, .5) 70%);
  content: '';
  opacity: .9;
  filter: alpha(opacity=90);
  -webkit-transform: translate3d(0, 70%, 0);
  transform: translate3d(0, 70%, 0);
  -webkit-transition: opacity .35s, -webkit-transform .35s;
  transition: opacity .35s, transform .35s;
  z-index: 1
}

.thumbs .pack .info,
.tuner-results .pack .info,
.visual-list .pack .info {
  z-index: 10;
  min-height: 60px
}

.thumbs .pack .info a,
.tuner-results .pack .info a,
.visual-list .pack .info a {
  color: #fff!important
}

.thumbs .pack .info a:hover,
.tuner-results .pack .info a:hover,
.visual-list .pack .info a:hover {
  text-decoration: none!important
}

.thumbs .pack .info h2,
.tuner-results .pack .info h2,
.visual-list .pack .info h2 {
  -webkit-transition: -webkit-transform .35s;
  transition: transform .35s;
  -webkit-transform: translate3d(0, 20px, 0);
  text-transform: inherit;
  font-size: 18px;
  line-height: 1.2;
  display: table-cell;
  vertical-align: bottom
}

.thumbs .pack .info h2 span,
.tuner-results .pack .info h2 span,
.visual-list .pack .info h2 span {
  display: block;
  padding: 0 0 3px
}

.thumbs .pack .info .city,
.tuner-results .pack .info .city,
.visual-list .pack .info .city {
  display: inline-block;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Open Sans', Arial, Verdana, Sans-serif
}

.thumbs .pack .info .city .ico-location,
.tuner-results .pack .info .city .ico-location,
.visual-list .pack .info .city .ico-location {
  font-size: 12px;
  padding-bottom: 5px;
  margin: 0 5px 0 0
}

.thumbs .pack .info p,
.tuner-results .pack .info p,
.visual-list .pack .info p {
  overflow: hidden;
  -webkit-transition: opacity .35s, -webkit-transform .35s;
  transition: opacity .35s, transform .35s, max-height .35s;
  -webkit-transform: translate3d(0, 20px, 0);
  max-height: 0
}

.thumbs .pack:hover .pack-image,
.tuner-results .pack:hover .pack-image,
.visual-list .pack:hover .pack-image {
  opacity: .9;
  filter: alpha(opacity=90)
}

.freeze .locked strong,
.thumbs .pack:hover .hover a:hover,
.thumbs .pack:hover .hover a:hover i,
.tuner-results .pack:hover .hover a:hover,
.tuner-results .pack:hover .hover a:hover i,
.visual-list .pack:hover .hover a:hover,
.visual-list .pack:hover .hover a:hover i {
  color: #393b49
}

.thumbs .pack:hover .seeds,
.visual-list .pack:hover .seeds {
  opacity: .8;
  filter: alpha(opacity=80)
}

.thumbs .pack:hover .info h2,
.thumbs .pack:hover .info p,
.tuner-results .pack:hover .info h2,
.tuner-results .pack:hover .info p,
.visual-list .pack:hover .info h2,
.visual-list .pack:hover .info p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0)
}

.thumbs .pack:hover .info p,
.tuner-results .pack:hover .info p,
.visual-list .pack:hover .info p {
  max-height: 100px
}

.thumbs .pack:hover .pack-image:before,
.tuner-results .pack:hover .pack-image:before,
.visual-list .pack:hover .pack-image:before {
  opacity: 1;
  -webkit-transform: translate3d(0, 10%, 0);
  transform: translate3d(0, 10%, 0)
}

.thumbs.info {
  left: 50px
}

.csstransforms .tuner-results .pack {
  overflow: hidden
}

.visual-list .pack,
.visual-list figure {
  height: 400px
}

.data-hub .new,
.data-hub .notify {
  display: none;
  color: #fff;
  line-height: 1;
  border-radius: 2px
}

.data-hub .notify {
  background-image: -webkit-gradient(linear, center top, center bottom, from(#fa3c45), to(#dc0d17));
  background-image: -webkit-linear-gradient(#fa3c45, #dc0d17);
  box-shadow: 0 1px 1px rgba(0, 0, 0, .7);
  min-height: 13px;
  position: absolute;
  left: -12px;
  z-index: 10;
  font-weight: 600;
  background-color: #dc0d17;
  font-size: 11px;
  padding: 2px 6px
}

.data-hub .new {
  background-color: #c15048;
  padding: 3px;
  margin-left: 5px;
  font-size: 10px;
  min-width: 17px;
  text-align: center;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box
}

.data-hub #messageLink {
  display: none!important;
  line-height: 1em
}

.data-hub #messageLink,
.data-hub #messageLink i {
  color: #333f4d!important
}

.data-hub #messageLink:hover,
.data-hub #messageLink:hover i {
  color: #e9971b!important
}

.data-hub.gotmail .new,
.data-hub.gotmail .notify,
.widget-chat.chat-closable .chat-header .chat-commands .chat-close-btn,
.widget-chat.chat-has-message .chat-header .chat-commands .chat-newmessage {
  display: inline-block
}

.data-hub.gotmail #messageLink {
  display: block!important
}

.user-hub {
  padding: 2px 0;
  height: 25px;
  z-index: 1;
  position: relative
}

.user-hub .userLoggedEvent {
  display: block;
  margin-right: -15px;
  margin-left: -15px;
  padding: 0 15px 15px 20px;
  z-index: 5;
  position: relative;
  text-align: left
}

.user-hub .name i {
  float: right;
  font-size: 20px;
  position: relative;
  top: -5px;
  color: #e9971b
}

.user-hub .userLoggedEvent .name {
  display: inline-block;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 12px;
  color: #333f4d;
  line-height: 1;
  min-width: 10px
}

.user-hub .userLoggedEvent .name .name-full,
.widget-chat .chat-header .chat-commands .chat-close-btn,
.widget-chat .chat-header .chat-commands .chat-newmessage {
  display: none
}

.user-hub .userMenu {
  margin: 0;
  overflow: hidden;
  transition: max-height .35s ease;
  -webkit-transition: max-height .35s ease;
  -moz-transition: max-height .35s ease;
  -ms-transition: max-height .35s ease;
  -o-transition: max-height .35s ease;
  -webkit-box-shadow: none;
  box-shadow: none;
  display: none;
  position: absolute;
  right: -10px;
  top: 45px;
  left: auto;
  min-width: 150px;
  background: #fff;
  text-align: left;
  padding: 70px 0 15px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-shadow: 0 1px 0 1px rgba(51, 63, 77, .15);
  box-shadow: 0 1px 0 1px rgba(51, 63, 77, .15)
}

.pack .info p,
.user-hub .userMenu>li {
  margin: 0;
  padding: 0
}

.user-hub .userMenu>li a {
  display: block;
  padding: 4px 20px;
  color: #e9971b
}

.user-hub .userMenu>li:last-child {
  border: none
}

.user-hub .userMenu li.sep {
  border-top: 0;
  border-bottom: 1px solid #ccc;
  margin: 10px 20px
}

.user-hub.open ul.userMenu {
  max-height: 300px
}

.navigationbar>ul>li {
  margin: 0 16px 0 0
}

@media screen and (min-width:1024px) and (max-width:1280px) {
  .navigationbar>ul>li {
    margin: 0 5px 0 0
  }
}

.navigationbar ul {
  list-style: none outside none;
  margin: 0;
  padding: 0;
  position: relative
}

.navigationbar ul li {
  display: inline-block;
  padding: 0;
  float: left;
  width: auto;
  line-height: 15px
}

@media screen and (max-width:1280px) and (min-width:1024px) {
  .navigationbar ul li {
    margin: 0 5px 0 0
  }
}

.navigationbar ul li a {
  display: inline-block;
  color: #333f4d;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1px 7px;
  margin: 0 3px
}

@media screen and (max-width:1280px) {
  .navigationbar ul li a {
    padding: 1px 5px
  }
}

.navigationbar ul li>ul {
  border-top: 1px solid transparent
}

.navigationbar ul li:hover.has-submenu:after,
.navigationbar>ul>.nav-active.has-submenu:after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  border-top: 1px solid #e6e6e6;
  z-index: 96;
  display: block
}

.navigationbar ul li:hover.has-submenu:before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 18px;
  top: 20px
}

.navigationbar ul li:hover>ul,
.navigationbar>ul>.nav-active>ul {
  visibility: visible;
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1
}

.navigationbar ul li:hover>ul {
  z-index: 95;
  background-color: #fff;
  -moz-transition-property: opacity;
  -o-transition-property: opacity;
  -webkit-transition-property: opacity;
  transition-property: opacity;
  -moz-transition-duration: .33s;
  -o-transition-duration: .33s;
  -webkit-transition-duration: .33s;
  transition-duration: .33s
}

.navigationbar>ul>.nav-active>a {
  color: #fff;
  background-color: #e9971b
}

.coolquiz .nl-ti-text ul li.nl-ti-example em,
.navigationbar>ul>.nav-active:hover>a {
  color: #fff
}

.navigationbar>ul>.nav-active>ul>.nav-active>a {
  color: #e9971b;
  background-color: transparent
}

.navigationbar>ul>.nav-active>ul {
  margin-left: -4px
}

.navigationbar>ul>li:first-child a {
  text-indent: -3px
}

.navigationbar>ul>li>ul {
  width: 100%;
  position: absolute;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  visibility: hidden
}

.navigationbar>ul>li>ul>li a {
  font-size: 11px!important
}

.whys,
.whys .label {
  transition: opacity .2s ease;
  -webkit-transition: opacity .2s ease;
  -moz-transition: opacity .2s ease;
  -ms-transition: opacity .2s ease;
  -o-transition: opacity .2s ease
}

.whys {
  position: relative;
  z-index: 5;
  width: 100%;
  display: table;
  padding: 0 5px;
  margin: 0 0 2em
}

.whys .label {
  opacity: 0;
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
  display: block;
  margin: 10px 0 10px 12px
}

.whys>ul {
  display: table-row;
  width: 100%
}

.whys>ul>li {
  font-family: 'Montserrat', Helvetica, Arial, Sans-serif;
  display: table-cell;
  color: #fff;
  font-size: 15px;
  text-align: left;
  opacity: 0
}

.whys>ul>li .line {
  display: block;
  height: 6px;
  top: 4px;
  width: 0;
  min-width: 30px
}

.whys>ul>li .line.load {
  width: 100%;
  -webkit-transition: all 600ms cubic-bezier(.645, .045, .355, 1);
  transition: all 600ms cubic-bezier(.645, .045, .355, 1)
}

.whys>ul>li:last-child {
  padding-right: 0
}

.whys>ul>li i {
  font-size: 38px;
  vertical-align: middle;
  top: -4px
}

.whys>ul>li .vl,
.whys>ul>li .why {
  text-transform: capitalize
}

.whys>ul>li .why {
  font-weight: 500
}

.whys>ul>li .vl {
  font-size: 13px;
  font-weight: 600
}

.whys>ul>li .why {
  display: none;
  font-size: 10px
}

@media screen and (max-width:568px) {
  .whys,
  .whys>ul>li {
    display: block
  }
  .whys .label {
    margin: 10px 0 -20px 12px
  }
  .whys>ul>li {
    margin: 20px 0
  }
  .whys>ul>li .line {
    min-width: 0
  }
  .whys>ul>li i {
    top: 15px
  }
  .whys>ul>li .why {
    display: block;
    padding-bottom: 3px
  }
}

.months {
  max-width: 250px
}

ul.when-list {
  margin: .7em 0 1em;
  padding: 0;
  list-style: none;
  display: table;
  width: 100%
}

ul.when-list>li {
  margin: 0;
  padding: 0;
  display: table-cell;
  height: 7px
}

ul.when-list>li:last-child .when-rate {
  margin: 0
}

ul.when-list>li .lb {
  font-size: 8px;
  display: block;
  text-align: center;
  width: 20px;
  padding-bottom: 2.3px
}

.when-rate {
  background: #d4e7aa;
  height: 10px;
  margin-right: 1px
}

.when-rate.good {
  background: #7fb608
}

.when-rate.bad {
  background: red
}

ul.what-list,
ul.who-list {
  list-style: none outside none
}

ul.who-list {
  margin: 7px 0 0 -8px;
  padding: 0
}

ul.what-list>li,
ul.what-list>li a,
ul.who-list>li {
  margin: 0;
  padding: 0;
  display: inline-block
}

.who-rate i {
  font-size: 2em;
  color: #d4e7aa
}

.who-rate.good i {
  color: #7fb608
}

.who-rate.bad i {
  color: red
}

ul.what-list {
  padding: 5px 0 0
}

ul.what-list>li a {
  outline: 0;
  font-weight: 500;
  padding: 2px 8px;
  margin: 2px 5px 0 0;
  float: left;
  font-size: 13px;
  border: 1px solid #e8dfc8
}

ul.what-list>li a,
ul.what-list>li a:hover {
  text-decoration: none;
  color: #7d6934
}

.rate-widget {
  position: relative;
  text-align: left;
  direction: rtl;
  color: #f1f1f1!important;
  letter-spacing: -.2em
}

.rate-widget input[type=radio] {
  position: absolute;
  left: -9999px
}

.rate-widget label {
  display: inline-block;
  cursor: pointer
}

.rate-widget .rating-star {
  display: inline-block;
  position: relative
}

.rate-widget label .ico {
  font-size: 1.4em;
  -webkit-transition: all .2s ease-in-out;
  -moz-transition: all .2s ease-in-out;
  -o-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out
}

.rate-widget input[type=radio]:checked~label .starred,
.rate-widget label:focus .starred,
.rate-widget label:focus~label .starred,
.rate-widget label:hover .starred,
.rate-widget label:hover~label .starred {
  opacity: 1;
  color: #e9971b
}

.rate-widget input[type=radio]:checked~label .starred-o,
.rate-widget label:focus .starred-o,
.rate-widget label:focus~label .starred-o,
.rate-widget label:hover .starred-o,
.rate-widget label:hover~label .starred-o {
  opacity: 0
}

.rate-widget label .starred {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0
}

.widget-chat {
  background-color: #fff;
  height: 285px;
  display: block;
  width: 255px;
  overflow: hidden;
  -webkit-box-shadow: 0 0 1px 0 rgba(51, 63, 77, .3);
  box-shadow: 0 0 1px 0 rgba(51, 63, 77, .3)
}

.widget-chat.chat-collaped {
  background-color: #0f0;
  height: 34px
}

.widget-chat .chat-header {
  position: relative;
  background-color: #393b49;
  padding: 10px;
  cursor: pointer;
  max-height: 34px
}

.widget-chat .chat-header .chat-title {
  color: #fff;
  margin: 0;
  width: 100%;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
  padding-right: 26px;
  font-size: .9em;
  text-transform: uppercase
}

.widget-chat .chat-header .chat-commands {
  position: absolute;
  right: 5px;
  top: 7px
}

.widget-chat .chat-header .chat-commands>* {
  color: #fff;
  font-size: .9em
}

.widget-chat .widgetMessageBlock {
  height: 206px
}

.widget-chat .widgetMessageBlock ul>li {
  border-bottom: 1px solid #f1f1f1
}

.widget-chat .widgetMessageForm {
  width: 100%;
  bottom: 0
}

.widget-chat .message-form {
  border: 1px solid #f1f1f1
}

.widget-chat .message-form textarea {
  width: 100%;
  padding: 10px;
  resize: none;
  border: 0;
  height: 44px;
  overflow: auto
}

.widget-chat .mainMessage {
  cursor: pointer;
  padding: 1em;
  overflow: hidden;
  background-color: #fff;
  min-height: 0
}

.widget-chat .mainMessage .message-body,
.widget-chat .mainMessage .message-header {
  display: block;
  clear: both
}

.datepicker-days table thead tr th,
.widget-chat .mainMessage .message-body {
  padding: 5px 0
}

.widget-chat .mainMessage .message-who {
  display: block;
  float: left;
  width: 50%;
  text-align: left;
  position: relative
}

.widget-chat .mainMessage .message-when {
  display: block;
  float: right;
  width: 50%;
  text-align: right;
  color: #999;
  font-size: .875em;
  font-weight: 600
}

.widget-chat .mainMessage.-unread {
  background-color: #fff8ed
}

.agente .agente-info .aree b,
.widget-chat .mainMessage.-unread .message-who {
  font-weight: 600
}

.widget-chat .mainMessage.-unread .message-who:before {
  background: #e9971b
}

.widget-chat .mainMessage.-unread .message-excerpt {
  font-weight: 600;
  opacity: 1
}

.widget-chat .nano .nano-pane {
  background: #dddad5;
  width: 7px!important
}

.widget-chat .nano .nano-slider {
  background: #444;
  background: rgba(0, 0, 0, .5)
}

.adv,
.advs {
  cursor: pointer
}

.advs {
  float: right;
  clear: both;
  min-width: 80px;
  opacity: 0;
  margin-bottom: 8px;
  transition: opacity .3s ease-in;
  -webkit-transition: opacity .3s ease-in;
  -moz-transition: opacity .3s ease-in;
  -ms-transition: opacity .3s ease-in;
  -o-transition: opacity .3s ease-in;
  text-align: center
}

.advs.active,
ul.list-nested li .item .content:hover .icon>span {
  opacity: 1
}

.advs>.ws-label {
  color: #fff;
  font-size: 11px;
  margin: 0;
  font-weight: 700;
  letter-spacing: 0;
  text-shadow: 0 0 3px rgba(0, 0, 0, .4)
}

.advs.-authored>.ws-label {
  font-size: 11px;
  text-align: center
}

.adv {
  display: block;
  max-height: 160px;
  padding: 6px 0;
  background: 0 0;
  overflow: hidden
}

.adv .adv-logo {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 60px;
  height: 60px;
  display: inline-block;
  border: 2px solid #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5)
}

.adv .adv-label {
  color: #555;
  vertical-align: top;
  margin: 20px 0 0 6px;
  display: inline-block;
  float: left;
  width: 160px;
  padding-left: 5px;
  font-weight: 600
}

.adv .adv-label:hover {
  color: #555
}

.detailContent .adv,
.experience-detail .adv,
.whiteBox .adv {
  float: left;
  width: 100%;
  padding: 10px
}

.detailContent .adv .adv-logo {
  float: left
}

.experience-detail .adv .adv-logo {
  float: left;
  height: 50px;
  width: 50px
}

.experience-detail .adv .adv-label {
  margin: 16px 0 0 6px
}

.whiteBox .adv {
  padding: 15px
}

.whiteBox .adv .adv-logo {
  float: left
}

.pack .adv {
  display: block;
  padding: 5px;
  margin: 0 auto
}

@media screen and (max-width:992px) {
  .adv .adv-logo {
    width: 50px;
    height: 50px
  }
  .adv .adv-label {
    margin: 16px 0 0 6px;
    width: 120px;
    font-size: 12px
  }
}

#filterscontrol {
  font-size: 1em;
  display: none;
  width: 100%;
  background: #333f4d;
  position: relative;
  z-index: 9999;
  padding: 15px 135px 15px 20px;
  text-transform: uppercase;
  font-weight: 300;
  color: #999;
  border-right: 2px solid #fff;
  border-left: 2px solid #fff;
  transition: padding .3s ease;
  -webkit-transition: padding .3s ease;
  -moz-transition: padding .3s ease;
  -ms-transition: padding .3s ease;
  -o-transition: padding .3s ease
}

#filterscontrol span,
#filterscontrol strong {
  color: #fff;
  font-weight: 600
}

#filterscontrol span {
  padding: 0 6px 0 0
}

#filterscontrol span:after {
  content: ','
}

#filterscontrol span:last-child:after {
  content: ''
}

#filterscontrol.active {
  display: block
}

#filterscontrol.stucked {
  position: fixed;
  padding: 2px 5px;
  border-right: 0
}

#filterscontrol>div {
  display: inline
}

#filterscontrol .fc-slice {
  display: inline;
  padding: 0 6px;
  cursor: default
}

#filterscontrol .fc-slice.fc-sliced,
.gauge .svg path {
  cursor: pointer
}

#filterscontrol #fullreset {
  position: absolute;
  top: 16px;
  right: 15px;
  font-size: .8em;
  color: #999;
  opacity: 1;
  transition: opacity .2s .2s ease;
  -webkit-transition: opacity .2s .2s ease;
  -moz-transition: opacity .2s .2s ease;
  -ms-transition: opacity .2s .2s ease;
  -o-transition: opacity .2s .2s ease
}

#filterscontrol #fullreset i {
  color: #fff;
  padding: 0 5px;
  font-size: .8em
}

#filterscontrol [data-fc-tags] {
  padding: 0 10px
}

@media screen and (max-width:768px) {
  #filterscontrol {
    border: 0
  }
  #filterscontrol #fullreset {
    display: none
  }
  #filterscontrol,
  #filterscontrol.stucked {
    position: relative!important;
    padding: 2px 5px!important
  }
}

.experience-detail {
  height: 380px;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  margin: 20px 35px;
}

.experience-detail.no-images .media-tools-images,
.experience-detail.no-videos .media-tools-videos {
  display: none
}

.experience-detail .experience-wrap {
  border-bottom: 1px solid #aaa;
  padding: 10px 0
}

.experience-detail .exp-ribbon {
  display: none;
  border-style: solid;
  border-width: 110px 110px 0 0;
  position: absolute;
  top: -1em;
  left: -1em;
  color: #fff;
  height: 0;
  width: 0;
  z-index: 5
}

.experience-detail .exp-ribbon>i {
  position: absolute;
  top: -82px;
  left: 24px;
  font-size: 26px
}

#favourites-list .experience-detail .exp-ribbon,
.widget .experience-detail .exp-ribbon,
.wishlist-single-page .experience-detail .exp-ribbon {
  display: block
}

#favourites-list .experience-detail.injourney .commands [data-action="add|journey"],
.experience-detail.exptype-experience .exp-ribbon {
  display: none!important
}

.experience-detail.exptype-experiencepack .exp-ribbon {
  border-color: rgba(127, 182, 8, .8) transparent transparent
}

.experience-detail.exptype-experiencetravel .exp-ribbon {
  border-color: rgba(255, 127, 102, .8) transparent transparent
}

.experience-detail:first-child .experience-wrap {
  padding-top: 0
}

.experience-detail:last-child .experience-wrap {
  padding-bottom: 0;
  border-bottom: 0
}

.experience-detail>div {
  height: 100%;
  width: 100%
}

.experience-detail:last-child {
  border-bottom: 0
}

#favourites-list .experience-detail .experience-preview .experience-order,
.experience-detail .controls,
.experience-detail .experience-preview .image.image-thumb {
  display: none
}

.experience-detail .experience-preview {
  height: 100%;
  width: 20%;
  position: relative;
  float: left;
  overflow: hidden
}

.experience-detail .experience-preview .experience-order {
  position: absolute;
  top: -42px;
  right: -6px;
  font-size: 9em;
  font-weight: 700;
  color: #fff;
  opacity: .5;
  letter-spacing: -8px
}

.experience-detail .experience-preview .image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%
}

.experience-detail .experience-preview .ico-edit {
  font-size: 3em;
  color: #fff;
  position: relative;
  top: -3px;
  cursor: pointer
}

.experience-detail .experience-preview .experience-location {
  position: absolute;
  bottom: 2px;
  left: 0;
  color: #fff;
  line-height: 1em;
  padding: 6px;
  z-index: 5;
  font-size: 12px;
  width: 100%
}

.experience-detail .experience-preview .experience-location .ico-location {
  font-size: 2.2em;
  width: 24px
}

.experience-detail .experience-preview .experience-location .info-location {
  vertical-align: middle
}

.experience-detail .experience-preview .experience-location .info-location>.city {
  font-weight: 700;
  font-size: 1em
}

.experience-detail .experience-preview .experience-location .info-location>.address {
  display: block;
  font-size: .8em;
  line-height: 1.2em;
  padding-top: 2px;
  text-transform: uppercase;
  opacity: .9;
  filter: alpha(opacity=90)
}

.experience-detail .experience-preview:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  opacity: .8;
  filter: alpha(opacity=80);
  background: #474747;
  background: -webkit-linear-gradient(top, rgba(71, 71, 71, 0) 0, rgba(20, 20, 20, .8) 75%);
  background: linear-gradient(to bottom, rgba(71, 71, 71, 0) 0, rgba(20, 20, 20, .8) 70%);
  z-index: 1
}

.experience-detail .experience-meta {
  min-height: 8px;
  width: 100%
}

.experience-detail .experience-meta>* {
  width: 33%;
  min-height: 30px;
  min-width: 200px
}

.experience-detail .experience-meta .author,
.experience-detail .values .values-wrapper .widget .seeds>li {
  float: left
}

.experience-detail .experience-meta .adv {
  float: left;
  padding: 0 5px 6px
}

.experience-detail .experience-meta .adv .adv-pre {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 800;
  color: #333f4d;
  padding: .3em 0
}

.experience-detail .experience-meta .adv .adv-logo {
  width: 40px;
  height: 40px
}

.experience-detail .experience-meta .adv .adv-label {
  width: 72%;
  font-size: 11px;
  margin-top: 0
}

@media screen and (max-width:1300px) {
  .experience-detail .experience-meta .adv .adv-label {
    width: 70%
  }
}

@media screen and (max-width:1200px) {
  .experience-detail .experience-meta .adv .adv-label {
    width: 68%
  }
}

.experience-detail .media-tools {
  margin: 0;
  padding: 0;
  list-style: none outside none;
  color: #333f4d;
  position: absolute;
  top: 5px;
  right: 8px;
  font-size: 10px
}

.experience-detail .media-tools>li {
  display: inline-block;
  float: right;
  margin-left: 8px
}

.experience-detail .media-tools>li>a {
  color: #333f4d;
  display: inline-block;
  font-size: 1.6em
}

.experience-detail .info {
  width: 60%;
  float: left;
  padding: 15px 28px
}

#favourites-list .experience-detail .info {
  width: 50%
}

.experience-detail .query-btn {
  display: inline-block;
  background-color: transparent;
  font-size: 11px;
  font-weight: 500;
  vertical-align: middle;
  color: #313340;
  margin-right: 10px;
  text-decoration: underline
}

.experience-detail .values {
  width: 270px;
  float: left;
  background-color: #fff
}

.experience-detail .values .values-wrapper {
  position: relative;
  padding: 22px 12px
}

.experience-detail .values .values-wrapper .widget {
  display: block;
  margin: 0
}

.experience-detail .values .values-wrapper .handlebar {
  position: absolute;
  height: 100%;
  width: 40px;
  top: 0;
  left: 0;
  cursor: pointer;
  visibility: hidden
}

.experience-detail .values .values-wrapper .handlebar .handlebar-ribbon {
  position: absolute;
  height: 35px;
  width: 10px;
  background-color: #e9971b;
  top: 18px;
  left: -10px;
  border-right: 3px solid #bf6c00
}

.experience-detail .values .values-wrapper .handlebar i {
  color: #e9971b;
  position: absolute;
  top: 8px;
  left: 15px;
  font-size: 21px
}

.experience-detail .experience-header {
  position: relative;
  width: 100%
}

.experience-detail .experience-header .type {
  display: block;
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 10px;
  color: #e9971b;
  text-transform: uppercase
}

.experience-detail .experience-header .title {
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.3;
  margin: .1em 0 .5em;
  color: #333f4d;
  text-decoration: none;
  cursor: pointer;
  display: block;
  float: left;
  word-wrap: break-word
}

.experience-detail .experience-header .title i {
  font-size: 18px;
  opacity: .8;
  filter: alpha(opacity=80)
}

.experience-detail .experience-header .title:hover {
  text-decoration: none;
  color: #e9971b
}

.experience-detail .experience-header .title .editable {
  padding: 0 10px 0 0;
  background-color: #fff3a3
}

.experience-detail .comment-text .editable:focus,
.experience-detail .experience-header .title .editable:focus {
  outline: 0!important
}

.experience-detail .experience-header .ico-edit {
  color: #e9971b;
  font-size: 1.5em;
  margin-left: 5px;
  cursor: pointer
}

.experience-detail .experience-header .separator {
  border-bottom: 1px solid #ccc;
  margin: 8px 0;
  clear: both
}

.experience-detail #mapview,
.experience-detail #mapview .map-detail,
.experience-detail #mapview .map-detail>div {
  width: 100%;
  height: 150px
}

.experience-detail #mapview .marker.journey {
  border: none
}

.experience-detail .descview {
  position: relative;
  line-height: 1.3
}

.experience-detail .descview .nano {
  line-height: 1.3
}

.experience-detail #descview .has-scrollbar:before,
.experience-detail #expsview .has-scrollbar:before {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 20px;
  height: 20px;
  z-index: 1;
  background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0, #fff 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(255, 255, 255, 0)), color-stop(100%, #fff));
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0, #fff 100%);
  background: -o-linear-gradient(top, rgba(255, 255, 255, 0) 0, #fff 100%);
  background: -ms-linear-gradient(top, rgba(255, 255, 255, 0) 0, #fff 100%);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #fff 100%)
}

.experience-detail .expsview-loading.expsview-loaded {
  visibility: hidden;
  opacity: 0;
  -webkit-transition: visibility 0s linear .5s, opacity .5s linear;
  -moz-transition: visibility 0s linear .5s, opacity .5s linear;
  -o-transition: visibility 0s linear .5s, opacity .5s linear;
  -ms-transition: visibility 0s linear .5s, opacity .5s linear;
  transition: visibility 0s linear .5s, opacity .5s linear
}

.experience-detail .comment-text {
  margin: 10px 0
}

.experience-detail .comment-text .editable {
  background-color: #fff3a3
}

.experience-detail .commands {
  width: 90px;
  height: 100%;
  position: absolute;
  right: -2px;
  top: 0
}

.experience-detail .commands .cmd>span>.lb-extra,
.experience-detail .commands.no-basket .addToJourney {
  display: none
}

.experience-detail .commands.no-basket .addToWishlist,
.experience-detail .commands.no-basket [data-action="add|wishlist"],
.experience-detail .commands.no-basket [data-action="remove|wishlist"] {
  padding-top: 110px;
  height: 100%
}

.experience-detail .commands .cmd {
  border-bottom: 1px solid #ffa822;
  background-color: #e9971b;
  text-align: center;
  height: 50%;
  display: block;
  color: #fff
}

.experience-detail .commands .cmd:hover {
  background-color: #fff;
  color: #e9971b
}

.experience-detail .commands .cmd>span {
  display: block;
  font-size: 10px;
  font-weight: 600;
  padding-top: 5px;
  padding-right: 10px;
  padding-left: 10px;
  max-width: 100px;
  margin: 5px auto 0;
  line-height: 1.3
}

.experience-detail .commands .cmd>i {
  font-size: 25px;
  padding-top: 46px;
  display: inline-block
}

.experience-detail .commands .cmd>i.ico-add-photo,
.experience-detail .commands .cmd>i.ico-add-video {
  font-size: 50px
}

.experience-detail .commands .cmd>i.ico-add-photo+.lb,
.experience-detail .commands .cmd>i.ico-add-video+.lb {
  margin: 0;
  padding: 0
}

.experience-detail .commands .addedToJourney {
  display: none;
  color: #619f1f;
  cursor: default
}

.experience-detail .commands .addedToJourney:hover {
  color: #619f1f;
  cursor: default
}

.experience-detail .commands .addToWishlist,
.experience-detail .commands [data-action="remove|journey"],
.experience-detail .commands [data-action="remove|wishlist"],
.injourney .experience-detail .commands [data-action="add|wishlist"] {
  display: none
}

.experience-detail .commands [data-action="remove|journey"]:hover {
  color: #c15048
}

.injourney .experience-detail .commands [data-action="remove|journey"] {
  display: block
}

.experience-detail .commands [data-action="remove|wishlist"]:hover {
  color: #c15048
}

.experience-detail .commands [data-action="add|wishlist"],
.inwishlist .experience-detail .commands [data-action="remove|wishlist"] {
  display: block
}

#detailFrame .experience-detail .experience-preview .experience-order,
#detailFrame .experience-detail.no-basket .addToJourney,
#favourites-list .experience-detail .commands .addToJourney,
#favourites-list .experience-detail.injourney .commands .addedToJourney,
.inwishlist .experience-detail .commands [data-action="add|wishlist"] {
  display: none
}

#favourites-list .experience-detail .experience-wrap {
  padding: 0
}

@media screen and (max-width:1400px) {
  #favourites-list .experience-detail .adv-label {
    width: 68%
  }
}

@media screen and (max-width:1200px) {
  #favourites-list .experience-detail .adv-label {
    width: 45%
  }
}

#detailFrame .experience-detail {
  height: 348px
}

#detailFrame .experience-detail .controls {
  display: block;
  width: 50px
}

#detailFrame .experience-detail .commands {
  right: 50px
}

#detailFrame .experience-detail.no-basket .addToWishlist,
#detailFrame .experience-detail.no-basket [data-action="add|wishlist"],
#detailFrame .experience-detail.no-basket [data-action="remove|wishlist"] {
  padding-top: 110px;
  height: 100%
}

#detailFrame .experience-detail.no-wishlist .addToJourney {
  padding-top: 100px;
  height: 100%
}

#detailFrame .experience-detail.no-basket.no-wishlist .commands,
#detailFrame .experience-detail.no-wishlist .addToWishlist {
  display: none
}

#detailFrame .experience-detail.no-basket.no-wishlist .info {
  width: 56%
}

@media screen and (max-width:1400px) {
  #detailFrame .experience-detail.no-basket.no-wishlist .info {
    width: 80%
  }
  #detailFrame .experience-detail.no-basket.no-wishlist .adv-label {
    width: 70%
  }
}

@media screen and (max-width:1300px) {
  #detailFrame .experience-detail.no-basket.no-wishlist .adv-label {
    width: 70%
  }
}

@media screen and (max-width:1200px) {
  #detailFrame .experience-detail.no-basket.no-wishlist .info {
    width: 46%
  }
  #detailFrame .experience-detail.no-basket.no-wishlist .adv-label {
    width: 50%
  }
}

@media screen and (max-width:989px) {
  #detailFrame .experience-detail.no-basket.no-wishlist .info {
    width: 68%
  }
  #detailFrame .experience-detail.no-basket.no-wishlist .values {
    right: -185px
  }
}

@media screen and (max-width:1700px) {
  #detailFrame .experience-detail .adv-label {
    width: 70%
  }
}

@media screen and (max-width:1400px) {
  #detailFrame .experience-detail .adv-label {
    width: 70%
  }
}

@media screen and (max-width:1300px) {
  #detailFrame .experience-detail .adv-label {
    width: 70%
  }
}

@media screen and (max-width:1200px) {
  #detailFrame .experience-detail .adv-label {
    width: 60%
  }
}

.embeddeds .experience-detail .commands .cmd>span>.lb-extra,
.journey-detail.journey .btn.btn-c4t.active .enabled {
  display: inline
}

.embedded .experience-detail .commands [data-action="add|wishlist"],
.embedded .experience-detail .commands [data-action="remove|wishlist"],
.experience-single-page .experience-detail [data-action="add|journey"],
.experience-single-page .experience-detail [data-action="remove|journey"],
.journey-single-page .experience-detail [data-action="remove|journey"],
.wishlist-single-page .experience-detail [data-action="add|journey"],
.wishlist-single-page .experience-detail [data-action="remove|journey"] {
  display: none!important
}

.embedded .experience-detail .commands .addToWishlist {
  display: block!important
}

#tool .experience-detail .commands .addToJourney,
#tool .experience-detail .injourney .commands [data-action="add|journey"],
.experience-single-page .experience-detail .experience-preview .experience-order,
.exploreStandalone .experience-detail .commands [data-action="add|journey"],
.wishlist-single-page .experience-detail .experience-preview .experience-order {
  display: none
}

#overlay-menumobile.visible,
#tool .experience-detail .commands [data-action="add|journey"],
.loggedout .experience-detail .commands .addToWishlist {
  display: block
}

.loggedout .experience-detail .commands [data-action="remove|journey"] {
  display: none!important
}

.experience-detail .tab-print,
.loggedout .experience-detail .commands [data-action="add|wishlist"] {
  display: none
}

.experience-detail .tabbed [data-switch] {
  overflow: hidden;
  padding-bottom: .5em
}

.experience-detail .tabbed [data-switch] span {
  display: inline-block;
  font-size: .875em;
  width: 50%;
  float: left;
  cursor: pointer;
  text-align: center;
  padding: 0 0 .5em;
  color: #555;
  border-bottom: 3px solid #ccc;
  font-weight: 800
}

.experience-detail .tabbed [data-switch] span.current {
  border-bottom: 3px solid #393b49;
  color: #393b49
}

.experience-detail .tabbed.item-3 [data-switch] span {
  width: 33.33%
}

@media screen and (max-width:1400px) {
  #favourites-list .experience-detail .info {
    width: 43%
  }
  #detailFrame .experience-detail .info {
    width: 45%
  }
}

@media screen and (max-width:1200px) {
  .experience-detail .info {
    width: 394px;
    padding: 15px
  }
  #favourites-list .experience-detail .info {
    width: 34%;
    padding: 15px 10px
  }
  #detailFrame .experience-detail .info {
    width: 35%
  }
}

@media screen and (max-width:989px) {
  .experience-detail .info {
    width: 440px;
    padding: 15px
  }
  #favourites-list .experience-detail .info {
    width: 63%
  }
  #detailFrame .experience-detail .info {
    width: 56%
  }
  .experience-detail .values {
    position: absolute;
    right: -148px;
    border-left: 1px solid #eee;
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease
  }
  .experience-detail .values .values-wrapper {
    padding: 22px 36px;
    transition: padding .3s ease;
    -webkit-transition: padding .3s ease;
    -moz-transition: padding .3s ease;
    -ms-transition: padding .3s ease;
    -o-transition: padding .3s ease
  }
  .experience-detail .values .values-wrapper .handlebar {
    visibility: visible
  }
  .experience-detail .values .values-wrapper .handlebar i {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
    -ms-transition: all .4s ease;
    -o-transition: all .4s ease
  }
  #detailFrame .experience-detail .values {
    right: -98px
  }
  .experience-detail.open .values {
    right: 80px
  }
  .experience-detail.open .values .values-wrapper {
    padding: 22px 20px
  }
  .experience-detail.open .values .values-wrapper .handlebar {
    width: 20px
  }
  .experience-detail.open .values .values-wrapper .handlebar i {
    -ms-transform: scale(0);
    -webkit-transform: scale(0);
    -o-transform-origin: scale(0);
    transform: scale(0)
  }
  #detailFrame .experience-detail.open .values {
    right: 142px
  }
  #detailFrame .experience-detail.open.no-basket.no-wishlist .values {
    right: 60px
  }
}

@media screen and (max-width:568px) {
  .experience-detail {
    height: auto
  }
  .experience-detail .experience-preview {
    height: 138px;
    width: 100%
  }
  .experience-detail .media-tools {
    display: none
  }
  .experience-detail .info {
    width: 100%
  }
  .experience-detail .commands,
  .experience-detail .values {
    display: none
  }
}

.journey-detail {
  min-height: 200px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding: 15px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-shadow: 0 0 1px 0 rgba(51, 63, 77, .3);
  box-shadow: 0 0 1px 0 rgba(51, 63, 77, .3)
}

.journey-detail.basket-empty .action-assign,
.journey-detail.basket-empty .basket-map,
.journey-detail.basket-empty .separator,
.journey-detail.basket-empty .status,
.journey-detail.basket-empty .tools-tit-block,
.journey-detail.basket-empty .values-wrapper,
.journey-detail.basket-empty .ws-prev-aree,
.journey-detail.basket-empty .ws-prev-naz,
.journey-detail.basket-empty [data-create-diary] {
  display: none!important
}

.journey-detail.basket-empty .journey-col {
  border: 0
}

.journey-detail.loading .basket-lock {
  visibility: visible;
  opacity: 1;
  -webkit-transition-delay: 0;
  -moz-transition-delay: 0;
  -o-transition-delay: 0;
  -ms-transition-delay: 0;
  transition-delay: 0
}

.journey-detail>.row>div {
  border-right: 1px solid #eee
}

.journey-detail>.row>div:last-child {
  border: 0
}

.journey-detail .journey-header .title {
  font-weight: 900;
  font-size: 2em;
  line-height: 1.1;
  margin: .1em 0 .5em;
  color: #333f4d;
  text-decoration: none;
  display: block;
  text-transform: uppercase;
  float: left;
  width: 92%
}

.journey-detail .fatlabel,
.journey-detail .status .label,
.journey-detail .timerange {
  color: #e9971b;
  font-weight: 900;
  text-transform: uppercase;
  font-size: .9em
}

.journey-detail .status .label {
  padding: 0;
  font-weight: 700;
  display: block
}

.journey-detail .status .label span {
  display: block;
  text-transform: lowercase;
  color: #333f4d;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis
}

.journey-detail .status .label span b {
  text-transform: capitalize;
  display: block;
  font-weight: 700
}

.journey-detail .fatlabel {
  font-weight: 800;
  font-size: 12px;
  margin: 5px 0 0
}

.journey-single-page .journey-detail .fatlabel {
  letter-spacing: 2px
}

.journey-detail .journey-assignee .assignee-mail {
  display: block;
  font-weight: 400;
  line-height: .9em;
  margin-bottom: 8px;
  padding-bottom: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%
}

.journey-detail .journey-assignee .assignee-name {
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%
}

.journey-detail .widget {
  display: block;
  margin: 0;
  min-height: 56px
}

.journey-detail .widget .seeds {
  margin-top: 15px
}

.journey-detail .widget .seeds>li {
  float: left;
  position: relative
}

.journey-detail .widget .seeds>li .perc {
  position: absolute;
  top: -1.5em;
  font-size: 10px;
  font-weight: 900;
  text-align: center;
  width: 100%
}

.journey-detail .ws-box span {
  cursor: pointer;
  font-weight: 900
}

.journey-detail .fromto {
  font-size: .9em;
  font-weight: 400;
  color: #aaa;
  opacity: 1;
  transition: opacity .2s ease;
  -webkit-transition: opacity .2s ease;
  -moz-transition: opacity .2s ease;
  -ms-transition: opacity .2s ease;
  -o-transition: opacity .2s ease
}

.journey-detail .fromto.hidden {
  opacity: 0
}

.journey-detail .fromto>div {
  margin: 0 0 18px
}

.journey-detail .fromto b {
  color: #333f4d
}

.journey-detail .ws-prev-aree,
.journey-detail .ws-prev-naz {
  font-size: .9em
}

.journey-detail .ws-prev-aree .vl,
.journey-detail .ws-prev-naz .vl {
  font-size: 1em!important;
  text-transform: capitalize;
  color: #aaa;
  font-weight: 400
}

.journey-detail .separator {
  border-bottom: 1px solid #eee;
  margin: 11px 0 14px
}

.journey-detail .journey-options-switch {
  background-color: #eee;
  height: 100%;
  width: 100%;
  z-index: 10;
  cursor: pointer;
  display: none;
  color: #333f4d;
  padding: 15px;
  text-align: center;
  text-transform: uppercase
}

@media screen and (max-width:567px) {
  .journey-detail .ws-box.ws-prev-aree,
  .journey-detail .ws-box.ws-prev-naz {
    display: none
  }
}

.journey-detail.journey .journey-col {
  float: left;
  padding: 0 1em
}

.journey-detail.journey .journey-col.journey-col-1 {
  width: 50%
}

.journey-detail.journey .journey-col.journey-col-2 {
  width: 260px
}

.journey-detail.journey .journey-col.journey-col-3 {
  width: 300px
}

.journey-detail.journey .title {
  font-size: 1.3em!important
}

.journey-detail.journey .title .editable {
  padding: 0 .2em;
  margin: .2em 0;
  background-color: #fff3a3
}

.journey-detail.journey .title .editable:focus {
  outline: 0!important
}

.journey-detail.journey .values-wrapper {
  position: relative;
  padding: 2px 0;
  background-color: #fff;
  overflow: visible
}

.journey-detail.journey .values-wrapper .handlebar {
  position: absolute;
  height: 100%;
  width: 40px;
  top: 0;
  left: 0;
  cursor: pointer;
  visibility: hidden
}

.journey-detail.journey .values-wrapper .handlebar .handlebar-ribbon {
  position: absolute;
  height: 35px;
  width: 10px;
  background-color: #e9971b;
  top: 18px;
  left: -10px;
  border-right: 3px solid #bf6c00
}

.journey-detail.journey .values-wrapper .handlebar i {
  color: #e9971b;
  position: absolute;
  top: 8px;
  left: 15px;
  font-size: 21px
}

.journey-detail.journey [data-actions] {
  min-height: 0!important
}

.journey-detail.journey .widget {
  min-height: 40px
}

.journey-detail.journey .btn {
  display: inline-block;
  padding: 0;
  overflow: hidden;
  width: 16.35%
}

.journey-detail.journey .btn.btn-fluidtrailer {
  display: block;
  width: auto;
  margin: 10px 15px 0;
  background: url(/assets/img/film.png) repeat-x left top;
  background-size: auto 100%;
  border-left: 3px solid #353637;
  border-right: 3px solid #353637;
  clear: both
}

.journey-detail.journey .btn.btn-fluidtrailer:hover {
  background-color: transparent
}

.journey-detail.journey .btn.btn-c4t {
  display: none;
  position: relative;
  overflow: visible;
  padding: 0;
  width: auto;
  margin: 0 15px;
  background: #e9971b;
  text-align: center;
  opacity: 1;
  clear: both
}

.journey-detail.journey .btn.btn-c4t .enabled,
.journey-detail.journey .btn.btn-c4t.active .disabled {
  display: none
}

.journey-detail.journey .btn.btn-c4t .disabled {
  position: relative;
  z-index: 999
}

.journey-detail.journey .btn.btn-c4t.active {
  display: block;
  background: #7fb608;
  opacity: 1;
  cursor: pointer
}

.journey-detail.journey .btn.btn-c4t.active:hover {
  background-color: #7fb608
}

.journey-detail.journey .btn.btn-c4t.active:after,
.journey-detail.journey .btn.btn-c4t.active:before {
  opacity: 0;
  top: -30px;
  right: -30px;
  bottom: -30px;
  left: -30px;
  background: #7fb608
}

.journey-detail.journey .btn.btn-c4t:hover {
  background-color: #e9971b
}

.btn-c4t:after,
.btn-c4t:before,
.journey-detail.journey .btn.btn-c4t:after,
.journey-detail.journey .btn.btn-c4t:before {
  content: '';
  position: absolute;
  opacity: .6;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #e9971b;
  -webkit-transition: opacity .4s ease-in-out, top .4s ease-in-out, right .4s ease-in-out, left .4s ease-in-out, bottom .4s ease-in-out, z-index 1s ease-in-out;
  transition: opacity .4s ease-in-out, top .4s ease-in-out, right .4s ease-in-out, left .4s ease-in-out, bottom .4s ease-in-out, z-index 1s ease-in-out
}

.btn-c4t:before,
.journey-detail.journey .btn.btn-c4t:before {
  -webkit-transition: opacity .2s ease-in-out .4s, top .2s ease-in-out .4s, right .2s ease-in-out .4s, left .2s ease-in-out .4s, bottom .2s ease-in-out .4s;
  transition: opacity .2s ease-in-out .4s, top .2s ease-in-out .4s, right .2s ease-in-out .4s, left .2s ease-in-out .4s, bottom .2s ease-in-out .4s
}

.journey-detail.journey .btn.action-assign {
  width: 100%;
  height: 95px;
  padding: 28px 0
}

@media screen and (max-width:1200px) {
  .journey-detail.journey .btn {
    width: 16.25%
  }
  .journey-detail.journey .journey-col.journey-col-1 {
    width: 38%
  }
}

@media screen and (max-width:992px) {
  .journey-detail.journey {
    min-height: 340px;
    overflow-x: hidden
  }
  .journey-detail.journey .journey-col.journey-col-1 {
    width: 100%;
    padding-right: 40px
  }
  .journey-detail.journey .journey-col.journey-col-2 {
    position: absolute;
    top: 0;
    right: -262px;
    width: 308px;
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease
  }
  .journey-detail.journey .journey-col.journey-col-2 .values-wrapper {
    padding-left: 38px;
    padding-top: 8px;
    border-left: 1px solid #eee
  }
  .journey-detail.journey .journey-col.journey-col-2 .values-wrapper .handlebar {
    visibility: visible
  }
  .journey-detail.journey .journey-col.journey-col-2 .values-wrapper .handlebar i {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
    -ms-transition: all .4s ease;
    -o-transition: all .4s ease
  }
  .journey-detail.journey .journey-col.journey-col-3 {
    display: none
  }
  .journey-detail.journey.open .journey-col.journey-col-2 {
    right: -12px
  }
  .journey-detail.journey.open-options .journey-options {
    max-height: 1000px
  }
  .journey-detail.journey .btn.action-assign {
    height: 40px;
    padding: 2px
  }
  .journey-detail.journey [data-actions] {
    width: 100%;
    margin-top: 60px
  }
  .journey-detail.journey .journey-options {
    max-height: 0;
    overflow: hidden;
    padding: 10px 0 0;
    transition: max-height .4s ease-in-out;
    -webkit-transition: max-height .4s ease-in-out;
    -moz-transition: max-height .4s ease-in-out;
    -ms-transition: max-height .4s ease-in-out;
    -o-transition: max-height .4s ease-in-out
  }
  .journey-detail.journey .btn {
    width: 49.5%
  }
  .journey-detail.journey .journey-options-switch {
    display: block
  }
}

@media screen and (max-width:568px) {
  .journey-detail.journey [data-clone],
  .journey-detail.journey [data-edit],
  .journey-detail.journey [data-rename] {
    display: none
  }
}

@media screen and (max-width:435px) {
  .journey-detail.journey .btn {
    width: 100%
  }
  .journey-detail.journey .status .label {
    text-align: center;
    padding: 10px 0
  }
}

.page.emptybasket [data-fromto] {
  visibility: hidden;
  height: 0;
  overflow: hidden
}

.page.emptybasket .basket-map,
.page.emptybasket .detailContent {
  display: none
}

.page.emptybasket .ws-box {
  visibility: hidden
}

.has-diary .journey-options [data-create-diary],
.journey-options [data-view-diary] {
  display: none!important
}

.has-diary .journey-options [data-view-diary] {
  display: inline-block!important
}

.role-travelagents .journey-options [data-create-diary] {
  display: none!important
}

.cbp-spmenu ul li a,
.savebeta,
.savetravel {
  width: 100%
}

.savebeta ul,
.savetravel ul {
  list-style: none
}

.savebeta p.full,
.savetravel p.full {
  text-align: center;
  font-size: 1.2em;
  padding: 1em 0 0;
  color: #fff
}

.savebeta .confirm-hidden,
.savetravel .confirm-hidden {
  height: 0;
  overflow: hidden;
  z-index: 12;
  position: relative;
  background: #fff;
  margin-top: 0;
  transition: height .3s ease, margin-top .3s ease;
  -webkit-transition: height .3s ease, margin-top .3s ease;
  -moz-transition: height .3s ease, margin-top .3s ease;
  -ms-transition: height .3s ease, margin-top .3s ease;
  -o-transition: height .3s ease, margin-top .3s ease
}

.savebeta .confirm-hidden.expand,
.savetravel .confirm-hidden.expand {
  margin-top: -9em;
  padding: 0;
  height: 340px
}

.savebeta .confirm-hidden h2,
.savetravel .confirm-hidden h2 {
  margin: 0
}

.savebeta .confirm-hidden p,
.savetravel .confirm-hidden p {
  padding: .5em 2em;
  font-size: 1em
}

.savebeta .confirm-hidden textarea,
.savetravel .confirm-hidden textarea {
  width: 100%;
  height: 90px;
  max-width: 100%;
  min-width: 100%;
  max-height: 90px;
  min-height: 90px
}

.savebeta .savetravel-header,
.savetravel .savetravel-header {
  padding: 3em 0;
  overflow: hidden;
  position: relative;
  background-color: #393b49;
  text-align: center
}

.savebeta .savetravel-header .header-title,
.savetravel .savetravel-header .header-title {
  font-size: 3em;
  font-weight: 900;
  color: #fff
}

.savebeta .savetravel-header p,
.savetravel .savetravel-header p {
  color: #fff;
  font-size: 1.2em
}

.savebeta .savetravel-header *,
.savetravel .savetravel-header * {
  z-index: 1;
  position: relative
}

.savebeta .savetravel-header ._picture,
.savetravel .savetravel-header ._picture {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: .3;
  filter: alpha(opacity=30);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0
}

.savebeta .savetravel-header h2,
.savetravel .savetravel-header h2 {
  font-size: 36px;
  font-weight: 400;
  color: #fff;
  line-height: 1;
  margin: 0;
  padding: 0;
  text-transform: inherit;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis
}

.savebeta .savetravel-header ._share,
.savetravel .savetravel-header ._share {
  text-align: center;
  float: right;
  width: 30%
}


.dialog-confirm .agente.agente-preview .agente-wrapper {
  display: block;
  color: #333f4d;
  background: #f8f8f8;
  padding: 2em;
  border: 1px solid #e4e4e4;
  margin: 0;
  font-size: .875em
}

.dialog-confirm .ask-more {
  text-align: center;
  font-size: 1.225em;
  font-weight: 600;
  margin: 0;
  padding: 1em
}

.dialog-confirm .agente-meta {
  margin-left: 100px
}
.coolquiz .nl-field.nl-field-open ul {
  visibility: visible;
  opacity: 1;
  -webkit-transform: translateY(-50%) scale(1);
  -moz-transform: translateY(-50%) scale(1);
  transform: translateY(-50%) scale(1);
  -webkit-transition: visibility 0s 0s, opacity .3s, -webkit-transform .3s;
  -moz-transition: visibility 0s 0s, opacity .3s, -moz-transform .3s;
  transition: visibility 0s 0s, opacity .3s, transform .3s
}

.coolquiz .nl-field ul li {
  color: #fff;
  position: relative;
  font-size: .9em;
  line-height: 1.2em
}

.coolquiz .nl-dd ul li {
  padding: 0 1.5em 0 .5em;
  cursor: pointer;
  white-space: nowrap
}

.coolquiz .nl-dd ul li.nl-dd-checked,
.coolquiz .no-touch .nl-dd ul li:hover,
.coolquiz .no-touch .nl-dd ul li:hover:active {
  color: #905c0e
}

.coolquiz .nl-dd ul li.nl-dd-checked:before,
.coolquiz .nl-field-go:before,
.coolquiz .nl-submit:before {
  font-family: 'fluidtravel\';
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased
}

.coolquiz .nl-dd ul li.nl-dd-checked:before {
  content: "\e61e";
  position: absolute;
  right: 1em;
  font-size: 50%;
  line-height: 3
}

.coolquiz .nl-ti-text ul {
  min-width: 8em
}

.coolquiz .nl-form .nl-field-go {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  cursor: pointer;
  background: rgba(0, 0, 0, .1);
  width: 1.8em;
  text-align: center;
  color: transparent
}

.coolquiz .nl-field-go:before {
  content: "\e61e";
  font-size: 75%;
  color: #fff;
  width: 100%;
  line-height: 2.5;
  display: block
}

.coolquiz input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, .8)
}

.coolquiz input::-moz-placeholder {
  color: rgba(255, 255, 255, .8)
}

.coolquiz input:-ms-input-placeholder {
  color: rgba(255, 255, 255, .8)
}

.coolquiz .nl-ti-text ul li.nl-ti-example {
  font-size: 40%;
  font-style: italic;
  font-weight: 400;
  padding: .4em 1em;
  color: rgba(0, 0, 0, .2);
  border-top: 1px dashed rgba(255, 255, 255, .7)
}

.coolquiz .nl-submit-wrap {
  margin-top: .4em
}

.coolquiz .nl-form .nl-reject,
.coolquiz .nl-form .nl-submit {
  line-height: 3;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  font-size: .3em;
  font-weight: 700;
  letter-spacing: 3px
}

.coolquiz .nl-form .nl-submit {
  background: #e9971b;
  color: #fff;
  padding: 0 1em 0 0
}

.coolquiz .nl-form .nl-reject {
  background: #efefef;
  color: #333;
  padding: 0 1em
}

.coolquiz .nl-submit:before {
  content: "\e61e";
  color: #fff;
  float: left;
  padding: 0 .7em;
  margin: 0 .8em 0 0;
  height: 48px;
  width: 48px;
  background-color: #905c0e!important
}

.coolquiz .loading:before {
  content: "";
  height: 48px;
  width: 48px
}

.coolquiz .nl-submit.disabled {
  opacity: .5
}

.coolquiz .nl-form .nl-submit:active,
.coolquiz .nl-form .nl-submit:hover {
  background: #905c0e!important
}

.coolquiz .no-touch .nl-form .loading:active,
.coolquiz .no-touch .nl-form .loading:hover {
  background: #e9971b
}

.coolquiz .no-touch .nl-form .nl-submit:hover:before {
  background: #905c0e
}


.coolquiz .nl-field.nl-field-open~.nl-overlay {
  opacity: 1;
  visibility: visible;
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  transition-delay: 0s
}

.coolquiz .float-right {
  float: right
}

.coolquiz .float-left {
  float: left
}

@media screen and (max-width:45em) {
  .coolquiz .nl-form {
    font-size: 3em
  }
}

@media screen and (max-width:25em) {
  .coolquiz .nl-form {
    font-size: 2em
  }
}

.coolquiz .nl-ti-text ul li.nl-ti-input.nl-error .nl-field-go:before {
  color: #333f4d;
  content: "\e60a"
}

.jBox-content .quiz {
  width: 925px;
  min-height: 664px;
  position: relative;
  top: auto;
  left: auto;
  overflow: visible;
  background-color: transparent
}

@media screen and (max-width:768px) {
  .jBox-content .quiz {
    width: 730px
  }
}

.location-geocoder {
  padding: 1em 4em
}

.location-geocoder h3,
.search-experience h3,
.uploader-view h3 {
  font-weight: 900;
  text-transform: none;
  margin: 20px 0
}

.location-geocoder * {
  outline: none
}

.location-geocoder label,
.uploader-view.uploader-video .video-input label {
  text-transform: uppercase;
  font-size: .9em;
  font-weight: 900;
  letter-spacing: .02em;
  display: block
}

.location-geocoder input {
  border: 1px solid #80839b;
  border-radius: 3px;
  width: 100%;
  padding: 8px 15px;
  margin: 5px 15px 5px 0
}

.location-geocoder input:focus,
.location-geocoder input:hover {
  background-color: #f9f9f9
}

.location-geocoder input:focus {
  box-shadow: 0 0 3px #bebebe
}

@media screen and (max-width:320px) {
  .location-geocoder {
    width: 300px
  }
}

.bootstrap-datetimepicker-widget {
  background-color: #fff;
  width: 100%!important;
  position: absolute;
  z-index: 99991;
  border: 1px solid #bebebe;
  box-shadow: 0 3px 0 rgba(241, 241, 241, .9)
}

.bootstrap-datetimepicker-widget .separator {
  margin: 0!important;
  border: 0!important
}

.bootstrap-datetimepicker-widget th.next,
.bootstrap-datetimepicker-widget th.prev {
  color: #e9971b;
  font-size: 1.6em
}

.bootstrap-datetimepicker-widget .btn>span {
  display: inline-block;
  width: 54px;
  height: auto;
  line-height: 0;
  margin: 2px 1.5px;
  cursor: pointer;
  border-radius: 4px;
  color: #e9971b;
  font-size: 2em
}

.bootstrap-datetimepicker-widget .btn>span:hover {
  color: #bf7a12
}

.bootstrap-datetimepicker-widget :hover {
  background-color: transparent!important
}

.bootstrap-datetimepicker-widget table td span.active,
.bootstrap-datetimepicker-widget table td.active,
.bootstrap-datetimepicker-widget table td.active:hover {
  background-color: #e9971b!important;
  border-radius: 0
}

.bootstrap-datetimepicker-widget table thead tr:first-child th {
  text-transform: capitalize
}

[data-datetime] input {
  border: 0
}

[data-datetime] .btn {
  background-color: #fff
}

.datepicker-days table thead tr:first-child,
.timepicker-picker table tbody tr:first-child {
  border-bottom: 1px solid #f1f1f1
}

.timepicker-picker table tbody tr:last-child {
  border-top: 1px solid #f1f1f1
}

.timepicker-picker table tbody tr a {
  color: #000
}

.search-experience {
  padding: 1em 4em
}

@media (max-width:568px) {
  .search-experience {
    padding: 1em 2.8em
  }
}

.search-experience h4 {
  padding-top: 8px
}

.search-experience .btn.confirm {
  width: 100%;
  margin: 20px 0
}

.search-experience .btn.confirm:disabled,
.uploader-view .btn.confirm:disabled {
  opacity: .5
}

.search-experience input {
  border: 1px solid #80839b;
  border-radius: 3px;
  width: 80%;
  padding: 8px 15px;
  margin: 5px 15px 25px 0;
  float: left
}

.search-experience input:focus,
.search-experience input:hover,
.uploader-view.uploader-video .video-input input:focus,
.uploader-view.uploader-video .video-input input:hover {
  background-color: #f9f9f9
}

.search-experience input:focus {
  box-shadow: 0 0 3px #bebebe;
  border: 1px solid #80839b
}

.search-experience button.submit {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  background-color: #c15048;
  color: #fff;
  padding: .6em .8em;
  font-size: 10px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0;
  border: 0;
  position: relative;
  top: 2px
}

.search-experience button.submit:hover,
.uploader-view.uploader-video .video-input .ico-close:hover {
  background-color: #a03d36
}

.search-experience .cmd.add {
  color: #fff;
  border: 3px solid #fff;
  height: 85px;
  width: 44%;
  text-align: center;
  padding: .5em .6em;
  margin: .3em;
  float: left
}

.uploader-view {
  padding: 1em 4em
}

.uploader-view .btn.confirm {
  width: 100%;
  margin: 20px 0
}

.uploader-view.uploader-video .video-input * {
  outline: none
}

.uploader-view.uploader-video .video-input input {
  border: 1px solid #80839b;
  border-radius: 3px;
  width: 90%;
  padding: 8px 15px;
  margin: 5px 15px 5px 0
}

.uploader-view.uploader-video .video-input input:focus {
  box-shadow: 0 0 3px #bebebe
}

.uploader-view.uploader-video .video-input.not-valid>input {
  border-color: #c15048
}

.uploader-view.uploader-video .video-input>.help-not-valid {
  display: block;
  color: #c15048;
  font-size: .9em
}

.uploader-view .add-a-field i,
.uploader-view.uploader-video .video-input .ico-close {
  background-color: #c15048;
  color: #fff;
  padding: .6em;
  font-size: 10px;
  border-radius: 3px;
  cursor: pointer
}

.uploader-view .add-a-field,
.uploader-view .add-a-field:hover {
  transition: all ease 150ms;
  -webkit-transition: all ease 150ms;
  -moz-transition: all ease 150ms;
  -o-transition: all ease 150ms;
  -ms-transition: all ease 150ms
}

.uploader-view .add-a-field {
  color: #393b49;
  display: block;
  margin-top: 5px
}

.uploader-view .add-a-field i {
  background-color: #e9971b;
  padding: .1em .14em;
  font-size: 18px;
  position: relative;
  top: 3px;
  margin-right: 5px
}

.uploader-view .add-a-field:hover {
  margin-left: 5px
}

.uploader-view .add-a-field:hover>i {
  background-color: #d68915
}

.uploader-view.uploader-image .fileupload {
  position: relative;
  overflow: hidden;
  border: 2px dashed #a4a4a4;
  border-radius: 2px;
  width: 100%;
  height: 150px
}

.uploader-view.uploader-image .fileupload input[type=file] {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 150px;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0)
}

.uploader-view.uploader-image .textupload {
  position: absolute;
  top: 35px;
  width: 200px;
  left: 50%;
  margin-left: -100px
}

.uploader-view.uploader-image .textupload .btn:hover {
  background-color: inherit
}

.uploader-basethumb {
  width: 18%;
  height: 18%;
  padding-bottom: 18%;
  margin: 15px 2.5% 0 0
}

@media screen and (min-width:569px) {
  .uploader-basethumb:nth-child(5n+5) {
    margin: 15px 0 0
  }
}

@media screen and (max-width:568px) {
  .uploader-basethumb {
    width: 23%;
    height: 23%;
    padding-bottom: 23%
  }
  .uploader-basethumb:nth-child(4n+4) {
    margin: 15px 0 0
  }
}

.uploader-placeholder,
.uploader-thumb {
  display: inline-block;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 3px
}

.uploader-thumb>.ico-close {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #c15048;
  color: #fff;
  padding: .6em;
  font-size: 10px;
  border-radius: 10em;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(51, 63, 77, .5);
  cursor: pointer
}


.uploader-lock {
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: .5;
  display: none
}

.tiles-list {
  border-bottom: 1px solid #f1f1f1
}

.tiles-group-head {
  padding: 15px;
  display: table;
  width: 100%;
  border-bottom: 2px solid #333f4d
}

.tiles-group-head h3 {
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-size: 1.35em;
  text-transform: none;
  color: #e9971b
}

.jBox-Notice.removeToast .jBox-container .jBox-content b,
.tiles-group-head h3 .tile-area {
  color: #333f4d
}

.tiles-group-head .addtile-action {
  text-align: right;
  font-weight: 900;
  font-size: 1em;
  text-transform: none;
  font-family: 'Montserrat', Helvetica, Arial, Sans-serif;
  cursor: pointer
}

.journey-header .title {
  float: left;
  width: 92%;
  word-wrap: break-word
}

.journey-header .editable {
  padding: 0 10px 0 0;
  background-color: #fff3a3
}

.journey-header .editable:focus {
  outline: 0!important
}

.journey-header .ico-edit {
  color: #e9971b;
  font-size: 2.1em;
  float: right;
  width: 6%;
  margin-left: 6px;
  position: relative;
  top: 5px
}

@media screen and (max-width:320px) {
  .journey-header .ico-edit {
    position: absolute;
    top: 0
  }
}

.comment-text .textarea-field {
  width: 100%;
  height: 90px;
  position: relative
}

.comment-text textarea {
  background-color: #f1f1f1;
  border: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  resize: none
}

.comment-text button {
  margin-top: 5px
}

.comment-text [data-editsavebtn] {
  display: none
}

.comment-text .editing [data-editsavebtn],
.comment-text [data-editbtn] {
  display: inline-block
}

.comment-text .editing [data-editbtn],
.comment-text .print-helper {
  display: none
}

.comment-text .not-valid textarea {
  border: 1px solid #c15048
}

.datetime-editor .ico-calendar {
  font-size: .9em
}

.datetime-editor input,
.gauge span.title {
  text-transform: uppercase;
  font-family: 'Montserrat', Helvetica, Arial, Sans-serif
}

.datetime-editor input {
  font-weight: 900!important;
  letter-spacing: .03em;
  font-size: .9em;
  width: auto
}

.datetime-editor .ico-edit {
  color: #e9971b;
  font-size: 1.2em
}

.jBox-Modal .jBox-content {
  padding: 0!important
}

.jBox-Modal .jBox-content .whiteBox {
  padding: 4em 4em 2em;
  margin: 0
}

.jBox-Modal .jBox-content .whiteBox p {
  max-width: 350px
}

.jBox-Modal.noCloseButton .jBox-closeButton {
  display: none!important
}

.modal-dialog {
  margin-top: 50px!important
}

.modal.fade {
  -webkit-transition: opacity .1s linear, none!important;
  -moz-transition: opacity .1s linear, none!important;
  -ms-transition: opacity .1s linear, none!important;
  -o-transition: opacity .1s linear, none!important;
  transition: opacity .1s linear, none!important
}

.modal .modal-content {
  border: none;
  border-radius: 0
}

.modal .modal-content>.modal-body,
.sidebar .pack .info h2 {
  padding: 0
}

.modal .modal-content>.close {
  position: absolute;
  margin-top: 0;
  right: -10px;
  top: -10px;
  height: 24px;
  width: 24px;
  background: #fff;
  border-radius: 50%;
  border: 0;
  font-size: .8em;
  padding-top: 4px;
  z-index: 5
}

.modal {
  z-index: 99992
}

.modal-backdrop {
  z-index: 99991
}

.jBox-Notice .jBox-container {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-shadow: 3px 3px 0 0 rgba(0, 0, 0, .2);
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, .2);
  color: #fff;
  text-shadow: none;
  background: #393b49;
  background-image: none
}

.jBox-Notice .jBox-container .jBox-content,
.jBox-Notice.removeToast .jBox-container .jBox-content {
  color: #fff;
  font-weight: 600
}

.jBox-Notice.removeToast .jBox-container {
  background-image: none;
  text-shadow: none;
  background-color: #c15048
}

footer {
  margin-top: 50px;
  background-color: #efefef
}

.logo-basic,
.logo-embed {
  background-repeat: no-repeat
}


.logo-embed {
  background-position: 50% 50%;
  background-size: cover;
  width: 140px;
  height: 42px;
  float: left;
  margin: 10px 0 0
}

.btn-fluidtrailer {
  background: url(/assets/img/film.png) repeat-x left top;
  background-size: auto 100%;
  border-left: 3px solid #353637;
  border-right: 3px solid #353637
}

.btn-c4t {
  position: relative;
  overflow: visible;
  padding: 0;
  width: auto;
  margin: 0;
  background: #e9971b;
  text-align: center;
  opacity: 1
}

.btn-c4t,
.btn-c4t .enabled {
  display: none
}

.btn-c4t .disabled {
  position: relative;
  z-index: 999
}

.btn-c4t.active {
  display: block;
  background: #7fb608;
  opacity: 1;
  cursor: pointer
}

.btn-c4t.active .enabled,
.side.actions .btn.full.wishlist span.up {
  display: inline
}

#showRight,
.btn-c4t.active .disabled,
.cbp-spmenu ul li>ul,
.cbp-spmenu ul ul.userMenu li.sep,
.cbp-spmenu ul.spmenu-specialized .userLogged .userMenu .name-full-mobile {
  display: none
}

.btn-c4t.active:hover {
  background-color: #7fb608
}

.btn-c4t.active:after,
.btn-c4t.active:before {
  opacity: 0;
  top: -30px;
  right: -30px;
  bottom: -30px;
  left: -30px;
  background: #7fb608
}

.btn-c4t:hover,
.journeyDetail #daysCarouselWrap #daysCarousel .current .item {
  background-color: #e9971b
}

.gauge {
  margin: 10px 0 0;
  background-color: transparent
}

.gauge.relax,
.gauge.relax a {
  color: #e9971b
}

.gauge.landscapes,
.gauge.landscapes a {
  color: #ff7f66
}

.gauge.discovering,
.gauge.discovering a {
  color: #b1778f
}

.gauge.cultures,
.gauge.cultures a {
  color: #c15048
}

.gauge.fun,
.gauge.fun a {
  color: #789ab3
}

.gauge.adventures,
.gauge.adventures a {
  color: #7fb608
}

.gauge .svg,
.gauge i {
  position: relative;
  z-index: 2
}

.gauge svg {
  margin-left: -7px
}

.gauge i {
  font-size: 32px;
  width: 100%;
  display: block;
  top: -19px;
  z-index: 0
}

.gauge span.title {
  font-weight: 300
}

.gauge a.off {
  text-transform: uppercase;
  font-size: 9px;
  display: inline-block;
  position: relative;
  padding: 2px 5px;
  top: -14px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box
}

.gauge a.off:hover {
  text-decoration: none;
  background-color: #fff
}

#overlay-menumobile {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .85);
  display: none;
  z-index: 99998;
  top: 0
}

.cbp-spmenu {
  background-color: #fff;
  position: fixed;
  width: 240px;
  height: 100%;
  top: 0;
  z-index: 99999;
  right: -240px;
  border-left: 5px solid rgba(0, 0, 0, .75);
  text-align: left;
  transition: all ease 250ms;
  -webkit-transition: all ease 250ms;
  -moz-transition: all ease 250ms;
  -ms-transition: all ease 250ms;
  -o-transition: all ease 250ms
}

.cbp-spmenu.cbp-spmenu-open {
  right: 0
}

.cbp-spmenu a {
  display: block;
  color: #333f4d;
  font-size: 1.05em;
  border-bottom: 1px solid #f2f2f2;
  padding: .5em;
  text-decoration: none!important;
  text-transform: uppercase;
  font-weight: 900
}

.cbp-spmenu a:active {
  background: #eee;
  color: #fff
}

.cbp-spmenu a#hideRight {
  height: 75px;
  color: #e9971b;
  text-align: right;
  font-size: 22px;
  padding: 24px 25px
}

.cbp-spmenu ul {
  border-bottom: 5px solid #e4e4e4
}

.cbp-spmenu ul li .ico-arrow-down2 {
  margin-top: 2px;
  float: right
}

.cbp-spmenu ul ul.userMenu {
  border-top: 0
}

.cbp-spmenu ul.spmenu-specialized li {
  background-color: #f1f1f1;
  border-bottom: 1px solid #e4e4e4
}

.cbp-spmenu ul.spmenu-specialized .userLogged .userMenu {
  overflow-y: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, .5, 1);
  -webkit-transition: max-height .5s cubic-bezier(0, 1, .5, 1);
  -moz-transition: max-height .5s cubic-bezier(0, 1, .5, 1);
  -ms-transition: max-height .5s cubic-bezier(0, 1, .5, 1);
  -o-transition: max-height .5s cubic-bezier(0, 1, .5, 1)
}

.cbp-spmenu ul.spmenu-specialized .userLogged.open .userMenu {
  max-height: 120px
}

.cbp-spmenu ul li.menuitem-open .ico-arrow-down2,
.cbp-spmenu ul.spmenu-specialized .userLogged.open .ico-arrow-down2 {
  -webkit-transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  transform: rotate(-180deg)
}

.tuner h2 {
  margin: 50px 0 0;
  font-size: 14px;
  text-align: center
}

.slider .slide {
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -ms-behavior: url(/assets/css/backgroundsize.htc);
  behavior: url(/assets/css/backgroundsize.htc);
  min-height: 500px;
  width: 100%
}

.slider .slide:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(57, 59, 73, .5)
}

.slider .slide .container {
  position: relative;
  height: 100%
}

.slider .slide .slideDesc {
  position: absolute;
  bottom: 35px;
  color: #fff;
  z-index: 1;
  font-size: 13px;
  text-align: right;
  width: 100%;
  opacity: .85;
  filter: alpha(opacity=85)
}

.slider .slide .slideDesc .location {
  border-right: 1px solid #fff;
  padding: 0 15px 0 0;
  margin-right: 10px;
  line-height: 1;
  display: inline-block
}

.slider .slide .slideDesc .vediDettaglio {
  color: #e9971b;
  position: relative;
  margin-left: 10px
}

.slider .slide .advs {
  opacity: .8
}

.slider .slide .advs .adv {
  width: 50px;
  height: 50px;
  margin: 5px auto 0;
  padding: 0
}

.slider .slide .advs .adv .adv-logo {
  width: 50px;
  height: 50px
}

.slider .slide .corner {
  position: absolute;
  transition: opacity .3s ease-in;
  -webkit-transition: opacity .3s ease-in;
  -moz-transition: opacity .3s ease-in;
  -ms-transition: opacity .3s ease-in;
  -o-transition: opacity .3s ease-in
}

.slider .slide .corner.corner-bottomleft {
  bottom: 0;
  left: 0
}

.slider .slide .corner.corner-topright {
  top: 115px;
  right: 20px
}

.side.actions .btn.full.wishlist.inwishlist:hover .ico-star,
.slider .slide .corner.tritag,
.what .recommendedwho li i {
  color: #fff
}

.slider .slide .corner.tritag i,
.slider .slide .corner.tritag small,
.slider .slide .corner.tritag span {
  position: absolute;
  top: 58px;
  left: 18px;
  font-size: 25px
}

.slider .slide .corner.tritag span {
  font-weight: 600;
  font-size: .75em;
  text-shadow: 0 0 10px #393b49
}

.slider .slide .corner.tritag .exp-pack,
.slider .slide .corner.tritag .exp-travel {
  border-style: solid;
  border-width: 110px 0 0 110px
}

.slider .slide .corner.tritag .exp-pack {
  border-color: transparent transparent transparent rgba(127, 182, 8, .8)
}

.slider .slide .corner.tritag .exp-pack>i,
.slider .slide .corner.tritag .exp-travel>i {
  font-size: 30px
}

.slider .slide .corner.tritag .exp-travel {
  border-color: transparent transparent transparent rgba(255, 127, 102, .8)
}

@media screen and (max-width:767px) {
  .slider .slide .corner {
    display: none
  }
}

.widget {
  margin-bottom: 1em
}

.widget:after,
.widget:before {
  content: " ";
  display: table
}

.widget:after {
  clear: both
}

.widget>h2 {
  text-transform: uppercase;
  color: #333f4d;
  font-weight: 800;
  border-bottom: 4px solid #dedad1;
  margin: 2.5em 0 1em
}

.widget .pack .tapped .hover,
.widget .pack:hover .hover {
  border-width: .2em
}

.widget .pack .actions-list>li {
  margin: .2em .2em .2em 0
}

.widget .pack .actions-list>li>a {
  width: 5em;
  height: 5em;
  border: .126em solid rgba(255, 255, 255, .53)
}

.widget .pack .actions-list>li>a i {
  margin: 9px 0 7px;
  font-size: 1.643em
}

.widget .pack .actions-list>li>a b {
  font-size: .529em
}

.sidebar {
  margin: 0
}

.sidebar .widget>h2 {
  border: none;
  margin: 1.3em 0 1em;
  line-height: 1.2;
  -webkit-box-shadow: inset 0 -3px 0 0 #bebebe;
  box-shadow: inset 0 -3px 0 0 #bebebe
}

.sidebar .pack {
  height: 200px;
  font-size: 1.4em;
  margin: 0;
  -webkit-box-shadow: inset -2em -2em 6em .5em rgba(0, 0, 0, .6);
  box-shadow: inset -2em -2em 6em .5em rgba(0, 0, 0, .6)
}

.sidebar .pack .seeds {
  display: none
}

.sidebar .pack .info {
  text-shadow: none;
  text-transform: uppercase
}

.sidebar .pack .info p {
  display: block;
  font-size: 1em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
  opacity: .75;
  filter: alpha(opacity=75)
}

.sidebar .thumbs,
.widget>h2 {
  font-size: 1em
}

.sidebar .thumbs>li {
  width: 100%;
  float: none;
  margin-bottom: 1em;
  padding: 0 0 1em;
  border-bottom: 2px solid #bebebe
}

.what,
.what ul,
.widget>h2 {
  padding: 1em 0
}

.what h2 {
  color: #b1778f
}

.what .recommendedwho {
  padding: 0
}

.what .recommendedwho li,
.what ul li {
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box
}

.what .recommendedwho li {
  float: left;
  background-color: #7fb608;
  width: 40px;
  height: 40px;
  font-size: 29px;
  text-align: center;
  display: block;
  margin: 0 0 0 .5em;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  padding: 0
}

.what ul li {
  display: inline-block;
  padding: 0 9px 0 0;
  margin: 0 2em 5px 0;
  text-transform: uppercase;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px
}

.what ul li.lb {
  font-weight: 600;
  background-color: transparent
}

.what .lb,
.what .vl {
  font-size: 1em;
  display: block
}

.what .lb {
  font-weight: 300
}

.what .vl {
  text-transform: capitalize;
  margin-bottom: 1em;
  text-indent: 1em
}

.meta-row {
  margin: 0 auto;
  width: 100%;
  border-collapse: collapse;
  padding: 2em 0 1em
}

.meta-row .th,
.meta-row .tr {
  width: 100%;
  display: table;
  text-align: center
}

.meta-row .th span,
.meta-row .tr span {
  display: table-cell;
  text-align: center;
  width: 8%
}

.meta-row .th {
  text-transform: uppercase;
  font-weight: 600;
  font-size: .775em
}

.meta-row .tr {
  margin-top: 1em;
  font-size: 1.5em
}

.unrecomwhen,
.unrecomwho {
  border: 1px solid red
}

</style>
