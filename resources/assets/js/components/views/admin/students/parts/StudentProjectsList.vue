<template>
    <section class="mb-5 mt-3" aria-labelledby="student-project-list-title">
        <h2 class="mb-3" id="student-project-list-title" role="heading" aria-level="2">
            Ses projets <router-link :to="'/etudiants/' + studentToUpdate.id + '/projets/ajouter'" class="btn btn-primary">Ajouter des projets</router-link>
        </h2>
        <div class="card mb-3">
            <ul v-if="studentToUpdate.projects" class="list-group list-group-flush">
                <li v-for="project in studentToUpdate.projects" class="list-group-item">
                    <router-link :to="'/etudiants/' + studentToUpdate.id + '/projets/' + project.pivot.id + '/modifier'" title="Modifier" href="#"><font-awesome-icon icon="edit" class="mr-1" /></router-link>
                    {{project.name}}
                </li>

            </ul>
            <p v-if="!studentToUpdate.projects.length" class="list-group-item">
                Aucun projets enregistré.
            </p>
        </div>
    </section>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        computed:{
            ...mapState('student',[
                'studentToUpdate',
            ]),
        },
    }
</script>