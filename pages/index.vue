<template>
  <div>
    <div v-for="(acc,index) in AccountsList" :key="index">
      <h3>{{acc}}</h3>
    </div>
    <!-- <button @click="getUser()">get User from API</button> -->
    <p>{{AccountsList}}</p>
    <br />
    <h1>Selected => {{selectAcc}}</h1>
    <br />
    <h3>{{getBalanceById}}</h3>
    <v-select :items="AccountsList" v-model="selectAcc" @change="OngetEthAccountsList()" label="Standard"></v-select>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState({
      AccountsList: state => state.web3.ethAccountsList
    }),
    ...mapGetters({
      getAccountById: "web3/getEthAccountsId",
      getBalanceById: "web3/getEthAccountsBalance"
    })
  },
  data: () => ({
    selectAcc:"0x8c47ca3668cfb13cd3e041a1dae6262d035c1403"
  }),
  components: {
    Logo,
    VuetifyLogo
  },
  mounted() {
    this.getUser();
  },
  methods: {
    ...mapActions({
      getUser: "web3/setAccountsList",
      getBalance: "web3/setEthAccountsBalance"
    }),
    OngetEthAccountsList() {
     // console.log(this.selectAcc)
      this.getBalance(this.selectAcc)
    },
    test() {
      return Object.values(this.AccountsList);
    }
  }
};
</script>
