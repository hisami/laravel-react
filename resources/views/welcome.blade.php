<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>React Sample</title>
    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
<div id="example"></div>
<script src="{{asset('/js/app.js')}}"></script>
</body>
</html>
