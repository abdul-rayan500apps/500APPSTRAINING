<template>
  <div>
    <h4>fifth question</h4>

    <h6>I used try catch</h6>

    <button @click="errorshandling()">click here</button>
  </div>
</template>

<script>
export default {
  name: "FifthQuestion",

  methods: {
    errorshandling() {
      try {
        this.test = this.val * 45;

        console.log("test", this.val);
      } catch {
        console.log("Error Hnadled");
      }
    },
  },
};
</script>