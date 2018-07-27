<template>
  <div class="jumbotron text-center">
    <h1 class="display-4">Home Page</h1>
    <p>{{ name }}</p>
    <hr class="my-4">
    <p>Incroyable du cul !</p>
    <p class="lead">
      <a href="#" class="btn btn-outline-danger btn-lg" role="button">Nom d'un fion</a>
    </p>
  </div> 
</template>

<script>
module.exports = {
  data: function () {
    return {
      name: "Jean-Marie Le pen"
    }
  }
}
</script>

<style scoped>

</style>



