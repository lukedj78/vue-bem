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
                  <li><a class="preventOnMobile" href="" title="Paesaggi">Paesaggi</a></li>
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

article,
aside,
footer,
header,
nav,
section {
  display: block;
  width: 100%
}

section.padding {
  padding: 65px 0
}

.clearfix:after,
.clearfix:before,
.container-fluid:after,
.container-fluid:before,
.container:after,
.container:before,
.modal-footer:after,
.modal-footer:before,
.row:after,
.row:before {
  content: " ";
  display: table
}

.clearfix:after,
.container-fluid:after,
.container:after,
.modal-footer:after,
.row:after {
  clear: both
}

.left {
  float: left
}

.right {
  float: right
}

#signup .whiteBox p,
.textleft {
  text-align: left
}

.textright {
  text-align: right
}

.table-cell {
  display: table;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%
}

.table-cell>li {
  display: table-cell
}

@media screen and (max-width:768px) {
  .table-cell>li {
    width: 100%;
    display: block;
    padding-bottom: 10px;
    text-align: center
  }
  .table-cell>li:last-child {
    padding-bottom: 0
  }
}

.actions-list>li>a b,
.lb,
.vl {
  text-transform: uppercase;
  font-weight: 100
}

.vl {
  font-weight: 600;
  white-space: nowrap
}

ul {
  margin: 0;
  padding: 0;
  list-style: none
}

.table-elm {
  display: table
}

.table-elm .table-row {
  display: table-row
}

.table-elm .table-cell,
.whys>ul>li>.cell {
  display: table-cell
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

.jBox-wrapper {
  text-align: left;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}

.jBox-container,
.jBox-content,
.jBox-title {
  position: relative
}

.jBox-container {
  background: #fff
}

.jBox-content {
  padding: 8px 10px;
  overflow: auto;
  -webkit-transition: opacity .15s;
  transition: opacity .15s
}

.jBox-Mouse .jBox-container,
.jBox-Tooltip .jBox-container {
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3)
}

.jBox-Mouse .jBox-title,
.jBox-Tooltip .jBox-title {
  padding: 8px 10px 0;
  font-weight: 700
}

.jBox-hasTitle.jBox-Mouse .jBox-content,
.jBox-hasTitle.jBox-Tooltip .jBox-content {
  padding-top: 5px
}

.jBox-pointer {
  position: absolute;
  overflow: hidden
}

.jBox-pointer-top {
  top: 0
}

.jBox-pointer-bottom {
  bottom: 0
}

.jBox-pointer-left {
  left: 0
}

.jBox-pointer-right {
  right: 0
}

.jBox-pointer-bottom,
.jBox-pointer-top {
  width: 30px;
  height: 12px
}

.jBox-pointer-left,
.jBox-pointer-right {
  width: 12px;
  height: 30px
}

.jBox-pointer:after {
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
  background: #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg)
}

.jBox-pointer-top:after {
  left: 5px;
  top: 6px;
  box-shadow: -1px -1px 4px rgba(0, 0, 0, .2)
}

.jBox-pointer-right:after {
  top: 5px;
  right: 6px;
  box-shadow: 1px -1px 4px rgba(0, 0, 0, .2)
}

.jBox-pointer-bottom:after {
  left: 5px;
  bottom: 6px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, .2)
}

.jBox-pointer-left:after {
  top: 5px;
  left: 6px;
  box-shadow: -1px 1px 4px rgba(0, 0, 0, .2)
}

.jBox-Modal .jBox-container {
  border-radius: 3px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, .4), 0 0 5px rgba(0, 0, 0, .4)
}

.jBox-Modal .jBox-title {
  border-radius: 3px 3px 0 0;
  padding: 10px 15px;
  background: #f4f5f6;
  border-bottom: 1px solid #ddd;
  text-shadow: 0 1px 0 #fff
}

.jBox-Modal.jBox-closeButton-title .jBox-title {
  padding-right: 55px
}

.jBox-Modal.jBox-closeButton-box:before {
  box-shadow: 0 3px 15px rgba(0, 0, 0, .4), 0 0 5px rgba(0, 0, 0, .4)
}

.jBox-Notice {
  -webkit-transition: margin .2s;
  transition: margin .2s
}

.jBox-Notice .jBox-container {
  background: #333;
  background-image: linear-gradient(to bottom, #444, #222)
}

.jBox-Notice .jBox-content {
  border-radius: 3px;
  padding: 12px 20px
}

.jBox-Notice .jBox-title {
  padding: 8px 20px 0;
  font-weight: 700
}

.jBox-hasTitle.jBox-Notice .jBox-content {
  padding-top: 5px
}

.jBox-Notice-color .jBox-container {
  text-shadow: 0 -1px 0 rgba(0, 0, 0, .3)
}

.jBox-Notice-gray .jBox-container {
  color: #666;
  text-shadow: 0 1px 0 #fff;
  background: #f4f4f4;
  background-image: linear-gradient(to bottom, #fafafa, #f0f0f0)
}

.jBox-Notice-red .jBox-container {
  background: #b02222;
  background-image: linear-gradient(to bottom, #e22, #b02222)
}

.jBox-Notice-green .jBox-container {
  background: #70a800;
  background-image: linear-gradient(to bottom, #95cc2a, #70a800)
}

.jBox-Notice-blue .jBox-container {
  background: #2b91d9;
  background-image: linear-gradient(to bottom, #5abaff, #2b91d9)
}

.jBox-Notice-yellow .jBox-container {
  color: #744700;
  text-shadow: 0 1px 0 rgba(255, 255, 255, .6);
  background: #ffb11f;
  background-image: linear-gradient(to bottom, #ffd665, #ffb11f)
}

.jBox-Image {
  background: #fff;
  padding: 8px 8px 45px;
  border-radius: 5px
}

.jBox-Image .jBox-content {
  padding: 0;
  width: 100%;
  height: 100%
}

.jBox-image-container {
  border-radius: 5px;
  background: #000 center center no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0
}

.jBox-image-label {
  box-sizing: border-box;
  position: absolute;
  background: #fff;
  top: 100%;
  left: 0;
  width: 100%;
  color: #333;
  margin-top: -35px;
  padding: 0 90px 5px 10px;
  border-radius: 0 0 5px 5px;
  -webkit-transition: opacity .3s;
  transition: opacity .3s;
  opacity: 0
}

.jBox-image-label.active,
.jBox-image-pointer-next:hover,
.jBox-image-pointer-prev:hover {
  opacity: 1
}

.jBox-image-pointer-next,
.jBox-image-pointer-prev {
  position: absolute;
  bottom: 0;
  width: 22px;
  height: 45px;
  background: no-repeat center center url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ijc0LjcgMjI0IDE4LjcgMzIiPg0KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTkzLDIyNy40TDgwLjQsMjQwTDkzLDI1Mi42YzAuNCwwLjQsMC40LDEuMSwwLDEuNWwtMS42LDEuNmMtMC40LDAuNC0xLDAuNS0xLjUsMEw3NSwyNDAuN2MtMC40LTAuNC0wLjUtMSwwLTEuNWwxNC45LTE0LjljMC40LTAuNCwxLTAuNCwxLjUsMGwxLjYsMS42QzkzLjUsMjI2LjQsOTMuNCwyMjcsOTMsMjI3LjR6Ii8+DQo8L3N2Zz4=);
  background-size: 11px auto;
  cursor: pointer;
  opacity: .6;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: opacity .2s;
  transition: opacity .2s
}

.jBox-image-pointer-next {
  right: 8px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1)
}

.jBox-image-pointer-prev {
  right: 30px
}

.jBox-image-open #jBox-overlay {
  background-color: rgba(0, 0, 0, .86)
}

.jBox-Image.jBox-loading .jBox-container:before {
  left: auto;
  top: auto;
  bottom: -33px;
  right: 55px;
  margin-top: -9px;
  margin-left: -9px
}

.jBox-closeButton {
  cursor: pointer;
  position: absolute
}

.jBox-closeButton svg {
  position: absolute;
  top: 50%;
  right: 50%
}

.jBox-closeButton path {
  -webkit-transition: fill .2s;
  transition: fill .2s;
  fill: #aaa
}

.jBox-closeButton:hover path {
  fill: #888
}

.jBox-closeButton:active path {
  fill: #666
}

#jBox-overlay .jBox-closeButton {
  top: 0;
  right: 0;
  width: 40px;
  height: 40px
}

#jBox-overlay .jBox-closeButton svg {
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-right: -10px
}

#jBox-overlay .jBox-closeButton path {
  fill: #d2d4d6
}

#jBox-overlay .jBox-closeButton:hover path {
  fill: #fff
}

#jBox-overlay .jBox-closeButton:active path {
  fill: #b2b4b6
}

.jBox-closeButton-title .jBox-closeButton {
  top: 0;
  right: 0;
  bottom: 0;
  width: 40px
}

.jBox-closeButton-title .jBox-closeButton svg {
  width: 12px;
  height: 12px;
  margin-top: -6px;
  margin-right: -6px
}

.jBox-closeButton-box .jBox-closeButton {
  top: -8px;
  right: -10px;
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 50%
}

.jBox-closeButton-box .jBox-closeButton svg {
  width: 10px;
  height: 10px;
  margin-top: -5px;
  margin-right: -5px
}

.jBox-hasTitle.jBox-Modal.jBox-closeButton-box .jBox-closeButton {
  background: #f4f5f6
}

.jBox-closeButton-box:before {
  content: '';
  position: absolute;
  top: -8px;
  right: -10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3)
}

.jBox-pointerPosition-top.jBox-closeButton-box:before {
  top: 4px
}

.jBox-pointerPosition-right.jBox-closeButton-box:before {
  right: 2px
}

#jBox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  background-color: rgba(0, 0, 0, .6)
}

.jBox-draggable {
  cursor: move
}

@keyframes jBoxLoading {
  to {
    transform: rotate(360deg)
  }
}

@-webkit-keyframes jBoxLoading {
  to {
    -webkit-transform: rotate(360deg)
  }
}

.jBox-loading .jBox-content {
  min-height: 30px;
  min-width: 30px;
  opacity: 0
}

.jBox-loading .jBox-container:before {
  content: 'Loadingâ€¦';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  margin-top: -10px;
  margin-left: -10px;
  text-align: center
}

.jBox-loading .jBox-container:not(:required):before {
  content: '';
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, .3);
  border-top-color: rgba(0, 0, 0, .6);
  -webkit-animation: jBoxLoading .6s linear infinite;
  animation: jBoxLoading .6s linear infinite
}

.jBox-IE8.jBox-Mouse .jBox-container,
.jBox-IE8.jBox-Tooltip .jBox-container {
  border: 1px solid #aaa
}

.jBox-IE8 .jBox-pointer:after {
  display: none
}

.jBox-IE8 .jBox-pointer {
  border: 0;
  background: no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPJJREFUeNq01l0OwyAIAGAlvY+n8ZJ6Gk/EqqkNtf7ApCQ+LM34iuCmRUQzihjj6FH+kjWL8N4/Ph9GHpiTnC9SwDbhLGyvspSScc71KkOa/HpuuRhIK+psE2pjONouCQg7kBSEXUgC2tHo52mTTBpnaEATWlaYK6MrhIAaceWpOcsCrYp6FV4H/90zTWjUQ/gSevVQq0ecHqoOxWpYoO7p5O9ku2fnVtp7QAik2rsK3fnpWfjynJWpbw+1BkghurrYDjiCptg/4AxaYhJwBbEwDsiB2NgM5EIirAdKIDFGQSmU1+NaIPjJYt2I25vxT4ABAMhWvtle2YvmAAAAAElFTkSuQmCC)
}

