<template>
    <div class="container site-content">
        <content-header>
            <template slot="title">
                Nouvel étudiant
            </template>
        </content-header>
        <student-form></student-form>
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