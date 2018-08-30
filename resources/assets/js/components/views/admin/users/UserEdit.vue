<template>
    <div class="container site-content">
        <Content-header>
            <template slot="title">
                Profile de {{ getUserFromId(parseInt(this.$route.params.userId)).name }}
            </template>
        </Content-header>
        <UserForm :user="getUserFromId(parseInt(this.$route.params.userId))"></UserForm>
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