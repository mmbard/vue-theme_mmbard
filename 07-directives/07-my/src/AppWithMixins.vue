
<template>
  <div class="container">
    <app-alert
      v-if="alert"
      :text="'Сообщение'"
      :title="'Dybvfybt'"
      :type="'primary'" 
      :closable="true"
      @close="alert = false"
      ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{alert ? 'Скрыть' :'Показать сообщение'}}</button>
    </div>

    <app-block></app-block>
  </div>
</template>

<script >
import alertMixin from './alertMixin';
import AppAlert from './components/AppAlert.vue';
import AppBlock from './components/AppBlock.vue';

export default {
  mixins: [alertMixin],
  components: {
    AppAlert, AppBlock
  }
}
</script>

<style scoped></style>