.jBox-IE8 .jBox-pointer-top {
  background-position: center top
}

.jBox-IE8 .jBox-pointer-bottom {
  background-position: center bottom
}

.jBox-IE8 .jBox-pointer-left {
  background-position: left center
}

.jBox-IE8 .jBox-pointer-right {
  background-position: right center
}

.jBox-IE8.jBox-Modal .jBox-container {
  border: 3px solid #aaa
}

.jBox-IE8 .jBox-closeButton:after {
  font-family: Verdana, sans-serif;
  content: 'x';
  text-align: center;
  font-size: 18px
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

@media print {
  * {
    background: 0 0!important;
    color: #000!important;
    text-shadow: none!important;
    filter: none!important;
    -ms-filter: none!important
  }
  a,
  a:visited {
    text-decoration: underline
  }
  a[href]:after {
    content: " (" attr(href) ")"
  }
  abbr[title]:after {
    content: " (" attr(title) ")"
  }
  .ir a:after,
  .titleHeading .topTitle a:after,
  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: ""
  }
  blockquote,
  pre {
    border: 1px solid #999
  }
  thead {
    display: table-header-group
  }
  #mappa,
  blockquote,
  img,
  pre,
  tr {
    page-break-inside: avoid
  }
  img {
    max-width: 100%!important
  }
  h2,
  h3,
  p {
    orphans: 3;
    widows: 3
  }
  h2,
  h3 {
    page-break-after: avoid
  }
  #tuning,
  .fullSlider:before,
  .mainNav,
  .mapbox-improve-map,
  .socialLinks,
  .titleHeading:before,
  .topIcons,
  .whiteBox.actions,
  .whiteBox.description h2.title,
  .whiteBox:after,
  .whiteBox:before,
  .widget {
    display: none!important
  }
  .leaflet-marker-icon {
    max-width: none!important
  }
  .whiteBox {
    padding: 0!important
  }
  .white.single,
  .whys ul li {
    padding-top: 0!important
  }
  .whys {
    margin-bottom: 0!important
  }
  .whys ul li {
    width: auto!important
  }
  .whys ul li i {
    font-size: 40px!important;
    top: 0!important;
    bottom: auto!important
  }
  .titleHeading .topTitle {
    margin: 30px auto 20px!important;
    text-align: left;
    top: auto!important;
    opacity: 1!important
  }
  .titleHeading .topTitle img#printimage {
    display: block!important;
    max-width: 748px!important;
    margin-bottom: 10px!important
  }
  .titleHeading .topTitle img#printlogo {
    display: block!important;
    max-width: 200px!important;
    margin-bottom: 30px!important
  }
  .titleHeading .topTitle h1 {
    font-size: 45px;
    max-width: 100%
  }
  .titleHeading .topTitle a {
    display: inline-block
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

.coolquiz {
  position: relative;
  max-width: 100%
}

.coolquiz .nl-form {
  width: 100%;
  margin: 0;
  font-size: 3.8em;
  line-height: 1.5;
  position: relative;
  padding: 1.2em 1em 2.3em
}

.coolquiz .nl-form ul {
  list-style: none;
  margin: 0;
  padding: 0
}

.coolquiz .nl-form button,
.coolquiz .nl-form input,
.coolquiz .nl-form select {
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

.coolquiz .nl-form button {
  color: inherit;
  line-height: inherit;
  display: inline-block
}

.coolquiz .nl-form input:focus {
  outline: none
}

.coolquiz .nl-field {
  display: inline-block;
  position: relative
}

.coolquiz .nl-field.nl-field-open {
  z-index: 10000
}

.coolquiz .nl-field-toggle,
.coolquiz .nl-form input,
.coolquiz .nl-form select {
  line-height: inherit;
  display: inline-block;
  color: #b14943;
  cursor: pointer;
  border-bottom: 1px dashed #b14943
}

.coolquiz .nl-field ul {
  position: absolute;
  visibility: hidden;
  background: #e9971b;
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

footer .endcall,
footer .tuner {
  background-color: #f1f1f1;
  padding: 0
}

footer .endcall .confirm,
footer .tuner .confirm {
  height: 28px;
  border-bottom: 4px solid #fff;
  text-align: center;
  margin: 4em 0 6em;
  font-size: 12px;
  color: #ccc
}

footer .endcall .confirm {
  margin: 0 15px 100px
}

footer .endcall .confirm .perimetro,
footer .tuner .confirm .perimetro {
  display: inline-block;
  padding: 5px 15px 5px 5px;
  border-radius: 4px;
  background: #fff
}

footer .endcall .confirm .perimetro {
  padding: 5px
}

footer .endcall .confirm #tunize,
footer .tuner .confirm #tunize {
  display: inline-block;
  padding: 1.3em 2em;
  background-color: #e9971b;
  color: #fff;
  font-weight: 600;
  height: auto;
  line-height: 1;
  margin: 0 5px 0 auto
}

footer .endcall .confirm #tunize {
  margin: 0
}

footer .endcall .confirm a.text,
footer .tuner .confirm a.text {
  color: #e9971b;
  display: inline-block;
  padding: 0 5px;
  font-weight: 500
}

footer .endcall {
  overflow: hidden;
  margin: 0 auto;
  display: none
}

.tuner-results .pack h2 span,
body.homepage footer .endcall {
  display: block
}

footer .prefooter {
  background-color: #faf3e6;
  border-top: 15px solid #e9971b
}

footer .prefooter .footerLinks {
  width: 100%;
  overflow: hidden
}

footer .prefooter .footerLinks li {
  width: 33.333333%;
  margin: 0;
  display: inline-block;
  float: left;
  text-align: center;
  -webkit-box-shadow: inset -3px -3px 0 0 #ebe4da;
  box-shadow: inset -3px -3px 0 0 #ebe4da
}

footer .prefooter .footerLinks li:nth-child(4),
footer .prefooter .footerLinks li:nth-child(5) {
  -webkit-box-shadow: inset -3px 0 0 0 #ebe4da;
  box-shadow: inset -3px 0 0 0 #ebe4da
}

footer .prefooter .footerLinks li:nth-child(3) {
  -webkit-box-shadow: inset 0 -3px 0 0 #ebe4da;
  box-shadow: inset 0 -3px 0 0 #ebe4da
}

footer .prefooter .footerLinks li:nth-child(6) {
  -webkit-box-shadow: none;
  box-shadow: none
}

footer .prefooter .footerLinks li a {
  text-transform: uppercase;
  line-height: 4em;
  color: #bea788
}

footer .prefooter .footerLinks li a:hover {
  text-decoration: none;
  color: #a18258
}

footer .foot {
  background-color: #393b49;
  font-size: 12px;
  padding: 1em 0 50px;
  color: #aaa
}

footer .foot .disclaimer {
  font-size: 11px;
  color: #7c7b8c
}

footer .foot .copy {
  float: left;
  padding: .7em 0 0;
  margin: 0;
  text-transform: uppercase
}

footer .foot .copy strong {
  font-weight: 600;
  color: #fff
}

footer .foot .socialLinks {
  overflow: hidden;
  text-align: right
}

footer .foot .socialLinks li {
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-left: 10px
}

footer .foot .socialLinks li a {
  display: block;
  width: 32px;
  height: 32px;
  text-align: center;
  color: #fff;
  font-size: 1.3em;
  padding: 7px 0
}

footer .foot .socialLinks li a:hover {
  text-decoration: none
}

footer .foot .socialLinks li.social-fb a {
  background-color: #3b5998
}

footer .foot .socialLinks li.social-tw a {
  background-color: #08baf5
}

footer .foot .socialLinks li.social-gp a {
  background-color: #c15048
}

@media screen and (max-width:768px) {
  footer .foot .disclaimer {
    font-size: 9px
  }
}

.editMe,
.tuner-results .pack .city {
  display: inline-block;
  font-weight: 400
}

.editMe {
  color: red;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  margin: 0;
  text-transform: capitalize;
  font-size: 11px
}

.thumbs .pack .info p {
  font-size: 13px
}

.tuner-results figure {
  float: left;
  background: #4e7fb4;
  margin: 0
}

.tuner-results .pack {
  font-size: 2em;
  height: 100%;
  box-shadow: none;
  border: 2px solid #fff;
  border-width: 0 2px 4px;
  cursor: pointer
}

.tuner-results .pack .city {
  font-size: 15px;
  font-family: 'Open Sans', Arial, Verdana, Sans-serif
}

.tuner-results .pack .city .ico-location {
  font-size: 12px;
  padding-bottom: 5px;
  margin: 0 5px 0 0
}

.tuner-results .pack:hover .seeds {
  opacity: .8;
  filter: alpha(opacity=80)
}

.tuner-results:after {
  content: '..';
  color: #fff;
  display: block;
  width: 80%;
  margin: 0 auto 40px;
  text-align: center;
  font-size: 50px;
  line-height: 50px
}

.agente,
.imgProfile,
.tuner-results .pack {
  position: relative;
  overflow: hidden
}

.imgProfile {
  height: 200px;
  border: 5px solid rgba(255, 255, 255, .5);
  background-color: #f1f1f1;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 2em;
  -webkit-box-shadow: 0 0 0 1px #d8d8d8;
  box-shadow: 0 0 0 1px #d8d8d8
}

.imgProfile i {
  font-size: 3em;
  line-height: 140px;
  color: #d8d8d8
}

.imgProfile .editPicture {
  background-color: rgba(51, 63, 77, .85);
  line-height: 1;
  text-align: center;
  padding: 1.5em;
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  color: #fff;
  text-transform: uppercase
}

.travelagent-page .agency {
  margin-bottom: 15px
}

.travelagent-page .agency h2 {
  margin: 0;
  font-size: 1.2em;
  padding: 0
}

.modal-social a,
.travelagent-page [data-addtoshortlist].inshortlist>.down {
  display: inline-block
}

.travelagent-page [data-addtoshortlist].inshortlist>.up,
.travelagent-page [data-addtoshortlist]>.down {
  display: none
}

.agente {
  width: 100%;
  padding: 10px;
  -webkit-box-shadow: inset 0 -1px 0 0 #dbdbdb;
  box-shadow: inset 0 -1px 0 0 #dbdbdb;
  margin-bottom: 1px
}

.agente .agente-thumb {
  position: relative;
  float: left
}

.agente .agente-thumb .agente-img {
  display: block;
  width: 46px;
  height: 46px;
  float: left;
  background-color: #ccc;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  overflow: hidden;
  margin-right: 10px
}

.agente .agente-thumb .agente-star {
  position: absolute;
  bottom: -6px;
  left: 24px;
  background: #e9971b;
  border-radius: 100%;
  height: 18px;
  width: 18px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #fff
}

.agente .agente-info,
.agente .agente-info .agenzia {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: hidden
}

.agente .agente-info {
  float: left;
  width: 190px;
  padding: 5px 8px 0 0
}

.agente .agente-info a,
.agente .agente-info>span {
  display: block;
  line-height: 1;
  padding: 0 0 2px;
  font-size: 11px;
  color: #333f4d
}

.agente .agente-info>a:hover {
  color: #c15048
}

.agente .agente-info .name:hover,
.agente .agente-info>a:hover .name {
  text-indent: -100%
}

.agente .agente-info .name {
  font-weight: 800;
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  transition: text-indent 3s linear .5s;
  -webkit-transition: text-indent 3s linear .5s;
  -moz-transition: text-indent 3s linear .5s;
  -ms-transition: text-indent 3s linear .5s;
  -o-transition: text-indent 3s linear .5s
}

.agente .agente-info .agenzia {
  font-weight: 600
}

.agente .agente-cta b,
.agente .agente-info .aree {
  text-transform: uppercase
}

.agente .agente-cta {
  display: block;
  width: 70px;
  height: 55px;
  float: right;
  background-color: #c15048;
  color: #fff;
  text-align: center;
  padding-top: 3px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box
}

.agente .agente-cta i {
  height: 25px;
  display: block;
  font-size: 25px;
  margin: 5px 0 0
}

.agente .agente-cta b {
  display: block;
  font-size: 10px;
  font-weight: 400
}

.agente.agente-preview .agente-wrapper {
  display: block;
  color: #333f4d
}

.agente.agente-preview .agente-wrapper:hover {
  color: #333f4d
}

.agente.agente-preview .agente-wrapper .agente-box {
  min-height: 75px;
  width: 400px
}

.agente.agente-preview .agente-wrapper .agente-thumb {
  width: 20%
}

.agente.agente-preview .agente-wrapper .agente-thumb .agente-img {
  width: 60px;
  height: 60px
}

.agente.agente-preview .agente-wrapper .agente-info {
  width: 80%
}

.agente.agente-preview .agente-wrapper .agente-info .name {
  text-transform: uppercase;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden
}

.leaflet-popup .agente.agente-preview .agente-wrapper .agente-info .name {
  width: 194px
}

.agente.agente-preview .agente-wrapper .agente-meta {
  padding: 0 0 .8em;
  text-transform: capitalize
}

.agente.agente-preview .agente-wrapper .agente-meta h5 {
  font-size: 1em;
  margin: 0
}

.savetravel-interact .agente .agente-info.info-ext {
  width: 286px
}

.savetravel-interact .agente .agente-info.info-ext .agente-meta h5 {
  font-size: 11px;
  margin: 0;
  color: #000
}

.savetravel-interact .agente .agente-info.info-ext .agente-meta>div {
  color: #000;
  font-size: 11px
}

.savetravel-interact .agente .button-option {
  position: absolute;
  top: 24px;
  right: 6px
}

.results-list .agente .button-option,
.results-list .agente .info-ext {
  display: none
}

.agenti-widget {
  margin-top: -10px;
  position: relative
}

.agenti-widget .tabs-control {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #e9971b
}

.agenti-widget .tabs-control>li {
  width: 50%;
  float: left
}

.agenti-widget .tabs-control>li a {
  display: block;
  text-transform: uppercase;
  padding: 8px 0;
  text-align: center;
  color: #e9971b;
  font-weight: 400
}

.agenti-widget .tabs-control>li a i {
  margin-right: 5px;
  float: right;
  position: relative;
  top: 2px;
  color: #ccc
}

.agenti-widget .tabs-control>li a.active {
  font-weight: 800;
  -webkit-box-shadow: inset 0 -3px 0 0 #e9971b;
  box-shadow: inset 0 -3px 0 0 #e9971b
}

.agenti-widget .tabs-content {
  overflow: hidden;
  margin: 2px 0;
  position: relative;
  height: 270px
}

.agenti-widget .agenti {
  width: 100%;
  margin: 0;
  padding: 6px 0 0
}

.agenti-widget .agenti .agente {
  cursor: pointer
}

.agenti-widget .agenti .agente .agente-wrapper {
  display: block;
  width: 100%;
  min-height: 50px
}

.agenti-widget .agenti .agente:hover {
  background: #f5f5f5
}

.modal-social {
  height: 100px
}

.modal-social a {
  float: left;
  width: 20%;
  height: 100px;
  font-size: 50px;
  text-align: center;
  padding-top: 20px;
  color: #fff
}

.modal-social a.mail {
  background-color: #f8f8f8;
  color: #ccc
}

.modal-social a.facebook {
  background-color: #3b5998
}

.modal-social a.twitter {
  background-color: #55acee
}

.modal-social a.googleplus {
  background-color: #dd4b39
}

.modal-social a.linkedin {
  background-color: #1a85bc
}

#api-lock,
.dashboard #dashboard-loader {
  background-size: 74px;
  position: absolute;
  width: 100%
}



