<template>
    <div 
        class="alert" 
        :class="type"
    >
       <p class="alert-title">{{ title }}</p> 
       <p>{{ text }}</p>
       <button class="btn" :class="type" v-if="closable" @click="$emit('close')">Закрыть</button>
    </div>
</template>

<script>
export default {
    emits: ['close'],
    props: {
        text: String,
        title: String,
        closable: {
            type: Boolean,
            required: false,
            default: false
        },
        type: {
            type: String,
            required: false,
            default: 'primary',
            validator(val) {
                return ['primary', 'danger', 'warning'].includes(val)
            }
        }
    },
    data() {
        return {
            name: ''
        }
    },
    mounted() {
        this.method()
    },
    components: {
        // component
    },
    methods: {
        method() {
            // method implementation
        }
    }
}
</script>

<style scoped>

</style>