<template>
  <v-container fluid>
    <div>
      <v-card elevation="5" class="pa-5">
        <v-row justify="center" class="mb-10">
          <v-col cols="5">
            <v-card height="380">
              <v-row>
                 <v-img
                  src="https://i.imgur.com/asKrxEZ.png"
                  max-height="380"
                   ></v-img>
                <!-- <v-col cols="8"> </v-col>
                <v-col cols="4"> </v-col> -->
              </v-row>
            </v-card>
          </v-col>


             <v-col cols="5">
            <v-card height="380">
              <v-row>
                 <v-img
                  src="https://i.imgur.com/1e7ZRNI.png"
                  max-height="380"
                   ></v-img>
                <!-- <v-col cols="8"> </v-col>
                <v-col cols="4"> </v-col> -->
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <!-- 3cards -->

        <!-- <v-row justify="center" class="mb-10">

          <v-col cols="4">
            <v-card
              class="mx-auto text-center"
              color="blue"
              dark
              max-width="400"
              max-height="400"
            >
              <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                  <v-sparkline
                    :value="MoneyValue"
                    color="rgba(255, 255, 255, .7)"
                    height="100"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                  >
                    <template v-slot:label="item"> ${{ item.value }} </template>
                  </v-sparkline>
                </v-sheet>
              </v-card-text>

              <v-card-text>
                <div><h3>Baht value</h3></div>

                <div>description</div>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="justify-center">
                <v-btn block text>view full details</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card
              class="mx-auto text-center"
              color="green"
              dark
              max-width="400"
              max-height="400"
            >
              <v-card-text> </v-card-text>

              <v-card-text>
                              <v-dialog
                  v-model="dialog"
                  persistent
                  max-width="600px"
                  mx-auto
                 >
                  <template v-slot:activator="{ on }">
                    <v-btn
                      x-large
                      depressed
                      color="success"
                      dark
                      v-on="on"
                      >Place new order</v-btn
                    >
                  </template>

                  <v-card>
                    <v-card-title>
                      <span class="headline">Target</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container> </v-container>
                      <small>*required</small>

                      <v-text-field
                        class="mx-2"
                        label="Target"
                        prepend-icon=" mdi-crosshairs-gps"
                        v-model="target"
                      ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="blue darken-1" text @click="dialog = false"
                        >Close</v-btn
                      >
                      <nuxt-link to="/form">
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                          >Save</v-btn
                        >
                      </nuxt-link>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="justify-center">
              
              </v-card-actions>
            </v-card>
          </v-col>


          <v-col cols="4">
            <v-card
              class="mx-auto text-center"
              color="red"
              dark
              max-width="400"
              max-height="400"
            >
              <v-card-text> </v-card-text>

              <v-card-text>
                <div><h3>policy</h3></div>

                <div>description</div>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="justify-center">
                <v-btn block text>view full details</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row> -->

        <!-- add button -->
        <v-row justify="center" class="my-10">
          <v-dialog v-model="dialog" persistent max-width="600px" mx-auto>
            <template v-slot:activator="{ on }">
              <v-btn x-large depressed color="success" dark v-on="on"
                >Place new order</v-btn
              >
            </template>

            <v-card>
              <v-card-title>
                <span class="headline">Target</span>
              </v-card-title>
              <v-card-text>
                <v-container> </v-container>
                <small>*required</small>

                <v-text-field
                  class="mx-2"
                  label="Target"
                  prepend-icon=" mdi-crosshairs-gps"
                  v-model="target"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn color="blue darken-1" text @click="dialog = false"
                  >Close</v-btn
                >
                <nuxt-link to="/form">
                  <v-btn color="blue darken-1" text @click="dialog = false"
                    >Save</v-btn
                  >
                </nuxt-link>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>

        <!-- table -->
        <v-row justify="center" class="my-10">

          <v-card width="1000">
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
              :headers="headers"
              :items="processData"
              :search="search"
            >
              <template v-slot:item.action>
                <v-btn to="/detailc" class="mx-auto" tile color="primary" dark>details</v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import Svg from "../components/svg_login";
import Svg2 from "../components/svg_cust2";

export default {
  components: {
    Svg,
    Svg2
  },

  data: () => ({
    dialog: false,
    search: "",
    target: "",
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
      { text: "Slot 3", value: "slot3" },
      { text: "Slot 4", value: "slot4" },
      { text: "Actions", value: "action", sortable: false }
    ],

    processData: [
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value"
      },
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value"
      },
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value"
      },
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value"
      },
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value"
      },
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value"
      },
      {
        id: "id 1",
        date: "99/99/99",
        slot1: "value",
        slot2: "value",
        slot3: "value",
        slot4: "value"
      }
    ],
    MoneyValue: [423, 446, 675, 510, 590, 610, 760]
  }),
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped></style>
