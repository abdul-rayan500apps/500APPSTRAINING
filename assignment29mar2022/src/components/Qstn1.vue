<template>
    <div>
        <h1>question no 1</h1>
        <table align = "center">
            <thead>
                <tr>
                    <th>name:</th>
                    <th>Index:</th>
                </tr>
            </thead>
<tbody>
    <tr v-for = "user in table" :key="user.table">
        <td>{{user.name}}</td>
          <td>  {{user.Index}} </td>
        </tr>
</tbody>
        </table>     
    </div>
</template>
<script>

export default {
    name:"QstN1",
    data() {
        return{
            table:[
                {name:"Agile CRM",Index:"0"},
                {name:"mantra technologies",Index:"1"},
                {name:"500apps python",Index:"2"},
                {name:"500apps infinity",Index:"3"}
            ]
        }
    }
        
    }
</script>

<style scoped>
table{
    font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 50%;
  background-color: aquamarine;
}
td,th {
    border: 5px solid #dddddd;
    text-align: left;
    padding: 8px;
}
</style>

