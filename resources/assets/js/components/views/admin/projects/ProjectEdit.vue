<template>
    <div class="container site-content">
        <content-header>
            <template slot="title">
                Projet {{ getProjectFromId(parseInt(this.$route.params.projectId)).name }}
            </template>
        </content-header>
        <project-form :project="getProjectFromId(parseInt(this.$route.params.projectId))"></project-form>
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