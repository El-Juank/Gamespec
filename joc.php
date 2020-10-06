<?php
?>
<!DOCTYPE html>
<html lang="ca">
  <head>
    <!--Required meta tags-->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="author" content="Team Gamespec" />
    <meta
      name="description"
      content="Portal de videojocs amb totes les notícies, anàlisi i reviews sobre PS5, PS4, PC, Nintendo Switch, Xbox, iOS, Android i més"
    />
    <title>Article | Gamespec</title>
    <!--Favicon-->
    <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
    <!--Font Awesome CSS-->
    <link href="../css/font-awesome/css/all.min.css" rel="stylesheet" />
    <!--CSS propis-->
    <link rel="stylesheet" href="../css/style.css" />
    <!--Bootstrap CSS-->
    <link rel="stylesheet" href="../css/bootstrap.css" />
    <!--jQuery-->
    <script
      src="https://code.jquery.com/jquery-3.5.1.js"
      integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
      crossorigin="anonymous"
    ></script>
    <!--Scripts-->
    <script src="../js/modernizr.js"></script>

    <script>
   $(document).ready(function () {
       var url = "<?php  echo $_GET["joc"];?>";
       $.get("http://localhost:3000/joc?url=" + url, function (data, json) {
        $('#descripcio_joc').text(data.jocdescripcio);
        $('#img_joc').attr("src", data.jocportada);
        $('#titoljoc').text(data.jocnom);
        });

        });

</script>
  </head>
  <body>


    <!-- Header -->
    <div class="pageheader">
      <header class="header">
        <div class="header_content row">
          <!-- Logo -->
          <div class="header_logo">
            <a
              class="logo"
              href="../index.html"
              title="Anar a la portada de Gamespec"
            >
              <img src="../images/gamespec_logo.svg" alt="Homepage" />
            </a>
          </div>
          <!-- Fi del Logo -->
          <!-- XXSS -->
          <ul class="header_social">
            <li>
              <a
                href="https://www.facebook.com/portaldevideojuegosgamespec"
                target="_blank"
                title="Vés al Facebook de Gamespec"
                ><i class="fab fa-facebook" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a
                href="https://twitter.com/Gamespec3"
                target="_blank"
                title="Vés al Twitter de Gamespec"
                ><i class="fab fa-twitter" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                title="Vés al Instagram de Gamespec"
                ><i class="fab fa-instagram" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                title="Vés al Youtube de Gamespec"
                ><i class="fab fa-youtube" aria-hidden="true"></i
              ></a>
            </li>
          </ul>
          <!-- Fi de les XXSS -->
          <!-- Botó Login -->
          <div class="header_login">
            <a
              href="login.html"
              target="_blank"
              title="Iniciar sessió / Registrar-se"
              ><i class="far fa-user-circle" aria-hidden="true"></i
            ></a>
          </div>
          <!-- Fi del Botó Login -->
          <!-- Toggle Menu -->
          <a class="header_toggle-menu" href="#" title="Menú"
            ><span>Menu</span></a
          >
          <nav class="header_nav-wrap">
            <ul class="header_nav">
              <li><a href="games" title="">Jocs</a></li>
              <li><a href="articles" title="">Articles</a></li>
              <li><a href="about" title="">Els nostres redactors</a></li>
              <li>
                <a href="escriure_article" title="">Escriure article</a>
              </li>
              <li><a href="contact" title="">Contacta'ns</a></li>
            </ul>
            <a
              href="#"
              title="Tenca el menú"
              class="header_overlay-close close-mobile-menu"
              >Close</a
            >
          </nav>
          <!-- Fi del Toggle Menu -->
        </div>
      </header>
    </div>
    <!-- Fi del Header -->
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <ul class="breadcrumb-content">
        <li><a href="../index">Inici</a></li>
        <li><a href="../games">Jocs</a></li>
        <li><a href="#">Article</a></li>
      </ul>
    </div>
    <!-- Fi del Breadcrumb -->
    <!-- Article -->
    <div class="s-content s-content--narrow s-content--no-padding-bottom">
      <article class="row format-standard">
        <div class="s-content_header col-full">
          <h1 class="s-content_header-title" id="titoljoc">
            Article d'exemple.
          </h1>
          <ul class="s-content_header-meta">
            <li class="date">Septembre 30, 2020</li>
            <li class="cat">
              a
              <a href="#0">Videojocs</a>
            </li>
          </ul>
        </div>

        <div class="s-content_media col-full">
          <div class="s-content_post-thumb">
            <img id="portada" 
              src=""
              sizes="(max-width: 2000px) 100vw, 2000px"
              alt=""
            />
          </div>
        </div>

        <div class="col-full s-content_main">

        <div id="contingut" class="col-xs-1 text-center"> 
        <img src="https://raw.githubusercontent.com/El-Juank/Gamespec/master/images/games/callofduty.jpeg" id="img_joc">
        <p id="descripcio_joc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec neque eu magna sollicitudin pellentesque elementum a quam. Quisque pulvinar vehicula quam vel fermentum. Maecenas lobortis maximus quam at aliquam. Morbi euismod auctor enim. Praesent vel lorem ut sapien faucibus consectetur quis at lacus. Aenean ac feugiat felis. Donec placerat cursus ullamcorper. Donec eleifend elit a tortor semper lobortis. Nunc egestas orci a lectus eleifend, vel lobortis odio blandit. Nullam et felis in nunc ullamcorper accumsan. Vestibulum pretium in ligula in gravida. Donec sit amet facilisis elit. Sed ultricies est eu erat ultrices tempus. 
        Aenean sit amet eros tristique, tincidunt quam gravida, lacinia enim. Donec tincidunt varius fringilla.</p>
        
        </div>
        
    
        </div>
      </article>
    </div>
    <!-- Fi del Article -->
    <!-- Footer -->
    <div class="footer">
      <footer>
        <!-- Logo -->
        <div class="footer_logo">
          <a
            class="logo"
            href="../index.html"
            title="Anar a la portada de Gamespec"
          >
            <img src="../images/gamespec_logo_white.svg" alt="Homepage" />
          </a>
        </div>
        <!-- Fi del Logo -->
        <!-- XXSS -->
        <div class="footer_social">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/portaldevideojuegosgamespec"
                target="_blank"
                title="Vés al Facebook de Gamespec"
                ><i class="fab fa-facebook" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a
                href="https://twitter.com/Gamespec3"
                target="_blank"
                title="Vés al Twitter de Gamespec"
                ><i class="fab fa-twitter" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                title="Vés al Instagram de Gamespec"
                ><i class="fab fa-instagram" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                title="Vés al Youtube de Gamespec"
                ><i class="fab fa-youtube" aria-hidden="true"></i
              ></a>
            </li>
          </ul>
        </div>
        <!-- Fi de les XXSS -->
      </footer>
    </div>
    <!-- Fi del Footer -->
    <!-- Back to Top -->
    <a id="back2Top" title="Cap amunt" href="#"
      ><span class="fa fa-chevron-up"></span
    ></a>
    <!-- Fi del Back to Top -->
    <!-- Scripts -->
    <script src="../js/jquery-3.2.1.min.js"></script>
    <script src="../js/plugins.js"></script>
    <script src="../js/main.js"></script>
  </body>
</html>
