<template>
    <div class="container site-content">
        <Content-header>
            <template slot="title">
                Profile de {{ getStudentFromId(parseInt(this.$route.params.studentId)).name }}
            </template>
        </Content-header>
        <StudentForm :student="getStudentFromId(parseInt(this.$route.params.studentId))"></StudentForm>
    </div>
</template>

<script>
    import ContentHeader from '../../common/contentHeader/ContentHeader';
    import StudentForm from './parts/StudentForm';
    import {mapGetters} from 'vuex';

    export default {
        components:{
            ContentHeader,
            StudentForm,
        },
        computed:{
            ...mapGetters('student', [
                'getStudentFromId'
            ]),
        },
    }
</script>