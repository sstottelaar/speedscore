<template>
  <section class="flex">
    <div
      class="w-1/2 h-screen bg-blue-500 flex justify-center items-center flex-col"
      @click="increaseScore(0)"
    >
      <span class="text-white font-bold text-3xl uppercase tracking-widest">{{
        getPlayerNames[0].score
      }}</span>
      <span
        class="text-white font-medium text-xl uppercase tracking-widest opacity-50"
        >{{ getPlayerNames[0].name }}</span
      >
    </div>
    <div
      class="w-1/2 h-screen bg-blue-600 flex justify-center items-center flex-col"
      @click="increaseScore(1)"
    >
      <span class="text-white font-bold text-3xl uppercase tracking-widest">{{
        getPlayerNames[1].score
      }}</span>
      <span
        class="text-white font-medium text-xl uppercase tracking-widest opacity-50"
        >{{ getPlayerNames[1].name }}</span
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'InputArea',
  computed: {
    getPlayerNames() {
      return this.$store.state.players
    },
  },
  methods: {
    increaseScore(player) {
      this.$store.dispatch('increaseScore', player)
    },
  },
}
</script>

<style></style>
