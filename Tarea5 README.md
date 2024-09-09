<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarjeta de Producto</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        .profile-card {
            width: 300px;
            height: 400px;
            text-align: center;
            box-shadow: #ccc 5px 3px 10px;
            border-radius: 5%;
            background-color: white; /* Color de fondo predeterminado */
            transition: background-color 0.3s ease; /* Transición suave */
        }
      
        .profile-card:hover {
            background-color: rgb(80, 170, 239); /* Color de fondo cuando se pasa el cursor */
        }


        .profile-card-button {
            border: none;
            padding: 30px 30px;
            background-color: rgb(127, 127, 207);
            font-weight: 500;
            font-size: 14px;
        }
        
        .profile-button {
            cursor: pointer;
            background-color: rgb(2, 44, 18);
            border: none;
            width: 140px;
            height: 45px;
            color: white;
            font-size: 15px;
        }
        
        .card-description {
            font-size: 14px;
        }
        
        .profile-name {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 50px;
            font-weight: bold;
            margin-top: 25px
        }
        
        .profile-bio {
            font-family: Arial, Helvetica, sans-serif;
        }
        
        .profile-img {
            margin: 0.01px;
            width: 170px;
            height: 120px;
        }
    </style>
</head>
<body>
    <div class="profile-card">
        <h2 class="profile-name">Coca Cola</h2> <!-- Título agregado aquí -->
        <img src="https://www.liderlogo.es/wp-content/uploads/2023/01/coca-cola-1-1-1024x594.jpg" alt="Foto" class="profile-img">
        <div class="profile-content">
            <p class="profile-bio">Refresco azucarado de color marrón oscuro o negro debido al caramelo de su composición</p>
            <button class="profile-button">Comprar</button>
        </div>
    </div>
</body>
</html>
