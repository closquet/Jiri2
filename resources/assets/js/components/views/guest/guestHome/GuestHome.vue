<template>
    <div class="site-content">
        <h1>guest home</h1>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        data() {
            return {
                errors: []
            }
        },
        computed: {
            ...mapGetters({
                getCurrentUser: 'user/getCurrentUser',
            })
        },
        methods: {
            ...mapActions({
                storeCurrentUser: 'user/storeCurrentUser',
            })
        }
    }
</script>