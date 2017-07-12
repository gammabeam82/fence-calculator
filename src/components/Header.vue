<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-7 text-center">
          <h1>{{title}}</h1>
        </div>
      </div>
    </div>

    <b-navbar toggleable>

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>

          <b-nav-item>
            <router-link to="/en">
              <b-button variant="secondary">{{ $t('message.en') }}</b-button>
            </router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/ru">
              <b-button variant="secondary">{{ $t('message.ru') }}</b-button>
            </router-link>
          </b-nav-item>

        </b-nav>
      </b-collapse>
    </b-navbar>

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
