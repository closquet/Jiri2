<template>
    <div class="container site-content">
        <Content-header>
            <template slot="title">
                Projet {{ getProjectFromId(parseInt(this.$route.params.projectId)).name }}
            </template>
        </Content-header>
        <ProjectForm :project="getProjectFromId(parseInt(this.$route.params.projectId))"></ProjectForm>
    </div>
</template>

<script>
    import ContentHeader from '../../common/contentHeader/ContentHeader';
    import ProjectForm from './parts/ProjectForm';
    import {mapGetters} from 'vuex';

    export default {
        components:{
            ContentHeader,
            ProjectForm,
        },
        computed:{
            ...mapGetters('project', [
                'getProjectFromId'
            ]),
        },
    }
</script>