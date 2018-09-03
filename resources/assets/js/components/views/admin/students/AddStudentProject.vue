<template>
    <div class="container site-content">
        <content-header>
            <template slot="title">
                Ajouter un projet à l'étudiant
            </template>
        </content-header>
        <student-project-form></student-project-form>
    </div>
</template>

<script>
    import ContentHeader from '../../common/contentHeader/ContentHeader';
    import StudentProjectForm from './parts/StudentProjectForm';

    export default {
        components:{
            ContentHeader,
            StudentProjectForm,
        }
    }
</script>