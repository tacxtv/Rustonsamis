<template lang='pug'>
  div
    v-card
      v-parallax.section-1(height="700" style='border-radius: 0;' src="https://wallpaperaccess.com/full/2002264.png")
        .d-flex.justify-center.mt-8
          v-img.flex-grow-0(width="250px" contain src="https://cdn.discordapp.com/attachments/782624831924863027/994976328627527751/unknown.png")
        .minecrafter-title.text-center.mt-2.mx-2 Rustons Amis
        .catch-phrase.text-center.mx-2 Venez survivre à nos cotés dans ce monde hostile !
    div(style='margin: 0 12px;')
      v-container#container.pa-0
        v-row(justify="center" align="center")
          v-col.d-flex.justify-center(cols='12')
            .minecrafter-section-title.text-center Deviens
          v-col.d-flex.justify-center(cols='12')
            .minecrafter-section-subtitle.text-center le maitre de ce monde en...
        v-row(justify="center" align="center")
          v-col.d-flex.justify-center
            v-card.text-center(color='transparent')
              .what-text-section ...développant ton univers
                br
                span.red--text.border-section-text.font-weight-bold seul ou en équipe
          v-col.d-flex.justify-center
            v-card(color='transparent')
              v-img(width='300px' contain='' :src='require("~/assets/imgs/rustrepair.png")')
        v-row(justify="center" align="center")
          v-col.d-flex.justify-center
            v-card(color='transparent')
              v-img(width='275px' contain='' :src='require("~/assets/imgs/rifle.ak_512.png")')
          v-col.d-flex.justify-center
            v-card.text-center(color='transparent')
              .what-text-section ...affirmant ton courage et ta force face
                br
                span.red--text.border-section-text.font-weight-bold à l'hostile adversité
        v-row(justify="center" align="center")
          v-col.d-flex.justify-center
            v-card.text-center(color='transparent')
              .what-text-section ...déployant ta stratégie
                br
                span.red--text.border-section-text.font-weight-bold offensive et défensive
          v-col.d-flex.justify-center
            v-card(color='transparent')
              v-img(width='550px' contain='' :src='require("~/assets/imgs/plan.png")')

        v-row(justify="center" align="center")
          v-col.d-flex.justify-center
            v-card(color='transparent')
              v-img(width='500px' height='300px' contain='' :src='require("~/assets/imgs/rusthouse.png")')
          v-col.d-flex.justify-center
            v-card.text-center(color='transparent')
              .what-text-section ...construisant un avenir
                br
                span.red--text.border-section-text.font-weight-bold pour toi et ton équipe
        v-row(justify="center" align="center")
          v-col.d-flex.justify-center
            v-card.text-center(color='transparent')
              .what-text-section ...dévoilant tes capacités
                br
                span.red--text.border-section-text.font-weight-bold de négociateur
          v-col.d-flex.justify-center
            v-card(color='transparent')
              v-img(width='400px' contain='' :src='require("~/assets/imgs/dangerous.png")')
        v-row(justify="center" align="center")
          v-col.d-flex.justify-center
            v-card(color='transparent')
              v-img(width='500px' height='300px' contain='' :src='require("~/assets/imgs/rustturret.png")')
          v-col.d-flex.justify-center
            v-card.text-center(color='transparent')
              .what-text-section ...menant des guerres
                br
                span.red--text.border-section-text.font-weight-bold vers la victoire
      v-container#container.pa-0(fluid)
    v-card
      v-parallax.section-2(height="550" style='border-radius: 0;' src="https://www.gamelivestory.com/images/article/rust-25-pro-tips-you-need-to-know-main.webp")
</template>

<style>
.section-1 {
  width: 100vw;
  height: 65vh;
}

.minecrafter-title {
  font-family: "Special Elite", serif;
  font-size: 90px;
  -webkit-text-stroke: 2px #000000;
}

.catch-phrase {
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.0333333333em;
  line-height: 1.25rem;
  font-family: "Roboto", sans-serif;
}

.section-2 {
  width: 100vw;
}

.minecrafter-section-title {
  font-family: "Special Elite", serif;
  font-size: 55px;
}

.minecrafter-section-subtitle {
  font-family: "Special Elite", serif;
  font-size: 30px;
}

.what-text-section {
  font-size: 35px;
}

.border-section-text {
}

.bg-color-section {
  background-color: black;
}
</style>
