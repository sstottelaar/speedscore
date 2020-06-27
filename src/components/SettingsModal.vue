<template>
  <section
    class="absolute w-screen h-screen bg-black bg-opacity-25 flex items-center justify-center z-10"
  >
    <div class="w-5/6 lg:w-1/2 bg-white rounded-lg shadow-xl relative">
      <button
        class="absolute right-0 top-0 -mt-3 -mr-3 rounded-full bg-white shadow-xl text-gray-800 p-2 appearance-none focus:outline-none"
        @click="toggleSettings"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <header class="border-b border-gray-300 px-6 py-4">
        <span class="text-lg text-gray-700 font-medium">Settings</span>
      </header>
      <section class="p-6 space-y-4 flex flex-col">
        <div class="flex flex-col">
          <span class="text-gray-500 block mb-2">Name player 1</span>
          <input
            type="text"
            class="appearance-none rounded border border-gray-300 text-gray-600 px-3 py-2"
            v-model.lazy="playerOneName"
          />
        </div>
        <div class="flex flex-col">
          <span class="text-gray-500 block mb-2">Name player 2</span>
          <input
            type="text"
            class="appearance-none rounded border border-gray-300 text-gray-600 px-3 py-2"
            v-model.lazy="playerTwoName"
          />
        </div>
      </section>
      <section class="p-4 border-t border-gray-300">
        <div>
          <button
            @click="newRound"
            class=" border border-gray-400 text-gray-500 p-3 py-2 rounded"
          >
            New round
          </button>
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
  methods: {
    newRound() {
      this.$store.dispatch('newRound')
    },
    toggleSettings() {
      this.$store.dispatch('toggleSettingsModal')
    },
  },
}
</script>

<style></style>
