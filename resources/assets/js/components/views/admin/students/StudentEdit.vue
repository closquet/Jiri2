<template>
    <div class="container site-content">
        <content-header>
            <template slot="title">
                Profile de {{studentToUpdate.name}}
            </template>
        </content-header>
        <student-form></student-form>
    </div>
</template>

<script>
    import ContentHeader from '../../common/contentHeader/ContentHeader';
    import StudentForm from './parts/StudentForm';
    import {mapGetters, mapActions, mapState} from 'vuex';

    export default {
        components:{
            ContentHeader,
            StudentForm,
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