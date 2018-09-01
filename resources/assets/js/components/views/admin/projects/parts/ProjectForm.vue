<template>
    <div class="row">
        <div class="col-sm-8 col-md-7 col-lg-6 col-xl-5">
            <form @submit="checkForm" action="" method="post">
                <div class="form-group">
                    <label for="name-field">Le nom du projet&nbsp;: </label>
                    <input class="form-control" required v-model="projectForm.name" type="text" name="name" aria-describedby="nameHelp" placeholder="Mon super titre" id="name-field">
                    <small id="nameHelp" class="form-text text-muted"><i>Champ requis.</i></small>
                </div>

                <div class="form-group">
                    <label for="bloc-field">Bloc&nbsp;: </label>
                    <select class="form-control" required v-model="projectForm.bloc" aria-describedby="blocHelp" name="bloc" id="bloc-field">
                        <option :value="2">Bloc 2</option>
                        <option :value="3">Bloc 3</option>
                    </select>
                    <small id="blocHelp" class="form-text text-muted"><i>Champ requis.</i></small>
                </div>

                <div class="form-group">
                    <label for="description-field">Description du projet&nbsp;: </label>
                    <textarea class="form-control" required v-model="projectForm.description" maxlength="200" name="description" rows="3" aria-describedby="descriptionHelp" placeholder="John Doe" id="description-field"></textarea>
                    <small id="descriptionHelp" class="form-text text-muted"><i>Champ requis min 20 max 200 caractères</i></small>
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
    import {mapActions, mapState} from 'vuex';

    export default {
        data(){
            return{
                projectForm:{
                    id: this.project ? this.project.id : null,
                    name: null,
                    bloc: null,
                    description: null,
                },
                errors: [],
                checkFormStatusRepeaterId: null,
                checkFormStatusRepeaterTimer: 0,
            }
        },
        props:[
            'project'
        ],
        computed:{
            ...mapState('global',[
                'formStatus'
            ]),
            ...mapState('project',[
                'projects',
            ]),
        },
        methods:{
            ...mapActions('global',[
                'editFormStatus',
                'checkFormStatusRepeater',
            ]),
            ...mapActions('project',[
                'updateProject',
                'addProject',
            ]),
            formStatusSuccess(){
                this.projectForm = {
                    name: null,
                    bloc: null,
                    description: null,
                };
            },
            formStatusError(){
                this.errors.push('Erreur serveur, veuillez réessayer plus tard.');
            },
            validProjectName(name) {
                const re = /^([0-9a-zéèàêâùïüëA-ZÉÈÀÊÂÙÏÜËŒœÆæ\s]+'?((-?|\s*)?[0-9a-zéèàêâùïüëA-ZÉÈÀÊÂÙÏÜËŒœÆæ\s]+)?)$/;
                return re.test(name);
            },
            checkForm(e){
                e.preventDefault();
                this.errors = [];
                this.projectForm.name = this.projectForm.name.trim();

                if(!this.projectForm.name) {
                    this.errors.push("Titre requis.");
                }else if(!this.validProjectName(this.projectForm.name)) {
                    this.errors.push('Veuillez entrer un nom correct.');
                }

                if(!this.projectForm.description) {
                    this.errors.push("Description requise.");
                }else if(this.projectForm.description.length > 200) {
                    this.errors.push('Description : max 200 caractères.');
                }else if(this.projectForm.description.length < 20) {
                    this.errors.push('Description : min 20 caractères.');
                }

                if(!this.projectForm.bloc) {
                    this.errors.push('Bloc requiss.');
                }

                if(!this.errors.length) {
                    if(this.project){
                        this.updateProject(this.projectForm);
                    }else{
                        this.addProject(this.projectForm);
                        this.checkFormStatusRepeater([this.formStatusSuccess, this.formStatusError]);
                    }
                }else{this.editFormStatus('error');}
            }
        },
        mounted(){
            this.editFormStatus('');
            if(this.project){
                this.projectForm.name = this.project.name;
                this.projectForm.bloc = this.project.bloc;
                this.projectForm.description = this.project.description;
            }
        }
    }
</script>
