<template>
    <div>

        <div class="jumbotron jumbotron-fluid pt-5 rooms">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>

        <h4 class="pb-3"
            style="text-align:center; text-transform:uppercase">
            Előfoglalási akció!
        </h4>
        <h6 class="pb-5"
            style="text-align:center; letter-spacing:2px">
            Tervezze meg nyaralását időben, és használja ki a kedvezményes árainkat!
            <br /> Ha foglalását legkésőbb
            <strong style="color: red">2019. április 30-ig</strong> érvényesíti,
            <strong style="color: red">több mint 10% kedvezményt adunk az árainkból!</strong> <br /> Így akár már 7800Ft/fő/éj áron
            tud félpanziós ellátással a Balaton partján nyaralni!
        </h6>

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
                            style="text-align:center">3 éj</th>

                        <th scope="col"
                            colspan="2"
                            style="text-align:center">5 éj</th>
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
                        <td>10 500 Ft /fő/éj</td>
                        <td>9 000 Ft /fő/éj</td>
                        <td>9 900 Ft /fő/éj</td>
                        <td>7 800 Ft /fő/éj</td>
                    </tr>
                    <tr>
                        <th scope="row">Standard+</th>
                        <td>11 100 Ft /fő/éj</td>
                        <td>9 400 Ft /fő/éj</td>
                        <td>10 400 Ft /fő/éj</td>
                        <td>8 600 Ft /fő/éj</td>
                    </tr>
                    <tr>
                        <th scope="row">Családi</th>
                        <td colspan="2"
                            style="text-align:center">40 000 Ft /szoba</td>
                        <td colspan="2"
                            style="text-align:center">35 000 Ft /szoba</td>
                    </tr>
                </tbody>
            </table>
            <p style="font-weight:bold">
                Az árak félpanziós menüválasztásos ellátást tartalmaznak.
            </p>
            <p>1 éjszakás foglalás: 20% felár</p>
            <p>2 éjszakás foglalás: 5% felár</p>
            <p>
                Az idegenforgalmi adó (IFA) ezen felül fizetendő készpénzben a helyszínen. Összege 2018-ban 18 év felett:
                400Ft/fő/éj volt.
            </p>
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
      title: "Ajánlataink",
      description: "Aktuálisan elérhető ajánlatunk"
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
@media only screen and (max-width: 1024px) {
  .table {
    margin: 0px;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }
}
@media only screen and (max-width: 1024px) {
  .table-responsive {
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }
}
@media only screen and (max-width: 1024px) {
  .table-responsive p {
    margin: 0px;
    width: 100%;
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
</style>
