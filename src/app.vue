<template>
  <header>
    <div class="wrapper">
      <p>Hello World!</p>
    </div>
  </header>

  <main>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
