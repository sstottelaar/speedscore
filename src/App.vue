<template>
  <div class="relative">
    <settings-button />
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <settings-modal v-if="showSettings" />
    </transition>
    <input-area />
  </div>
</template>

<script>
import InputArea from '@/components/InputArea'
import SettingsModal from '@/components/SettingsModal'
import SettingsButton from '@/components/SettingsButton'

export default {
  name: 'App',
  components: {
    InputArea,
    SettingsModal,
    SettingsButton,
  },
  computed: {
    showSettings() {
      return this.$store.state.showSettings
    },
  },
}
</script>
