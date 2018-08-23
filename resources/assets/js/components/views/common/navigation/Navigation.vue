<template>
    <ul class="site-content">
        <li><router-link to="/home">home</router-link></li>
        <li><router-link to="/testc">common link</router-link></li>

        <li v-if="currentUser.is_admin"><router-link to="/testa">admin link</router-link></li>
        <li v-if="!currentUser.is_admin"><router-link to="/testg">guest link</router-link></li>
    </ul>
</template>

<script>
    import router from '../../../../router/router';
    import {mapState} from 'vuex';

    export default {
        router,
        components:{
            //
        },
        computed:{
            ...mapState({
                currentUser : state => state.user.currentUser
            }),
        },
    }
</script>