<template>
    <app-form></app-form>
</template>

<script>
    import Form from '@/components/form.vue'

    export default {
        components: {
            appForm: Form
        }
    }
</script>

<style lang="scss">
// ==========================================================================
//    GENERAL
// ==========================================================================
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    font-family: Arial, sans-serif;
    font-size: 18px;
}
</style>
