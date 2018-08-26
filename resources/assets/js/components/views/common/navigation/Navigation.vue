<template>
    <div>
        <div class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
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
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Projets
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdown01">
                                <router-link class="dropdown-item" to="/projets/ajouter">Ajouter</router-link>
                                <router-link class="dropdown-item" to="/projets">Tous les projets</router-link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{currentUser.email}}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdown02">
                                <a class="dropdown-item" href="/logout">Se déconnecter</a>
                            </div>
                        </li>
                    </ul>
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
            ...mapState({
                currentUser : state => state.user.currentUser
            }),
        },
    }
</script>