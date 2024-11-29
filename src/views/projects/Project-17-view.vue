<script setup>
import { reactive, onMounted } from 'vue'
import RebillyInstruments from '@rebilly/instruments'
import LayoutDefault from '@/components/layout/Layout-default.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import rebillyApi, { organizationId, websiteId } from '@/helpers/api'
import { theme } from '@/helpers/theme-instruments'

const breadcrumbPath = ['home', 'Project  17: Casino payout payment methods']
const customerId = 'ambrosio-ander'

const state = reactive({
  isAuthenticating: false,
  jwt: null,
  amount: null,
  displayForm: true,
  currency: 'USD',
  displayCurrencySelector: true,
})

async function logInCustomer() {
  const {
    fields: { token }
  } = await rebillyApi.customerAuthentication.login({
    data: {
      mode: 'passwordless',
      customerId
    }
  })
  return token
}

async function exchangeToken(token) {
  const {
    fields: { token: jwt }
  } = await rebillyApi.customerAuthentication.exchangeToken({
    token,
    data: {
      acl: [
        {
          scope: { organizationId: [organizationId] },
          permissions: ['*']
        }
      ],
      customClaims: {
        websiteId: websiteId
      }
    }
  })
  return jwt
}

async function onClickHandle() {
  if (!state.amount) {
    alert('Please enter an amount')
    return
  }
  state.displayForm = false
  state.isAuthenticating = true
  state.displayCurrencySelector = false
  const token = await logInCustomer()
  const [jwt, payoutRequestId] = await Promise.all([exchangeToken(token), generatePayout()])
  state.jwt = jwt
  state.isAuthenticating = false
  initiateInstrument(payoutRequestId)
}


async function changeCurrency(currency) {
  state.currency = currency

  destroyInstruments()
}

async function generatePayout() {
  const {
    fields: { id: payoutRequestId }
  } = await rebillyApi.payoutRequests.create({
    data: {
      websiteId,
      customerId,
      amount: Number(state.amount),
      currency: state.currency,
    }
  })
  return payoutRequestId
}

function initiateInstrument(payoutRequestId) {
  RebillyInstruments.mount({
    apiMode: 'sandbox',
    jwt: state.jwt,
    payout: {
      payoutRequestId
    },
    theme
  })
}

function destroyInstruments() {
  RebillyInstruments.destroy()
  state.displayForm = false
}

function activeButtonClass(currency) {
  return state.currency === currency ? 'btn-primary' : 'btn-outline-primary'
}
</script>

<template>
  <LayoutDefault>
    <div id="apartment" class="py-5 bg-body-tertiary">
      <div class="container pb-5 pt-3">
        <Breadcrumb :path="breadcrumbPath" />

        <div class="row">
          <div class="col-xl-6 col-lg-8">

            <div class="row justify-content-between align-items-center">
              <div class="col-md-auto">
                <h3 class="display-6 m-0">
                  <small>Make your payout</small>
                </h3>
              </div>
              <div class="col-md-auto"  v-if="state.displayCurrencySelector">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm"
                    :class="activeButtonClass('USD')"
                    @click="changeCurrency('USD')"
                  >
                    USD
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm"
                    :class="activeButtonClass('CAD')"
                    @click="changeCurrency('CAD')"
                  >
                    CAD
                  </button>
                </div>
              </div>
            </div>

            <div class="card shadow-lg mt-4">
              <div class="card-body">
                <div class="text-center" v-if="state.isAuthenticating">
                  <div class="spinner-border text-secondary my-5"></div>
                </div>
                <template v-if="state.displayForm">
                  <div class="mb-3">
                    <label for="amount" class="form-label">Amount</label>
                    <input type="number" class="form-control" id="amount" v-model="state.amount" />
                  </div>
                  <button type="button" class="btn btn-primary" @click="onClickHandle">
                    Request
                  </button>
                </template>
                <div class="rebilly-instruments-summary"></div>
                <div class="rebilly-instruments"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutDefault>
</template>
