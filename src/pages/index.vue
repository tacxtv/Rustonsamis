<template lang='pug'>
  div
    v-row(justify="center" align="center")
      v-col(cols='12')
        v-card
          v-parallax.section-1(height="700" style='border-radius: 0;' src="https://wallpaperaccess.com/full/2002264.png")
            .d-flex.justify-center.mt-8
              v-img.flex-grow-0(width="250px" contain src="https://cdn.discordapp.com/attachments/782624831924863027/994976328627527751/unknown.png")
            .minecrafter-title.text-center.mt-2.mx-2 Rustons Amis
            .catch-phrase.text-center.mx-2 Venez survivre à nos cotés dans ce monde hostile !
    v-row(justify="center" align="center")
      v-col.d-flex.justify-center(cols='12')
        .minecrafter-section-title.text-center Pourquoi
      v-col.d-flex.justify-center(cols='12')
        .minecrafter-section-subtitle.text-center Pour nous montrer...
    v-row(justify="center" align="center")
      v-col.d-flex.justify-center
        v-card.text-center(color='transparent')
          .what-text-section ...de quoi tu es capable
            br
            span.red--text.border-section-text.font-weight-bold toi et ton équipe
      v-col.d-flex.justify-center
        v-card(color='transparent')
          v-img(width='400px' contain='' :src='require("~/assets/imgs/rustrepair.png")')
    v-row(justify="center" align="center")
      v-col.d-flex.justify-center
        v-card(color='transparent')
          v-img(width='275px' contain='' :src='require("~/assets/imgs/rifle.ak_512.png")')
      v-col.d-flex.justify-center
        v-card.text-center(color='transparent')
          .what-text-section ...ton courage face à
            br
            span.red--text.border-section-text.font-weight-bold des ennemis scientifiques !
    v-row(justify="center" align="center")
      v-col.d-flex.justify-center
        v-card.text-center(color='transparent')
          .what-text-section ...ainsi que ta créativité pour
            br
            span.red--text.border-section-text.font-weight-bold défendre ou attaquer bases !
      v-col.d-flex.justify-center
        v-card(color='transparent')
          v-img(width='500px' contain='' :src='require("~/assets/imgs/rusthouse.png")')
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
