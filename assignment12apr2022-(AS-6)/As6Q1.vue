<template>
  <div>
    <h1>Question 1</h1>

    <b-form-select v-model="value" :options="countries"></b-form-select>
    <b-table striped hover  :items="items"></b-table>
    <b-button variant="primary" @click="getData">Get Data</b-button>
  
    <p @click="redirect(value.website_url)">
      website_url:--{{ value.website_url }}
    </p>
  </div>
</template>
<script>
const { getNames } = require("country-list");
export default {
  name: "As6Q1",
  data() {
    return {
      value: "",
      items: [],
      countries: [],
    };
  },
  mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
    if (this.countries.length) this.value = this.countries[0].text;
  },
  methods: {
    redirect(value) {
      window.open(value, "_blank");
    },
    async getData() {
      // Get the response
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=" + this.value,
        {
          method: "GET",
        }
      );
      const responseText = await response.json();
      this.items = responseText.map((row) => {
        return {
          university_name: row.name,
          domains: row.domains,
          website_url: row.web_pages[0],
          state_province: row["state-province"],
        };
      });
    },
  },
};
</script>