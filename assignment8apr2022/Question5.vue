<template>
  <div>
    <h1>Question no 5</h1>

    {{ txt }}
  </div>
</template>

<script>
var axios = require("axios").default;

export default {
  name: "QuestioN5",

  data() {
    return {
      txt: "",
    };
  },

  mounted() {
    axios

      .get("http://universities.hipolabs.com/search?country=$%7BCountryName")

      .then((response) => (this.txt = response));
  },
};
</script>

