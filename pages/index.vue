<template>
  <div>
    <!-- <v-dialog /> -->

    <!-- kép -->
    <div class="view vertical-center">
      <div class="container">
        <h1>Hotel Lelle</h1>
        <div class="container jumbdiv"><p>Balatonlelle</p></div>
        <!-- <button @click="openModal()">gomb</button> -->
      </div>
    </div>

    <div class="container forks">
      <div class="row pt-5">
        <div class="col-sm-12 col-md-3">
          <font-awesome-icon icon="utensils" size="4x" />
          <p>Saját étterem</p>
        </div>
        <div class="col-sm-12 col-md-3">
          <font-awesome-icon icon="bed" size="4x" />
          <p>Családi szobák</p>
        </div>
        <div class="col-sm-12 col-md-3">
          <font-awesome-icon icon="parking" size="4x" />
          <p>Saját parkoló</p>
        </div>
        <div class="col-sm-12 col-md-3">
          <font-awesome-icon icon="umbrella-beach" size="4x" />
          <p>Saját strand</p>
        </div>
      </div>
    </div>

    <section class="mb-2 service">
      <div class="container pt-5">
        <h2 class="text-center">Szolgáltatásaink</h2>
        <div class="row pt-5">
          <div class="col-xs-12 col-sm-6">
            <img
              class="img-fluid img-thumbnail cover"
              src="../assets/hotel2.jpg"
              alt="A szálloda"
            />
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="heading-block mb-5 pt-2">
              <h2>A szállodáról</h2>
              <span
                >Mindenki számára elérhető legyen a nyaralás, akiknek ez egyenlő
                a Balatonnal, a napfénnyel, fürdőzéssel!
              </span>
            </div>
            <p>
              A Hotel Lelle – régi nevén Hotel Postás – a Balaton déli partjának
              egyik <strong>legnagyobb</strong> városában, Balatonlellén
              található. <strong>Közvetlenül a tó partján</strong> helyezkedik
              el a hétszintes, összesen 210 szobával rendelkező,
              <strong>retro</strong> korszakot idéző épület.
            </p>
            <nuxt-link
              to="/ajanlataink"
              class="button button-border button-large button-rounded noleftmargin topmargin-sm"
              >Ajánlataink</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>

    <section class="mb-2 service">
      <div class="container pt-5">
        <div class="row pt-5">
          <div class="col-sm-12 col-md-6">
            <div class="heading-block mb-5 pt-2">
              <h2>Családi szobák</h2>
              <span>Gyermekkel érkező családoknak</span>
            </div>
            <p>
              Emeletenként található egy-egy <strong>családi szoba</strong>,
              amely két légtérből áll, így akár négy személynek is kényelmes
              szállást biztosít. A lassan mélyülő Balaton partja ideális
              megoldás <strong>kisgyermekes</strong> családok részére. 9 éves
              korig a gyermekeknek kedvezményes foglalási díj.
            </p>
            <nuxt-link
              to="/szobak"
              class="button button-border button-large button-rounded noleftmargin topmargin-sm"
              >Szobáink</nuxt-link
            >
          </div>
          <div class="col-xs-12 col-sm-6">
            <img
              class="img-fluid img-thumbnail cover"
              src="../assets/gyerek.jpg"
              alt="A szálloda"
              style="width: 400px"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="mb-2 service">
      <div class="container pt-5">
        <div class="row pt-5">
          <div class="col-xs-12 col-sm-6">
            <img
              class="img-fluid img-thumbnail cover"
              src="../assets/felpanzio.jpg"
              alt="A szálloda"
            />
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="heading-block mb-5 pt-2">
              <h2>Saját étterem</h2>
              <span>Házias ízekkel</span>
            </div>
            <p>
              Szállodánknak saját étterme van, így vendégeinknek a nyaralásuk
              alatt sem kell nélkülözni a finom, házias ételeket.
              <strong
                >Áraink félpanziós menüválasztásos ellátást
                tartalmaznak.</strong
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-2 service">
      <div class="container pt-5">
        <div class="row pt-5">
          <div class="col-sm-12 col-md-6">
            <div class="heading-block mb-5 pt-2">
              <h2>Kisállatbarát szállás</h2>
              <span>A kis kedvencek se maradjanak le</span>
            </div>
            <p>
              Nem szeretnék otthon hagyni a kis kedvenceket? Esetleg nincs aki
              vigyázna rájuk? Szállodánkba felár ellenében kisállat is hozható.
            </p>
          </div>

          <div class="col-xs-12 col-sm-6">
            <img
              class="img-fluid img-thumbnail cover"
              src="../assets/kutya.jpg"
              alt="A szálloda"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container pt-5">
        <div class="row smaller">
          <div class="col-xs-6 col-md-3 pb-3">
            <div><h4>Érkezés/távozás</h4></div>
            <p>Szállodánk ki- és bejelentkezési szabályai</p>
            <ul>
              <li>
                <font-awesome-icon icon="clock" class="in" />Bejelentkezés:
                16.00-21.00 óra között
              </li>
              <li>
                <font-awesome-icon icon="clock" class="out" />Kijelentkezés:
                10.00 óráig
              </li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <div><h4>Parkolás</h4></div>
            <p>
              A szálloda vendégeinek saját parkoló biztosított. A parkolás díja
              szállóvendégek részére 600Ft/nap, egyéb esetben pedig 2500Ft/nap
            </p>
          </div>
          <div class="col-xs-12 col-md-6">
            <div><h4>Galéria</h4></div>
            <div class="grid">
              <div class="grid-sizer"></div>
              <div class="grid-item">
                <nuxt-link to="/galeria">
                  <img src="../assets/bejarat_este_small.jpg" />
                </nuxt-link>
              </div>
              <div class="grid-item">
                <nuxt-link to="/galeria">
                  <img src="../assets/csoport_small.jpg" />
                </nuxt-link>
              </div>
              <div class="grid-item">
                <nuxt-link to="/galeria">
                  <img src="../assets/gyerek2_small.jpg" />
                </nuxt-link>
              </div>
              <div class="grid-item">
                <nuxt-link to="/galeria">
                  <img src="../assets/este_small.jpg" />
                </nuxt-link>
              </div>
            </div>

            <div class="grid pt-1">
              <div class="grid-sizer"></div>
              <div class="grid-item">
                <nuxt-link to="/galeria">
                  <img src="../assets/strand_bufe2_small.jpg" />
                </nuxt-link>
              </div>
              <div class="grid-item">
                <nuxt-link to="/galeria">
                  <img src="../assets/latkep2_small.jpg" />
                </nuxt-link>
              </div>
              <div class="grid-item">
                <nuxt-link to="/galeria">
                  <img src="../assets/kutya3_small.jpg" />
                </nuxt-link>
              </div>
              <div class="grid-item">
                <nuxt-link to="/galeria">
                  <img src="../assets/strand_small.jpg" />
                </nuxt-link>
              </div>
            </div>
            <p>A képekre kattintva még több kép megtekinthető.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    // openModal() {
    //   this.$modal.show("dialog", {
    //     title: "Alert!",
    //     text: "You are too awesome",
    //     buttons: [
    //       {
    //         title: "Close"
    //       }
    //     ]
    //   });
    // }
  },

  mounted() {
    // window.onload = openModal()  
     
  }
};
</script>

<style></style>
