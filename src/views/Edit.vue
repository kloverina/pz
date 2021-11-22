<template>
  <div class="container">
    <c1-circuit-params>

    </c1-circuit-params>

    <c2-circuit-add-section>
    </c2-circuit-add-section>


  </div>

</template>

<script>
import C1CircuitParams from "@/components/c1-circuit-params";
import C2CircuitAddSection from "@/components/c2_CircuitAddSection";
export default {
  name: "Edit",
  components: {C2CircuitAddSection, C1CircuitParams}
}
</script>

<style scoped>

</style>