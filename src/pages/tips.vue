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
        <p>Chaque joueur à le droit à un kit de départ et un kit journalier.</p>
        <p>Pour les obtenir, ouvre le tchat en jeu avec la <b class='error--text'>touche T</b> et écris <b class='error--text'>/kit</b>, un panneau va s’ouvrir, choisi ton kit. <b class='error--text'>Chaque kit est individuel et personnel</b>, à vous de choisir comment l’utiliser pour vous ou pour votre équipe.</p>
        <br>
        <small>
          <ul>
            <li>
            <b class='error--text'>Kit de départ</b> : S'obtient <b class='error--text'>une seule fois</b>, nourriture, bois, pierre, métal, cuir vous sont fournis pour vous permettre de démarrer sur de bonnes bases.
            <br>
            <small><i>Recommandation de l’équipe : Prenez votre kit à un moment opportun, le jeu étant un jeu où vous pouvez mourir et perdre votre inventaire, il est recommandé de vous le drop quand vous serez installé. (Toute perte ou vol ne sera pas remboursé).</i></small>
            </li>
            <li class='mt-4'>
            <b class='error--text'>Kit journalier</b> : S'obtient <b class='error--text'>chaque jour</b>. Un fumigène de largage aérien vous sera drop, une fois reçu, jetez-le dans la nature, il faudra quelque minute pour qu’un avion dépose le largage aérien.
            <br>
            <small><i>Recommandation de l’équipe : Jetez votre drop aérien en sécurité, vous pouvez vous le faire voler par n’importe quel joueur et à n’importe quel moment. (Toute perte ou vol ne sera pas remboursé).</i></small>
            </li>
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
        text: `
        <p>Si tu veux survivre dans ce monde hostile, il faut construire ! Pour commencer, fais-toi un <b class='error--text'>plan de construction et un marteau</b>. Chaque construction à besoin <b class='error--text'>de fondation, de mur et d’un toit</b>, fait appel à ton art architectural pour le design de ta base.</p>
        <br>
        <small>
          <ul>
            <li>Plan de construction : Sert à <b class='error--text'>construire</b>, faite clic droit pour sélectionner l’objet que tu veux construire.</li>
            <li>Marteau : Sert à <b class='error--text'>fortifier les constructions</b> dans la matière de votre choix selon les ressources disponibles sur vous.</li>
          </ul>
        </small>
        `,
        image: {
          binds: {
            width: '400px',
          },
          url: "https://irust.ru/web/img/thing/barricade.metal.png",
        }
      },
      {
        title: 'Boîte à outils',
        text: `
          <p>Après avoir construit vos premiers édifices, <b class='error--text'>il faudra placer une boîte à outils.</b></p>
          <p>Cette boite à outil vous permettra dans un périmètre restreint de <b class='error--text'>protéger et identifier la construction à vous et votre équipe, mais aussi à éviter les dégâts naturels de l’usure</b>. Pour cela, il faudra la charger d’un certain nombre de matières premières selon les matériaux de votre construction.</p>
          <br>
          <small>
          Recommandation de l’équipe :
          <ul>
            <li>Pensez à vérifier qu’il y a bien assez de ressources pour garder en état votre construction.</li>
            <li>Mettez la en sécurité, elle est la protection de votre base. <b class='error--text'>Si elle tombe, votre structure devient vulnérable</b>.</li>
          </ul>
          </small>
        `,
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
          <p>Pour une meilleure expérience de jeu pour tous les joueurs, un anti raid off a été déployé.</p>
          <p><b class='error--text'>Si aucun joueur de l’équipe que vous voulez raid n’est connecté et selon le laps de déconnection, il sera compliqué de faire des dégâts à la base de vos adversaires.</b></p>
          <p>Ceci est mis en place afin de permettre au joueur de pouvoir se défendre, cependant il n’est pas interdit de raid une base inerte, cela vous prendra simplement plus de temps.</p>
          <br>
          <small>
            <div>Protection en fonction du temps d'AFK:</div>
            <ul>
              <li>0h à 2h: 100%</li>
              <li>2h à 4h: 80%</li>
              <li>4h à 12h: 60%</li>
              <li>12h à 24h: 40%</li>
              <li>24h à 48h: 20%</li>
              <li>48h et +: 0%</li>
            </ul>
          </small>
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
        text: `
        <p>Nous tenons à ce que l’expérience de chaque joueur soit la plus satisfaisante possible, peu importe votre niveau. Le serveur est donc semi RP, ce qui veut dire qu’<b class='error--text'>il vous faut un contexte pour tuer un adversaire</b>. Il n’est donc pas recommandé de tirer à vue sans raison, essayez de communiquer.</p>
        `,
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
          <div>Pour vous regrouper avec <b class='error--text'>vos amis dans un clan</b>, vous pouvez en créer un via des commandes dediés.</div>
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
