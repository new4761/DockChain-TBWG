<template>

      <v-card outlined class="pa-12" >
        <!-- 3cards -->
        <v-row justify="center" align="center" class="mb-10">
          <div class="text-center">
            <h1 class="gray">{{processName}}</h1>
            <br />

            <h5>{{processDesc}}</h5>
            <br />

            <h4>{{ date }}</h4>
          </div>
        </v-row>

        <v-row justify="center" align="center" class="mb-10 pa-6">
          <v-col cols="6">
          

            <v-stepper v-model="status" vertical>


              <template v-for="(item, index) in steps">
                <v-stepper-step :key="`${index}-step`" :complete="status > index+1" :step="index+1" class="pa-12">
                  {{ item.title }}
                  {{index}}
                  <small>{{ item.date }}</small>
                  <v-spacer></v-spacer>
                  <small>{{ item.desc }}</small>
                </v-stepper-step>

                </template>

                
                <!-- <v-stepper-content>
                  <v-card color="grey lighten-1" class="mb-12">
                    {{item.desc}}
                  </v-card>
                </v-stepper-content>  -->

            </v-stepper>
          </v-col>
        </v-row>

        <v-row justify="center" align="center" class="mb-10"> </v-row>
      </v-card>

</template>

<script>
export default {
  computed: {},
  data: () => ({
    processName: " test ",
    processDesc:"test desc eiei",
    date: "xx/xx/xx",
    status: 9,
    e6: 1,
    steps: [
      {
        id: "1",
        title: "test",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "222222222222222222222222222"
      },
      {
        id: "2",
        title: "test",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "33333"
      },
      {
        id: "3",
        title: "test",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "33333"
      },
      {
        id: "4",
        title: "test",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "33333"
      },
      {
        id: "5",
        title: "test",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "33333"
      },
      {
        id: "5",
        title: "test",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "33333"
      },
      {
        id: "5",
        title: "test",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "33333"
      },
      {
        id: "5",
        title: "test",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "33333"
      },
      {
        id: "5",
        title: "test",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "33333"
      },
      {
        id: "5",
        title: "test",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "33333"
      },

      {
        id: "5",
        title: "test",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "33333"
      },
      {
        id: "5",
        title: "test",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "33333"
      }
    ]
  }),
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped></style>
