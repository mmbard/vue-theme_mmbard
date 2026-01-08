
<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>

      <button class="btn" @click="$alert('wow')"> alert </button>
      <button class="btn" @click="changeLang">{{ $i18n('app.changeBtn') }}</button>
      <button class="btn primary" @click="modal = true">Открыть modal</button>
      
      <teleport to="body">
        <app-modal v-if="modal" @close="modal = false"></app-modal>
      </teleport>
    </div>
  </div>
</template>

<script >
import AppModal from './components/AppModal.vue';



export default {
  data() {
    return {
      modal: false
    }
  },
  inject: ['changeI18N'],
  methods: {
    changeLang() {
      this.changeI18N('en')
      this.$forceUpdate()
    }
  },
  components: {AppModal}
}
</script>

<style scoped></style>
