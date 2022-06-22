<template>
  <button class="button" :type="type" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="postcss">
.button {
  appearance: none;
  font-weight: bold;
  background-color: blue;
  text-align: center;
  color: white;
  padding: 0 4px;
  height: 40px;
  border-radius: 4px;
}
</style>