.dashboard {
  min-height: 800px
}


.dashboard .head-tit-block h2 {
  float: left;
  width: auto!important
}

.dashboard .head-tit-block .ico-edit {
  color: #e9971b;
  font-size: 2.1em;
  float: left;
  position: relative;
  top: 8px;
  left: -10px
}

.dashboard .tools-tit-block {
  position: absolute;
  right: 4px;
  top: 0
}

.dashboard .tools-tit-block li {
  float: right;
  margin-right: 5px
}

.dashboard .tools-tit-block li a {
  font-size: 1.5em;
  position: relative;
  top: 10px;
  color: #333f4d
}

.dashboard .tools-tit-block .chat-start-btn.chat-is-active {
  color: #e9971b
}

.dashboard .tools-tit-block .chat-start-btn.chat-has-message {
  color: #333f4d
}

.dashboard .tools-tit-block .chat-start-btn .chat-has-message-ico,
.dashboard .tools-tit-block .chat-start-btn.chat-has-message>.chat-has-message-ico {
  background-color: #dc0d17;
  background-image: -webkit-gradient(linear, center top, center bottom, from(#fa3c45), to(#dc0d17));
  background-image: -webkit-linear-gradient(#fa3c45, #dc0d17);
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .7);
  min-height: 13px;
  position: absolute;
  left: -4px;
  top: -5px;
  z-index: 10;
  color: #fff;
  font-weight: 600;
  font-size: 11px;
  padding: 2px 6px;
  line-height: 1;
  display: block
}

.dashboard .tools-tit-block .chat-start-btn .chat-has-message-ico {
  display: none
}

@media screen and (max-width:992px) {
  .dashboard .tools-tit-block {
    right: 17px
  }
}

.dashboard .four-commands a.section-tab {
  width: 50%;
  display: block;
  background-color: #fff;
  float: left;
  padding: 15px 0;
  text-align: center;
  color: #333f4d;
  font-weight: 900;
  font-size: 1.3em;
  font-family: 'Montserrat', Helvetica, Arial, Sans-serif;
  border-right: 1px solid #f1f1f1;
  box-shadow: 0 3px 0 #333f4d
}

.dashboard .four-commands a.section-tab.current {
  box-shadow: 0 3px 0 #e9971b
}

.dashboard .filtri {
  border-bottom: 3px solid #e4e4e4;
  background-color: #f9f9f9;
  padding-top: 15px
}

@media (max-width:767px) {
  .dashboard .filtri {
    padding: 15px
  }
}

.role-travelagents .dashboard .four-commands a.section-tab {
  width: 100%
}

#tiles,
.page .journey .detailContent .content .seeds>li {
  position: relative
}

#exploreStandaloneHeader {
  height: 70px
}

#exploreStandaloneHeader .navbar-top {
  margin: 24px 8px 0 0;
  float: right
}

#exploreStandaloneHeader h1 {
  margin: 22px 20px 0 0;
  float: left
}

#exploreStandaloneHeader h1 span,
.embeddeds #exploreStandaloneHeader h1 span {
  font-size: 12px;
  display: block;
  padding: 0
}

#exploreStandaloneHeader .separator-base {
  border-left: 1px solid #e9971b;
  display: inline-block;
  height: 35px;
  width: 1px;
  float: left;
  margin: 14px 12px
}

#exploreStandaloneHeader a.btn {
  float: left;
  margin: 14px 14px 0;
  padding: 0 13px 0 10px;
  line-height: 40px;
  border: 1px solid #e9971b;
  color: #e9971b;
  font-weight: 600
}

#exploreStandaloneHeader a.btn.signup {
  float: right;
  background-color: #e9971b;
  color: #fff
}

#exploreStandaloneHeader .auth-actions {
  float: right;
  margin-top: 14px
}

@media screen and (max-width:1200px) {
  .no-embeddeds #exploreStandaloneHeader .explore-title {
    margin-top: 26px
  }
  .no-embeddeds #exploreStandaloneHeader .explore-title span {
    display: none
  }
  .no-embeddeds #exploreStandaloneHeader .auth-actions {
    margin-left: -20px
  }
}

@media screen and (max-width:1023px) {
  .no-embeddeds #exploreStandaloneHeader .auth-actions {
    display: none
  }
}

#exploreStandaloneHeader h1,
.embeddeds #exploreStandaloneHeader h1 {
  font-size: 17px;
  text-align: left;
  line-height: 1
}

.embeddeds #exploreStandaloneHeader a.btn.signup {
  font-size: .7em
}

@media screen and (max-width:1260px) {
  .embeddeds #exploreStandaloneHeader .auth-actions {
    display: none
  }
}

@media screen and (max-width:1023px) {
  .embeddeds #exploreStandaloneHeader h1 span {
    display: none
  }
}

@media screen and (max-width:989px) {
  #exploreStandaloneHeader .auth-actions,
  #exploreStandaloneHeader .explore-help {
    display: none
  }
  #exploreStandaloneHeader a.btn.signup {
    font-size: .7em
  }
}

#filtersbar-explore.sidebar {
  left: 0;
  background-color: #f7f4ec;
  -webkit-box-shadow: 5px 5px 0 0 rgba(160, 135, 68, .05);
  box-shadow: 5px 5px 0 0 rgba(160, 135, 68, .05);
  border-right: 1px solid rgba(160, 135, 68, .31);
  z-index: 20
}

#filtersbar-explore.sidebar [data-dynamic-filters] {
  margin-bottom: 3em
}

#filtersbar-explore.sidebar h3 {
  font-size: 1em;
  margin-top: 1em
}

#filtersbar-explore.sidebar .icon-title span {
  background-color: #f7f4ec
}

#filtersbar-explore.sidebar .icon-title .title-button {
  background-color: #f7f4ec;
  color: #393b49;
  position: relative;
  top: 20px
}

#filtersbar-explore.sidebar .nice {
  font-size: 13px!important
}

#filtersbar-explore.sidebar,
#filtersbar.sidebar {
  padding-right: 12px!important
}

#filtersbar.sidebar [data-dynamic-filters] {
  margin-bottom: 3em
}

#filtersbar.sidebar .search-location {
  display: none
}

#filtersbar.sidebar .nice {
  font-size: 13px!important
}

.page-status-label,
.page-type-label {
  color: #e9971b;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px
}

.page-status-label {
  text-align: right;
  display: block
}

.page {
  margin: 60px 0 0
}

.page:after,
.page:before {
  content: " ";
  display: table
}

.page:after {
  clear: both
}

.page input::-webkit-input-placeholder {
  color: #a4a4a4
}

