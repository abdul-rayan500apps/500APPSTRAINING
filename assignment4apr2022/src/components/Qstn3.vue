<template>
  <div>
    <p>Question3</p>
   <Qstn3 :category1="category1"></Qstn3>
  </div>
</template>
<script>
export default {
  name: "QstN3",
  
  data() {
    return {
      category1: [
        {
          name: "cat1",
          description: "it is cat1",
          details: ["name", "category", "age", "contact"],
        },
      ],
    };
  },
};
</script>
