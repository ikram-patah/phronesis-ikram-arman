<script setup>
import LayoutDefault from '@/components/layout/Layout-default.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <LayoutDefault>
    <div class="py-5 bg-body-tertiary">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-4 mb-4">
            <RouterLink :to="{ name: 'project-13' }" custom v-slot="{ navigate }">
              <div class="card shadow-lg" @click="navigate">
                <div class="card-body">
                  <h5 class="card-title">Project 13</h5>
                  <p class="card-text text-muted">Casino deposit payment methods</p>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </LayoutDefault>
</template>

<style lang="scss" scoped>
.card {
  cursor: pointer;
}
</style>
