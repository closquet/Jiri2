<template>
    <div class="container site-content">
        <content-header>
            <template slot="title">
                Nouveau projet
            </template>
        </content-header>
        <project-form></project-form>
    </div>
</template>

<script>
    import ContentHeader from '../../common/contentHeader/ContentHeader';
    import ProjectForm from './parts/ProjectForm';

    export default {
        components:{
            ContentHeader,
            ProjectForm,
        },
    }
</script>