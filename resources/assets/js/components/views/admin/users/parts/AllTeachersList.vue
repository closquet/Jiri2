<template>
    <div>
        <section class="mb-5" aria-labelledby="dashboard-current-jury-title">
            <h2 class="mb-3" id="dashboard-current-jury-title" role="heading" aria-level="2">
                Les professeurs
            </h2>
            <div class="card">
                <div class="card-body">
                    <span class="h5 card-title" role="heading" aria-level="3">Disponibles</span>
                </div>
                <ul class="list-group list-group-flush">
                    <li v-for="user in getAvailableTeachers" class="list-group-item">
                        <a @click.prevent="disableUser(user.id)" title="Déplacer dans indisponible" href="#"><font-awesome-icon icon="minus-circle" class="mr-1" /></a>
                        <router-link :to="'/utilisateurs/' + user.id + '/modifier'" title="Modifier" href="#"><font-awesome-icon icon="edit" class="mr-1" /></router-link>
                        {{user.name}} - {{user.email}}{{user.is_admin ? ' - ADMINISTRATEUR' : ''}}
                    </li>
                </ul>
                <div class="card-body">
                    <span class="h5 card-title" role="heading" aria-level="3">Indisponible</span>
                </div>
                <ul class="list-group list-group-flush">
                    <li v-for="user in getUnavailableTeachers" class="list-group-item list-group-item-dark">
                        <a @click.prevent="enableUser(user.id)" title="Déplacer dans disponible" href="#"><font-awesome-icon icon="plus-circle" class="mr-1" /></a>
                        <router-link :to="'/utilisateurs/' + user.id + '/modifier'" title="Modifier" href="#"><font-awesome-icon icon="edit" class="mr-1" /></router-link>
                        {{user.name}} - {{user.email}}{{user.is_admin ? ' - ADMINISTRATEUR' : ''}}
                    </li>
                </ul>
            </div>
            <router-link to="/utilisateurs/ajouter" class="btn btn-primary">Ajouter</router-link> <a href="#" @click.prevent="$router.go(-1)" class="mr-2 mt-2 btn btn-link">Retour</a>
        </section>
    </div>
</template>

<script>
    import { mapGetters, mapActions} from 'vuex';

    export default {
        computed: {
            ...mapGetters('user',[
                'getAvailableTeachers',
                'getUnavailableTeachers',
            ]),
        },
        methods:{
            ...mapActions('user',[
                'disableUser',
                'enableUser',
            ]),
        },
    }
</script>