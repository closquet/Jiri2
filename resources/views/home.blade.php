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
