<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num1 = floatval(htmlspecialchars($_POST["num1"]));
        $num2 = isset($_POST["num2"]) ? floatval(htmlspecialchars($_POST["num2"])) : 0;
        $operacion = htmlspecialchars($_POST["operacion"]);

        if ($operacion == "+") {
            $resultado = $num1 + $num2;
            echo "<h1>El resultado de la suma es: $resultado</h1>";
        } elseif ($operacion == "-") {
            $resultado = $num1 - $num2;
            echo "<h1>El resultado de la resta es: $resultado</h1>";
        } elseif ($operacion == "*") {
            $resultado = $num1 * $num2;
            echo "<h1>El resultado de la multiplicación es: $resultado</h1>";
        } elseif ($operacion == "/") {
            if ($num2 != 0) {
                $resultado = $num1 / $num2;
                echo "<h1>El resultado de la división es: $resultado</h1>";
            } else {
                echo "<h1>Error: División por cero</h1>";
            }
        } elseif ($operacion == "sqrt") {
            if ($num1 >= 0) {
                $resultado = sqrt($num1); // Calcula la raíz cuadrada
                echo "<h1>La raíz cuadrada de $num1 es: $resultado</h1>";
            } else {
                echo "<h1>Error: No se puede calcular la raíz cuadrada de un número negativo</h1>";
            }
        } elseif ($operacion == "^") {
            $resultado = pow($num1, $num2); // Calcula num1 elevado a la potencia de num2
            echo "<h1>$num1 elevado a la potencia de $num2 es: $resultado</h1>";
        } else {
            echo "<h1>Operación no válida</h1>";
        }
    }
?>
