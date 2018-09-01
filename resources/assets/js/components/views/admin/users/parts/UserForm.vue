<template>
    <div class="row">
        <div class="col-sm-8 col-md-7 col-lg-6 col-xl-5">
            <form @submit="checkForm" action="" method="post">
                <div class="form-group">
                    <label for="name-field">Nom complet&nbsp;: </label>
                    <input class="form-control" required v-model="userForm.name" type="text" name="name" aria-describedby="nameHelp" placeholder="John Doe" id="name-field">
                    <small id="nameHelp" class="form-text text-muted"><i>Champ requis.</i></small>
                </div>

                <div class="form-group">
                    <label for="email-field">Email&nbsp;: </label>
                    <input class="form-control" required v-model="userForm.email" type="email" name="email" aria-describedby="emailHelp" placeholder="name@mail.be" id="email-field">
                    <small id="emailHelp" class="form-text text-muted"><i>Champ requis.</i></small>
                </div>

                <div class="form-group">
                    <label for="phone-field">Téléphone&nbsp;: </label>
                    <input class="form-control" v-model="userForm.phone" type="tel" name="phone" placeholder="Phone" id="phone-field">
                </div>

                <div class="form-group">
                    <label for="category-field">Catégorie&nbsp;: </label>
                    <select class="form-control" required v-model="userForm.category" aria-describedby="categoryHelp" name="category" id="category-field">
                        <option :value="1">Professeur</option>
                        <option :value="2">Invité</option>
                        <option :value="3">Aucune (admin sans meeting)</option>
                    </select>
                    <small id="categoryHelp" class="form-text text-muted"><i>Champ requis.</i></small>
                </div>

                <div class="form-group">
                    <label for="password-field">Mot de pass&nbsp;: </label>
                    <input class="form-control" v-model="userForm.password" aria-describedby="passwordHelp" minlength="6" type="password" name="password" placeholder="secret" id="password-field">
                    <small v-if="!user" id="passwordHelp" class="form-text text-muted"><i>Champ requis.</i></small>
                </div>

                <div class="form-group">
                    <label for="password_confirmation-field">Confirmer mot de pass&nbsp;: </label>
                    <input class="form-control" v-model="userForm.password_confirmation" minlength="6" aria-describedby="password_confirmationHelp" type="password" name="password_confirmation" placeholder="secret" id="password_confirmation-field">
                    <small v-if="!user" id="password_confirmationHelp" class="form-text text-muted"><i>Champ requis.</i></small>
                </div>

                <div class="form-check">
                    <input class="form-check-input" v-model="userForm.is_available" type="checkbox" name="is_available:" id="is_available-field">
                    <label class="form-check-label" for="is_available-field">Est disponible&nbsp;: </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" v-model="userForm.is_admin" type="checkbox" name="is_admin" id="is_admin-field">
                    <label class="form-check-label" for="is_admin-field">Est administateur&nbsp;: </label>
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
                userForm:{
                    id: this.user ? this.user.id : null,
                    name: null,
                    email: null,
                    phone: null,
                    category: null,
                    password: null,
                    password_confirmation: null,
                    is_available: false,
                    is_admin: false,
                },
                errors: [],
            }
        },
        props:[
            'user'
        ],
        computed:{
            ...mapState('global',[
                'formStatus'
            ]),
            ...mapState('user',[
                'users',
            ]),
        },
        methods:{
            ...mapActions('global',[
                'editFormStatus',
                'checkFormStatusRepeater',
            ]),
            ...mapActions('user',[
                'updateUser',
                'addUser',
            ]),
            formStatusSuccess(){
                this.userForm = {
                    name: null,
                    email: null,
                    phone: null,
                    category: null,
                    password: null,
                    password_confirmation: null,
                    is_available: false,
                    is_admin: false,
                };
            },
            formStatusError(){
                this.errors.push('Erreur serveur, veuillez réessayer plus tard.');
            },
            validEmail: function (email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            validUserName: function (name) {
                const re = /^([a-zéèàêâùïüëA-ZÉÈÀÊÂÙÏÜËŒœÆæ\s]+(-?|\s*)[a-zéèàêâùïüëA-ZÉÈÀÊÂÙÏÜËŒœÆæ\s]+)+$/;
                return re.test(name);
            },
            checkForm(e){
                e.preventDefault();
                this.errors = [];
                this.userForm.name = this.userForm.name.trim();
                this.userForm.email = this.userForm.email.trim();

                if(!this.userForm.name) {
                    this.errors.push("Nom requis.");
                }else if(!this.validUserName(this.userForm.name)) {
                    this.errors.push('Veuillez entrer un nom correct.');
                }

                if( this.user ) {
                    if(this.userForm.password !== this.userForm.password_confirmation) {
                        this.errors.push('Les mots de passe ne correspondent pas.');
                    }
                    if( this.userForm.password && (this.userForm.password.length < 6 || this.userForm.password_confirmation.length < 6) ){
                        this.errors.push('Les mots de passe doivent contenir au moins 6 caractères.');
                    }
                }else{
                    if(!this.userForm.password || !this.userForm.password_confirmation) {
                        this.errors.push("Veuillez entrer un mot de pass et le confirmer.");
                    }
                    if(this.userForm.password !== this.userForm.password_confirmation) {
                        this.errors.push('Les mots de passe ne correspondent pas.');
                    }
                }

                if(!this.userForm.email) {
                    this.errors.push('Email requis.');
                }

                if(!this.validEmail(this.userForm.email)) {
                    this.errors.push('L&rsquo;email n&rsquo;est pas valide.');
                }else if( this.user ) {
                    if( this.userForm.email !== this.user.email && this.users.filter(user => user.email === this.userForm.email).length ) {
                        this.errors.push('Email lié à un compte existant');
                    }
                }else if( this.users.filter(user => user.email === this.userForm.email).length ) {
                    this.errors.push('Email lié à un compte existant');
                }

                if(!this.userForm.category) {
                    this.errors.push('Catégorie requise.');

                }

                if(!this.errors.length) {
                    if(this.user){
                        this.updateUser(this.userForm);
                    }else{
                        this.addUser(this.userForm);
                        this.checkFormStatusRepeater([this.formStatusSuccess, this.formStatusError]);
                    }
                }else{this.editFormStatus('error');}
            }  
        },
        mounted(){
            this.editFormStatus('');
            if(this.user){
                this.userForm.name = this.user.name;
                this.userForm.email = this.user.email;
                this.userForm.phone = this.user.phone;
                this.userForm.category = this.user.category;
                this.userForm.is_available = this.user.is_available;
                this.userForm.is_admin = this.user.is_admin;
            }
        }
    }
</script>
