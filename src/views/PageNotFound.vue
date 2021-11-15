<template>
  <div class="v4-page-notfound">
    <h1>404</h1>
    <p class="v4-info">Something went wrong...</p>
    <p class="v4-info">The page you're looking for cannot be found.</p>
  </div>
</template>

<script>
export default {
  name: 'V4_PageNotFound'
}
</script>

<style lang="scss">
.v4-page-notfound {
  padding: 70px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-family: Roboto, serif;
  font-style: normal;

  font-size: 22px;
  h1 {
    font-size: 150px;
  }
}
</style>
