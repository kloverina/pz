<template>
  <section  id="components-parameters-adding-section">
    <h2 class="section-title">Параметры компонентов схемы</h2>
    <div class="wrapper wrapper_horizontal flex">
      <div class="form-card" id="adding-section__resistor-parameters">
        <form class="input-values form"  method="post" data-ajax="true" data-ajax-method="post" data-ajax-url="/home/add-resistor"
              data-ajax-complete="onResistorAdded" >
          <h3 class="form-card__header">R</h3>
          <span>Номер</span>
          <input type="number" min="1" value="1" readonly>

          <span>Узел n+</span>
          <input name="positiveNode" type="number" min="1" required>

          <span>Узел n-</span>
          <input name="negativeNode" type="number" min="1" required>

          <span>Сопротивление</span>
          <input name="resistance" type="number" min="0" step="0.001" placeholder="кОм" required>

          <div class="form-card__button-row">
            <button class="button" type="submit">Добавить</button>
          </div>
        </form>
        <div class="form-card__form-blocker hidden">
          <span>🗸</span>
        </div>
      </div>

      <div class="form-card" id="adding-section__inductor-parameters">
        <form class="input-values form" method="post" data-ajax="true" data-ajax-method="post" data-ajax-url="/home/add-inductor"
              data-ajax-complete="onInductorAdded" id="ind-form">
          <h3 class="form-card__header">L</h3>

          <span>Номер</span>
          <input id="inductor-number-input" type="number" min="1" value="1" readonly>

          <span>Узел n+</span>
          <input id="inductor-positive-node-input" name="positiveNode" type="number" min="1" required>

          <span>Узел n-</span>
          <input id="inductor-negative-node-input" name="negativeNode" type="number" min="1" required>

          <span>Индуктивность</span>
          <input id="inductor-value-input" name="inductance" type="number" min="0" step="0.001" placeholder="Гн" required>

          <div class="form-card__button-row">
            <button class="button" type="submit">Добавить</button>
          </div>
        </form>
        <div class="form-card__form-blocker hidden">
          <span>🗸</span>
        </div>
      </div>

      <div class="form-card" id="adding-section__capacitor-parameters">
        <form class="input-values form"  method="post" data-ajax="true" data-ajax-method="post" data-ajax-url="/home/add-capacitor"
              data-ajax-complete="onCapacitorAdded" >
          <h3 class="form-card__header">C</h3>
          <label class="form-card__row">
            <span>Номер</span>
            <input id="capacitor-number-input" type="number" min="1" value="1" readonly>
          </label>
          <label class="form-card__row">
            <span>Узел n+</span>
            <input id="capacitor-positive-node-input" name="positiveNode" type="number" min="1" required>
          </label>
          <label class="form-card__row">
            <span>Узел n-</span>
            <input id="capacitor-negative-node-input" name="negativeNode" type="number" min="1" required>
          </label>
          <label class="form-card__row">
            <span>Ёмкость</span>
            <input id="capacitor-value-input" name="capacity" type="number" min="0" step="0.001" placeholder="нФ" required>
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
  name: "c2-CircuitAddSection"
}
</script>

<style scoped>

</style>