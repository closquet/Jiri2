<template>
    <div class="container site-content">
        <Content-header>
            <template slot="title">
                Nouvel utilisateur
            </template>
        </Content-header>
        <UserForm></UserForm>
    </div>
</template>

<script>
    import ContentHeader from '../../common/contentHeader/ContentHeader';
    import UserForm from './parts/UserForm';

    export default {
        components:{
            ContentHeader,
            UserForm,
        },
    }
</script>