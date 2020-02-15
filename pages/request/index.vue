<template>

  <v-card class="pa-12" outlined>
      <v-row justify="center" align="center">


      <v-col cols="8">

        <h1 class="pb-5 text-center" >request # xxxxx</h1>
     
     
          <v-form ref="form" v-model="valid" validation="lazy">
            <v-text-field disabled v-model="productName" :label="productName" required></v-text-field>
            <v-text-field disabled v-model="productTypeId" :label="productTypeId" required></v-text-field>
            <v-row class="my-3">
              <v-col>
                <v-text-field disabled v-model="amount" :label="amount" required></v-text-field>
              </v-col>
              <v-col>
                <v-text-field disabled v-model="unit" :label="unit" required></v-text-field>
              </v-col>
            </v-row>

            <v-text-field disabled v-model="destination" :label="destination" required></v-text-field>
            <v-text-field disabled v-model="date" :label="date" required></v-text-field>
            <v-row class="my-3">
              <v-col>
                <v-text-field disabled v-model="ship" :label="ship" required></v-text-field>
              </v-col>
              <v-col>
                <v-text-field disabled v-model="transporter" :label="transporter" required></v-text-field>
                
              </v-col>
            </v-row>

            <v-text-field disabled v-model="container" :label="container" required></v-text-field>

        <v-row class="my-3">
            <v-col>
            <v-text-field disabled v-model="insurance" :label="insurance" required></v-text-field>
            </v-col>
            <v-col>
            <v-text-field disabled v-model="bank" :label="bank" required></v-text-field>
            </v-col>
        </v-row>
       
          
          
        
        
        <v-btn to="/provider" class="success"> accept </v-btn>
         <v-btn dark to="#" class="red"> decline </v-btn>
         

          </v-form>

      </v-col>
      </v-row>
    </v-card>

</template>

<script>
export default {

  layout:"providerLay",
    
     data: () => ({

         
        productName:"productName",
        productTypeId:"productTypeId",
        amount:"amount",
        unit:"unit",

        destination:"destination",
        date:"productTypeId",
        ship:"amount",
        transporter:"unit",

        container:"container",
        insurance:"insurance",
        bank:"bank",

    })
}
</script>