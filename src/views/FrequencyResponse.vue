<template>
  <div class="container">
    <h2> Вид частотной характеристки </h2>
    <div class="form">
      <div class="form_block">
        <label>
          <input class="radio" type="radio" value="single-frequency"  v-model="radioButtonValue">
          <span> Единственная частотная точка </span>
        </label>
        <label>
          <input class="radio" type="radio" value="linear-frequency"  v-model="radioButtonValue">
          <span> Линейный закон изменения частоты </span>
        </label>
        <label>
          <input class="radio" type="radio" value="logarithmic-frequency"  v-model="radioButtonValue">
          <span> Логарифмический закон изменения частоты </span>
        </label>
      </div>

      <div class="form_block">
        <label class="label_space-between">
          <span> Значение частоты (кГц)  </span>
          <input  class="text-input" type="number" min="0" max="99"
                  v-model="inputValue" @mouseenter="inputValue= null">
        </label>
      </div>

      <button class="button accept-button"> Подтвердить </button>
    </div>



  </div>
</template>

<script>
import Input from "@/views/Input";
export default {
  name: "FrequencyResponse",
  components: {Input},
  data() {
    return {
      radioButtonValue: 'single-frequency',
      inputValue: 0
    }
  }
}
</script>

<style scoped lang="scss">
  @import "src/stylesheets/directives";
</style>