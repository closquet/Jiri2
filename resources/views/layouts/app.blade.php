<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="description"
              content="Projet réalisé dans le cadre d'un cours de Bachelier en techniques infographiques">
        <meta name="author" content="Eric Closquet : eric-closquet.be">
        <meta name="keywords"
              content="HEPL, Haute École de la Provaince de Liège, Jiri, projet de bachelier en infographie">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>
        <link rel="icon" type="image/png" href="favicon.png" sizes="128x128">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <main id="app">
            @yield('content')
        </main>

        <footer class="site-footer">
            <p class="site-footer__copy-right">&copy; 2018 JIRI, designed by <a href="mailto:closquet.eric@live.be">Eric Closquet</a></p>
        </footer>

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
