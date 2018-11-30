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
          thumb: "bejarat_este2.jpg",
          src: "bejarat_este2.jpg",
          alt: "A bejárat este",
          caption: "A bejárat este"
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
          thumb: "kave3.jpg",
          src: "kave3.jpg",
          alt: "Kávé",
          caption: "Egy kávé mindig jól jön"
        },
        {
          thumb: "latkep.jpg",
          src: "latkep.jpg",
          alt: "A kilátás",
          caption: "A látvány a partról"
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
