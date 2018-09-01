<template>
    <div class="row">
        <div class="col-sm-8 col-md-7 col-lg-6 col-xl-5">
            <form @submit="checkForm" action="" method="post">
                <div class="form-group">
                    <label for="name-field">Nom complet&nbsp;: </label>
                    <input class="form-control" required v-model="studentForm.name" type="text" name="name" aria-describedby="nameHelp" placeholder="John Doe" id="name-field">
                    <small id="nameHelp" class="form-text text-muted"><i>Champ requis.</i></small>
                </div>

                <div class="form-group">
                    <label for="email-field">Email&nbsp;: </label>
                    <input class="form-control" required v-model="studentForm.email" type="email" name="email" aria-describedby="emailHelp" placeholder="name@mail.be" id="email-field">
                    <small id="emailHelp" class="form-text text-muted"><i>Champ requis.</i></small>
                </div>

                <div class="form-group">
                    <label for="phone-field">Téléphone&nbsp;: </label>
                    <input class="form-control" v-model="studentForm.phone" type="tel" name="phone" placeholder="Phone" id="phone-field">
                </div>

                <div class="form-group">
                    <label for="bloc-field">Bloc&nbsp;: </label>
                    <select class="form-control" required v-model="studentForm.bloc" aria-describedby="blocHelp" name="bloc" id="bloc-field">
                        <option :value="2">Bloc 2</option>
                        <option :value="3">Bloc 3</option>
                    </select>
                    <small id="blocHelp" class="form-text text-muted"><i>Champ requis.</i></small>
                </div>

                <div class="form-check">
                    <input class="form-check-input" v-model="studentForm.is_available" type="checkbox" name="is_available:" id="is_available-field">
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
    import {mapActions, mapState} from 'vuex';

    export default {
        data(){
            return{
                studentForm:{
                    id: this.student ? this.student.id : null,
                    name: null,
                    email: null,
                    phone: null,
                    bloc: null,
                    is_available: 0,
                },
                errors: [],
            }
        },
        props:[
            'student'
        ],
        computed:{
            ...mapState('global',[
                'formStatus'
            ]),
            ...mapState('student',[
                'students',
            ]),
        },
        methods:{
            ...mapActions('global',[
                'editFormStatus',
                'checkFormStatusRepeater',
            ]),
            ...mapActions('student',[
                'updateStudent',
                'addStudent',
            ]),
            formStatusSuccess(){
                this.studentForm = {
                    name: null,
                    email: null,
                    phone: null,
                    bloc: null,
                    is_available: 0,
                };
            },
            formStatusError(){
                this.errors.push('Erreur serveur, veuillez réessayer plus tard.');
            },
            validEmail: function (email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            validStudentName: function (name) {
                const re = /^([a-zéèàêâùïüëA-ZÉÈÀÊÂÙÏÜËŒœÆæ\s]+(-?|\s*)[a-zéèàêâùïüëA-ZÉÈÀÊÂÙÏÜËŒœÆæ\s]+)+$/;
                return re.test(name);
            },
            checkForm(e){
                e.preventDefault();
                this.errors = [];
                this.studentForm.name = this.studentForm.name.trim();
                this.studentForm.email = this.studentForm.email.trim();

                if(!this.studentForm.name) {
                    this.errors.push("Nom requis.");
                }else if(!this.validStudentName(this.studentForm.name)) {
                    this.errors.push('Veuillez entrer un nom correct.');
                }

                if(!this.studentForm.email) {
                    this.errors.push('Email requis.');
                }

                if(!this.validEmail(this.studentForm.email)) {
                    this.errors.push('L&rsquo;email n&rsquo;est pas valide.');

                }else if( this.student ) {
                    if( this.studentForm.email !== this.student.email && this.students.filter(student => student.email === this.studentForm.email).length ) {
                        this.errors.push('Email lié à un compte existant');
                    }
                }else if( this.students.filter(student => student.email === this.studentForm.email).length ) {
                    this.errors.push('Email lié à un compte existant');
                }

                if(!this.studentForm.bloc) {
                    this.errors.push('Bloc requiss.');

                }

                if(!this.errors.length) {
                    if(this.student){
                        this.updateStudent(this.studentForm);
                    }else{
                        this.addStudent(this.studentForm);
                        this.checkFormStatusRepeater([this.formStatusSuccess, this.formStatusError]);
                    }
                }
            }  
        },
        mounted(){
            this.editFormStatus('');
            if(this.student){
                this.studentForm.name = this.student.name;
                this.studentForm.email = this.student.email;
                this.studentForm.phone = this.student.phone;
                this.studentForm.bloc = this.student.bloc;
                this.studentForm.is_available = this.student.is_available;
            }
        }
    }
</script>
