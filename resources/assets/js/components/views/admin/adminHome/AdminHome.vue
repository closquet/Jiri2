<template>
    <div class="container site-content">
        <Content-header>
            <template slot="title">
                Dashboard Jiri <small>Administrateur</small>
            </template>
            <template slot="content">
                <p>
                    Bonjour {{currentUser.name}}, bienvenue sur Jiri, vous êtes connecté avec un compte administrateur.
                    Dés lors, vous avez accès, depuis le menu de navigation, à toutes la gestion de l'application.
                </p>
                <p>
                    Vous pouvez aussi <router-link class="" to="/meetings/créer">Lancer un meeting</router-link> avec un étudiant afin d'évaluer ses projets.
                </p>
            </template>
        </Content-header>

        <Jury-control></Jury-control>

        <section class="mb-5" aria-labelledby="dashboard-summary-title">
            <h2 class="mb-3" id="dashboard-summary-title" role="heading" aria-level="2">
                récapitulatif des données
            </h2>
            <div class="row">
                <div class="col-md-6 col-lg-5 col-xl-4">
                    <h3 class="h5" role="heading" aria-level="3">Utilisateurs</h3>
                    <div class="row mb-3">
                        <div class="col-12">
                            Utilisateurs&nbsp;: {{getAllUsersNoSupAdmin.length}} ({{getAvailableUsersNoSupAdmin.length}} disponibles) - <router-link class="" to="/utilisateurs">Voir la liste</router-link>
                        </div>
                        <div class="col-12">
                            Professeur&nbsp;: {{getAllTeacherUsers.length}} ({{getAvailableTeachers.length}} disponibles) - <router-link class="" to="/utilisateurs/professeurs">Voir la liste</router-link>
                        </div>
                        <div class="col-12">
                            Guest&nbsp;: {{getAllGuestUsers.length}} ({{getAvailableGuests.length}} disponibles) - <router-link class="" to="/utilisateurs/guests">Voir la liste</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3 class="h5" role="heading" aria-level="3">Étudiants</h3>
                    <div class="row mb-3">
                        <div class="col-12">
                            Étudiants&nbsp;: {{getAllStudents.length}} ({{getAvailableStudents.length}} disponibles) - <router-link class="" to="/etudiants">Voir la liste</router-link>
                        </div>
                        <div class="col-12">
                            Étudiants B2&nbsp;: {{getAllB2Students.length}} ({{getAvailableB2.length}} disponibles) - <router-link class="" to="/etudiants/bloc2">Voir la liste</router-link>
                        </div>
                        <div class="col-12">
                            Étudiants B3&nbsp;: {{getAllB3Students.length}} ({{getAvailableB3.length}} disponibles) - <router-link class="" to="/etudiants/bloc3">Voir la liste</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 col-lg-5 col-xl-4">
                    <h3 class="h5" role="heading" aria-level="3">Jurys</h3>
                    <div class="row mb-3">
                        <div class="col-12">
                            Jurys&nbsp;: 4 (2 en cours) - <router-link class="" to="/jurys">Voir la liste</router-link>
                        </div>
                        <div class="col-12">
                            Jurys B2&nbsp;: 2 (1 en cours) - <router-link class="" to="/jurys/b2">Voir la liste</router-link>
                        </div>
                        <div class="col-12">
                            Jurys B3&nbsp;: 2 (1 en cours) - <router-link class="" to="/jurys/b3">Voir la liste</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3 class="h5" role="heading" aria-level="3">Projets</h3>
                    <div class="row mb-3">
                        <div class="col-12">
                            Projets&nbsp;: 5 - <router-link class="" to="/projets">Voir la liste</router-link>
                        </div>
                        <div class="col-12">
                            Projets B2&nbsp;: 3 - <router-link class="" to="/projets/b2">Voir la liste</router-link>
                        </div>
                        <div class="col-12">
                            Projets B3&nbsp;: 2 - <router-link class="" to="/projets/b3">Voir la liste</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex';
    import JuryControl from '../parts/JuryControl';
    import ContentHeader from '../../common/contentHeader/ContentHeader';

    export default {
        computed:{
            ...mapState('user',[
                'currentUser',
                'users',
            ]),
            ...mapState('student',[
                'students',
            ]),
            ...mapGetters('student',[
                'getAllStudents',
                'getAllB2Students',
                'getAllB3Students',
                'getAvailableStudents',
                'getAvailableB2',
                'getAvailableB3',
            ]),
            ...mapGetters('user',[
                'getAllUsersNoSupAdmin',
                'getAllTeacherUsers',
                'getAllGuestUsers',
                'getAvailableUsersNoSupAdmin',
                'getAvailableGuests',
                'getAvailableTeachers',
            ]),
        },
        components:{
            ContentHeader,
            JuryControl,
        },
        methods:{
            ...mapActions('student',[
                'storeAllStudents',
            ]),
            ...mapActions('user',[
                'storeAllUsers',
            ]),
        },
        beforeMount(){
            this.storeAllStudents();
            this.storeAllUsers();
        },
    }
</script>