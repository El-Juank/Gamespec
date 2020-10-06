$(function () {
    $(document).ready(function () {
        $.get("../web_services/get_user.php", function (data, json) {
            var obj = $.parseJSON(data);

            if (data != "null") {
                $(".header_login").find("a").attr("href", "./perfil.html");
                $(".header_login").find("a").attr("title", obj.nom);
                $(".header_login").find("a").find("img").attr("src", obj.foto)

                alert("../web_services/update_cookie.php?id="+obj.id)

                $.get("../web_services/update_cookie.php?id="+obj.id, function (data2, json) {

                    alert(data2)
                    
                });

            } else {
                $(".header_login").find("a").attr("href", "./login.html");
            }

        });


        $("#btn_registrarse").click(function () {
            var correu = $("#correu").val();
            var nom = $("#nom").val();
            var contrasenya = $("#contrasenya").val();
            var contrasenya2 = $("#contrasenya2").val();
        //    window.alert("web_services/registrarse.php?correu=" + correu+"&nom="+nom + "&contrasenya=" + contrasenya);
            if (correu.trim().length > 5) {
                if (nom.trim().length > 3) {
                    if (contrasenya == contrasenya2) {
                        if (contrasenya.length > 5) {

                            $.get("../web_services/registrarse.php?correu=" + correu+"&nom="+nom + "&contrasenya=" + contrasenya, function (data, json) {
            //                    window.alert("web_services/registrarse.php?correu=" + correu+"&nom="+nom + "&contrasenya=" + contrasenya);
                                
            
                            });
                        }
                    }
                }
              
            }
        });

    });


})



