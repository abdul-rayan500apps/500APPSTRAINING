<template>
  <div>
      <h1>Multiply and division</h1>
    <form name="form1">
      <label for="" name="num1">1st Number:</label>

      <input type="text" name="num1" id="sap1" /><br />

      <label for="" name="num2">2nd Number:</label>

      <input type="text" name="num2" id="sap2" /><br />

      <button @click="mul()">Multiply</button>

      <button @click="div()">Divide</button>

      <h5>The Result Is:</h5>
      <p id="sap3"></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "QuestioN2",

  data() {
    return {
      z: " ",
    };
  },

  methods: {
    mul() {
      var x = document.getElementById("sap1").value;

      var y = document.getElementById("sap2").value;

      var z = Number(x * y);

      document.getElementById("sap3").innerHTML = z;

      console.log(z);

      return z;
    },

    div() {
      var x = document.getElementById("sap1").value;

      var y = document.getElementById("sap2").value;

      var z = Number(x / y);

      document.getElementById("sap3").innerHTML = z;

      console.log(z);

      return z;
    },
  },
};
</script>