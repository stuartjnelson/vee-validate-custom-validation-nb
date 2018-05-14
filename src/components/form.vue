<template lang="html">
    <h1>{{ getForm }}</h1>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters(['getForm'])
        }
    }
</script>

<style lang="scss">
</style>
