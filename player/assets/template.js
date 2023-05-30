module.exports = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/styles.css">
</head>

<body>
    <ul>
        Los nombres de los cursos y sus urls deberian venir de una base de datos, pero se listarian asi:
       <li>
         <a href="http://127.0.0.1:3000/?course_name=curso1">Curso 1</a>
       </li>
       <li>
         <a href="http://127.0.0.1:3000/?course_name=curso3">Curso 3 (copia del curso 1 xd)</a>   
       </li>
       <li>  
         <a href="http://127.0.0.1:3000/?course_name=runtime">Curso Runtime</a>   
       </li>
    </ul>
    <iframe id="course-iframe" data-src="%URL%" class="iframe"></iframe>
    <script type="text/javascript" src="/scorm-again.min.js"></script>
    <script src="/index.js"></script>
</body>

</html>
`