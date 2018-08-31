<template>
    <div class="container site-content">
        <Content-header>
            <template slot="title">
                Nouvel étudiant
            </template>
        </Content-header>
        <StudentForm></StudentForm>
    </div>
</template>

<script>
    import ContentHeader from '../../common/contentHeader/ContentHeader';
    import StudentForm from './parts/StudentForm';

    export default {
        components:{
            ContentHeader,
            StudentForm,
        },
    }
</script>