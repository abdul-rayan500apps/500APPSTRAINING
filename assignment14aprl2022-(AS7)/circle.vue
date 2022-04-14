<template>
  <div class="circle">
    <h1 align="center">find the perimeter of circle</h1>
    <h2>formula: 2*3.14*radius</h2>
    <p>{{perimeter()}}</p>
    <p>{{diameter()}}</p>
  </div>
</template>

<script>
export default {
  name: "matHS",
  data() {
    return {
      radius: 20,
      PI: 3.14,
      perimeter: () => 2 *this.PI * this.radius,
    };
  },
  methods: {
    diameter() {
      const circle = {
        radius: 20,
      }
      console.log(circle)
      return this.radius * 2;
    },
  },
};
</script>
