<template>
  <section id="circuit-parameters-section">
    <h2 class="section-title">Параметры схемы</h2>
    <div class="flex-column">
      <form class="input-component form" v-on:submit.prevent="showAddSection()">
        <div class="form-row">
          <div class="form-element column">
            <div class="form-element form-element_component component" id="circuit__nodes-amount">
              <p class="component__name">Количество узлов:</p>
              <input class="form-part__input component__amount"
                     v-model="nodesAmount"
                     type="number" min="1"  max="10"  value="0" required>
            </div>

            <div class="form-element form-element_component component" id="circuit__resistors-amount">
              <p class="component__name">Количество резисторов:</p>
              <input class="form-part__input component__amount"
                     v-model="resAmount"
                     type="number" min="0" max="10"  value="0" required>
            </div>

            <div class="form-element form-element_component component" id="circuit__capacitors-amount">
              <p class="component__name">Количество конденсаторов:</p>
              <input class="form-part__input component__amount"
                     v-model="capAmount"
                     type="number" min="0"  max="10"  value="0" required>
            </div>
            <div class="form-element form-element_component component" id="circuit__inductors-amount">
              <p class="component__name">Количество катушек:</p>
              <input class="form-part__input component__amount"
                     v-model="indAmount"
                     type="number" min="0" max="10"  value="0"  required>
            </div>

            <div class="form-element form-element_component component">
              <p class="component__name">
                ИТУН:
              </p>
              <input class="component__amount" name="component" type="number" value="0" min="0" max="6">
            </div>

            <div class="form-element form-element_component component">
              <p class="component__name">
                ИНУН:
              </p>
              <input class="component__amount" name="component" type="number" value="0" min="0" max="6">
            </div>

            <div class="form-element form-element_component component">
              <p class="component__name">
                ИТУТ:
              </p>
              <input class="component__amount" name="component" type="number" value="0" min="0" max="6">
            </div>
            
          </div>

          <div class="form-element column">
            <div class="form-element form-element_component component">
              <p class="component__name">
                ИНУТ:
              </p>
              <input class="component__amount" name="component" type="number" value="0" min="0" max="6">
            </div>


            <div class="form-element form-element_component component">

              <p class="component__name">
                Б/п транзистор:
              </p>
              <input class="component__amount" name="component" type="number" value="0">
            </div>

            <div class="form-element form-element_component component">

              <p class="component__name">
                У/п транзистор:
              </p>
              <input class="component__amount" name="component" type="number" value="0">
            </div>


            <div class="form-element form-element_component component">

              <p class="component__name">
                Опер. уселитель:
              </p>
              <input class="component__amount" name="component" type="number" value="0">
            </div>


            <div class="form-element form-element_component component">

              <p class="component__name">
                Трансформатор:
              </p>
              <input class="component__amount" name="component" type="number" value="0">
            </div>


            <div class="form-element form-element_component component">

              <p class="component__name">
                Ид. опер. усилитель:
              </p>
              <input class="component__amount" name="component" type="number" value="0">
            </div>


            <div class="form-element form-element_component component">

              <p class="component__name">
                Ид. трансформатор:
              </p>
              <input class="component__amount" name="component" type="number" value="0">
            </div>
          </div>
        </div>

        <div class="form-element flex-width-block">
          <div class="form-part" id="circuit__buttons-section" @click:="console.log('cancel')">
            <button type="submit"
                    class="form_element__button button accept-button"
            >Принять</button>
            <button type="reset"
                    class="form_element__button button cancel-button"
            >Отменить</button>
          </div>

        </div>


      </form>
    </div>

  </section>
</template>

<script>
export default {
  name: "c1-circuit-params",
  mounted: function () {
    this.getValues()
  },
  props: {
    node: {
      type: Number,
      required: true
    },
    resistor:{
      type: Number,
      required: true
    },
    capacitor:{
      type: Number,
      required: true
    },
    inductor:{
      type: Number,
      required: true
    }
  },
  
  data: function () {
    return{
      nodesAmount: 0,
      resAmount: 0,
      capAmount: 0,
      indAmount: 0
    }
  },

  methods: {
    getValues() {
      console.log(this.node)
      this.nodesAmount = this.node
      this.resAmount = this.resistor
      this.capAmount = this.capacitor
      this.indAmount = this.inductor
    },

    showAddSection(){
      let values = [this.nodesAmount, this.resAmount, this.capAmount, this.indAmount]
      this.$emit('show-add-section', values)
    }

  }

}
</script>

<style scoped>

</style>