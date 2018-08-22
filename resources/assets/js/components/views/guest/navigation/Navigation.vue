<template>
    <div class="site-content">
        <guest-navigation></guest-navigation>
        <common-navigation></common-navigation>
    </div>
</template>

<script>
    import guestNavigation from './parts/GuestNavigation';
    import commonNavigation from '../../common/navigation/CommonNavigation';


    export default {
        components:{
            guestNavigation,
            commonNavigation
        }
    }
</script>