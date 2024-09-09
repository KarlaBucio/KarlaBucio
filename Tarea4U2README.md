<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarjeta de Perfil de Usuario</title>
    <link rel="stylesheet" href="styles.css">
    <style>

.profile-card{
            width: 300px;
            height: 350px;
            text-align: center;
            box-shadow: #ccc 5px 3px 10px;
            border-radius: 5%;
        }
      
        .profile-card-button{
           border: none;
           padding: 30px 30px;
           background-color: rgb(127, 127, 207);
           font-weight: 500;
           font-size: 14px;
        }
        .profile-button{
        cursor: pointer;
        background-color: rgb(36, 10, 233);
        border-radius: 35px;
        border: none;
        width: 140px;
        height: 45px;
        color: white;
        font-size: 15px;
        }
        .card-description{
        font-size: 14px;
        }
        .profile-name{
        font-family: Arial, Helvetica, sans-serif;
        }
        .profile-bio{
            font-family: Arial, Helvetica, sans-serif;
        }
        .profile-img{
            border-radius: 50%;
            margin: 23px;
            border: 3px solid blue;
        }
       
    </style>
</head>
<body>
    <div class="profile-card">
        <img src="https://via.placeholder.com/100" alt="Foto" class="profile-img">
        <div class="profile-content">
            <h2 class="profile-name">Karla Bucio</h2>
            <p class="profile-bio"> Basquetbolista.
                Estudia en Instituto Tecnológico de Morelia.
                Vive en Morelia
            </p>
            <button class="profile-button">Seguir</button>
        </div>
    </div>
</body>
</html>
