<template>
  <button
    class="absolute right-0 top-0 text-white block p-5 opacity-75 focus:outline-none focus:opacity-100 z-20"
    @click="toggleSettings"
  >
    <svg class="w-6" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
      ></path>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'SettingsButton',
  methods: {
    toggleSettings() {
      this.$store.dispatch('toggleSettingsModal')
    },
  },
}
</script>

<style></style>
