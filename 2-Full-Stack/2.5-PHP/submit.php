<!DOCTYPE HTML>
<html>

    <head>
        <title>Samsung Desarrolladoras 2022/23 - Práctica 5</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
    </head>

    <body>

        <?php

            if($_POST){
                
                $servername = "localhost";
                $username = "root";
                $password = "";
                $dbname = "curso_sql";

                // Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);

                // Check connection
                if ($conn->connect_error) {
                    die("No es posible conectarse a la base de datos: " . $conn->connect_error);
                }

                // Get data from form
                $name = $_POST["name"];
                $surname = $_POST["surname"];
                $email = $_POST["email"];

                // Insert data into DB
                $sql_insert = "INSERT INTO USUARIO (NOMBRE, APELLIDO, EMAIL) 
                               VALUES ('$name', '$surname', '$email')";

                if ($conn->query($sql_insert) === TRUE) {
                    echo '<div class="registration-success">';
                    echo "Los datos se han registrado con éxito para: \n";
                    echo '<ul>';
                    echo "<li>Nombre: " . $name . "</li>";
                    echo "<li>Apellido: " . $surname . "</li>";
                    echo "<li>Email: " . $email . "</li>";
                    echo '</ul>';
                    echo '</div>';
                } else {
                    echo '<div class="registration-error">';
                    echo "No se han podido registrar los datos de " . $name . " " . $surname . ". ";
                    echo "Será redirigido al formulario en 5 segundos.";
                    echo '</div>';
                    header("refresh:5;url=index.html" );
                }

                $conn->close();
            }

        ?>
    </body>

</html>