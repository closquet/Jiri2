<template>
    <div class="root">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import navigation from '../common/navigation/Navigation';
    import router from '../../../router/router';

    export default {
        router,
        components:{
            navigation
        },
    }
</script>