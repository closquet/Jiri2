<?php $currentuserfromserver = json_encode( $user); ?>
<script defer>
    window.currentuserfromserver = <?= $currentuserfromserver ?>;
</script>
@extends('layouts.app')

@section('content')
<div class="container">
    @if(Auth::user() && Auth::user()->is_admin)
        <admin-root></admin-root>
    @else
        <guest-root></guest-root>
    @endif
</div>
@endsection
