<template>
    <div class="root">
        <site-header></site-header>
        <site-content></site-content>
        <site-footer></site-footer>
    </div>
</template>

<script>
    import SiteHeader from './components/site-header/SiteHeader.vue';
    import SiteContent from './components/site-content/SiteContent.vue';
    import SiteFooter from './components/site-footer/SiteFooter.vue';

    export default {
        components:{
            SiteHeader,
            SiteContent,
            SiteFooter
        }

    }
</script>
