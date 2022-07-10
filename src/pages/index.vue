<template lang='pug'>
  v-row(justify="center" align="center")
    v-col
      v-card
        v-parallax.section-1(height="700" style='border-radius: 0;' src="https://wallpaperaccess.com/full/2002264.png")
          .d-flex.justify-center.mt-8
            v-img.flex-grow-0(width="250px" contain src="https://cdn.discordapp.com/attachments/782624831924863027/994976328627527751/unknown.png")
          .minecrafter-title.text-center.mt-2.mx-2 Rustons Amis
          .catch-phrase.text-center.mx-2 Venez survivre à nos cotés dans ce monde hostile !
      v-card.section-2(color='#141414')
        .minecrafter-section-title.text-center.mx-2
          | Pourquoi
        .minecrafter-section-subtitle.text-center.mb-8.mx-2
          | Pour nous montrer...
        v-container
          .d-flex.justify-space-around.align-center
            .what-text-section.text-center
              | ...de quoi tu es capable
              br
              span.cyan--text.border-section-text.font-weight-bold toi et ta pioche
              |  !
            v-img.flex-grow-0(width='400px' contain='' :src='require("~/assets/imgs/rustrepair.png")')
          .d-flex.justify-space-around.align-center
            v-img.flex-grow-0(width='275px' contain='' :src='require("~/assets/imgs/rifle.ak_512.png")')
            .what-text-section.text-center
              | ...ton courage face à
              br
              span.red--text.border-section-text.font-weight-bold des ennemis inconnus !
          .d-flex.justify-space-around.align-center
            .what-text-section.text-center
              | ...ainsi que ta créativité dans la construction
              br
              span.green--text.border-section-text.font-weight-bold de maisons ou d’usines !
            v-img.flex-grow-0(width='400px' contain='' :src='require("~/assets/imgs/rusthouse.png")')
</template>

<style>
.section-1 {
  width: 100vw;
  height: 65vh;
}
.minecrafter-title {
  font-family: "Special Elite",serif;
  font-size: 90px;
  -webkit-text-stroke: 2px #000000;
}
.catch-phrase {
  font-size: 34px ;
  font-weight: 400;
  letter-spacing: 0.0333333333em;
  line-height: 1.25rem;
  font-family: "Roboto", sans-serif;
}
.section-2 {
  width: 100vw;
}
.minecrafter-section-title {
  font-family: "Special Elite",serif;
  font-size: 55px;
  -webkit-text-stroke: 2px #000000;
}
.minecrafter-section-subtitle {
  font-family: "Special Elite",serif;
  font-size: 30px;
  -webkit-text-stroke: 2px #000000;
}
.what-text-section {
  font-size: 35px;
}
.border-section-text {
  -webkit-text-stroke: 2px #000000;
}
.bg-color-section {
  background-color: black;
}
</style>
