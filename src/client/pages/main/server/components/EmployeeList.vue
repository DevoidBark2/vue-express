<template>
  <div class="container">
    <h1>Список сотрудников</h1>
    <v-card v-for="user in users" :key="user.id" class="employee-card v-application">
      <div>
        <h3>{{ user.name }}</h3>
        <div class="mt-2">
          <p>Email: {{ user.email }}</p>
          <p>Кол-во друзей: {{ user.count_friend }}</p>
        </div>
      </div>

      <div class="icons-block">
        <router-link :to="{ path: '/employee/' + user.id }">
          <svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" viewBox="0 0 348.882 348.882" xml:space="preserve">
              <g>
                <path d="M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231   c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685   c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176   C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99   L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386   c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"/>
                <path d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904   c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15   s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798   c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"/>
              </g>
           </svg>
        </router-link>
      </div>

<!--      <svg @click="showConfirmation = true" class="remove-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" width="30px" height="30px" viewBox="0 0 482.428 482.429" xml:space="preserve">-->
<!--          <g>-->
<!--            <g>-->
<!--              <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098    c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117    h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828    C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879    C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096    c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266    c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979    V115.744z"/>-->
<!--              <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07    c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/>-->
<!--              <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07    c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/>-->
<!--              <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07    c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/>-->
<!--            </g>-->
<!--          </g>-->
<!--      </svg>-->

    <Dialog/>
    </v-card>


    <v-app>
      <v-btn @click="showConfirmation = true">Open Dialog</v-btn>
      <v-dialog v-model="showConfirmation" width="500">
        <template v-slot:activator="{ on }">
          <v-btn @click="showConfirmation = true">Open Dialog</v-btn>
        </template>

        <v-card>
          <v-card-title class="headline">Dialog</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="showConfirmation = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>

  </div>

</template>

<script type="module">
import axios from "axios";
import Vuetify from "vuetify";
const API_URL = 'http://localhost:3000'

export default {
  data() {
    return {
      users: [],
      showConfirmation: false,
      isActive: true
    };
  },
  methods:{
    loadData: async function () {
      await axios.get(API_URL + "/getEmployee").then(response => {
        this.users = response.data;
        console.log(response.data)
      });
    },
    deleteItem: function() {
      this.showConfirmation = false;
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style>
.employee-card{
  margin-top: 20px;
  padding: 20px;
  display: flex;
  align-content: center;
  position: relative;
}
p{
  margin-bottom: 0!important;
}
.icons-block{
  position: absolute;
  right: 15px;
  top: 10px;
  display: flex;
  align-items: baseline;
}
.remove-icon:hover, .edit-icon:hover{
  fill: #4c5e79;
  cursor: pointer;
}
</style>