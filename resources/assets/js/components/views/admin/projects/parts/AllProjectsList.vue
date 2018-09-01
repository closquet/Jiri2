<template>
    <div>
        <section class="mb-5" aria-labelledby="dashboard-current-jury-title">
            <h2 class="mb-3" id="dashboard-current-jury-title" role="heading" aria-level="2">
                Tous les projets
            </h2>
            <div class="card mb-3">
                <div class="card-body">
                    <span class="h5 card-title" role="heading" aria-level="3">Bloc 2</span>
                </div>
                <ul class="list-group list-group-flush">
                    <li v-for="project in getAllB2Projects" class="list-group-item">
                        <router-link :to="'/projets/' + project.id + '/modifier'" title="Modifier" href="#"><font-awesome-icon icon="edit" class="mr-1" /></router-link>
                        {{project.name}}
                    </li>
                </ul>
                <div class="card-body">
                    <span class="h5 card-title" role="heading" aria-level="3">Bloc 3</span>
                </div>
                <ul class="list-group list-group-flush">
                    <li v-for="project in getAllB3Projects" class="list-group-item">
                        <router-link :to="'/projets/' + project.id + '/modifier'" title="Modifier" href="#"><font-awesome-icon icon="edit" class="mr-1" /></router-link>
                        {{project.name}}
                    </li>
                </ul>
            </div>
            <router-link to="/projets/ajouter" class="btn btn-primary">Ajouter</router-link> <a href="#" @click.prevent="$router.go(-1)" class="mr-2 btn btn-link">Retour</a>
        </section>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters('project',[
                'getAllB2Projects',
                'getAllB3Projects',
            ]),
        },
    }
</script>