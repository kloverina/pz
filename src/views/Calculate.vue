<template>
  <div class="container">

    <div class="flex-block">
      <div class="buttons-block">
        <button class="button" @click="showAnswer = true; loadData()"> Рассчитать </button>
      </div>
      <div class="matrix">
        <div  v-if="showAnswer" class="column column_left">
          W =
        </div>
        <div  v-if="showAnswer" class="column column_right">
          <div class="row" v-for="i in column_qty">
           <div class="elem" v-for="j in column_qty">
             {{W[i-1][j-1]}}
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {CalculateCircuit} from '@/js/Calculate-circuit';

export default {
  name: "Calculate",
  data() {
    return {
      W: [],
      column_qty: 4,
      showAnswer: false
    }
  },
  mounted() {

  },
  methods:{
    loadData(){
      let calculate = new CalculateCircuit()
      calculate.GetData()
      this.W = calculate.W
    }
  }
}
</script>

<style scoped lang="scss">
 @import "src/stylesheets/matrix";
</style>