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
       var url = "<?php  echo $_GET["noticia"];?>";

       $.get("../web_services/get_article.php?url=" + url, function (data, json) {

var obj = $.parseJSON(data);
if (obj.articleid > 0) {
  
$('h1').text(obj.articlenom);
  $('#portada').attr("src", obj.portada)
  $('#contingut').html(obj.articlecontigut);
  $('#facebook').attr("href",obj.articlefacebook); 
  $('#twitter').attr("href",obj.redactortwitter); 
$('#instagram').attr("href",obj.redactorinstagram); 
$('#autor_descripcio').html(obj.redactordescripcio);
$('#autor_pic').attr("src", obj.redactorimage);
$('#autor_nom').text(obj.redactornom); 

}

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
        <li><a href="../index.html">Inici</a></li>
        <li><a href="../articles.html">Articles</a></li>
        <li><a href="#">Article</a></li>
      </ul>
    </div>
    <!-- Fi del Breadcrumb -->
    <!-- Article -->
    <div class="s-content s-content--narrow s-content--no-padding-bottom">
      <article class="row format-standard">
        <div class="s-content_header col-full">
          <h1 class="s-content_header-title">
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

        <div id="contingut"> </div>
      

          <div class="s-content_author">
            <img id="autor_pic" src="../images/avatars/user-03.jpg" alt="" />

            <div class="s-content_author-about">
              <h4 class="s-content_author-name">
                <a href="#0" id="autor_nom">Cristiana Suyen</a>
              </h4>

              <p id="autor_descripcio">
                
              </p>

              <ul class="author-social">
                <li><a id="facebook" href="#0">Facebook</a></li>
                <li><a id="twitter" href="#0">Twitter</a></li>
                <li><a id="instagram" href="#0">Instagram</a></li>
              </ul>
            </div>
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
