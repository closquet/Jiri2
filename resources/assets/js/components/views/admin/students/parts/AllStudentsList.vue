<template>
    <div>
        <section class="mb-5" aria-labelledby="dashboard-current-jury-title">
            <h2 class="mb-3" id="dashboard-current-jury-title" role="heading" aria-level="2">
                Tous les étudiants
            </h2>
            <div class="card mb-3">
                <div class="card-body">
                    <span class="h5 card-title" role="heading" aria-level="3">Disponibles</span>
                </div>
                <ul class="list-group list-group-flush">
                    <li v-for="student in getAvailableStudents" class="list-group-item">
                        <a @click.prevent="disableStudent(student.id)" title="Déplacer dans indisponible" href="#"><font-awesome-icon icon="minus-circle" class="mr-1" /></a>
                        <router-link :to="'/etudiants/' + student.id + '/modifier'" title="Modifier" href="#"><font-awesome-icon icon="edit" class="mr-1" /></router-link>
                        {{student.name}} - {{student.email}} - Bloc {{student.bloc}}
                    </li>
                </ul>
                <div class="card-body">
                    <span class="h5 card-title" role="heading" aria-level="3">Indisponible</span>
                </div>
                <ul class="list-group list-group-flush">
                    <li v-for="student in getUnavailableStudents" class="list-group-item list-group-item-dark">
                        <a @click.prevent="enableStudent(student.id)" title="Déplacer dans disponible" href="#"><font-awesome-icon icon="plus-circle" class="mr-1" /></a>
                        <router-link :to="'/etudiants/' + student.id + '/modifier'" title="Modifier" href="#"><font-awesome-icon icon="edit" class="mr-1" /></router-link>
                        {{student.name}} - {{student.email}} - Bloc {{student.bloc}}
                    </li>
                </ul>
            </div>
            <router-link to="/etudiants/ajouter" class="btn btn-primary">Ajouter</router-link> <a href="#" @click.prevent="$router.go(-1)" class="mr-2 btn btn-link">Retour</a>
        </section>
    </div>
</template>

<script>
    import { mapGetters, mapActions} from 'vuex';

    export default {
        computed: {
            ...mapGetters('student',[
                'getAvailableStudents',
                'getUnavailableStudents',
            ]),
        },
        methods:{
            ...mapActions('student',[
                'disableStudent',
                'enableStudent',
            ]),
        },
    }
</script>