.modal-beta .modal-beta-bottom input:active::-webkit-input-placeholder,
.modal-beta .modal-beta-bottom input:focus::-webkit-input-placeholder,
.modal-signup .modal-beta-bottom input:active::-webkit-input-placeholder,
.modal-signup .modal-beta-bottom input:focus::-webkit-input-placeholder,
.page input:active::-webkit-input-placeholder,
.page input:focus::-webkit-input-placeholder {
  color: #000
}

.page input::-moz-placeholder {
  color: #a4a4a4
}

.modal-beta .modal-beta-bottom input:active::-moz-placeholder,
.modal-beta .modal-beta-bottom input:focus::-moz-placeholder,
.modal-signup .modal-beta-bottom input:active::-moz-placeholder,
.modal-signup .modal-beta-bottom input:focus::-moz-placeholder,
.page input:active::-moz-placeholder,
.page input:focus::-moz-placeholder {
  color: #000
}

.page input:-ms-input-placeholder {
  color: #a4a4a4
}

.modal-beta .modal-beta-bottom input:active::-ms-input-placeholder,
.modal-beta .modal-beta-bottom input:focus::-ms-input-placeholder,
.modal-signup .modal-beta-bottom input:active::-ms-input-placeholder,
.modal-signup .modal-beta-bottom input:focus::-ms-input-placeholder,
.page input:active::-ms-input-placeholder,
.page input:focus::-ms-input-placeholder {
  color: #000
}

.page h1 {
  margin: 0 0 1em;
  font-size: 3em;
  font-weight: 800
}

.page .creator {
  display: inline-block;
  font-size: .875em;
  padding-top: .5em;
  color: #777a7e
}

.page .creator b {
  font-weight: 600
}

.page .heading {
  padding-top: 50px
}

.page .heading .meta {
  margin-top: 1em;
  font-size: .875em
}

.page .heading .meta ul {
  display: inline-block;
  padding: 0 0 2em;
  margin: 0
}

.page .heading .meta ul li {
  background: rgba(233, 151, 27, .2);
  border-left: 3px solid #e9971b;
  padding: .355em 1em;
  margin: 0 1em 0 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box
}

.page .heading .meta ul li i {
  font-size: 1.225em;
  color: #e9971b;
  position: relative;
  top: 1px;
  margin-right: .5em
}

.page .heading .meta .lb,
.page .heading .meta .vl {
  display: inline-block;
  font-weight: 600;
  text-transform: initial;
  margin: 0;
  padding: 0;
  color: #fff
}

.page .heading .meta .vl {
  font-weight: 900;
  padding: 0 0 0 .5em
}

@media screen and (max-width:767px) {
  .page .heading .meta {
    margin: 0;
    padding: .4em 0;
    float: left
  }
}

.page .heading .locked {
  font-weight: 500
}

.page .heading .btn {
  margin: 0;
  float: right
}

.page .heading .already {
  text-align: right;
  padding: 1em 0
}

.page .heading input {
  width: 100%;
  max-width: 100%
}

.page .heading input:focus {
  -webkit-box-shadow: none;
  box-shadow: none
}

.page .heading .input {
  overflow: visible
}

.page .heading .input .submit {
  padding: 8px 13px;
  bottom: 5px;
  top: 6px;
  height: auto;
  right: 6px;
  margin: 0;
  width: auto;
  font-size: 20px
}

.page .heading .btn-c4t {
  display: none;
  margin-right: 5px
}

.page .heading .btn-c4t.active {
  display: block
}

.page .heading .btn-fluidtrailer {
  margin-right: 5px
}

.page .heading .can-edit {
  display: inline-block!important
}

@media screen and (max-width:767px) {
  .page .heading [data-printpage] {
    display: none!important
  }
}

.page .heading [data-basket-edit],
.page .journey.is-empty .basket-map,
.page .journey.is-empty .ws-box {
  display: none
}

@media screen and (max-width:767px) {
  .page .heading [data-basket-edit] {
    display: none!important
  }
}

.page .journey {
  padding: 1em!important;
  transition: border-color .2s ease;
  -webkit-transition: border-color .2s ease;
  -moz-transition: border-color .2s ease;
  -ms-transition: border-color .2s ease;
  -o-transition: border-color .2s ease;
  border-left: 3px solid #fff;
  margin-bottom: 1em
}

.page .journey .detailContent {
  height: auto
}

.page .journey .detailContent .content .seeds {
  float: left;
  width: 100%;
  overflow: visible;
  padding-top: 1em
}

.page .journey .detailContent .content .seeds>li .perc {
  position: absolute;
  top: -1.5em;
  font-size: 10px;
  font-weight: 900;
  text-align: center;
  width: 100%
}

.page .journey>i {
  position: absolute;
  left: -35px;
  top: -32px;
  background: #e9971b;
  color: #fff;
  font-size: 24px;
  padding: 40px 15px 15px 40px;
  border-radius: 100%
}

.page .journey .title {
  font-size: 1.6em;
  font-weight: 800;
  color: #393b49;
  margin: 0;
  display: inline-block;
  padding-bottom: 0;
  width: 100%;
  word-wrap: break-word
}

.page .journey .title.editable {
  padding: 0 .2em;
  margin: .2em 0;
  background-color: #fff3a3
}

.page .journey h2 {
  font-size: 1.225em;
  margin: .7em 0;
  display: inline-block;
  padding-bottom: 0;
  width: 80%!important
}

@media screen and (max-width:320px) {
  .page .journey h2 {
    width: 70%!important
  }
}

.page .journey .panel {
  display: none
}

.page .journey .bottom-line {
  display: block;
  padding: 0 0 .5em
}

.page .journey .bottom-line .btn {
  display: inline-block!important;
  margin-top: 1em
}

.page .journey .bottom-line .editwhen {
  display: inline-block;
  position: relative
}

.page .journey .ws-box {
  opacity: 1;
  transition: opacity .2s ease;
  -webkit-transition: opacity .2s ease;
  -moz-transition: opacity .2s ease;
  -ms-transition: opacity .2s ease;
  -o-transition: opacity .2s ease
}

.page .journey .ws-box.hidden {
  opacity: 0
}

.page .journey [data-country],
.page .journey [data-where] {
  cursor: pointer
}

.page .journey .vl {
  font-size: .8em
}

.page .journey .fromto {
  border-width: 1px 0;
  font-size: .9em
}

.page .journey .basket-map {
  height: 250px;
  width: 100%;
  margin-bottom: 10px
}

.page .journey .subtitle {
  font-size: .775em;
  padding: 0;
  color: #333f4d;
  font-weight: 400;
  display: block
}

.page .journey .subtitle b,
.page .journey h2 {
  font-weight: 800;
  color: #393b49
}

.page .journey .owner .label,
.page .journey .subtitle .sts {
  display: block;
  text-transform: uppercase;
  font-size: .875em;
  font-weight: 900;
  padding-left: 0;
  letter-spacing: 0;
  color: #e9971b
}

.page .journey .owner .name {
  font-size: .875em;
  font-weight: 600
}

.page .journey .editwhen {
  display: block;
  line-height: 1;
  color: #666;
  font-weight: 400;
  font-size: .9em
}

.page .journey .editwhen b {
  font-weight: 800;
  color: #333
}

.page .journey .delete {
  color: #c15048!important
}

.page .journey .esperienze,
.page .journey .macroarea {
  display: inline-block;
  font-style: normal;
  font-size: .875em;
  font-weight: 600;
  line-height: 1;
  position: relative
}

.page .journey .esperienze i,
.page .journey .macroarea i {
  position: relative;
  top: 1px;
  font-size: 12px;
  line-height: 1
}

.page .journey .link-control {
  width: 100%;
  opacity: 0;
  filter: alpha(opacity=0);
  transition: opacity .2s ease;
  -webkit-transition: opacity .2s ease;
  -moz-transition: opacity .2s ease;
  -ms-transition: opacity .2s ease;
  -o-transition: opacity .2s ease
}

.page .journey .link-control a {
  display: inline-block;
  color: #428bca;
  font-size: 11px;
  margin-right: 10px;
  line-height: 1
}

.page .journey .link-control a:hover {
  border-bottom: 1px solid #999
}

@media screen and (max-width:767px) {
  .page .journey .link-control {
    display: none
  }
}

.page .journey .pack .hover,
.page .journey .pack .info p,
.page .journey .pack .seeds,
.page .journey.news .locked,
.page .journey.news .unlocked {
  display: none
}

.page .journey.news {
  border-left: 20px solid #e9971b
}

.page .journey.news .new {
  display: block
}

.page .journey .btn {
  margin-top: 2px;
  margin-left: 0
}

.page .journey .btn.delete {
  background-color: #c15048
}

.page .journey:hover {
  border-color: #ccc
}

.page .journey:hover .link-control {
  opacity: 1;
  filter: alpha(opacity=100)
}

.page .journey .right {
  text-align: right
}

.wrapperBox {
  background-color: #e9971b;
  padding: 10px 26px
}

.whiteBoxWrapper {
  margin-top: -30px
}

.no-csstransforms3d .whiteBoxWrapper {
  margin-top: 0
}

.whiteBox {
  background-color: #fff;
  padding: 4em;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-shadow: 0 0 1px 0 rgba(51, 63, 77, .3);
  box-shadow: 0 0 1px 0 rgba(51, 63, 77, .3);
  position: relative;
  overflow: hidden;
  margin-bottom: 2em
}

.whiteBox:after,
.whiteBox:before {
  content: '';
  display: block;
  height: 5px;
  position: absolute;
  top: 0;
  left: 4em;
  right: 4em;
  background-color: rgba(51, 63, 77, .1)
}

.whiteBox:after {
  top: auto;
  bottom: 0
}

.side.actions .btn.full.wishlist span.down,
.side.actions .btn.full.wishlist.inwishlist span.up,
.whiteBox .blockBtnWrap,
.whiteBox.noline:after,
.whiteBox.noline:before,
.whiteBox.side:after,
.whiteBox.side:before {
  display: none
}

.whiteBox.noline {
  padding: 3em
}

.journeyHeader .meta ul,
.whiteBox.-nopadding {
  padding: 0!important
}

.whiteBox.side {
  padding: 0;
  overflow: visible
}

.whiteBox.side.stuck {
  position: fixed;
  top: 80px;
  z-index: 5
}

.signin-page .modal-beta .modal-beta-bottom #backhome,
.signin-page .modal-signup .modal-beta-bottom #backhome,
.signup-page .modal-beta .modal-beta-bottom #backhome,
.signup-page .modal-signup .modal-beta-bottom #backhome,
.whiteBox.side.stuck .blockBtnWrap {
  display: block
}

.whiteBox.side h2 {
  padding: .5em 1em 0;
  font-size: 1em
}

.whiteBox.side .btn.wishlist {
  background: #e9971b;
  border: 2px solid #e9971b
}

.side.actions .btn.full.wishlist.inwishlist,
.whiteBox.side .btn.wishlist:hover {
  background: 0 0;
  color: #e9971b
}

.whiteBox.contatta .agenti-widget>h2 {
  background-color: #7fb608;
  color: #fff;
  border: none
}

.whiteBox h2 {
  margin: 0 0 .5em;
  position: relative;
  font-size: 1em;
  padding-bottom: .5em
}

