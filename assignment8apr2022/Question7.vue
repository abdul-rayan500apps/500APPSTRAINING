<template>
  <div>
    <h1>Question no 7</h1>

    {{ txt }}
  </div>
</template>

<script>
var axios = require("axios").default;

export default {
  name: "QuestioN7",

  data() {
    return {
      txt: "",
    };
  },

  mounted() {
    axios

      .get("https://agilecrm.com/")

      .then((response) => (this.txt = response));
  },
};
</script>

