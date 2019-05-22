<template>
  <div>

    <div class="jumbotron jumbotron-fluid pt-5 rooms">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-md-8">
          <div class="table-responsive py-3">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Szoba Típusa</th>

                  <!-- <th scope="col"></th> -->
                  <th scope="col"
                      colspan="4"
                      style="text-align:center">
                    Foglalt időszak
                  </th>
                </tr>
                <tr>
                  <th scope="col"></th>

                  <th scope="col"
                      colspan="2"
                      style="text-align:center">3-4 éj</th>

                  <th scope="col"
                      colspan="2"
                      style="text-align:center">5 éjszakától</th>
                </tr>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">2 fős szoba</th>
                  <th scope="col">3 fős szoba</th>
                  <th scope="col">2 fős szoba</th>
                  <th scope="col">3 fős szoba</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Standard</th>
                  <td>11 550 Ft /fő/éj</td>
                  <td>9 900 Ft /fő/éj</td>
                  <td>10 890 Ft /fő/éj</td>
                  <td>8 580 Ft /fő/éj</td>
                </tr>
                <tr>
                  <th scope="row">Standard+</th>
                  <td>12 210 Ft /fő/éj</td>
                  <td>10 340 Ft /fő/éj</td>
                  <td>11 440 Ft /fő/éj</td>
                  <td>9 460 Ft /fő/éj</td>
                </tr>
                <tr>
                  <th scope="row">Családi</th>
                  <td colspan="2"
                      style="text-align:center">44 000 Ft /szoba</td>
                  <td colspan="2"
                      style="text-align:center">38 500 Ft /szoba</td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:11px">A feltüntetett árak az ÁFA-t tartalmazzák.</p>
            <p style="font-size:11px">A mindenkori bruttó ár 60%-a a szállás díja, 40%-a pedig a
              vendéglátás ellenértéke.</p>
            <p style="font-weight:bold">
              Az árak félpanziós menüválasztásos ellátást tartalmaznak.
            </p>
            <p>1 éjszakás foglalás: 20% felár</p>
            <p>2 éjszakás foglalás: 5% felár</p>
            <p>
              Az idegenforgalmi adó (IFA) ezen felül fizetendő készpénzben a helyszínen. Összege
              2019-ben 18 év felett:
              400Ft/fő/éj.
            </p>

          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <nuxt-link to="/ajanlataink">
            <img class="img-fluid img-thumbnail py-3"
                 src="../assets/akcio.png"
                 alt="Jelenlegi akciónk" />
            <p style="text-align: center; text-decoration: none; color: #555">Jelenleg elérhető
              akciónkért kattintson ide</p>
          </nuxt-link>
        </div>
      </div>
    </div>

    <Conditions></Conditions>
  </div>
</template>

<script>
import Conditions from "@/components/Conditions";

export default {
  components: { Conditions },
  layout: "other",
  data() {
    return {
      title: "Árak",
      description: "2019. június 14. – augusztus 23. között érvényes árak"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: this.description }
      ]
    };
  }
};
</script>

<style scoped>
.table {
  margin: 0px auto;
  width: 100%;
}

@media only screen and (max-width: 1024px) {
  .table-responsive {
    padding-left: 0 !important;
  }
}
@media only screen and (max-width: 768px) {
  td {
    font-size: 10px;
  }
}
@media only screen and (max-width: 768px) {
  th {
    font-size: 11px;
  }
}

.table-responsive {
  padding-left: 3rem;
}

.table-responsive p {
  margin: 0px auto;
  width: 100%;
}

.img-fluid {
  width: 100%;
}
</style>

