<script setup>
import AppNews from './components/AppNews.vue';
</script>

<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: {{ openRate }} | Прочитано: <strong> {{ readRate }} </strong></span>
    </div>

    <app-news 
      v-for="item in news" 
      :key="item.id" 
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @unmark="unreadNews"
      >
    </app-news>

  </div>
</template>

<script>
import AppNews from './components/AppNews.vue';

export default {
    data() {
      return {
        now: new Date().toLocaleDateString(),
        news: [
          {
            title:'Трамп победил на выборах',
            id:1,
            isOpen: false,
            wasRead: false
          },
          {
            title:'Vue3 работает',
            id:2,
            isOpen: false,
            wasRead: false
          }
        ],
        openRate: 0,
        readRate: 0
      }
  },
  provide() {
    return {
      news:this.news
    }
  },
  methods: {
    openNews() {
      this.openRate++
      //console.log(data);
    },
    readNews(id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    unreadNews(id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
    },
  },
  components: {
      'app-news': AppNews
    }
    
  }
</script>

<style scoped>
  /* h2 {
    color: darkred;
  } */
</style>
