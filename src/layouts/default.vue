<template lang='pug'>
  v-app(dark)
    v-main
      v-overlay(:opacity="1" :value="displayOverlay")
        v-progress-circular(indeterminate size="64")
      v-app-bar(color="#161616" dark)
        v-app-bar-nav-icon.hidden-md-and-up(@click="drawer = true")
        v-tabs.hidden-sm-and-down(align-with-title :value="$route.name")
          v-tab.ml-0(v-for='(item, key) in items' :key='key' v-bind='item.binds' nuxt)
            v-icon.mr-2(v-text='item.icon')
            span(v-text='item.title')
        v-spacer
        v-btn.mx-4.white--text(color="blue-grey" fab icon href='https://discord.gg/NURBhQhY3f' target='_blank')
          v-icon(color="#738ADB" large dark) mdi-discord
        v-btn(color="primary" href='https://rustonsamispanel.tacxtv.fr/?login')
          v-icon.mr-2(left) mdi-account-plus
          span S'inscrire
      v-navigation-drawer(v-model="drawer" absolute temporary)
        v-list(nav dense)
          v-list-item-group(v-model="group" active-class="primary--text text--accent-4")
            v-list-item(v-for='(item, key) in items' :key='key' v-bind='item.binds' nuxt)
              v-list-item-icon
                v-icon(v-text='item.icon')
              v-list-item-title(v-text='item.title')
      nuxt
      v-footer(dark padless)
        v-card.flex(flat tile)
          v-card-text.py-2.white--text.text-center
            small Rustons Amis est un serveur Rust© gratuit et n’est en aucun cas affilié à Facepunch Studios©.
            v-spacer
            span {{ new Date().getFullYear() }} — TacxTV
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {
  drawer = false
  group = null
  activate = true
  displayOverlay = true

  get items() {
    return [
      {
        title: 'Accueil',
        icon: 'mdi-home',
        binds: {
          to: '/',
          value: '/',
          exact: true,
        },
      },
      // {
      //   title: 'Carte',
      //   icon: 'mdi-map',
      //   binds: {
      //     href: "http://188.165.187.225:27040/",
      //     target:'_blank',
      //   },
      // },
      {
        title: 'Règles',
        icon: 'mdi-ruler',
        binds: {
          to: '/rules',
          value: '/rules',
        },
      },
      {
        title: 'Tips',
        icon: 'mdi-flag',
        binds: {
          to: '/tips',
          value: '/tips',
        },
      },
    ]
  }

  mounted () {
    this.displayOverlay = false
  }
}
</script>
