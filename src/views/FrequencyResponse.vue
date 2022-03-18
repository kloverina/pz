<template>
  <div class="container">
    <h2> Вид частотной характеристки </h2>
    <div class="form">
      <div class="form_block">
        <label>
          <input class="radio" type="radio" value="none"  v-model="radioButtonValue">
          <span> Нет </span>
        </label>
        <label>
          <input class="radio" type="radio" value="single"  v-model="radioButtonValue">
          <span> Единственная частотная точка </span>
        </label>
        <label>
          <input class="radio" type="radio" value="linear"  v-model="radioButtonValue">
          <span> Линейный закон изменения частоты </span>
        </label>
        <label>
          <input class="radio" type="radio" value="logarithmic"  v-model="radioButtonValue">
          <span> Логарифмический закон изменения частоты </span>
        </label>
      </div>

      <div class="form_block" v-if="radioButtonValue === 'single'">
        <label class="label_space-between">
          <span> Значение частоты (кГц)  </span>
          <input  class="text-input" type="number" min="0" max="99" step="0.01"
                  v-model="f_min">
        </label>
      </div>

      <div class="form_block" v-if="radioButtonValue === 'linear'">
        <label class="label_space-between">
          <span> Минимальная частота (кГц)  </span>
          <input  class="text-input" type="number" min="0" max="99" step="0.01"
                  v-model="f_min">
        </label>

        <label class="label_space-between">
          <span> Максимальная (кГц)  </span>
          <input  class="text-input" type="number" min="0" max="99" step="0.01"
                  v-model="f_max">
        </label>

        <label class="label_space-between">
          <span> Значение шага (df)  </span>
          <input  class="text-input" type="number" min="0" max="99" step="0.1"
                  v-model="df_k">
        </label>
      </div>

      <div class="form_block" v-if="radioButtonValue === 'logarithmic'">
        <label class="label_space-between">
          <span> Минимальная частота (кГц)  </span>
          <input  class="text-input" type="number" min="0" max="99" step="0.01"
                  v-model="f_min">
        </label>

        <label class="label_space-between">
          <span> Максимальная частота (кГц)  </span>
          <input  class="text-input" type="number" min="0" max="99" step="0.01"
                  v-model="f_max">
        </label>

        <label class="label_space-between">
          <span> Отношение соседних частот К  </span>
          <input  class="text-input" type="number" min="0" max="99" step="0.1"
                  v-model="df_k">
        </label>
      </div>

      <button class="button accept-button" @click="submitFrequency"> Подтвердить </button>
    </div>



  </div>
</template>

<script>
import Input from "@/views/Input";
export default {
  name: "FrequencyResponse",
  components: {Input},
  mounted() {
    this.getFrequency()
  },
  data() {
    return {
      radioButtonValue: 'none',
      f_min: 0,
      f_max: 0,
      df_k: 0,

    }
  },
  methods: {

    getFrequency(){
      let freq = JSON.parse(localStorage.frequency)
      this.radioButtonValue = freq.frequency
      if (freq.f_min) this.f_min = freq.f_min
      if (freq.f_max) this.f_max = freq.f_max
      if (freq.df_k) this.df_k = freq.df_k
    },

    submitFrequency(){
      let frequencyObj = {
        frequency: this.radioButtonValue
      }
      switch (this.radioButtonValue) {
        case "single":
          frequencyObj.f_min = this.f_min
          break

        case "linear":
        case "logarithmic":
          frequencyObj.f_min = this.f_min
          frequencyObj.f_max = this.f_max
          frequencyObj.df_k = this.df_k
              break
      }
      localStorage.setItem('frequency', JSON.stringify(frequencyObj))
      this.$router.push('/')

    }
  }
}
</script>

<style scoped lang="scss">
  @import "src/stylesheets/directives";
</style>