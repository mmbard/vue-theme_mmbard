<template>
    <div class="modal-backdrop" @click="$emit('close')"></div>
    <div class="modal">
        <h3>Заголовк modal</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, debitis.</p>
    </div>
</template>

<script>
export default {
    emits: ['close'], // emits,
    props: [''], // props,
    data() {
        return {
            name: ''
        }
    },
    mounted() {
        // method usage
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