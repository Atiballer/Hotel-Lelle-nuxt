<template>
  <div class="container">
    <ul>
      <li v-for="(image, index) in images"
          style="display: inline-block; padding-right: 1.5rem;"
          :key="index">
        <img class="pb-4"
             v-lazy="image.src"
             style="height: 15em"
             @click="openGallery(index)">
      </li>
    </ul>
    <LightBox :images="images"
              ref="lightbox"
              :show-caption="true"
              :show-light-box="false"></LightBox>
  </div>
</template>

<script>
require("vue-image-lightbox/dist/vue-image-lightbox.min.css");

export default {
  data() {
    return {
      images: [
        {
          thumb: "hotel.jpg",
          src: "hotel.jpg",
          alt: "Hotel Lelle",
          caption: "A szálloda"
        },
        {
          thumb: "hotel3.jpg",
          src: "hotel3.jpg",
          alt: "Hotel Lelle kívülről",
          caption: "A szálloda kívülről"
        },
        {
          thumb: "bejarat.jpg",
          src: "bejarat.jpg",
          alt: "A szálloda bejárata",
          caption: "Bejárat a szállodába"
        },
        {
          thumb: "bejarat2.jpg",
          src: "bejarat2.jpg",
          alt: "A szálloda bejárata vendégekkel",
          caption: "Gyertek, gyertek :)"
        },
        {
          thumb: "bejarat3.jpg",
          src: "bejarat3.jpg",
          alt: "A szálloda bejárata vendégekkel és buszokkal",
          caption: "Van egy kis forgalom :)"
        },
        {
          thumb: "bejarat_este2.jpg",
          src: "bejarat_este2.jpg",
          alt: "A bejárat este",
          caption: "A bejárat este"
        },
        {
          thumb: "keszul.jpg",
          src: "keszul.jpg",
          alt: "Valami készül hotelünkben",
          caption: "Valami készül :)"
        },
        {
          thumb: "bicikli.jpg",
          src: "bicikli.jpg",
          alt: "Bicikli túra indulás a szállodánktól",
          caption: "Egy kis bicikli túra belefér :)"
        },
        {
          thumb: "ellatas.jpg",
          src: "ellatas.jpg",
          alt: "Ellátás",
          caption: "Félpanziós ellátás"
        },
        {
          thumb: "ellatas2.jpg",
          src: "ellatas2.jpg",
          alt: "Házias ízek",
          caption: "Házias ízek"
        },
        {
          thumb: "desszert.jpg",
          src: "desszert.jpg",
          alt: "desszert",
          caption: "Desszert is van"
        },
        {
          thumb: "burger.jpg",
          src: "burger.jpg",
          alt: "Hamburgerező a Hotel Lellében",
          caption: "Sláger a hamburger 🍺🍔🌭 Wild West Burger House"
        },
        {
          thumb: "fagyi.jpg",
          src: "fagyi.jpg",
          alt: "Fagyizó a Hotel Lellében",
          caption: "Fagyink is van :)"
        },
        {
          thumb: "strand.jpg",
          src: "strand.jpg",
          alt: "A strand",
          caption: "Szállodánk strandja"
        },
        {
          thumb: "szabadter.jpg",
          src: "szabadter.jpg",
          alt: "A szabadban",
          caption: "A szabadban"
        },
        {
          thumb: "szabadter3.jpg",
          src: "szabadter3.jpg",
          alt: "Szintén a szabadban",
          caption: "Szintén a szabadban"
        },
        {
          thumb: "vizifoci.jpg",
          src: "vizifoci.jpg",
          alt: "Vízifoci a Hotel Lellében",
          caption: "Vízifoci :)"
        },
        {
          thumb: "ugralas.jpg",
          src: "ugralas.jpg",
          alt: "Ugrálni jó :)",
          caption: "Ugrálni kicsit másképp :)"
        },
        {
          thumb: "kave3.jpg",
          src: "kave3.jpg",
          alt: "Kávé",
          caption: "Egy kávé mindig jól jön"
        },
        {
          thumb: "jeges_kave.jpg",
          src: "jeges_kave.jpg",
          alt: "Jegeskávé",
          caption: "Egy kávé mindig jól jön hidegen is"
        },
        {
          thumb: "limonade.jpg",
          src: "limonade.jpg",
          alt: "Limonádé",
          caption: "Finom, hűs limonádé"
        },
        {
          thumb: "latkep.jpg",
          src: "latkep.jpg",
          alt: "A kilátás",
          caption: "A látvány a partról"
        },
        {
          thumb: "csoport5.jpg",
          src: "csoport5.jpg",
          alt: "Újabb csoport szállodánkban",
          caption: "Újabb csoport szállodánkban :)"
        },
        {
          thumb: "csoport.jpg",
          src: "csoport.jpg",
          alt: "Csoportok",
          caption: "Csoportokat is várunk"
        },
        {
          thumb: "csoport2.jpg",
          src: "csoport2.jpg",
          alt: "Újabb csoport",
          caption: "Táborok elhelyezése megoldható"
        },
        {
          thumb: "csoport4.jpg",
          src: "csoport4.jpg",
          alt: "Mégegy csoport",
          caption: "Kényelmesen elférnek"
        },
        {
          thumb: "karate.jpg",
          src: "karate.jpg",
          alt: "karate csoport",
          caption: "Sport-táborok is vendégeink"
        },
        {
          thumb: "karate2.jpg",
          src: "karate2.jpg",
          alt: "Sport tábor",
          caption: "Ők is elférnek"
        },
        {
          thumb: "buli.jpg",
          src: "buli.jpg",
          alt: "Esti buli",
          caption: "Esti buli"
        },
        {
          thumb: "buli2.jpg",
          src: "buli2.jpg",
          alt: "Újabb esti buli",
          caption: "Újabb esti buli"
        },
        {
          thumb: "buli3.jpg",
          src: "buli3.jpg",
          alt: "Esti buli más szemszögből",
          caption: "Esti buli a Hotel Lellében"
        },
        {
          thumb: "este.jpg",
          src: "este.jpg",
          alt: "Esti buli megint",
          caption: "Esti buli újra"
        },
        {
          thumb: "este2.jpg",
          src: "este2.jpg",
          alt: "Esti kikapcsolódás",
          caption: "Esti kikapcsolódás"
        },
        {
          thumb: "kikapcsolodas.jpg",
          src: "kikapcsolodas.jpg",
          alt: "Kikapcsolódás napközben",
          caption: "Kikapcsolódás napközben"
        },
        {
          thumb: "jatek.jpg",
          src: "jatek.jpg",
          alt: "Játék",
          caption: "Egy kis játék lazításként"
        },
        {
          thumb: "este3.jpg",
          src: "este3.jpg",
          alt: "Este az udvarban",
          caption: "Este az udvarban"
        },
        {
          thumb: "kutya3.jpg",
          src: "kutya3.jpg",
          alt: "kutya",
          caption: "Kisállatbarát szállás"
        },
        {
          thumb: "kutya4.jpg",
          src: "kutya4.jpg",
          alt: "kisállat",
          caption: "Ők is jól érzik magukat"
        },
        {
          thumb: "suni.jpg",
          src: "suni.jpg",
          alt: "süni",
          caption: "Valamit talált"
        }
      ]
    };
  },

  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    }
  }
};
</script>

<style>
</style>
