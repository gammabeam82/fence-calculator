<template>
	<div class="container-fluid calculator">
		<div class="form-group row">
			<label for="price-input" class="col-3 col-form-label">Стоимость куба</label>
			<div class="col-4" v-bind:class="{ 'has-danger': price.length < 1 }">
				<b-form-input v-model="price" class="form-control" id="price-input"></b-form-input>
			</div>
		</div>

		<div class="form-group row">
			<label for="length-input" class="col-3 col-form-label">Длина доски, см</label>
			<div class="col-4" v-bind:class="{ 'has-danger': length.length < 1 }">
				<b-form-input v-model="length" class="form-control" id="length-input"></b-form-input>
			</div>
		</div>

		<div class="form-group row">
			<label for="width-input" class="col-3 col-form-label">Ширина доски, см</label>
			<div class="col-4" v-bind:class="{ 'has-danger': width.length < 1 }">
				<b-form-input v-model="width" class="form-control" id="width-input"></b-form-input>
			</div>
		</div>

		<div class="form-group row">
			<label for="thickness-input" class="col-3 col-form-label">Толщина доски, см</label>
			<div class="col-4" v-bind:class="{ 'has-danger': thickness.length < 1 }">
				<b-form-input v-model="thickness" class="form-control" id="thickness-input"></b-form-input>
			</div>
		</div>

		<div class="form-group row">
			<label for="num-input" class="col-3 col-form-label">Количество досок</label>
			<div class="col-4" v-bind:class="{ 'has-danger': num.length < 1 }">
				<b-form-input v-model="num" class="form-control" id="num-input"></b-form-input>
			</div>
		</div>

		<div class="form-group row">
			<label for="cbm-input" class="col-3 col-form-label">Количество кубов</label>
			<div class="col-4">
				<b-form-input v-model="cbmComputed" class="form-control" id="cbm-input"></b-form-input>
			</div>
		</div>

		<div class="form-group row">
			<label for="fence-input" class="col-3 col-form-label">Длина забора, м</label>
			<div class="col-4">
				<b-form-input v-model="fenceLengthComputed" class="form-control" id="fence-input"></b-form-input>
			</div>
		</div>

		<div class="row actions">
			<div class="col-7 text-right">
				<b-button v-on:click="reset()" variant="primary">
					Сбросить
				</b-button>
			</div>
		</div>

		<div class="row result">
			<div class="col-3 align-self-center">
				<strong>Стоимость:</strong>
			</div>
			<div class="col-4 price text-right" v-bind:class="{ 'error' : hasError }">{{ totalPriceComputed }}</div>
		</div>

	</div>
</template>

<script>
  export default {
    name: 'calculator',
    data () {
      return {
        length: 200,
        width: 15,
        thickness: 4,
        num: 10,
        cbm: 0,
        price: 80,
        hasError: false
      }
    },
    methods: {
      reset: function () {
        Object.assign(this.$data, this.$options.data())
      }
    },
    computed: {
      totalPriceComputed: function () {
        let value = this.cbmComputed * this.price
        if (isNaN(value)) {
          value = 'Ошибка!'
          this.hasError = true
        } else {
          this.hasError = false
        }
        return value
      },
      cbmComputed: {
        get: function () {
          let value = this.length * this.width * this.thickness * this.num / 1000000
          if (isNaN(value)) {
            value = 'Некорректные данные'
          }
          return value
        },
        set: function (newVal) {
          this.num = (newVal * 1000000) / (this.length * this.width * this.thickness)
        }
      },
      fenceLengthComputed: {
        get: function () {
          let value = this.width * this.num / 100
          if (isNaN(value)) {
            value = 'Некорректные данные'
          }
          return value
        },
        set: function (newVal) {
          this.num = newVal * 100 / this.width
        }
      }
    },
    watch: {
      num: function (newVal) {
        if (isNaN(newVal)) {
          this.num = 'Некорректные данные'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

	$color-error: #EA6153;
	$color-success: #2ECC71;

	@mixin bigger-font {
		font-size: 300%;
	}

	.calculator {
		margin: 80px auto 0 auto;
	}

	.price {
		@include bigger-font;
		color: $color-success;
	}

	.result {
		margin-top: 60px;
	}

	.actions {
		margin-top: 30px;
	}

	.error {
		color: $color-error;
	}
</style>
