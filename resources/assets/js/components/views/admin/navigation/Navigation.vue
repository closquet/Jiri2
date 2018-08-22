<template>
    <div class="site-content">
        <admin-navigation></admin-navigation>
        <common-navigation></common-navigation>
    </div>
</template>

<script>
    import adminNavigation from './parts/AdminNavigation';
    import commonNavigation from '../../common/navigation/CommonNavigation';

    export default {
        components:{
            adminNavigation,
            commonNavigation
        }
    }
</script>