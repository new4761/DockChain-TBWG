<template>
  <v-container fluid>
    <div>
      <v-card elevation="5" class="pa-5">
        <div class="pa-3">
            <h1>Provider Page</h1>
        </div>
        <v-row justify="center" class="mb-10">
        <v-card width="1000"
         class="pa-3"
         color="orange lighten-5">
            <v-card-title>
              Request
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="Data"
              :search="search"
            >
              <template v-slot:item.action>
                
                 <v-btn to="/request" class="mx-auto" tile color="warning" dark>details</v-btn>

              </template>
            </v-data-table>
          </v-card>
        </v-row>


        <!-- table -->
        <v-row justify="center" class="my-10">

          <v-card width="1000"
          color="brown lighten-4"
          class="pa-3">
            <v-card-title>
              Status-progress
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers2"
              :items="Data2"
              :search="search"
            >
              <template v-slot:item.action>
                <v-btn to="/detailp" class="mx-auto" tile color="warning" dark>details</v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-row>


      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  layout:"providerLay",
  computed: {},
  data: () => ({
  
    search: "",


     headers: [
      {
        text: "Id",
        align: "left",
        sortable: false,
        value: "id"
      },
      { text: "Date", value: "date" },
      { text: "Slot 1", value: "slot1" },
      { text: "Slot 2", value: "slot2" },
      { text: "Actions", value: "action", sortable: false }
    ],

    Data: [
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
      },
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
      },

    ],

    headers2: [
      {
        text: "Id",
        align: "left",
        sortable: false,
        value: "id"
      },
      { text: "Date", value: "date" },
      { text: "Slot 1", value: "slot1" },
      { text: "Slot 2", value: "slot2" },
      { text: "Slot 3", value: "slot3" },
      { text: "Slot 4", value: "slot4" },
      { text: "Actions", value: "action", sortable: false }
    ],

    Data2: [
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value",
        link:"/detail"
      },
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value",
        link:"/detail"
      },
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value",
        link:"/detail"
      },
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value",
        link:"/detail"
      },
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value",
        link:"/detail"
      },
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value",
        link:"/detail"
      },
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value",
        link:"/detail"
      }
    ],

  }),
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped></style>