.whiteBox h2.border {
  margin: 3em 0 1em;
  padding: 1em 0 0;
  border-top: 1px solid #e9971b;
  font-size: 1.275em
}

.whiteBox p {
  font-size: 1.175em;
  line-height: 1.5
}

.whiteBox .panel {
  border-top: 1px solid #cecece;
  padding: 0 0 1em;
  margin-bottom: .5em;
  margin-top: 4em
}

.whiteBox .panel>h1,
.whiteBox .panel>h2,
.whiteBox .panel>h3,
.whiteBox .panel>h4 {
  line-height: 1;
  font-size: 1em;
  background: #fff;
  display: inline-block;
  position: relative;
  top: -.7em;
  padding: 0 .5em;
  margin: 0 0 -1em -.5em
}

.whiteBox .low {
  font-size: 11px;
  font-style: italic
}

.whiteBox p.info {
  padding: 0 0 1em;
  line-height: 1.3;
  font-size: 1em
}

#signup #privacy-readme p,
.whiteBox .agenti-widget {
  margin: 0
}

.whiteBox .agenti-widget>h2 {
  padding: 20px;
  border-bottom: 1px solid #cecece;
  background-color: #f8f8f8;
  margin: 0
}

.whiteBox .agenti-widget .agenti {
  padding: 0;
  margin: 0
}

.whiteBox .agenti-widget .agenti .agente {
  border-bottom: 1px solid #d8d8d8;
  border-top: 1px solid #f6f6f6;
  padding: 20px;
  margin: 0;
  -webkit-box-shadow: none;
  box-shadow: none
}

.whiteBox .agenti-widget .agenti .agente:last-child {
  border-bottom: none
}

.tags .label {
  display: block;
  text-transform: uppercase
}

.tags.dots>ul>li:after,
.tags>ul>li {
  display: inline-block;
  position: relative
}

.tags>ul>li {
  padding-right: .5em
}

.tags.dots>ul>li:after {
  content: '.';
  font-size: 40px;
  color: #999;
  top: -.125em;
  right: -.2em;
  line-height: 10px
}

.tags.dots>ul>li:last-child:after {
  display: none
}

.tags.upper {
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: 600;
  color: #ff7f66
}

.tags.stars {
  color: #e9971b;
  font-size: 2em
}

.side.actions {
  background: 0 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  padding: 0;
  overflow: hidden
}

.side.actions .btn.full {
  margin: 0 0 1em;
  font-size: 1.5em;
  text-align: left;
  padding: 1.5em 1em 1.5em 90px;
  letter-spacing: 0
}

.side.actions .btn.full:last-child {
  margin: 0
}

.side.actions .btn.full i {
  display: inline-block;
  top: -1px;
  font-size: 34px;
  position: absolute;
  left: 6px;
  padding: 25px;
  bottom: 0
}

.side.actions .btn.full.wishlist.inwishlist:hover {
  background: #e9971b;
  color: #fff
}

#signup #privacy-readme a:hover,
#signup h2,
.journeyDetail .pack-line .packOut .desc:hover .title,
.journeyDetail .pack-line .packOut .desc:hover p,
.modal-beta .modal-beta-bottom p a,
.modal-signup .modal-beta-bottom p a,
.side.actions .btn.full.wishlist.inwishlist .ico-star {
  color: #e9971b
}

.side.actions .btn.full.wishlist.inwishlist span.down {
  display: inline
}

.side.actions.stuck {
  background-color: #fff;
  padding: 4em;
  -webkit-box-shadow: 0 0 1px 0 rgba(51, 63, 77, .3);
  box-shadow: 0 0 1px 0 rgba(51, 63, 77, .3)
}

#signup {
  min-height: 800px
}

#signup form {
  margin: 2em 0 0
}

#signup .field input {
  height: 50px
}

#signup .policy {
  padding: 1.5em 0 0
}

#signup a.facebookBtn {
  background-color: #3b5998
}

#signup .privacy {
  font-size: .875em
}

#signup .controls {
  margin-top: 2em;
  margin-bottom: 2em;
  padding-top: 2em;
  border-top: 2px solid #ececec
}

#signup .controls .btn {
  width: 100%;
  margin: 0
}

#signup .controls .text {
  margin-top: 1.5em;
  font-size: .875em;
  color: #aaa
}

#signup .feedback {
  padding: 14px 0;
  margin: 0
}

#signup .privacyWrap {
  margin-top: 30px;
  position: relative
}

#signup .whiteBox {
  padding: 4em 4em 1em
}

#signup #privacy-readme {
  border: 1px solid #ddd;
  overflow: auto;
  font-size: 13px;
  padding: 1em;
  color: #777;
  background: #fff;
  -webkit-transition: height .5s;
  -moz-transition: height .5s;
  -o-transition: height .5s;
  transition: height .5s;
  text-align: justify;
  position: relative
}

#signup #privacy-readme a {
  font-size: 1.4em;
  color: #000
}

#signup .checkbox-inline,
#signup .radio-inline {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  vertical-align: middle;
  width: 48%
}

#signup .checkbox-inline label,
#signup .radio-inline label {
  display: inline-block;
  font-weight: 700
}

@media screen and (max-width:320px) {
  #signup .checkbox-inline,
  #signup .radio-inline {
    width: 100%
  }
}

#signup .checkbox input[type=checkbox],
#signup .checkbox-inline input[type=checkbox],
#signup .radio input[type=radio],
#signup .radio-inline input[type=radio] {
  float: left;
  position: relative;
  top: 2px;
  margin-right: 8px
}

#signup .dib {
  display: inline-block;
  padding-left: 10px
}

#signup .mb {
  margin: 1.7em 0 .5em;
  font-weight: 600;
  line-height: 1.1
}

#signup .mb b {
  font-size: 1.1em;
  line-height: 1.2em
}

#signup .choose {
  padding: 0 1em
}

#mappaWrapper.expand #mappaOverlay,
.general-map .marker-popup .item,
.owl-theme .owl-controls .owl-buttons .owl-next,
.owl-theme .owl-controls .owl-buttons .owl-prev {
  background-color: transparent
}

.owl-theme .owl-controls .owl-buttons .owl-next i,
.owl-theme .owl-controls .owl-buttons .owl-prev i {
  font-size: 2em;
  vertical-align: middle;
  position: absolute;
  top: 50%;
  left: 0;
  text-align: center;
  margin-top: -10px
}

.owl-theme .owl-controls .owl-buttons .owl-prev {
  position: absolute;
  left: 20px;
  top: 50%
}

.owl-theme .owl-controls .owl-buttons .owl-next {
  position: absolute;
  right: 0;
  top: 50%
}

.owl-theme .owl-controls .owl-buttons div {
  color: inherit
}

#mapPreferiti {
  height: 600px;
  width: 100%;
  margin-bottom: -50px;
  border-top: 1px solid #d8d8d8
}

@media screen and (max-width:767px) {
  #mapPreferiti {
    height: 300px;
    margin-bottom: 50px
  }
}

.general-map .agente {
  border: none;
  box-shadow: none;
  padding: 0
}

.general-map .marker-popup {
  min-width: 280px;
  font-family: 'Open Sans', Arial, Verdana, Sans-serif;
  overflow: hidden
}

.general-map .marker-popup .item .content {
  width: 100%
}

.general-map .marker-popup .item .content .type {
  font-weight: 400
}

.general-map .marker-popup .item .content .title {
  white-space: inherit;
  text-overflow: inherit
}

.general-map .marker-popup .actions {
  clear: both;
  width: 100%;
  border-top: 1px solid #ebebeb;
  padding: 0
}

.general-map .marker-popup .actions>li {
  display: block;
  width: 100%;
  text-align: left
}

.general-map .marker-popup .actions>li a {
  color: #777;
  text-transform: uppercase;
  line-height: 1;
  display: block;
  font-size: 10px;
  text-align: left;
  font-weight: 500;
  padding: 10px 15px
}

.general-map .marker-popup .actions>li a:hover {
  background-color: #f8f8f8
}

.general-map .marker-popup .actions>li a i {
  float: left;
  margin: 0 10px 0 0;
  color: #e9971b
}

.general-map .marker-popup .actions>li a i.ico-star {
  font-size: 15px;
  position: relative;
  left: -2px;
  margin-right: 9px;
  top: -3px
}

.general-map .marker-popup .actions>li a i.ico-plus {
  font-size: 18px;
  left: -3px;
  top: -2px;
  margin-right: 6px
}

.general-map .marker-popup .actions>li a i.ico-trash {
  font-size: 12px;
  left: 0;
  margin-right: 12px
}

.general-map .marker-popup .actions>li a.removeFromWish i,
.general-map .marker-popup .actions>li a.removeItem i {
  color: #c15048
}

.general-map .marker-popup .actions>li a.removeFromWish b {
  display: block;
  width: 5px;
  height: 2px;
  background: #c15048;
  position: absolute;
  top: 1px;
  left: 11px
}

.general-map .marker-popup .actions .removeItem,
.locked {
  display: none
}

.general-map .marker-popup.base {
  min-width: 0
}

.waitYourAction {
  padding: .5em;
  overflow: hidden;
  top: 10px;
  border: 1px solid rgba(255, 255, 255, .15);
  clear: both
}

.freeze .locked .user-picture,
.journeystatus,
.waitYourAction {
  display: inline-block;
  position: relative;
  float: right
}

.journeystatus {
  padding: .5em;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, .15);
  color: #fff;
  clear: both;
  top: 10px
}

.freeze.whiteBox {
  border-left: 20px solid #393b49!important
}

.freeze .locked {
  text-align: right;
  padding: 10px 50px 0 0;
  display: block
}

.freeze .locked .user-picture {
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -ms-behavior: url(/assets/css/backgroundsize.htc);
  behavior: url(/assets/css/backgroundsize.htc);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  top: -13px;
  margin: 0 0 -20px
}

.freeze .unlocked {
  display: none
}

#mappaLocation {
  width: 100%;
  min-height: 300px
}

.btn.icon {
  text-align: center;
  margin: 5px 0 0;
  min-height: 50px
}

.btn.icon i {
  margin: 0;
  top: 5px
}

.navbar-top {
  display: inline-block;
  margin-top: 12px
}

.tool-page .navbar-top {
  margin-top: 11px
}

@media screen and (max-width:1023px) {
  .navbar-top {
    display: block
  }
  #showRight,
  .nav-toggle {
    position: absolute;
    width: 36px;
    padding: 19px 0;
    cursor: pointer
  }
  #showRight {
    display: inline-block;
    font-size: 28px;
    right: 15px;
    top: 0
  }
  #showRight:active,
  #showRight:hover {
    color: #bf7a12
  }
  .homepage #showRight {
    top: 18px
  }
  .nav-toggle {
    right: 20px;
    top: 30px
  }
  .stuck .nav-toggle {
    top: 16px
  }
  .nav-toggle span,
  .nav-toggle span:after,
  .nav-toggle span:before {
    border-radius: 2px;
    height: 5px;
    width: 35px;
    background: #e9971b;
    position: absolute;
    display: block;
    content: "";
    transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out
  }
  .nav-toggle span.active,
  .nav-toggle span:after.active,
  .nav-toggle span:before.active {
    top: 0
  }
  .nav-toggle span:before {
    top: -10px
  }
  .nav-toggle span:after {
    bottom: -10px
  }
  .nav-toggle.active span {
    background-color: transparent
  }
  .nav-toggle.active span:before {
    top: 0;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform-origin: rotate(45deg);
    transform: rotate(45deg)
  }
  .nav-toggle.active span:after {
    bottom: 0;
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform-origin: rotate(-45deg);
    transform: rotate(-45deg)
  }
}

