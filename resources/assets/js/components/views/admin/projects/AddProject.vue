<template>
    <div class="container site-content">
        <Content-header>
            <template slot="title">
                Nouveau projet
            </template>
        </Content-header>
        <ProjectForm></ProjectForm>
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