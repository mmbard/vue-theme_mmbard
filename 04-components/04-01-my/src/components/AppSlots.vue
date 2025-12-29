
<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <app-list>
      <template #default="{ idx, iter }">
        <span style="color: yellowgreen;">
          <strong>{{ idx }}</strong>
          Item: {{ iter }}
        </span>
      </template>
    </app-list>

    <app-block>
      <p>Это самый главный блок</p>

      <template v-slot:header>
        <h3>Это заголовок</h3>
      </template>

      <template #footer>
        <hr />
        <small>Это footer</small>
        
      </template>

    </app-block>

  </div>
</template>

<script>
import AppBlock from './components/AppBlock.vue';
import AppList from './components/AppList.vue';

export default {
  data() {

  },
  components: {
    AppBlock,
    AppList
  }
}
</script>

<style scoped>

</style>