@media screen and (max-width:768px) {
  .homepage #showRight {
    top: 3px
  }
}

@media screen and (max-width:1023px) {
  .owl-theme .owl-controls .owl-pagination {
    display: none
  }
  .widget .owl-theme .owl-controls {
    display: none!important
  }
  .slider .slide .slideDesc {
    right: 30px
  }
  .homepage .tuning>li {
    width: 33.33333%!important;
    margin-bottom: 1em
  }
  .widget.preview .whyTitle {
    width: 100%;
    display: block!important;
    text-align: center
  }
  .widget.preview .whyTitle .label {
    display: block!important;
    top: auto!important;
    text-align: center;
    padding: 1em 0;
    max-width: 300px;
    margin: 0 auto;
    line-height: 1.5
  }
  .widget.preview .whyTitle i {
    display: block!important;
    font-size: 40px;
    text-align: center
  }
  .widget.preview a.moreWhy {
    float: none!important;
    margin: 0 auto 1em!important;
    display: inline-block
  }
}

@media screen and (max-width:767px) {
  .callToBottom,
  .endcall,
  .explore-button,
  .moreWhy,
  .tuner {
    display: none!important
  }
  .owl-theme .owl-controls .owl-pagination .owl-page span {
    width: 35px
  }
  body .tuning>li {
    width: 100%;
    margin-bottom: 1em
  }
  body .tuner .confirm .perimetro {
    padding: 1em
  }
  body .tuner .confirm #tunize {
    margin: 0 0 1em
  }
  body .strongMessage {
    margin-top: 130px
  }
  body .strongMessage .head {
    font-size: 30px;
    padding-bottom: .3em;
    line-height: 1.2
  }
  body .strongMessage .desc {
    font-size: 17px
  }
  body .slider .slide .slideDesc,
  body .topTitle .metaTitle .place:before,
  body .topTitle .metaTitle .tags:before,
  body .topTitle .metaTitle .topIcons:before,
  body .whiteBox.description:after,
  body .whiteBox.description:before {
    display: none
  }
  body footer .prefooter .footerLinks li {
    width: 100%;
    -webkit-box-shadow: none;
    box-shadow: none
  }
  body .topTitle h1 {
    font-size: 34px
  }
  body .whiteBox.description {
    box-shadow: none;
    padding: 2em;
    margin: -27px -15px 1em
  }
  body .topTitle .metaTitle .place,
  body .topTitle .metaTitle .tags,
  body .topTitle .metaTitle .topIcons {
    width: 100%;
    display: block;
    margin: 0 auto 10px
  }
  body header#main .mainNav ul.menu>li {
    margin-left: 10px!important
  }
}

.modal-beta .specialSelect .field,
.modal-signup .specialSelect .field,
.select-style {
  overflow: hidden;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yNzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpd2uYWAAAAVklEQVQIHR2JSw5AMBBAX0sXziA+VTZNiOsTR3KBLqZjYvc+7roffQu0rqJScY2nCwEfY/xjI0KwSRWWNOO3dSENPZYQdaRpJNtozTn2TCkFVeU8MgZ8/C8de+yvRSIAAAAASUVORK5CYII=) right 10px center no-repeat;
  box-shadow: none;
  border: 1px solid #ccc;
  width: 100%;
  position: relative
}

.modal-beta,
.modal-signup {
  min-height: 500px;
  padding: 0!important
}

.modal-beta .specialSelect,
.modal-signup .specialSelect {
  z-index: 1000;
  position: relative
}

.modal-beta .specialSelect .field,
.modal-signup .specialSelect .field {
  margin-bottom: 10px
}

.modal-beta .specialSelect .field select,
.modal-signup .specialSelect .field select {
  width: 115%;
  outline: none;
  background-color: transparent;
  background-image: none;
  -webkit-appearance: none;
  border: none;
  box-shadow: none;
  padding: 0 .5em;
  height: 37px;
  line-height: 2em
}

.modal-beta .button:focus,
.modal-beta .submit-button:focus,
.modal-signup .button:focus,
.modal-signup .submit-button:focus {
  background: #edac4a!important
}

.modal-beta [data-feedback],
.modal-signup [data-feedback] {
  color: red;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  padding: 15px 0 12px;
  display: inline-block
}


@media screen and (max-width:768px) {
  .modal-beta .modal-beta-top,
  .modal-signup .modal-beta-top {
    padding: 20px 20px 10px;
    min-height: 0
  }
  .modal-beta .modal-beta-top:before,
  .modal-signup .modal-beta-top:before {
    display: none!important
  }
}

.modal-beta .modal-beta-top:before,
.modal-signup .modal-beta-top:before {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  right: 30px;
  top: 30px;
  left: 30px;
  border: 1px solid rgba(255, 255, 255, .3);
  border-width: 1px 1px 0
}

.modal-beta .modal-beta-top .circleicon,
.modal-signup .modal-beta-top .circleicon {
  background-color: #fff;
  display: inline-block;
  width: 90px;
  height: 90px;
  border-radius: 100%;
  color: #e9971b;
  font-size: 50px
}

.modal-beta .modal-beta-top .circleicon .ico-paperplane,
.modal-signup .modal-beta-top .circleicon .ico-paperplane {
  text-align: center;
  margin-top: 22px;
  display: block;
  margin-left: -6px
}

.modal-beta .modal-beta-top .circleicon img,
.modal-signup .modal-beta-top .circleicon img {
  margin-top: -15px
}

.modal-beta .modal-beta-top h2,
.modal-signup .modal-beta-top h2 {
  margin: 20px 0 0;
  font-size: 30px;
  color: #fff;
  font-weight: 900;
  letter-spacing: -1px
}

.modal-beta .modal-beta-bottom,
.modal-signup .modal-beta-bottom {
  min-height: 250px;
  position: relative;
  text-align: center;
  padding: 50px 130px 25px
}

@media screen and (max-width:768px) {
  .modal-beta .modal-beta-bottom,
  .modal-signup .modal-beta-bottom {
    padding: 20px 20px 10px;
    min-height: 0
  }
  .modal-beta .modal-beta-bottom:before,
  .modal-signup .modal-beta-bottom:before {
    display: none!important
  }
  .modal-beta .modal-beta-bottom p.question,
  .modal-signup .modal-beta-bottom p.question {
    margin: 0!important
  }
}

.modal-beta .modal-beta-bottom:before,
.modal-signup .modal-beta-bottom:before {
  content: '';
  display: block;
  position: absolute;
  bottom: 30px;
  right: 30px;
  top: 0;
  left: 30px;
  border: 1px solid rgba(233, 151, 27, .3);
  border-width: 0 1px 1px;
  z-index: 0
}

.modal-beta .modal-beta-bottom h2,
.modal-signup .modal-beta-bottom h2 {
  font-weight: 100;
  color: #e9971b
}

.modal-beta .modal-beta-bottom p,
.modal-signup .modal-beta-bottom p {
  margin: 0 auto;
  color: #333;
  padding-bottom: 1em
}

.modal-beta .modal-beta-bottom p.question,
.modal-signup .modal-beta-bottom p.question {
  font-weight: 600;
  font-size: 15px;
  border-top: 4px double rgba(233, 151, 27, .3);
  padding-top: 30px;
  max-width: 100%;
  margin: 20px 60px 0
}

.modal-beta .modal-beta-bottom p.text,
.modal-signup .modal-beta-bottom p.text {
  font-size: 12px
}

.modal-beta .modal-beta-bottom form,
.modal-signup .modal-beta-bottom form {
  position: relative;
  z-index: 1
}

.modal-beta .modal-beta-bottom input,
.modal-signup .modal-beta-bottom input {
  padding: 10px 15px
}

.modal-beta .modal-beta-bottom input::-webkit-input-placeholder,
.modal-signup .modal-beta-bottom input::-webkit-input-placeholder {
  color: #4a5869
}

.modal-beta .modal-beta-bottom input::-moz-placeholder,
.modal-signup .modal-beta-bottom input::-moz-placeholder {
  color: #4a5869
}

.modal-beta .modal-beta-bottom input:-ms-input-placeholder,
.modal-signup .modal-beta-bottom input:-ms-input-placeholder {
  color: #4a5869
}

.modal-beta .modal-beta-bottom .message,
.modal-signup .modal-beta-bottom .message {
  width: 100%
}

.modal-beta .modal-beta-bottom #backhome,
.modal-signup .modal-beta-bottom #backhome {
  display: none;
  margin: 25px 0
}

.modal-beta .modal-beta-bottom .submit-button,
.modal-signup .modal-beta-bottom .submit-button {
  background: #e9971b;
  border: none;
  color: #fff;
  font-weight: 600;
  margin-top: 1em;
  display: block;
  padding: 1em;
  width: 100%;
  position: relative
}



.modal-home-filters {
  padding: 0;
  width: 750px;
  min-height: 500px;
  margin-bottom: -110px;
  margin-right: -10px;
  margin-left: -10px
}

.modal-home-filters p {
  max-width: 100%!important
}

.modal-home-filters ol {
  font-size: 17px
}

.modal-home-filters ol li {
  line-height: 1.5;
  margin-bottom: 10px
}

.modal-home-filters img {
  margin-top: 10px
}

.no-csstransforms3d .thumbs .pack .pack-image:before,
.no-csstransforms3d .tuner-results .pack .pack-image:before {
  display: none!important
}

.no-csstransforms3d .thumbs .pack:hover .pack-image,
.no-csstransforms3d .tuner-results .pack:hover .pack-image,
.no-csstransforms3d .visual-list .pack:hover .pack-image {
  opacity: .5;
  filter: alpha(opacity=50)
}

.white.single {
  padding-top: 3em
}

.fullSlider,
.titleHeading {
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -ms-behavior: url(/assets/css/backgroundsize.htc);
  behavior: url(/assets/css/backgroundsize.htc);
  position: relative;
  overflow: hidden
}

.fullSlider:before,
.titleHeading:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity .35s, transform .35s;
  background: rgba(0, 0, 0, .5);
  opacity: 1;
  filter: alpha(opacity=100)
}

#mappaWrapper.expand #mappaOverlay i.ico-expand,
.fullSlider.homepageslider:before,
.fullSlider.withmap:before,
.journeyDetail #daysCarouselWrap .current .item .picture .dayLabel,
.journeyDetail #daysCarouselWrap .current .item .picture:before,
.titleHeading.withmap:before,
ul.list-nested li .item .content:hover span.icon:before {
  display: none
}

.fullSlider {
  min-height: 500px
}

.fullSlider.homepageslider {
  overflow: visible;
  cursor: pointer
}

.description h2.title {
  text-transform: inherit;
  font-size: 2em;
  margin: 0;
  padding: 0 0 5px;
  opacity: 0;
  filter: alpha(opacity=0);
  height: 0;
  overflow: hidden;
  position: relative
}

.description h2.title:before {
  content: '';
  width: 100%;
  height: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  -webkit-box-shadow: inset 0 -5px 7px -1px #fff;
  box-shadow: inset 0 -5px 7px -1px #fff
}

