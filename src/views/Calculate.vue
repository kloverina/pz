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

        <div  v-if="showAnswer" class="column column_left">
          S =
        </div>
        <div  v-if="showAnswer" class="column column_right column_s">
          <div class="elem" v-for="S_obj in S">
            {{S_obj}}
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
      S: {},
      column_qty: 4,
      showAnswer: false
    }
  },
  mounted() {

  },
  methods:{
    showS(){
      return (this.showAnswer && this.S.length > 0);
    },
    loadData(){
      let calculate = new CalculateCircuit()
      calculate.GetData()
      this.column_qty = calculate.nodeAmount + 1
      this.W = calculate.W
      this.S = calculate.S

    }
  }
}
</script>

<style scoped lang="scss">
 @import "src/stylesheets/matrix";
</style>