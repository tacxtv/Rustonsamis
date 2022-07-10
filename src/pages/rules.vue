<template lang='pug'>
  v-row(justify="center" align="center")
    v-col
      v-card.section-2(color="transparent")
        v-parallax.section-1(height="200" style='border-radius: 0;' src='https://i.pinimg.com/originals/b7/e5/68/b7e568c3e0aae3049ef11dee60af1d9f.jpg')
          div.minecrafter-section-title.text-center.mx-2 RÈGLES
        div.minecrafter-section-subtitle.text-center.mx-2.mt-4 Général
        v-container.d-flex.justify-center.mb-4
          v-list(width="600px" rounded two-line subheader)
            v-list-item(v-for='(rule, key) in rulesGeneral' :key='key')
              v-list-item-icon.my-auto
                v-icon(color="pink") mdi-star
              v-list-item-content
                v-list-item-title.text-h5.font-weight-bold(v-text='rule.title')
                span(v-text='rule.description')
        v-divider
        div.minecrafter-section-subtitle.text-center.mx-2.mt-4 Général
        v-container.d-flex.justify-center.mb-4
          v-list(width="600px" rounded two-line subheader)
            v-list-item(v-for='(rule, key) in rulesGeneral' :key='key')
              v-list-item-icon.my-auto
                v-icon(color="pink") mdi-star
              v-list-item-content
                v-list-item-title.text-h5.font-weight-bold(v-text='rule.title')
                span(v-text='rule.description')
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Rules extends Vue {
  get rulesGeneral() {
    return [
      {
        title: 'Respect',
        description: 'Le respect et la tolérance envers chaque joueur est primordiale.',
      },
      {
        title: 'Respect',
        description: 'Le respect et la tolérance envers chaque joueur est primordiale.',
      },
      {
        title: 'Respect',
        description: 'Le respect et la tolérance envers chaque joueur est primordiale.',
      },
      {
        title: 'Respect',
        description: 'Le respect et la tolérance envers chaque joueur est primordiale.',
      },
      {
        title: 'Respect',
        description: 'Le respect et la tolérance envers chaque joueur est primordiale.',
      },
      {
        title: 'Respect',
        description: 'Le respect et la tolérance envers chaque joueur est primordiale.',
      },
      {
        title: 'Respect',
        description: 'Le respect et la tolérance envers chaque joueur est primordiale.',
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