.description .meta {
  padding: 0;
  position: relative;
  margin: 2em 0 0;
  border-top: 1px solid #ccc
}

.description .meta .vl {
  white-space: normal;
  color: #e9971b;
  font-weight: 500
}

.description .meta .vl-sub {
  font-weight: 400;
  margin-top: -1em
}

.description .mappa {
  border: 1px solid #ccc;
  width: 100%;
  min-height: 400px;
  background-color: #f8f8f8;
  margin-top: 3em
}

.description>p {
  line-height: 1.5
}

.author-badge {
  max-width: 500px;
  border: 1px double rgba(255, 255, 255, .26);
  border-width: 3px 0;
  padding: .5em 0;
  margin: 1em auto 1.5em
}

.author-badge>a {
  display: inline-block;
  color: #e9971b;
  position: relative;
  top: 3px
}

.author-badge>a:hover,
.topTitle {
  color: #fff
}

.author-badge>a:hover .user-picture {
  -webkit-box-shadow: 0 0 0 2px #fff;
  box-shadow: 0 0 0 2px #fff
}

.author-badge .user-picture {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  overflow: hidden;
  -webkit-box-shadow: 0 0 0 2px #e9971b;
  box-shadow: 0 0 0 2px #e9971b
}

.author-badge .user-name {
  display: inline-block;
  font-weight: 800;
  min-height: 25px;
  line-height: 25px;
  margin: 0 1em;
  position: relative;
  top: -7px
}

.topTitle {
  position: relative;
  z-index: 5;
  text-align: center;
  margin-top: 160px
}

.topTitle:hover {
  opacity: 1!important
}

.topTitle .page-type-label {
  margin: 2em 0
}

.topTitle .topIcons {
  padding-top: 0;
  margin: 0 auto
}

.topTitle .topIcons .blockBtn {
  width: auto;
  display: inline-block;
  float: none;
  margin: 25px auto 0;
  padding: 0;
  font-size: 14px
}

.topTitle .topIcons .blockBtn a {
  color: #fff;
  height: auto;
  padding: 8px 9px 4px;
  border: 1px solid rgba(255, 255, 255, .15);
  text-align: center;
  margin: 5px;
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  border-radius: 1px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  transition: background-color .15s ease;
  -webkit-transition: background-color .15s ease;
  -moz-transition: background-color .15s ease;
  -ms-transition: background-color .15s ease;
  -o-transition: background-color .15s ease
}

.topTitle .topIcons .blockBtn a i {
  font-size: 15px
}

.topTitle .topIcons .blockBtn a span {
  margin-top: 3px
}

.topTitle .topIcons .blockBtn a:hover {
  background-color: rgba(255, 255, 255, .15)
}

.topTitle .metaTitle .author,
.topTitle .metaTitle .place {
  display: inline-block;
  font-size: 13px;
  font-weight: 400
}

.topTitle .metaTitle .place i {
  font-size: 12px;
  position: relative;
  top: 1px;
  margin-right: 3px
}

.topTitle .metaTitle .author {
  color: #fff;
  margin-left: 20px
}

.topTitle .metaTitle .tags {
  font-weight: 400;
  color: #fff;
  display: block;
  padding-top: 2em;
  font-size: 15px;
  margin-left: -5px
}

.topTitle .metaTitle .author a,
.topTitle .metaTitle .tags a {
  color: #fff;
  padding: 2px 7px;
  border-radius: 2px;
  cursor: pointer
}

.journeyHeader .tags a:hover,
.topTitle .metaTitle .author a:hover,
.topTitle .metaTitle .tags a:hover {
  background: rgba(255, 255, 255, .27)
}

.topTitle .metaTitle .topIcons {
  display: inline-block;
  margin-left: 20px;
  overflow: visible
}

.topTitle .metaTitle .topIcons .blockBtn {
  margin: 0 0 0 8px;
  position: relative;
  top: 3px
}

.topTitle .metaTitle .topIcons .blockBtn a {
  margin: 0;
  border: none
}

.topTitle h1 {
  font-weight: 700;
  font-size: 4em;
  letter-spacing: -1px;
  color: #fff;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.2;
  padding: 0 0 .3em
}

.topTitle .excerpt {
  line-height: 1.5;
  padding: 15px 0 0;
  font-size: 20px
}

.topTitle .actionBar {
  text-align: center;
  background-color: #4f5266
}

.topTitle .actionBar:after,
.topTitle .actionBar:before {
  content: " ";
  display: table
}

.topTitle .actionBar:after {
  clear: both
}

.topTitle .callRed {
  margin: 30px auto 0;
  padding: 0 20px;
  height: auto;
  font-size: 14px
}

.blockBtn {
  width: 33%;
  float: left;
  text-align: center
}

.blockBtn a {
  color: #393b49;
  display: block;
  height: 100px;
  padding-top: 20px
}

.blockBtn a i {
  text-align: center;
  margin: 0 auto;
  font-size: 28px
}

.blockBtn a span {
  font-size: 11px;
  display: block;
  text-transform: uppercase;
  font-weight: 600
}

.blockBtn a:hover {
  color: #e9971b;
  text-decoration: none
}

#mappaHidden {
  max-width: 800px!important;
  margin: 1em!important
}

#mappaWrapper {
  min-height: 150px;
  background-color: #fff;
  border: 1px solid#fff;
  border-width: 4px 0;
  position: relative;
  transition: min-height .2s ease-in-out;
  -webkit-transition: min-height .2s ease-in-out;
  -moz-transition: min-height .2s ease-in-out;
  -ms-transition: min-height .2s ease-in-out;
  -o-transition: min-height .2s ease-in-out
}

#mappaWrapper #mappaOverlay {
  z-index: 5;
  background-color: rgba(0, 0, 0, .3);
  cursor: pointer
}

#mappaWrapper #mappaOverlay i {
  position: absolute;
  top: 50%;
  right: 30px;
  line-height: 1;
  text-align: center;
  font-size: 3em;
  color: rgba(255, 255, 255, .6);
  margin: -25px 0 0
}

#mappaWrapper #mappaOverlay i.ico-close {
  color: rgba(0, 0, 0, .6);
  display: none
}

#mappaWrapper #mappaOverlay,
#mappaWrapper #mappaViaggio {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0
}

#mappaWrapper.expand {
  min-height: 400px
}

#mappaWrapper.expand #mappaOverlay i.ico-close,
.topTitle .callRed {
  display: inline-block
}

.journeyHeader {
  padding: 50px 0 68px!important
}

.journeyHeader:before {
  background: rgba(0, 0, 0, .5)
}

.journeyHeader [data-printpage],
.journeyHeader [data-socialshare] {
  display: inline-block;
  float: right;
  color: #fff;
  padding: 10px;
  height: 36px;
  text-align: center;
  margin: 0 5px 0 0!important;
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  border-radius: 1px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  transition: background-color .15s ease;
  -webkit-transition: background-color .15s ease;
  -moz-transition: background-color .15s ease;
  -ms-transition: background-color .15s ease;
  -o-transition: background-color .15s ease
}

.journeyHeader [data-printpage] i,
.journeyHeader [data-socialshare] i {
  font-size: 15px;
  margin: 0
}

.journeyHeader [data-printpage]:hover,
.journeyHeader [data-socialshare]:hover {
  background-color: rgba(255, 255, 255, .15)
}

.journeyHeader .ico-printer,
.journeyHeader .ico-share {
  float: right;
  font-size: 2em;
  color: #fff;
  margin: 1em 0 0
}

.journeyHeader .creator,
.journeyHeader .locked,
.journeyHeader .locked strong,
.journeyHeader h1 {
  color: #fff
}

.journeyHeader h1 {
  margin: 0;
  padding: 100px 0
}

.journeyHeader .whys {
  margin: 3em 0 0
}

.journeyHeader .whys .label {
  font-weight: 800;
  padding: 0;
  font-size: 12px
}

.journeyHeader .tags {
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  color: #fff;
  padding-top: 2em
}

.journeyHeader .tags a {
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
  padding: 2px 7px 2px 0
}

.journeyHeader .tags .label {
  font-weight: 800;
  padding-bottom: .5em
}

@media screen and (max-width:767px) {
  .journeyHeader .tags {
    width: 100%;
    padding-top: 1em
  }
}

.journeyFooter {
  background-color: #e9971b;
  width: 100%;
  min-height: 100px;
  text-align: center
}

.journeyFooter h4,
.journeyFooter h5 {
  text-transform: uppercase;
  margin: 0;
  color: #fff
}

.journeyFooter h4 {
  position: absolute;
  right: 9px;
  bottom: -6px;
  font-weight: 600;
  opacity: .2;
  filter: alpha(opacity=20);
  font-size: 2.8em
}

.journeyFooter h5 {
  font-size: 1.8em;
  padding: 36px
}

@media screen and (max-width:1200px) {
  .journeyFooter h4 {
    font-size: 2.3em
  }
}

@media screen and (max-width:989px) {
  .journeyFooter h4 {
    display: none
  }
}

.journeyDetail.padtop {
  padding-top: 136px
}

.journeyDetail .whiteBox {
  padding: 4em 0 0!important;
  margin-top: -3em;
  z-index: 70;
  position: relative
}

.journeyDetail .wishlist-static .pack-line {
  border: none;
  margin: 0 3em
}

.journeyDetail .wishlist-static .day {
  padding-bottom: 2em
}

.journeyDetail .day {
  padding: 1em 0 6em;
  clear: both
}

.journeyDetail .day .day-head {
  font-family: 'Montserrat', Helvetica, Arial, Sans-serif;
  overflow: hidden;
  float: left
}

.journeyDetail .day .day-head .day-list-disc {
  width: 10em;
  padding: 1em 0;
  float: left;
  border-right: 5px solid #393b49;
  text-align: center;
  line-height: 1;
  position: relative;
  right: -1px;
  z-index: 2
}

.journeyDetail .day .day-head .day-list-disc .day-label {
  display: block;
  font-size: .875em;
  text-transform: uppercase;
  letter-spacing: 1px
}

.journeyDetail .day .day-head .day-list-disc .day-nr {
  display: block;
  font-size: 3em;
  font-weight: 900
}

.journeyDetail .day .day-head>h2 {
  font-size: 2em;
  color: #393b49;
  font-weight: 800;
  margin: 0;
  padding: .3em 0 0 6em;
  text-transform: initial
}

.journeyDetail .pack-line {
  position: relative;
  margin: 0 10em;
  border-left: 1px solid #ccc;
  padding: 0 2em 2em;
  left: -1px
}

.journeyDetail .pack-line:after,
.journeyDetail .pack-line:before {
  content: " ";
  display: table
}

.journeyDetail .pack-line:after {
  clear: both
}

@media screen and (max-width:1024px) {
  .journeyDetail .pack-line {
    margin: 0 2em
  }
}

@media screen and (max-width:768px) {
  .journeyDetail .pack-line {
    margin: 0;
    padding: 0 1em 1em;
    left: 0;
    border: 0
  }
}

.journeyDetail .pack-line:last-child {
  padding-bottom: 0
}

.journeyDetail .pack-line .pack {
  width: 200px;
  height: 200px;
  float: left;
  background-color: #ccc;
  min-height: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  -webkit-box-shadow: 4px 4px 0 #d3d3d3;
  box-shadow: 4px 4px 0 #d3d3d3
}

