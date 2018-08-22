<template>
    <div class="site-content">
        <h1>
            Bonjour {{getCurrentUser.name}} (admin)
        </h1>
        <form @submit="checkAddUserForm" action="" method="post">
            <div>
                <label for="name-field">Nom: </label>
                <input required v-model="userToAdd.name" type="text" name="name" placeholder="Prénom" id="name-field">
            </div>

            <div>
                <label for="email-field">Email: </label>
                <input required v-model="userToAdd.email" type="email" name="email" placeholder="Email" id="email-field">
            </div>

            <div>
                <label for="phone-field">Phone: </label>
                <input v-model="userToAdd.phone" type="tel" name="phone" placeholder="Phone" id="phone-field">
            </div>

            <div>
                <label for="category-field">Catégorie: </label>
                <select required v-model="userToAdd.category" name="category" id="category-field">
                    <option value="1">Professeur</option>
                    <option value="2">Invité</option>
                </select>
            </div>

            <div>
                <label for="isAvailable-field">Est disponible: </label>
                <input v-model="userToAdd.isAvailable" type="checkbox" name="isAvailable:" id="isAvailable-field">
            </div>

            <div>
                <label for="isAdmin-field">Est administateur: </label>
                <input v-model="userToAdd.isAdmin" type="checkbox" name="isAdmin" id="isAdmin-field">
            </div>

            <div>
                <button>Enregistrer</button>
            </div>
        </form>
        <h3>tous les utilisateurs</h3>
        <ul>
            <li v-for="user in getAllUsers">
                <span :class="{userNotAvailable: !user.isAvailable}">{{user.name}}</span> <button @click="toggleUserVisibility(user)">{{availabilityButtonContent(user)}}</button>
            </li>
        </ul>
        <h3>tous les administrateurs</h3>
        <ul>
            <li v-for="user in getAllAdminUsers">
                {{user.name}}
            </li>
        </ul>
        <h3>tous les utilisateurs disponibles</h3>
        <ul>
            <li v-for="user in getAvailableUsers">
                {{user.name}}
            </li>
        </ul>
        <h3>tous les utilisateurs invités</h3>
        <ul>
            <li v-for="user in getAllGuestUsers">
                {{user.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex';

    export default {
        data(){
            return{
                userToAdd:{
                    name:'',
                    category:'1', //1 = teacher, 2 = guest
                    email:'',
                    phone:'',
                    isAdmin:0,
                    isAvailable:0
                },
                errors: []
            }
        },
        computed:{
            ...mapGetters({
                getAllUsers: 'user/getAllUsers',
                getCurrentUser: 'user/getCurrentUser',
                getAllAdminUsers: 'user/getAllAdminUsers',
                getAvailableUsers: 'user/getAvailableUsers',
                getAllGuestUsers: 'user/getAllGuestUsers',
                getUserFromEmail: 'user/getUserFromEmail',
            }),
            ...mapState({
                users : state => state.user.users
            }),
        },
        methods:{
            ...mapActions({
                addUser: 'user/addUser',
                storeCurrentUser: 'user/storeCurrentUser',
                storeAllUsers: 'user/storeAllUsers',
                disableUser: 'user/disableUser',
                enableUser: 'user/enableUser',
                updateUser: 'user/updateUser'
            }),
            availabilityButtonContent(user){
                return user.isAvailable ? 'Désactiver' : 'Activer';
            },
            toggleUserVisibility(user){
                user.isAvailable && this.disableUser(user.id) || this.enableUser(user.id);
            },
            validEmail: function (email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            validUserName: function (name) {
                const re = /^([a-zéèàêâùïüëA-ZÉÈÀÊÂÙÏÜËŒœÆæ\s]+(-?|\s*)[a-zéèàêâùïüëA-ZÉÈÀÊÂÙÏÜËŒœÆæ\s]+)+$/;
                return re.test(name);
            },
            checkAddUserForm(e){
                e.preventDefault();
                this.errors = [];
                this.userToAdd.name = this.userToAdd.name.trim();
                this.userToAdd.email = this.userToAdd.email.trim();

                if(!this.userToAdd.name) {
                    this.errors.push("name required.");
                }else if(!this.validUserName(this.userToAdd.name)) {
                    this.errors.push('Valid name required.');
                }

                if(!this.userToAdd.email) {
                    this.errors.push('Email required.');
                }else if(!this.validEmail(this.userToAdd.email)) {
                    this.errors.push('Valid email required.');
                }else if( this.users.filter(user => user.email === this.userToAdd.email).length ) {
                    this.errors.push('Email already used');
                }



                if(!this.errors.length) {
                    console.log('form ok');
                    this.addUser(this.userToAdd);
                    this.userToAdd = {};
                }else{
                    this.errors.forEach(error => console.log(error));
                }
            }
        },
        mounted(){
            this.storeAllUsers();
            this.storeCurrentUser();
        }
    }
</script>