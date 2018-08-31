<template>
    <div class="container site-content">
        <Content-header>
            <template slot="title">
                Gestion des étidiants <router-link to="/etudiants/ajouter" class="btn btn-primary">Ajouter</router-link>
            </template>
            <template slot="content">
                <p>
                    Vous pouvez choisir de les afficher <router-link to="/etudiants">tous</router-link>, de n'afficher que les <router-link to="/etudiants/bloc2">Bloc 2</router-link>, ou encore, que les <router-link to="/etudiants/bloc3">Bloc 3</router-link>.
                </p>
            </template>
        </Content-header>

        <router-view></router-view>
    </div>
</template>

<script>
    import ContentHeader from '../../common/contentHeader/ContentHeader'
    import {mapState} from 'vuex';

    export default {
        components:{
            ContentHeader,
        },
        computed:{
            ...mapState('student',[
                'students ',
            ]),
        },
    }
</script>