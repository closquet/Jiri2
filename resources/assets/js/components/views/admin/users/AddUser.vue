<template>
    <div class="container site-content">
        <content-header>
            <template slot="title">
                Nouvel utilisateur
            </template>
        </content-header>
        <user-form></user-form>
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