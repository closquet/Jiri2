<template>
    <div class="container site-content">
        <content-header>
            <template slot="title">
                Profile de {{ getUserFromId(parseInt(this.$route.params.userId)).name }}
            </template>
        </content-header>
        <user-form :user="getUserFromId(parseInt(this.$route.params.userId))"></user-form>
    </div>
</template>

<script>
    import ContentHeader from '../../common/contentHeader/ContentHeader';
    import UserForm from './parts/UserForm';
    import {mapGetters} from 'vuex';

    export default {
        components:{
            ContentHeader,
            UserForm,
        },
        computed:{
            ...mapGetters('user', [
                'getUserFromId'
            ]),
        },
    }
</script>