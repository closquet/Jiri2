<template>
    <div class="row">
        <div class="col-sm-8 col-md-7 col-lg-6 col-xl-5">
            <form @submit="checkForm" action="" method="post">
                <div class="form-group">
                    <label for="project-field">Projet&nbsp;: </label>
                    <select class="form-control" required v-model="studentProjectForm.project_id" aria-describedby="projectHelp" name="project_id" id="project-field">
                        <option v-for="project in projectsAvailable" :value="project.id">{{project.name}}</option>
                    </select>
                    <small id="projectHelp" class="form-text text-muted"><i>Champ requis.</i></small>
                </div>

                <div class="form-group">
                    <label for="site_url-field">URL du site&nbsp;: </label>
                    <input class="form-control" required v-model="studentProjectForm.site_url" type="url" name="site_url" aria-describedby="site_urlHelp" placeholder="http://..." id="site_url-field">
                    <small id="site_urlHelp" class="form-text text-muted"><i>Champ requis.</i></small>
                </div>

                <div class="form-group">
                    <label for="site_account-field">compte utilisateur du site&nbsp;: </label>
                    <input class="form-control" v-model="studentProjectForm.site_account" type="text" name="site_account" id="site_account-field">
                </div>

                <div class="form-group">
                    <label for="site_passwor-field">mot de passe du site&nbsp;: </label>
                    <input class="form-control" v-model="studentProjectForm.site_password" type="text" name="site_password" id="site_passwor-field">
                </div>

                <div class="form-group">
                    <label for="github_url-field">URL du dépôt Github&nbsp;: </label>
                    <input class="form-control" required v-model="studentProjectForm.github_url" type="url" name="github_url" aria-describedby="github_urlHelp" placeholder="http://..." id="github_url-field">
                    <small id="github_urlHelp" class="form-text text-muted"><i>Champ requis.</i></small>
                </div>

                <div class="form-check">
                    <input class="form-check-input" v-model="studentProjectForm.is_available" type="checkbox" name="is_available:" id="is_available-field">
                    <label class="form-check-label" for="is_available-field">Est disponible&nbsp;: </label>
                </div>

                <div>
                    <button class="mr-2 mt-3 btn btn-primary">Enregistrer
                        <font-awesome-icon v-if="formStatus === 'success'" icon="thumbs-up" class="ml-1" />
                        <font-awesome-icon v-if="formStatus === 'error'" icon="thumbs-down" class="ml-1" />
                        <font-awesome-icon v-if="formStatus === 'loading'" icon="spinner" class="fa-pulse ml-1" />
                    </button>
                    <a href="#" @click.prevent="$router.go(-1)" class="mr-2 mt-2 btn btn-link">Retour</a>
                </div>
                <div class="mt-3 alert alert-danger" v-if="errors.length">
                    <div v-for="error in errors">
                        {{error}}
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex';

    export default {
        data(){
            return{
                studentProjectForm:{
                    id: null,
                    student_id: null,
                    project_id: null,
                    site_url: null,
                    site_account: null,
                    site_password: null,
                    github_url: null,
                    is_available: 0,
                },
                errors: [],
                projectsAvailable:null,
            }
        },
        computed:{
            ...mapState('global',[
                'formStatus'
            ]),
            ...mapGetters('project',[
                'getAllB2Projects',
                'getAllB3Projects',
            ]),
            ...mapGetters('student',[
                'getStudentProjectFromId',
            ]),
            ...mapState('student',[
                'studentToUpdate',
            ]),
        },
        methods:{
            ...mapActions('global',[
                'editFormStatus',
                'checkFormStatusRepeater',
            ]),
            ...mapActions('student',[
                'updateStudentProject',
                'addStudentProject',
            ]),
            formStatusSuccess(){
                    this.studentProjectForm.project_id = null;
                    this.studentProjectForm.site_url = null;
                    this.studentProjectForm.site_account = null;
                    this.studentProjectForm.site_password = null;
                    this.studentProjectForm.github_url = null;
                    this.studentProjectForm.is_available = 0;
            },
            formStatusError(){
                this.errors.push('Erreur serveur, veuillez réessayer plus tard.');
            },
            checkForm(e){
                e.preventDefault();
                this.errors = [];

                if(!this.studentProjectForm.site_url) {
                    this.errors.push("URL du site requise.");
                }

                if(!this.studentProjectForm.github_url) {
                    this.errors.push('URL dépôt Github requise.');
                }

                if(!this.studentProjectForm.project_id) {
                    this.errors.push('Veuillez choisir un projet.');

                }

                if(!this.errors.length) {
                    if(this.$route.name === 'StudentProjectEdit'){
                        this.updateStudentProject(this.studentProjectForm);
                    }else{
                        this.addStudentProject(this.studentProjectForm);
                        this.checkFormStatusRepeater([this.formStatusSuccess, this.formStatusError]);
                    }
                }
            }
        },
        beforeMount(){
            this.editFormStatus('');
            this.studentToUpdate.bloc === 2 ? this.projectsAvailable = this.getAllB2Projects : this.projectsAvailable = this.getAllB3Projects;
            this.studentProjectForm.student_id = this.$route.params.studentId;

            if(this.$route.name === 'StudentProjectEdit'){
                const project = this.getStudentProjectFromId(parseInt(this.$route.params.studentId), parseInt(this.$route.params.projectId));
                this.studentProjectForm.id = project.pivot.id;
                this.studentProjectForm.student_id = project.pivot.student_id;
                this.studentProjectForm.project_id = project.pivot.project_id;
                this.studentProjectForm.site_url = project.pivot.site_url;
                this.studentProjectForm.site_account = project.pivot.site_account;
                this.studentProjectForm.site_password = project.pivot.site_password;
                this.studentProjectForm.github_url = project.pivot.github_url;
                this.studentProjectForm.is_available = project.pivot.is_available;

            }
        }
    }
</script>
