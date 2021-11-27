<template>
  <div class="container">
    <c1-circuit-params
        v-bind:node="NodesAmount"
        v-bind:resistor="ResAmount"
        v-bind:capacitor="CapAmount"
        v-bind:inductor="IndAmount"
        v-on:show-add-section="addCircuitParams"
        v-if="!showAddSection"
    > </c1-circuit-params>

    <c2-circuit-add-section
        v-if="showAddSection"
        v-bind:res-amount="ResAmount"
        v-bind:cap-amount="CapAmount"
        v-bind:ind-amount="IndAmount"
        v-on:save-values="addElemValues"
    > </c2-circuit-add-section>



  </div>
</template>

<script>
import C1CircuitParams from "@/components/c1-circuit-params";
import C2CircuitAddSection from "@/components/c2_CircuitAddSection";
export default {
  name: "Input",
  components: {C2CircuitAddSection, C1CircuitParams},
  data: function () {
    return{
      showAddSection: false,
      NodesAmount: 0,
      ResAmount: 0,
      CapAmount: 0,
      IndAmount: 0,
      Resistors: [],
      Capacitors: [],
      Inductors: []

    }
  },

  methods:{
    addCircuitParams(values){
      this.NodesAmount =  parseInt(values[0])
      this.ResAmount = parseInt(values[1])
      this.CapAmount = parseInt(values[2])
      this.IndAmount = parseInt(values[3])
      this.showAddSection = true
      window.scrollTo(0,0);
    },

    addElemValues(res, cap, ind){
      this.Resistors = res
      this.Capacitors = cap
      this.Inductors = ind
      this.saveLocalData()
    },

    saveLocalData(){
      localStorage.setItem('NodeAmount', this.NodesAmount);
      localStorage.setItem('ResAmount', this.ResAmount);
      localStorage.setItem('CapAmount', this.CapAmount);
      localStorage.setItem('IndAmount', this.IndAmount);
      localStorage.setItem('Resistors', JSON.stringify(this.Resistors));
      localStorage.setItem('Capacitors', JSON.stringify(this.Capacitors));
      localStorage.setItem('Inductors', JSON.stringify(this.Inductors));
    }
  }
}
</script>

<style scoped>

</style>