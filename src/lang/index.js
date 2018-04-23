import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import enLocale from './en'
import itLocale from './it'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale
  },
  it: {
    ...itLocale
  },
  zh: {
    ...zhLocale
  }
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'en', // set locale
  messages // set locale messages
})

export default i18n
