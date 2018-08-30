<template>
<div>
    <div v-if="!aJuryIsActive" class="row mb-4">
        <div class="col-sm-6 col-lg-4">
            <form @submit.prevent="aJuryIsActive = !aJuryIsActive">
                <div class="form-group">
                    <label for="jurySelectField">Démarrer un jury&nbsp;?</label>
                    <select class="form-control" id="jurySelectField" v-model="selectedJury">
                        <option value="36">B3 septembre 2018</option>
                        <option value="37">B2 septembre 2018</option>
                    </select>
                </div>
                <button class="btn btn-primary">
                    Lancer le jury&nbsp;!
                </button>
            </form>
        </div>
    </div>

    <section v-if="aJuryIsActive" class="mb-5" aria-labelledby="dashboard-current-jury-title">
        <h2 class="mb-3" id="dashboard-current-jury-title" role="heading" aria-level="2">
            Jury en cours
        </h2>
        <div class="card">
            <div class="card-body">
                <span class="h5 card-title" role="heading" aria-level="3">Étudiants présents</span>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-warning">
                    <a title="Déplacer dans absents" href="#"><font-awesome-icon icon="minus-circle" class="mr-1" /></a> Marc Ablé - évalué 2 fois (en meeting avec Dominique Vilain)
                </li>
                <li class="list-group-item  list-group-item-success">
                    <a title="Déplacer dans absents" href="#"><font-awesome-icon icon="minus-circle" class="mr-1" /></a> Louis Parme - évalué 1 fois (libre)
                </li>
                <li class="list-group-item  list-group-item-success">
                    <a title="Déplacer dans absents" href="#"><font-awesome-icon icon="minus-circle" class="mr-1" /></a> Roger Iglam - évalué 1 fois (libre)
                </li>
                <li class="list-group-item list-group-item-warning">
                    <a title="Déplacer dans absents" href="#"><font-awesome-icon icon="minus-circle" class="mr-1" /></a> Pierre Lagaffe - évalué 1 fois (en meeting avec Myriam Dupont)
                </li>
                <li class="list-group-item  list-group-item-primary">
                    <a title="Déplacer dans absents" href="#"><font-awesome-icon icon="minus-circle" class="mr-1" /></a> Silvie Durand - examen terminé
                </li>
            </ul>
            <div class="card-body">
                <span class="h5 card-title" role="heading" aria-level="3">Étudiants absents</span>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-dark">
                    <a title="Déplacer dans présents" href="#"><font-awesome-icon icon="plus-circle" class="mr-1" /></a> Marc Ablé
                </li>
                <li class="list-group-item list-group-item-dark">
                    <a title="Déplacer dans présents" href="#"><font-awesome-icon icon="plus-circle" class="mr-1" /></a> Louis Parme
                </li>
            </ul>
        </div>
        <button class="btn btn-danger mt-3" @click="aJuryIsActive = !aJuryIsActive">
            Cloturer le jury&nbsp;!
        </button>
    </section>
</div>
</template>

<script>
    export default {
        data(){
            return{
                aJuryIsActive: false,
                selectedJury: '',
            }
        },
    }
</script>