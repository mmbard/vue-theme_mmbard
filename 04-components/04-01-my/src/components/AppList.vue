<template>
<div class="card">
    <ul>
        <li v-for="item,idx in 5">
            <slot :iter="item" :idx="idx">{{ item }}</slot>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>