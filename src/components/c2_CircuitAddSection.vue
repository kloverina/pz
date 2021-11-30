<template>
  <section  id="components-parameters-adding-section">
    <h2 class="section-title">Параметры компонентов схемы</h2>
    <div class="wrapper wrapper_horizontal flex">
      <div class="form-card" id="adding-section__resistor-parameters"
           v-if="currentResNumber !== -1"
      >
        <form class="input-values form"
              @submit.prevent = "onResistorAdded()"
        >
          <h3 class="form-card__header">R</h3>
          <span>Номер</span>
          <input type="number"  v-model:readonly="currentResNumber" readonly>

          <span>Узел n+</span>
          <input name="positiveNode" type="number" min="1" max="10" required
                 v-model="resistors[currentResNumber-1].positiveNode"
          >

          <span>Узел n-</span>
          <input name="negativeNode" type="number" min="1" max="10" required
                 v-model="resistors[currentResNumber-1].negativeNode"
          >

          <span>Сопротивление</span>
          <input name="resistance" type="number"
                 min="0" step="0.01" max="1000" placeholder="кОм" required
                 v-model="resistors[currentResNumber-1].value"
          >

          <div class="form-card__button-row">
            <button class="button" type="submit">Добавить</button>
          </div>
        </form>
      </div>

      <div class="form-card" id="adding-section__inductor-parameters"
           v-if="currentIndNumber !== -1"
      >
        <form class="input-values" id="ind-form"
              @submit.prevent="onInductorAdded()"
        >
          <h3 class="form-card__header">L</h3>

          <span>Номер</span>
          <input type="number" min="1" value="1" readonly
                 v-model="currentIndNumber"
          >

          <span>Узел n+</span>
          <input name="positiveNode" type="number" min="1" required
                 v-model="inductors[currentIndNumber-1].positiveNode"
          >

          <span>Узел n-</span>
          <input name="negativeNode" type="number" min="1" required
                 v-model="inductors[currentIndNumber-1].negativeNode"
          >

          <span>Индуктивность</span>
          <input name="inductance" type="number" min="0" step="0.01" placeholder="Гн" required
                 v-model="inductors[currentIndNumber-1].value"
          >

          <div class="form-card__button-row">
            <button class="button" type="submit">Добавить</button>
          </div>
        </form>
      </div>

      <div class="form-card"
           v-if="currentCapNumber !== -1"
      >
        <form class="input-values form"
              @submit.prevent = "onCapacitorAdded()"
        >
          <h3 class="form-card__header">C</h3>
          <label class="form-card__row">
            <span>Номер</span>
            <input type="number" min="1" value="1" readonly
                   v-model="currentCapNumber"
            >
          </label>
          <label class="form-card__row">
            <span>Узел n+</span>
            <input name="positiveNode" type="number" min="1" required
                   v-model="capacitors[currentCapNumber-1].positiveNode"
            >
          </label>
          <label class="form-card__row">
            <span>Узел n-</span>
            <input name="negativeNode" type="number" min="1" required
                   v-model="capacitors[currentCapNumber-1].negativeNode"
            >
          </label>
          <label class="form-card__row">
            <span>Ёмкость</span>
            <input name="capacity" type="number" min="0" step="0.01" placeholder="нФ" required
                   v-model="capacitors[currentCapNumber-1].value"
            >
          </label>
          <div class="form-card__button-row">
            <button class="button" type="submit">Добавить</button>
          </div>
        </form>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "c2-CircuitAddSection",
  mounted() {
    this.zeroQtyCheck()
    this.getValues()
  },
  props: {
    resAmount:{
      type: Number,
      required: true
    },
    capAmount:{
      type: Number,
      required: true
    },
    indAmount:{
      type: Number,
      required: true
    },
    resValues: { type: Array, required:false },
    capValues:{ type: Array, required:false},
    indValues:{ type: Array, required:false}
  },

  data() {
    return {
      currentResNumber: 1,
      currentCapNumber: 1,
      currentIndNumber: 1,
      resistors: [{
        positiveNode: null,
        negativeNode: null,
        value: null
      }],
      capacitors: [{
        positiveNode: null,
        negativeNode: null,
        value: null
      }],
      inductors: [{
        positiveNode: null,
        negativeNode: null,
        value: null
      }]
    }
  },
  methods: {

    zeroQtyCheck(){
      if (this.resAmount === 0)
        this.currentResNumber = -1
      if (this.capAmount === 0)
        this.currentCapNumber = -1
      if (this.indAmount === 0)
        this.currentIndNumber = -1
    },

   getValues(){
      if (this.resValues)
        this.resistors = this.resValues
     if(this.capValues)
        this.capacitors = this.capValues
     if(this.indValues)
      this.inductors = this.indValues
    },

    onResistorAdded() {
      //текущий элемент - последний
      if (this.currentResNumber === this.resAmount) {
        this.currentResNumber = -1
        this.allElementsAdded()
      }
      else {
        this.currentResNumber++
        let temp = {
          positiveNode: null,
          negativeNode: null,
          value: null
        }
        this.resistors = [...this.resistors, temp]
      }
    },
    onCapacitorAdded() {
      //текущий элемент - последний
      if (this.currentCapNumber === this.capAmount){
        this.currentCapNumber = -1
        this.allElementsAdded()
      }
      else {
        this.currentCapNumber++
        let temp = {
          positiveNode: null,
          negativeNode: null,
          value: null
        }
        this.capacitors = [...this.capacitors, temp]
      }

    },
    onInductorAdded() {
      //текущий элемент - последний
      if (this.currentIndNumber === this.indAmount) {
        this.currentIndNumber = -1
        this.allElementsAdded()
      }
      else {
        this.currentIndNumber++
        let temp = {
          positiveNode: null,
          negativeNode: null,
          value: null
        }
        this.inductors = [...this.inductors, temp]
      }
    },
    allElementsAdded(){
      if (this.currentCapNumber === -1 && this.currentIndNumber === -1 && this.currentResNumber === -1 ){
        this.$emit('save-values', this.resistors, this.capacitors, this.inductors)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>

</style>