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
          <input  class="text-input" type="number" v-model="inputValue" @click="inputValue = ' '">
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
  .form{
    padding: 10px 100px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;

  }
  .form_block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #9dcccd;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;


    label{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      span{
        margin-left: 5px;
        white-space: nowrap;
        margin-right: 10px;
      }
    }

    label.label_space-between{
      justify-content: space-between;
      width: 100%;
      :nth-child(n){
        flex: 0 1 40%;
      }
    }
  }

  input.radio{
    width: 15px;
    height: 15px;
    padding: 5px;
  }

  input.text-input{
    padding: 8px 15px 8px 5px;
    text-align: right;
  }

  button{
    background: #1D3557;
    color: white;
    padding: 5px 10px;
    max-width: 300px;
    align-self: center;
  }

</style>