<template>
  <section
    class="absolute w-full h-full bg-black bg-opacity-25 flex items-center justify-center z-10"
  >
    <div class="w-3/4 lg:w-1/2 bg-white rounded-lg shadow-xl overflow-hidden">
      <header class="border-b border-gray-300 px-6 py-4">
        <span class="text-lg text-gray-700 font-medium">Settings</span>
      </header>
      <section class="p-6 space-y-4 flex flex-col">
        <div class="space-x-4">
          <span class="text-gray-600">Player 1</span>
          <input
            type="text"
            class="rounded border border-gray-300 shadow text-gray-600 px-3 py-2"
            v-model.lazy="playerOneName"
          />
        </div>
        <div class="space-x-4">
          <span class="text-gray-600">Player 2</span>
          <input
            type="text"
            class="rounded border border-gray-300 shadow text-gray-600 px-3 py-2"
            v-model.lazy="playerTwoName"
          />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Settings',
  computed: {
    playerOneName: {
      get() {
        return this.$store.state.players[0].name
      },
      set(val) {
        let payload = {
          player: 0,
          val: val,
        }
        this.$store.dispatch('updatePlayerName', payload)
      },
    },
    playerTwoName: {
      get() {
        return this.$store.state.players[1].name
      },
      set(val) {
        let payload = {
          player: 1,
          val: val,
        }
        this.$store.dispatch('updatePlayerName', payload)
      },
    },
  },
}
</script>

<style></style>
