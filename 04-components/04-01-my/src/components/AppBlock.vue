<template>
    <div class="card">
        <h3>Text</h3>
        <slot name="header"></slot>
        <slot>No text</slot>
        <div v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    
</style>