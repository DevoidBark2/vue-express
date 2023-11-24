<template>
  <div class="container">
    <h1>Подробности о сотруднике</h1>
<!--    <v-form>-->
<!--      <v-input v-model="name" placeholder="отредактируй меня"/>-->
<!--      <p>{{name}}</p>-->
<!--      <p>Имя: {{ employee.name }}</p>-->
<!--      <p>Email: {{ employee.email }}</p>-->
<!--      <p>Количество друзей: {{ employee.count_friend }}</p>-->
<!--    </v-form>-->
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
                hide-details
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                hide-details
                required
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                hide-details
                required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    {{firstname}}
  </div>

</template>

<script>
import axios from "axios";
const API_URL = 'http://localhost:3000'
export default {
  data() {
    return {
      employee: [],
      name: '',
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    };
  },
  mounted() {
    const employeeId = this.$route.params.id;

    axios.get(API_URL + "/getEmployeeById/" + employeeId).then(response => {
      this.employee = response.data;
      console.log("data" ,response)
    });
  },
};
</script>