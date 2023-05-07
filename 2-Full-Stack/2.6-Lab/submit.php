<!DOCTYPE HTML>
<html>

    <head>
        <title>Samsung Desarrolladoras 2022/23 - Laboratorio 3</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="js/index.js" defer></script>
        <script src="https://kit.fontawesome.com/b37653d681.js"></script>
        <link rel="stylesheet" type="text/css" href="css/style.css" />
    </head>
    
    <body>

        <!-- MENU -->
        <nav>
            <div class="left-items">
                <a class="item" href="index.html"><img class='logo' src="images/bejob-logo.png" alt="Logo de Bejob"></a>
            </div>
            <div class="right-items">
                <a class="item selected" href="registration.html">REGISTRO</a>
                <a class="item" href="about.html">ACERCA DE</a>
            </div>
            <a class="toggle" href="#" onclick="toggle();"><i class="fas fa-bars fa-2x"></i></a>
        </nav>

        <?php

            if($_POST){
                
                $servername = "localhost";
                $username = "root";
                $password = "";
                $dbname = "registro";

                // Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);

                // Check connection
                if ($conn->connect_error) {
                    die("No es posible conectarse a la base de datos: " . $conn->connect_error);
                }

                // Get data from form
                $name = $_POST["name"];
                $first_surname = $_POST["first-surname"];
                $second_surname = $_POST["second-surname"];
                $email = $_POST["email"];
                
                // Check if user information already exists
                $sql_complete_name_query = "SELECT * FROM USUARIOS WHERE NOMBRE='$name' AND PRIMER_APELLIDO='$first_surname'";
                $complete_name_duplicates = $conn->query($sql_complete_name_query);
                if ($complete_name_duplicates->num_rows > 0) {
                    echo '<div class="registration-error">';
                    echo "Este nombre completo ya se encuentra registrado en nuestra base de datos. ";
                    echo "Será redirigido al formulario en 5 segundos.";
                    echo '</div>';
                    header("refresh:5;url=registration.html" );
                    exit;
                }

                // Check if user e-mail already exists
                $sql_email_query = "SELECT * FROM USUARIOS WHERE EMAIL='$email'";
                $email_duplicates = $conn->query($sql_email_query);
                if ($email_duplicates->num_rows > 0) {
                    echo '<div class="registration-error">';
                    echo "Este e-mail ya se encuentra registrado en nuestra base de datos. ";
                    echo "Será redirigido al formulario en 5 segundos.";
                    echo '</div>';
                    header("refresh:5;url=registration.html" );
                    exit;
                }

                // Insert data into DB
                $sql_insert = "INSERT INTO USUARIOS (NOMBRE, PRIMER_APELLIDO, SEGUNDO_APELLIDO, EMAIL) 
                            VALUES ('$name', '$first_surname', '$second_surname', '$email')";

                if ($conn->query($sql_insert) === TRUE) {
                    echo '<div class="registration-success">';
                    echo "Los datos de " . $name . " " . $first_surname . " " . $second_surname . " se han registrado con éxito. ";
                    echo "Será redirigido al formulario en 5 segundos.";
                    echo '</div>';
                    header("refresh:5;url=registration.html" );
                } else {
                    echo '<div class="registration-error">';
                    echo "No se han podido registrar los datos de " . $name . " " . $surname . ". ";
                    echo "Será redirigido al formulario en 5 segundos.";
                    echo '</div>';
                    header("refresh:5;url=registration.html" );
                    exit;
                }

                $conn->close();
            }

        ?>

    </body>

</html>