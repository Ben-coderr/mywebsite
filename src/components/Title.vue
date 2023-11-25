<template>
  <div class="container">
    <div class="title">
      <h1><slot></slot></h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media screen and (max-width: 439px) {
  h1 {
    font-size: 28px;
  }
}
@media (min-width: 440px) {
  h1 {
    font-size: 35px;
  }
}
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1::after {
  content: "";
  position: absolute;
  height: 10px;
  width: 50%;
  background-color: var(--background-color);
  border-radius: 20px;
  bottom: -20px;
  left: 25%;
}
h1 {
  color: var(--mine-color);
  position: relative;
  z-index: -1;
}
</style>
