<?php
$currentuserfromserver = json_encode( auth()->user());
?>
<script>
    window.currentuserfromserver = <?= $currentuserfromserver ?>;
</script>
@extends('layouts.app')

@section('content')
<div class="container">
    @if(Auth::user()->is_admin)
        <admin-root></admin-root>
    @else
        <guest-root></guest-root>
    @endif
</div>
@endsection
