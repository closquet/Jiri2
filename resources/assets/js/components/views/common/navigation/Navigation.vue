<template>
    <div class="nav-scroller bg-white shadow-sm">
        <nav aria-labelledby="main-nav-title" role="navigation" class="container nav nav-underline">
            <h2 id="main-nav-title" role="heading" aria-level="2" class="sr-only">
                Menu Principal
            </h2>

            <router-link class="nav-link" to="/home">home</router-link>
            <router-link class="nav-link" to="/testc">common link</router-link>

            <router-link v-if="currentUser.is_admin" class="nav-link" to="/testa">testa</router-link>

            <router-link v-if="!currentUser.is_admin" class="nav-link" to="/testg">testg</router-link>
        </nav>
    </div>
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