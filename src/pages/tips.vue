<template lang='pug'>
  div
    v-card.section-2(color="transparent")
      v-parallax.section-1(height="200" style='border-radius: 0;' src='https://www.teahub.io/photos/full/169-1692279_video-game-rust-fan-art.jpg')
        div.minecrafter-section-title.text-center.mx-2(
          style='text-shadow: 1px 1px 2px black;'
        ) TIPS
    div(style='margin: 0 12px;')
      v-container#container.mt-6.pa-0
        div(v-for='(item, key) in items' :key='key')
          div.minecrafter-section-subtitle2.text-center.mx-2.mt-16(v-html='item.title')
          v-row(justify="center" align="center" v-if='key % 2')
            v-col.d-flex.justify-center(cols='12' md='4')
              v-card(color='transparent')
                v-img(v-bind='item.image.binds' contain='' :src='item.image.url')
            v-col.d-flex.justify-center
              v-card.objective-description.pa-4.ma-4(v-html='item.text' rounded)
          v-row(justify="center" align="center" v-else)
            v-col.d-flex.justify-center
              v-card.objective-description.pa-4.ma-4(v-html='item.text' rounded)
            v-col.d-flex.justify-center(cols='12' md='4')
              v-card(color='transparent')
                v-img(v-bind='item.image.binds' contain='' :src='item.image.url')
          v-divider.my-3.mt-12(v-if='items.length -1 !== key')
    br
    br
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Rules extends Vue {
  get items() {
    return [
      {
        title: 'KIT',
        text: `
        <div>Chaque joueur à le droit à un kit de départ et un kit journalier. Pour les obtenirs, ouvre le tchat en jeu avec la touche T et écris /kit, un panneau va s’ouvrir, clic pour obtenir ton dû.</div>
        <br>
        <small>
          <ul>
            <li>Kit de départ : S'obtient une seule fois, nourriture, bois, pierre, métal, cuir vous sont fournis pour vous permettre de démarrer sur de bonnes bases. Recommandation de l’équipe : Prenez votre kit à un moment opportun, le jeu étant un jeu où vous pouvez mourir et perdre votre inventaire, il est recommandé de vous le drop quand vous serez installé.</li>
            <li class='mt-4'>Kit journalier : S'obtient chaque jour. Un fumigène de largage aérien vous sera drop, une fois reçu, jetez-le dans la nature, il faudra quelque minute pour qu’un avion dépose un largage aérien à vous drop. (Toute perte ou vol ne sera pas remboursé). Recommandation de l’équipe : Jetez votre drop aérien en sécurité, vous pouvez vous le faire voler par n’importe quel joueur et à n’importe quel moment. (Toute perte ou vol ne sera pas remboursé).</li>
          </ul>
        </small>
        `,
        image: {
          binds: {
            width: '400px',
          },
          url: "https://images.squarespace-cdn.com/content/v1/5420d068e4b09194f76b2af6/1608149560297-G366910ZIL4JHXIKERGF/image-asset.png",
        }
      },
      {
        title: 'Build',
        text: 'Si tu veux survivre au monde hostile, il faut construire ! Pour commencer, fais-toi un plan de construction, sélectionne-le et fais clic droit pour choisir la construction dont tu as besoin.<br> Chaque construction à besoin de fondation, de mur et d’un toit, après fait appel à ton art architectural pour le design de ta base. Ensuite, il te faudra un marteau pour fortifier et changer la matière de ta base. Pour cela, rien de plus simple, clic droit, et choisi ta fortification.',
        image: {
          binds: {
            width: '400px',
          },
          url: "https://irust.ru/web/img/thing/barricade.metal.png",
        }
      },
      {
        title: 'Boîte à outils',
        text: 'Après avoir construit vos premiers édifices, il faudra placer une boîte à outil. <br>Cette boite à outil vous permettra dans un périmètre restreint de protéger et identifier la construction à vous et votre équipe, mais aussi à éviter les dégâts naturels de l’usure. Pour cela, il faudra la charger d’un certain nombre de matières premières selon les matériaux de votre construction et pensez à vérifier qu’il y a bien assez de ressource pour la garder en état.',
        image: {
          binds: {
            width: '400px',
          },
          url: require("~/assets/imgs/cupboard.png"),
        }
      },
      {
        title: 'Anti raid off',
        text: `
          <div>Pour une meilleure expérience de jeu pour tous les joueurs,un anti raid off est mis en place. Si aucun joueur de l’équipe n’est connecté et selon le laps de déconnection, il sera compliqué de faire des dégâts à la base de vos adversaires. Ceci est mis en place afin de permettre au joueur de pouvoir se défendre, cependant il n’est pas interdit de raid une base inerte, cela prendra simplement plus de temps.</div>
          <br>
          <div>Protection en fonction du temps d'AFK:</div>
          <ul>
            <li>0h à 2h: 100%</li>
            <li>2h à 4h: 80%</li>
            <li>4h à 12h: 60%</li>
            <li>12h à 24h: 40%</li>
            <li>24h à 48h: 20%</li>
            <li>48h et +: 0%</li>
          </ul>
        `,
        image: {
          binds: {
            width: '300px',
          },
          url: require("~/assets/imgs/c4.png"),
        }
      },
      {
        title: 'Semi PVP/RP',
        text: 'Nous tenons à ce que l’expérience de chaque joueur soit la plus satisfaisante possible, peu importe le niveau. <br>Le serveur est donc semi RP, ce qui veut dire qu’il vous faut un contexte pour tuer un adversaire. Il n’est donc pas recommandé de tirer à vue sans raison.',
        image: {
          binds: {
            width: '300px',
          },
          url: "https://images.squarespace-cdn.com/content/v1/5420d068e4b09194f76b2af6/1481292469229-9FMRX7C139QWO3GSVDII/image-asset.png",
        }
      },
      {
        title: 'Clan',
        text: `
          <div>Pour vous regrouper avec vos amis dans un clan, vous pouvez en créer un via des commandes dediés.</div>
          <br>
          <ul>
            <li><b>/clanhelp</b> : Aide générale pour les clans</li>
            <li><b>/clan</b> : Informations de votre clan</li>
            <li><b>/clan create [TAG]</b> : Créer un clan</li>
            <li><b>/clan join [TAG]</b> : Rejoindre un clan</li>
            <li><b>/clan invite [JOUEUR]</b> : Inviter un joueur</li>
            <li><b>/clan leave</b> : Quitter un clan</li>
          </ul>
        `,
        image: {
          binds: {
            width: '300px',
          },
          url: "https://server.nitrado.net/offers/assets/rust/offer_1.png",
        }
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
.minecrafter-section-subtitle2 {
  font-family: 'Special Elite', cursive;
  font-size: 40px;
  -webkit-text-stroke: 1px #000000;
}
.objective-description {
  font-size: 1.075rem;
  font-weight: 500;
  letter-spacing: .009375em;
}
</style>
