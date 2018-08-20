<template>
    <div class="root">
        <site-header></site-header>
        <site-content></site-content>
        <site-footer></site-footer>

    </div>
    </div>
</template>

<script>
    import SiteHeader from './components/SiteHeader.vue';
    import SiteContent from './components/SiteContent.vue';
    import SiteFooter from './components/SiteFooter.vue';
    export default {
        components:{
            SiteHeader,
            SiteContent,
            SiteFooter
        },
        data(){
            return{
            }
        }
    }
</script>
