<?php $currentuserfromserver = json_encode( $user); ?>
<script defer>
    window.currentuserfromserver = <?= $currentuserfromserver ?>;
</script>
@extends('layouts.app')

@section('content')
    @auth
        <admin-root></admin-root>
    @else
        <guest-root></guest-root>
    @endauth
@endsection
