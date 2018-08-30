<template>
    <div>
        <h1 class="pb-2 mt-4 mb-3 border-bottom">
            <slot name="title"></slot>
        </h1>
        <div class="row mb-4">
            <div class="col-md-10 col-lg-8 col-xl-6">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        computed:{
            ...mapState('user',[
                'currentUser',
            ]),
        },
    }
</script>