<template>
    <div class="container site-content">
        <content-header>
            <template slot="title">
                Gestion des utilisateurs <router-link to="/utilisateurs/ajouter" class="btn btn-primary">Ajouter</router-link>
            </template>
            <template slot="content">
                <p>
                    Vous pouvez choisir de les afficher <router-link to="/utilisateurs">tous</router-link>, de n'afficher que les <router-link to="/utilisateurs/professeurs">professeurs</router-link>, ou encore, que les <router-link to="/utilisateurs/guests">examinateurs invités</router-link>.
                </p>
            </template>
        </content-header>

        <router-view></router-view>
    </div>
</template>

<script>
    import ContentHeader from '../../common/contentHeader/ContentHeader';

    export default {
        components:{
            ContentHeader,
        },
    }
</script>