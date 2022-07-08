<?php



echo "<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, shrink-to-fit=no'
    />
    <meta name='theme-color' content='#000000' />
    <title>Kitchen Chefs demo by Lucas</title>
    <link
      rel='stylesheet'
      type='text/css'
      href='https://cdn.jsdelivr.net/npm/instantsearch.js@2.6.0/dist/instantsearch-theme-algolia.min.css'
    />
    <link rel='stylesheet' type='text/css' href='src/app.css' />
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' integrity='sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==' crossorigin='anonymous' referrerpolicy='no-referrer' />
  </head>

  <body>
    <main class='search-container'>
      <img id='success-id' src='./src/success.gif' class='success-message-display success-hide'  alt='success'>
      <div class='left-panel'>
        <div id='countries'></div>

        <div id='hits'></div>
      </div>
      <div class='right-panel'>
        <div id='searchbox'></div>

        <div id='map'></div>
        <div id='pagination'></div>
      </div>
    </main>

    <script src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js' integrity='sha512-6PM0qYu5KExuNcKt5bURAoT6KCThUmHRewN3zUFNaoI6Di7XJPTMoT6K0nsagZKk2OB4L7E3q1uQKHNHd4stIQ==' crossorigin='anonymous' referrerpolicy='no-referrer'></script>
    <script src='//cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js'></script>
    <script src='https://cdn.jsdelivr.net/npm/instantsearch.js@2.8.0/dist/instantsearch.min.js'></script>
    <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyApb_5ZYvV1a6tQnbxeqz1sexovL-l7Uxk'></script>
    <script src='./src/app.js'></script>
    <script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>

  </body>
</html>
";
