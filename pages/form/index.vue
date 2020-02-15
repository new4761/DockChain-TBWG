<template>
   
      <v-row justify="center" align="center">
      <v-col cols="8">
     
      <v-stepper v-model="e6" vertical class="pa-12 mb-12">

         <h2 class="title text-center"> to id:4adqw484e66164646</h2>
        <v-stepper-step :complete="e6 > 1" step="1">
          Product detail
          <small>Document detail</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-form ref="form" v-model="valid" validation="lazy">
            <v-text-field v-model="productName" label="product name" required></v-text-field>
            <v-text-field v-model="productTypeId" label="product type id" required></v-text-field>
            <v-row>
              <v-col>
                <v-text-field v-model="amount" label="amount" required></v-text-field>
              </v-col>
              <v-col>
                <v-text-field v-model="unit" label="unit" required></v-text-field>
              </v-col>
            </v-row>

            <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
          </v-form>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">Transport detail</v-stepper-step>

        <v-stepper-content step="2">

           <v-text-field v-model="destination" label="destination" required></v-text-field>
            <v-text-field v-model="date" label="date" required></v-text-field>
            <v-row>
              <v-col>
                <v-text-field v-model="ship" label="ship" required></v-text-field>
              </v-col>
              <v-col>
                <v-text-field v-model="transporter" label="transporter" required></v-text-field>
                
              </v-col>
            </v-row>


      
            <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
          <v-btn @click="e6 = 1" text>back</v-btn>
        </v-stepper-content>


      <v-stepper-step :complete="e6 > 3" step="3">select type</v-stepper-step>
        <v-stepper-content step="3">
          <v-select :items="con" v-model="container" filled label="container type"></v-select>
          <v-select :items="ins" v-model="insurance" filled label="insurance type"></v-select>
          <v-select :items="ban" v-model="bank" filled label="Bank"></v-select>

         <v-btn to="/customer" class="success"> submit </v-btn>
          <v-btn @click="e6 = 2" text>back</v-btn>
        </v-stepper-content>

      </v-stepper>
      </v-col>
      </v-row>

  </template>
  <script>
  export default {
    data: () => ({

        productName:"",
        productTypeId:"",
        amount:"",
        unit:"",

        destination:"",
        date:"",
        ship:"",
        transporter:"",
        

        container:"",
        insurance:"",
        bank:"",

      e6: 1,

      con: ["full", "pass in"],
      ins:["stay safe","safe stay","stay very safe"],
      ban:["green","purple","yellow","blue"]
      
    })
  };
  </script>
  <style scoped>
  </style>