<template>
    <div class="container site-content">
        <content-header>
            <template slot="title">
                Gestion des projets <router-link to="/projets/ajouter" class="btn btn-primary">Ajouter</router-link>
            </template>
            <template slot="content">
                <p>
                    Vous pouvez choisir de les afficher <router-link to="/projets">tous</router-link>, de n'afficher que les <router-link to="/projets/bloc2">Bloc 2</router-link>, ou encore, que les <router-link to="/projets/bloc3">Bloc 3</router-link>.
                </p>
            </template>
        </content-header>

        <router-view></router-view>
    </div>
</template>

<script>
    import ContentHeader from '../../common/contentHeader/ContentHeader'

    export default {
        components:{
            ContentHeader,
        },
    }
</script>