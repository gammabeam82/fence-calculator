<template>
	<div class="container-fluid content">
		<div class="form-group row">
			<label for="price-input" class="col-3 col-form-label">{{ $t("message.cbmPrice") }}</label>
			<div class="col-4">
				<b-form-input v-model.number="price" type="number" step="any" id="price-input"></b-form-input>
				<span></span>
			</div>
		</div>

		<div class="form-group row">
			<label for="length-input" class="col-3 col-form-label">{{ $t("message.length") }}</label>
			<div class="col-4">
				<b-form-input v-model.number="length" type="number" step="any" id="length-input"></b-form-input>
				<span></span>
			</div>
		</div>

		<div class="form-group row">
			<label for="width-input" class="col-3 col-form-label">{{ $t("message.width") }}</label>
			<div class="col-4">
				<b-form-input v-model.number="width" type="number" step="any" id="width-input"></b-form-input>
				<span></span>
			</div>
		</div>

		<div class="form-group row">
			<label for="thickness-input" class="col-3 col-form-label">{{ $t("message.thickness") }}</label>
			<div class="col-4">
				<b-form-input v-model.number="thickness" type="number" step="any" id="thickness-input"></b-form-input>
				<span></span>
			</div>
		</div>

		<div class="form-group row">
			<label for="num-input" class="col-3 col-form-label">{{ $t("message.boardsNum") }}</label>
			<div class="col-4">
				<b-form-input v-model.number="num" type="number" step="any" id="num-input" required></b-form-input>
				<span></span>
			</div>
		</div>

		<div class="form-group row">
			<label for="cbm-input" class="col-3 col-form-label">{{ $t("message.metersNum") }}</label>
			<div class="col-4">
				<b-form-input v-model.number="cbmComputed" type="number" step="any" id="cbm-input"></b-form-input>
				<span></span>
			</div>
		</div>

		<div class="form-group row">
			<label for="fence-input" class="col-3 col-form-label">{{ $t("message.fenceLength") }}</label>
			<div class="col-4">
				<b-form-input v-model.number="fenceLengthComputed" type="number" step="any" id="fence-input"></b-form-input>
				<span></span>
			</div>
		</div>

		<div class="row actions">
			<div class="col-3"></div>
			<div class="col-4">
				<b-button v-on:click="reset()" variant="primary">
          {{ $t("message.reset") }}
				</b-button>
			</div>
		</div>

		<div class="row result">
			<div class="col-3 align-self-center">
				<strong>{{ $t("message.totalPrice") }}:</strong>
			</div>
			<div class="col-4 price" v-bind:class="{ 'error' : hasError }">{{ totalPriceComputed }}</div>
		</div>

	</div>
</template>

<script>
  export default {
    name: 'calculator',
    data () {
      return {
        length: 200,
        width: 17,
        thickness: 3,
        num: 10,
        cbm: 0,
        price: 120,
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
        let value = +(this.cbmComputed * this.price).toFixed(2)
        if (value === 0 || isNaN(value)) {
          value = this.$t('message.error')
          this.hasError = true
        } else {
          this.hasError = false
        }
        return value
      },
      cbmComputed: {
        get: function () {
          return this.length * this.width * this.thickness * this.num / 1000000
        },
        set: function (newVal) {
          this.num = (newVal * 1000000) / (this.length * this.width * this.thickness)
        }
      },
      fenceLengthComputed: {
        get: function () {
          return this.width * this.num / 100
        },
        set: function (newVal) {
          this.num = newVal * 100 / this.width
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

	$color-error: #EA6153;
	$color-success: #2ECC71;

	@mixin validation($col, $cont) {
		content: $cont;
		color: $col;
		padding-left: 10px;
		font-size: 150%;
	}

	.price {
		font-size: 300%;
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

	input:invalid + span:after {
		@include validation($color-error, '✖');
	}

	input:valid + span:after {
		@include validation($color-success, '✓');
	}

	input.form-control {
		display: inline-block !important;
		width: 80%;
	}

	input[type=number] {
		-moz-appearance: textfield;
	}

	input[type=number]::-webkit-inner-spin-button,
	input[type=number]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		-moz-appearance: none;
	}
</style>
