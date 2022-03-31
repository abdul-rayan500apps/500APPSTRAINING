<template>
    <div>
        <h1>"employee details"</h1>
        <table border="2px">
            <thead>
                <tr>
                    <th> sno:</th>
                    <th>employeename:</th>
                    <th>Department:</th>
                    <th>salary:</th>
                
                </tr>
                </thead>
                <tbody>
                   <tr v-for = "employee in table" :key="employee.table">
                        <td>{{employee.sno}}</td>
                        <td>{{employee.employeename}}</td>
                        <td>{{employee.Department}}</td>
                        <td>{{employee.salary}}</td>
             
                    </tr>
                    
                </tbody>
            
        </table>
    </div>
</template>

<script>
export default {
    name:"ReGis",
    data() {
        return{
            table:[
                {sno:"1",employeename:"Abdul",Department:"Engineering",salary:"20000"},
                {sno:"2",employeename:"Rohan",Department:"Telecomengineering",salary:"30000"},
                {sno:"3",employeename:"Naresh",Department:"CADCAM",salary:"25000"}
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
