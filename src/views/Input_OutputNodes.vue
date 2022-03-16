<template>
  <div class="container">

    <div class="flex-block flex-block__row">
      <h2> Входные и выходные узлы </h2>
      <div class="column">
        <h3> Входные узлы</h3>
        <label class="label_space-between">
          <span> i+  </span>
          <input  class="text-input" type="number" min="0" max="99" maxlength="2" step="1"
                  v-model="inputNode.positive">
        </label>

        <label class="label_space-between">
          <span> i-  </span>
          <input  class="text-input" type="number" min="0" max="99" step="1"
                  @change="(inputNode.negative = inputNode.negative.replace(/[^0-9]/g, ''))"
                  v-model="inputNode.negative">
        </label>
      </div>
      <div class="column">
        <h3> Выходные узлы </h3>
        <label class="label_space-between">
          <span> k+  </span>
          <input  class="text-input" type="number" min="0" max="99"
                  v-model="outputNode.positive">
        </label>

        <label class="label_space-between">
          <span> k-  </span>
          <input  class="text-input" type="number" min="0" max="99"
                  v-model="outputNode.negative">
        </label>
      </div>
      <div class="buttons-block">
        <button> Подтвердить </button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Input_OutputNodes",
  data() {
    return {
      inputNode:{
        positive: 0,
        negative: 0
      },
      outputNode:{
        positive: 0,
        negative: 0
      }
    }
  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
@import "src/stylesheets/directives";
</style>