<template>
    <div class="container site-content">
        <content-header>
            <template slot="title">
                Modifier le projet
            </template>
        </content-header>
        <student-project-form></student-project-form>
    </div>
</template>

<script>
    import ContentHeader from '../../common/contentHeader/ContentHeader';
    import StudentProjectForm from './parts/StudentProjectForm';
    import {mapGetters, mapActions, mapState} from 'vuex';

    export default {
        components:{
            ContentHeader,
            StudentProjectForm,
        },
        computed:{
            ...mapGetters('student', [
                'getStudentFromId',
            ]),
            ...mapState('student',[
                'studentToUpdate',
            ])
        },
        methods:{
            ...mapActions('student',[
                'storeStudentToUpdate',
            ])
        },
        beforeMount(){
            this.storeStudentToUpdate(this.getStudentFromId(parseInt(this.$route.params.studentId)));
        }
    }
</script>