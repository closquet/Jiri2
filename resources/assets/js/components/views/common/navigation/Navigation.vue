<template>
    <div>
        <div class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <h1 class="navbar-brand site-title mr-auto" role="heading" aria-level="1">
                    <router-link to="/home">
                        Jiri
                    </router-link>
                </h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav ml-auto">
                        <li v-if="currentUser.is_admin" class="nav-item dropdown">
                            <a href="#" class="main-nav__link nav-link dropdown-toggle" :class="$route.path.includes('/utilisateurs') ? 'router-link-active' : ''" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Utilisateurs
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdown02">
                                <router-link class="dropdown-item" to="/utilisateurs/ajouter">Ajouter</router-link>
                                <router-link class="dropdown-item" to="/utilisateurs">Tous les utilisateurs</router-link>
                                <router-link class="dropdown-item" to="/utilisateurs/professeurs">Tous les professeurs</router-link>
                                <router-link class="dropdown-item" to="/utilisateurs/guests">Tous les invités</router-link>
                            </div>
                        </li>
                        <li v-if="currentUser.is_admin" class="nav-item dropdown">
                            <a href="#" class="main-nav__link nav-link dropdown-toggle" :class="$route.path.includes('/jurys') ? 'router-link-active' : ''" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Jurys
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdown04">
                                <router-link class="dropdown-item" to="/jurys/ajouter">Ajouter</router-link>
                                <router-link class="dropdown-item" to="/jurys">Tous les jurys</router-link>
                                <router-link class="dropdown-item" to="/jurys/bloc2">Tous les jurys B2</router-link>
                                <router-link class="dropdown-item" to="/jurys/bloc3">Tous les jurys B3</router-link>
                            </div>
                        </li>
                        <li v-if="currentUser.is_admin" class="nav-item dropdown">
                            <a href="#" class="main-nav__link  nav-link dropdown-toggle" :class="$route.path.includes('/etudiants') ? 'router-link-active' : ''" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Étudiants
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdown03">
                                <router-link class="dropdown-item" to="/etudiants/ajouter">Ajouter</router-link>
                                <router-link class="dropdown-item" to="/etudiants">Tous les étudiants</router-link>
                                <router-link class="dropdown-item" to="/etudiants/bloc2">Tous les étudiants B2</router-link>
                                <router-link class="dropdown-item" to="/etudiants/bloc3">Tous les étudiants B3</router-link>
                            </div>
                        </li>

                        <li v-if="currentUser.is_admin" class="nav-item dropdown">
                            <a href="#" class="main-nav__link nav-link dropdown-toggle" :class="$route.path.includes('/projets') ? 'router-link-active' : ''" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Projets
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdown01">
                                <router-link class="dropdown-item" to="/projets/ajouter">Ajouter</router-link>
                                <router-link class="dropdown-item" to="/projets">Tous les projets</router-link>
                                <router-link class="dropdown-item" to="/projets/bloc2">Tous les projets B2</router-link>
                                <router-link class="dropdown-item" to="/projets/bloc3">Tous les projets B3</router-link>
                            </div>
                        </li>


                        <li class="nav-item dropdown ml-2">
                            <a href="#" class="nav-link dropdown-toggle" id="logout-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <font-awesome-icon class="mr-2" icon="user" />{{currentUser.email}}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="logout-dropdown">
                                <router-link class="dropdown-item" :to="'/utilisateurs/' + currentUser.id + '/modifier'">Mon profil</router-link>
                                <a class="dropdown-item" href="/logout">Se déconnecter</a>
                            </div>
                        </li>
                    </ul>
                    <router-link v-if="currentUser.category !== 3" class="btn btn-outline-success" to="/meetings/créer">Lancer un meeting</router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import router from '../../../../router/router';
    import {mapState} from 'vuex';

    export default {
        router,
        components:{
            //
        },
        computed:{
            ...mapState('user',[
                'currentUser',
            ]),
        },
    }
</script>