.journeyDetail .pack-line .pack img {
  height: 240px;
  top: -100%;
  left: -100%;
  right: -100%;
  bottom: -100%;
  margin: auto;
  position: absolute
}

@media screen and (max-width:767px) {
  .journeyDetail .pack-line .pack {
    width: 100%
  }
}

.journeyDetail .pack-line .packOut {
  background-color: #fff;
  float: left;
  width: 70%;
  font-size: 1em;
  padding: 0 2em
}

@media screen and (max-width:767px) {
  .journeyDetail .pack-line .packOut {
    width: 100%;
    padding: 0;
    margin: 1em 0 0
  }
}

.journeyDetail .pack-line .packOut .removeFromWish {
  color: #c15048;
  background-color: transparent;
  padding: 1em;
  border: 1px solid #c15048;
  margin: 15px 6px 0 0;
  float: right;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 11px
}

@media screen and (max-width:768px) {
  .journeyDetail .pack-line .packOut .removeFromWish {
    float: left
  }
}

.journeyDetail .pack-line .packOut .addToJourney {
  color: #fff;
  background-color: #e9971b;
  padding: 1em;
  border: 1px solid #e9971b;
  margin: 15px 6px 0 0;
  float: right;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 11px
}

@media screen and (max-width:768px) {
  .journeyDetail .pack-line .packOut .addToJourney {
    float: left
  }
}

.journeyDetail .pack-line .packOut .what {
  overflow: hidden;
  padding: 0 0 .5em
}

.journeyDetail .pack-line .packOut .desc {
  width: 100%;
  padding: 0;
  color: #333f4d
}

.journeyDetail .pack-line .packOut .desc .title {
  color: #333f4d;
  text-decoration: none;
  display: block;
  font-weight: 600;
  font-size: 1.5em;
  margin-bottom: .3em
}

.journeyDetail .pack-line .packOut .desc p {
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1.5em;
  font-size: 1em;
  color: #333f4d
}

.journeyDetail .pack-line .packOut .seeds {
  position: relative;
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
  font-size: 1em;
  padding: 0
}

.journeyDetail .pack-line .packOut .seeds:after,
.journeyDetail .pack-line .packOut .seeds:before {
  content: " ";
  display: table
}

.journeyDetail .pack-line .packOut .seeds:after {
  clear: both
}

.journeyDetail .pack-line .packOut .seeds>li {
  float: left;
  margin: 0 1em 0 0;
  padding: 0
}

.journeyDetail #daysCarouselWrap {
  padding-top: 0
}

.journeyDetail #daysCarouselWrap.stuck {
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 0 0 10px;
  background-color: #f1f1f1
}

.journeyDetail #daysCarouselWrap .item {
  cursor: pointer
}

.journeyDetail #daysCarouselWrap .item .picture {
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -ms-behavior: url(/assets/css/backgroundsize.htc);
  behavior: url(/assets/css/backgroundsize.htc);
  height: 110px
}

.journeyDetail #daysCarouselWrap .item .picture:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(49, 51, 64, .85)
}

.journeyDetail #daysCarouselWrap .item .picture .dayLabel {
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
  position: relative;
  z-index: 100;
  text-align: center;
  padding: 3em 0 0;
  display: block
}

ul.list-nested li:first-child {
  margin-top: 2px
}

ul.list-nested li .item {
  border: 1px solid #e9e6e0;
  box-shadow: 0 2px 1px rgba(57, 59, 73, .1);
  background-color: #f3f2ef;
  margin-bottom: 10px
}

ul.list-nested li .item .content {
  padding: 6px;
  width: 90%;
  cursor: default
}

ul.list-nested li .item .content:hover span.typo .title em {
  margin-left: 0;
  padding-left: 0
}

ul.list-nested li .item .content span.typo {
  width: 65%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}

ul.list-nested li .item .content span.typo .title {
  margin-bottom: 0;
  letter-spacing: .015em
}

ul.list-nested li .item .set a {
  height: 56px
}

ul.list-nested li .item .set a i {
  top: 20px;
  font-size: 20px
}

.basketlist-static [data-basket-list] {
  min-height: 700px
}

.loggedin .journey-single-page .wishlist,
.loggedout .journey-single-page .wishlist {
  display: block
}

.journey-single-page .pack-line .wishlist {
  display: none;
  float: right;
  border: 1px solid #e9971b
}

.journey-single-page .pack-line .wishlist .down {
  display: none
}

@media screen and (max-width:767px) {
  .journey-single-page .pack-line .wishlist {
    width: 100%!important;
    margin: 1em 0
  }
}

.journey-single-page .pack-line.inwishlist .wishlist {
  color: #c15048;
  background-color: transparent;
  border-color: #c15048
}

.journey-single-page .pack-line.inwishlist .up {
  display: none
}

.filters-row .select-group .filter-sub.visible,
.journey-single-page .pack-line.inwishlist .down {
  display: inline-block
}

.basketlist-static .emptyresult,
.dashboard .emptyresult,
.journey-single-page .emptyresult,
.wishlist-static .emptyresult {
  z-index: 5000;
  margin: 40px 0 3em
}

.basketlist-static .emptyresult p,
.dashboard .emptyresult p,
.journey-single-page .emptyresult p,
.wishlist-static .emptyresult p {
  text-align: center;
  color: #000
}

.basketlist-static .emptyresult a,
.dashboard .emptyresult a,
.journey-single-page .emptyresult a,
.wishlist-static .emptyresult a {
  display: block;
  color: #e9971b;
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  font-weight: 500;
  z-index: 100;
  border: 1px solid;
  padding: .7em 2em;
  width: 200px;
  margin: 0 auto
}

.basketlist-static .emptyresult.hidden,
.dashboard .emptyresult.hidden,
.journey-single-page .emptyresult.hidden,
.wishlist-static .emptyresult.hidden {
  display: none!important
}

@media screen and (max-width:991px) {
  .basketlist-static .emptyresult,
  .dashboard .emptyresult,
  .journey-single-page .emptyresult,
  .wishlist-static .emptyresult {
    margin-top: 80px
  }
}

@media screen and (max-width:767px) {
  .basketlist-static .emptyresult,
  .dashboard .emptyresult,
  .journey-single-page .emptyresult,
  .wishlist-static .emptyresult {
    margin-top: 80px
  }
  .basketlist-static .emptyresult a,
  .dashboard .emptyresult a,
  .journey-single-page .emptyresult a,
  .wishlist-static .emptyresult a {
    display: none
  }
}

.autocomplete-suggestions {
  background: #fff;
  margin-top: 1px;
  z-index: 99995!important;
  max-height: 370px!important
}

.autocomplete-suggestions .autocomplete-suggestion {
  padding: 6px 4px
}

.autocomplete-suggestions .autocomplete-suggestion span {
  display: block;
  text-transform: lowercase;
  font-style: italic
}

.autocomplete-suggestions .autocomplete-suggestion.autocomplete-selected {
  background: #e9971b;
  color: #fff
}

.user-data .user-info {
  width: 190px;
  float: left;
  padding-top: 16px
}

.user-data .user-info .username {
  display: block;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  color: #393b49;
  line-height: 1.1
}

.user-data [data-enduser-assign] {
  margin: 15px 0;
  padding: 4px 28px;
  border: 1px solid;
  display: inline-block
}

.filters-row {
  margin: 0 0 1em
}

.filters-row .nopadding {
  padding: 0
}

.filters-row.hidden {
  display: none
}

.filters-row .resetfilters {
  color: #313340;
  font-weight: 600;
  text-transform: uppercase;
  float: right;
  font-size: 12px;
  padding: 8px 0;
  opacity: 1;
  transition: opacity .2s ease;
  -webkit-transition: opacity .2s ease;
  -moz-transition: opacity .2s ease;
  -ms-transition: opacity .2s ease;
  -o-transition: opacity .2s ease
}

.filters-row .resetfilters.hidden {
  opacity: 0;
  cursor: default
}

.filters-row .title {
  font-weight: 900;
  line-height: 2.5;
  font-size: 1.5em
}

.filters-row .select-group .field-select {
  width: 90%;
  height: 30px;
  display: inline-block
}

.filters-row .select-group .field-select select {
  height: 30px;
  padding: 0 1px 3px 6px;
  font-size: 15px!important;
  background: #fff;
  width: 112%
}

.filters-row .select-group .filter-sub {
  display: none
}

.filters-row .nice {
  font-size: 1em!important;
  padding: 5px 1em;
  width: 200px
}

.filters-row [data-searchbox] {
  display: inline-block;
  position: relative
}

.filters-row [data-searchbox] .ico-close {
  position: absolute;
  top: 10px;
  right: 6px;
  cursor: pointer
}

.filters-row .label {
  font-weight: 700;
  display: inline-block;
  text-transform: uppercase;
  font-size: .8em;
  letter-spacing: .02em;
  color: #333f4d;
  height: 100%;
  vertical-align: middle;
  padding: 0 1em 0 0;
  font-family: 'Montserrat', Helvetica, Arial, Sans-serif
}

.filters-row select {
  margin-right: 2em
}

.filters-row .orderby {
  height: 100%;
  display: inline-block;
  margin-top: 6px;
  margin-bottom: 10px
}

.filters-row .orderby .select-order {
  font-size: .875em;
  cursor: pointer;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  height: 22px;
  width: 22px
}

.filters-row .orderby .select-order>i {
  position: absolute;
  top: 5px;
  right: 5px
}

.filters-row .orderby .select-order.active {
  background-color: #e9971b;
  color: #fff
}

@media screen and (max-width:992px) {
  .filters-row {
    padding: .5em 0
  }
  .filters-row .select-group .field-select {
    width: 100%;
    background-position: 98% 55%
  }
}

@media screen and (max-width:767px) {
  .filters-row [data-searchbox] {
    margin-bottom: 8px
  }
  .filters-row .orderby .select-order {
    padding: 2px .5em 2px 0
  }
}

@media screen and (max-width:460px) {
  .filters-row .label {
    display: none!important
  }
}

.jBox-container,
.jBox-content,
.jBox-title {
  word-break: normal!important
}

@media screen and (max-width:1200px) {
  .hide-on-tablet {
    display: none
  }
}

.marker .marker-journey img,
.special-explore.australia .advanced-filters .meta-where,
.special-explore.polinesia .advanced-filters .meta-where {
  display: none
}

.marker .marker-journey span,
.marker-cluster span {
  width: 100%;
  text-align: center;
  display: block;
  font-family: 'Open Sans', Helvetica, Arial, Sans-serif!important;
  font-weight: 800!important;
  font-size: 13px;
  color: #fff
}

.marker-cluster span {
  line-height: 50px!important
}

.marker.journey {
  border: 0
}

.marker .marker-journey span {
  text-indent: -15px;
  line-height: 45px
}

.ali-dock {
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  height: 0;
  z-index: 9999
}

.ali-dock>.chat-tabs {
  position: absolute;
  bottom: 0;
  right: 0
}

.ali-dock>.chat-tabs>.widget-chat {
  position: relative;
  float: right;
  margin-right: 10px
}

@media screen and (max-width:568px) {
  .ali-dock {
    display: none
  }
}
</style>
