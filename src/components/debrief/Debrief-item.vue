<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  id: String
})
</script>

<template>
  <div class="accordion mb-3" id="accordion-debrief">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#debrief-${props.id}`"
        >
          <strong>
            <slot name="title"></slot>
          </strong>
        </button>
      </h2>
      <div
        :id="`debrief-${props.id}`"
        class="accordion-collapse collapse"
        :class="{ show: props.isOpen }"
        data-bs-parent="#accordion-debrief"
      >
        <div class="accordion-body">
          <h6 class="pt-2 pb-2">
            <strong>What made you smile?</strong>
          </h6>
          <slot name="smile"></slot>
          <h6 class="pt-4 pb-2">
            <strong>What did you find confusing?</strong>
          </h6>
          <slot name="confusing"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
