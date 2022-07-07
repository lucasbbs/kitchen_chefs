<?php

require(__DIR__ . "/node_modules/algoliasearch/lite.js");

// if (!empty($_GET['q'])) {
//   switch ($_GET['q']) {
//     case 'info':
//       phpinfo();
//       exit;
//       break;
//   }
// }
?>
<!DOCTYPE html>
<html>

<head>
  <title>Laragon</title>

  <link href="https://fonts.googleapis.com/css?family=Karla:400" rel="stylesheet" type="text/css">

  <link rel="stylesheet" href="./src/style.css">

</head>

<body>
  <div class="container">
    <div class="flex-class">
      <div class="content1">Teste</div>
      <div class="content2">
        <div class="title" title="Laragon">Laragon</div>

        <div class="info"><br />
          <?php print($_SERVER['SERVER_SOFTWARE']); ?><br />
          PHP version: <?php print phpversion(); ?> <span><a title="phpinfo()" href="/?q=info">info</a></span><br />
          Document Root: <?php print($_SERVER['DOCUMENT_ROOT']); ?><br />

        </div>
        <div class="opt">
          <div><a title="Getting Started" href="http://laragon.org/?q=getting-started">Getting Started!!</a></div>
        </div>
      </div>
    </div>

  </div>
</body>

</html>