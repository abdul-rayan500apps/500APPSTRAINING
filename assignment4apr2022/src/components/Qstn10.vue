<template>
  <div>
      <h1>CLICK ON GIVEN BUTTTON</h1>
    <button @click="fullnames()">click</button>
  </div>
</template>

<script>
export default {
  name: "QuestinO10",

  data() {
    return {
      first_name: "500apps",

      last_name: "infinity",
    };
  },

  methods: {
    fullnames() {
      var fullname = this.first_name + this.last_name;
      

      document.write(fullname);
    },
  },
};
</script>