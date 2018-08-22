<template>
    <div class="root">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import navigation from './navigation/Navigation';
    import router from './navigation/router'

    export default {
        router,
        components:{
            navigation
        }
    }
</script>