<template>
  <div>
    <h2>Creating APIs</h2>

    <div>
      <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    </div>

    <b-button @click="getData()">Click Me!</b-button>

    <div>
      <!--{{ searchData.data }}-->
    </div>
    <div>
      <center>
        <table border="2px">
          <tr>
            <th>Name</th>
            <th>Num</th>
            <th>From</th>
            <th>To</th>
          </tr>
          <tbody>
            <tr v-for="data in searchData.data" :key="data.id">
              <td>{{ data.name }}</td>
              <td>{{ data.train_num }}</td>
              <td>{{ data.train_from }}</td>
              <td>{{ data.train_to }}</td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  </div>
</template>

<script>
var axios = require("axios").default;
export default {
  name: "QuestioN4",
  data() {
    return {
      options: {
        method: "GET",
        url: "http://www.json-generator.com/api/json/get/bSldINskRK",
        friends: [
             '{{repeat(3)}}',
             {
                id: '{{index()}}',
               name: '{{firstName()}} {{surname()}}' 
             }
        ],
        data: { search: "" },
      },
      text: "",
      searchData: '',
    };
  },
  methods: {
    async getData() {
      this.options.data.search = this.text;
      this.searchData = await axios.request(this.options);
    },
  },
};
</script>
