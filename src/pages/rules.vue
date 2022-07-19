<template lang='pug'>
  div
    v-card.section-2(color="transparent")
      v-img.section-1(
        height="400"
        style='border-radius: 0;'
        src='https://media.discordapp.net/attachments/782624831924863027/998714956285489182/unknown.png'
      )
        div.minecrafter-section-title.text-center.mx-2(
          style='position: absolute;top: calc(50% - 48px);left: 50%;transform: translate(-50%);text-shadow: 1px 1px 2px black;'
        ) RÈGLES
    div(style='margin: 0 12px;')
      v-row(justify="center" align="center")
        v-col
          v-card.section-2(color="transparent")
            div.minecrafter-section-subtitle.text-center.mx-2.mt-4 Général
            v-container.d-flex.justify-center.mb-4
              v-list(width="600px" rounded two-line subheader)
                v-list-item(v-for='(rule, key) in rulesGeneral' :key='key')
                  v-list-item-icon.my-auto
                    v-icon(color="pink") mdi-pistol
                  v-list-item-content
                    v-list-item-title.text-h5.font-weight-bold(v-html='rule.title')
                    span(v-html='rule.description')
            v-divider.my-8
            div.minecrafter-section-subtitle.text-center.mx-2.mt-4 RUST
            v-container.d-flex.justify-center.mb-4
              v-list(width="600px" rounded two-line subheader)
                v-list-item(v-for='(rule, key) in rulesRust' :key='key')
                  v-list-item-icon.my-auto
                    v-icon(color="pink") mdi-pistol
                  v-list-item-content
                    v-list-item-title.text-h5.font-weight-bold(v-html='rule.title')
                    span(v-html='rule.description')
            v-divider.my-8
            div.minecrafter-section-subtitle.text-center.mx-2.mt-4 Conclusion
            v-container.d-flex.justify-center.mb-4
              v-list(width="600px" rounded two-line subheader)
                v-list-item(v-for='(rule, key) in rulesConclusion' :key='key')
                  v-list-item-icon.my-auto
                    v-icon(color="pink") mdi-pistol
                  v-list-item-content
                    v-list-item-title.text-h5.font-weight-bold(v-html='rule.title')
                    span(v-html='rule.description')
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Rules extends Vue {
  get rulesGeneral() {
    return [
      {
        title: 'Respect',
        description: 'Le respect et la tolérance envers chaque joueur est primordial.',
      },
      {
        title: 'Politesse',
        description: 'La politesse est donc de mise pour que l\'expérience de chacun soit la meilleure possible.',
      },
      {
        title: 'Pas de discrimination',
        description: 'Toute remarque ou symbole à caractère raciste, homophobe, sexiste, apologie du terrorisme sont interdites.',
      },
    ]
  }
  get rulesRust() {
    return [
      {
        title: 'Pertes et dégâts',
        description: 'Au sein du jeu, tout objet perdu ou cassé ne sera ni rembourser ni remplacer. Aucun drop ne sera fait à la demande.',
      },
      {
        title: 'PVP',
        description: 'Le serveur étant semi RP, vous avez le droit de tuer ou de raid vos semblables, mais avec fairplay, il est donc interdit de tirer à vue. Cependant, les tirs de sommation sont autorisés.\n',
      },
      {
        title: 'Triche',
        description: 'Toute forme de triche telle quelle soit (Usebug, logiciels tiers, ...) est formellement interdite.',
      },
      {
        title: 'Streamhack',
        description: 'Le streamhack est interdit chez tous les streamers tels qu\'ils soient sur le serveur.',
      },
    ]
  }
  get rulesConclusion() {
    return [
      {
        title: 'Problèmes',
        description: 'Si vous rencontrez un problème en jeu, n’hésitez pas à en faire part.',
      },
      {
        title: 'Sanctions',
        description: 'Tout dépassement ou infraction à ces règles peut entraîner une sanction allant de la réprimande au bannissement du jeu et du Discord selon la communauté.',
      },
      {
        title: 'Mise au point',
        description: 'Les règles et sanctions peuvent changer. Les joueurs se doivent de se mettre au courant de chaque changement.',
      },
    ]
  }
}
</script>

<style>
.minecrafter-section-title {
  font-family: 'Special Elite', cursive;
  font-size: 64px;
}
.minecrafter-section-subtitle {
  font-family: 'Special Elite', cursive;
  font-size: 32px;
  -webkit-text-stroke: 1px #000000;
}
</style>
