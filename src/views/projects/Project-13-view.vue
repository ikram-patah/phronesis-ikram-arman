<script setup>
import { reactive, onMounted } from 'vue'
import RebillyInstruments from '@rebilly/instruments'
import LayoutDefault from '@/components/layout/Layout-default.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import rebillyApi, { organizationId, websiteId } from '@/helpers/api'

const breadcrumbPath = ['home', 'Project 13: Casino deposit payment methods']
const customerId = 'ambrosio-ander'

const state = reactive({
  isAuthenticating: false,
  currency: 'USD',
  jwt: null
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

async function generateDepositRequest() {
  const {
    fields: { id: depositRequestId }
  } = await rebillyApi.depositRequests.create({
    data: {
      websiteId,
      customerId,
      currency: state.currency
    }
  })
  return depositRequestId
}

function initiateInstrument(depositRequestId) {
  RebillyInstruments.mount({
    apiMode: 'sandbox',
    jwt: state.jwt,
    deposit: { depositRequestId }
  })
}

function destroyInstruments() {
  RebillyInstruments.destroy()
}

function activeButtonClass(currency) {
  return state.currency === currency ? 'btn-primary' : 'btn-outline-primary'
}

async function changeCurrency(currency) {
  state.currency = currency

  destroyInstruments()
  state.isAuthenticating = true
  const depositRequestId = await generateDepositRequest()
  state.isAuthenticating = false
  initiateInstrument(depositRequestId)
}

onMounted(async () => {
  state.isAuthenticating = true

  const token = await logInCustomer()

  const [jwt, depositRequestId] = await Promise.all([
    exchangeToken(token),
    generateDepositRequest()
  ])

  state.jwt = jwt
  state.isAuthenticating = false

  initiateInstrument(depositRequestId)
})
</script>

<template>
  <LayoutDefault>
    <div id="apartment" class="py-5 bg-body-tertiary">
      <div class="container pb-5 pt-3">
        <Breadcrumb :path="breadcrumbPath" />

        <div class="btn-group mt-2 mb-3">
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

        <div class="row">
          <div class="col-xl-6 col-lg-8">
            <div class="card shadow-lg">
              <div class="card-body">
                <div class="text-center" v-if="state.isAuthenticating">
                  <div class="spinner-border text-secondary my-5"></div>
                </div>
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
