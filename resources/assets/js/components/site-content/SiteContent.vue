<template>
    <div class="site-content">
        <form  action="" method="post">
            <div>
                <label for="name-field">Nom: </label>
                <input type="text" name="lastname" placeholder="Nom" id="name-field">
            </div>

            <div>
                <label for="firstname-field">Prénom: </label>
                <input type="text" name="firstname" placeholder="Prénom" id="firstname-field">
            </div>

            <div>
                <label for="email-field">Email: </label>
                <input type="email" name="email" placeholder="Email" id="email-field">
            </div>

            <div>
                <label for="phone-field">Phone: </label>
                <input type="tel" name="phone" placeholder="Phone" id="phone-field">
            </div>

            <div>
                <label for="category-field">Catégorie: </label>
                <select name="category" id="category-field">
                    <option value="1">Professeur</option>
                    <option value="2">Invité</option>
                </select>
            </div>

            <div>
                <label for="isadmin-field">Est administateur: </label>
                <input type="checkbox" name="isadmin" id="isadmin-field">
            </div>

            <div>
                <button @click.prevent="saveUser">Enregistrer</button>
            </div>
        </form>
        <h3>tous les utilisateurs</h3>
        <ul>
            <li v-for="user in getAllUsers">
                {{user.firstname}}
            </li>
        </ul>
        <h3>tous les administrateurs</h3>
        <ul>
            <li v-for="user in getAllAdminUsers">
                {{user.firstname}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import store from '../../store';
    export default {
        data(){
            return{
                adminUsers: null
            }
        },
        store,
        computed:{
            ...mapGetters({
                getAllUsers: 'user/getAllUsers',
                getAllAdminUsers: 'user/getAllAdminUsers',
            })
        },
        methods:{
            ...mapActions({
                addUser: 'user/addUser',
                storeCurrentUser: 'user/storeCurrentUser',
                storeAllUsers: 'user/storeAllUsers',
                disableUser: 'user/disableUser',
                enableUser: 'user/enableUser',
                updateUser: 'user/updateUser'
            })
        },
        mounted(){
            this.storeAllUsers();
        }
    }
</script>
