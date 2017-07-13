<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-7 text-center">
          <h1>{{title}}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-7">
          <router-link to="/en">
            <b-button variant="secondary">En</b-button>
          </router-link>
          <router-link to="/ru">
            <b-button variant="secondary">Ru</b-button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: Pacifico;
    src: url("../assets/fonts/Pacifico/Pacifico.ttf");
  }

  header {
    padding-top: 10px;
    h1 {
      color: #EA6153;
      font-family: 'Pacifico', Georgia, serif;
    }
  }

  a.router-link-active > button {
   color: #2ECC71;
  }
</style>
