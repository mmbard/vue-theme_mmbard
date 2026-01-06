<template>
  <div class="container column">
    <form-component @block-added="addBlock"></form-component>
    <resume-component :blocks="blocks"></resume-component>
  </div>
  <app-loader v-if="loading"></app-loader>
  <comments-component :comments="comments" @load-comments="loadComments"></comments-component>
</template>

<script>
import AppLoader from './components/AppLoader.vue';
import CommentsComponent from './components/CommentsComponent.vue';
import FormComponent from './components/FormComponent.vue';
import ResumeComponent from './components/ResumeComponent.vue';
import axios from 'axios';

export default {
  data() {
    return {
      blocks: [],
      loading: false,
      comments: []
    }
  },
  mounted() {
    this.loadComments()
  },
  components: {
    FormComponent, ResumeComponent, CommentsComponent, AppLoader
  },
  methods: {
    addBlock(block) {
      this.blocks.push(block)
      console.log(this.blocks);
    },
    async loadComments() {
      this.loading = true
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42')
      console.log(data);
      this.comments = data
      this.loading = false
    }
  }
}
</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
