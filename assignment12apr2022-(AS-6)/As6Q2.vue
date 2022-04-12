<template>
  <div>
    <h1>Question 2</h1>

    <b-form-select
      v-model="value"
      :options="countries"
      :totalPagesChanged="totalPages"
      :current-page="currentPage"
    ></b-form-select>

    <b-button variant="primary" @click="getData()">click</b-button>

    <b-container class="bv-example-row">
      <b-card>
        <b-card-text v-for="data1 in items" :key="data1.id">
          <b-card>
            <b-row>
              <b-col>University name:{{ data1.university_name }}</b-col>
            </b-row>

            <div class="w-100"></div>

            <b-row>
              <b-col>Domain:{{ data1.domains }}</b-col>

              <b-col>State-province:{{ data1.state_province }}</b-col>

              <b-col>Web-pages{{ data1.website_url }}</b-col>
            </b-row>
          </b-card>
        </b-card-text>
      </b-card>
    </b-container>

    <!--<b-table id="my_table" :items="items" :fields="fields" :per-page="perPage"

:current-page="currentPage"

small>-->

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      @totalPagesChanged="totalPages = $event"></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
  </div>
</template>

<script>
const { getNames } = require("country-list");

export default {
  name: "As6Q2",

  data() {
    return {
      perPage: 3,

      currentPage: 0,

      value: "",

      fields: ["university_name", "domains", "website_url", "state_province"],

      items: " ",

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

  rows() {
    return this.items.length;
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

<style scoped>
</style>