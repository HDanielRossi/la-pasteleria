<template>

  <div class="pattern"></div>
  <div class="cakeList">
    <h1>La Pasteleria</h1><br><br>
    <h2>Menú de pasteles</h2>
  </div>
  
  <div class="eecProductContainer">
    <div class="column-block">
      
      <a href="../">
        <div class="imagen"><img class="image-column" src="../assets/pastelChunk.jpg" alt="Pastel chunk"></div>
        <h3>Pastel Chunk</h3>
        <div class="precio">$250.00</div> 
      </a>
      
    </div>
    <div class="column-block" >
      <a href="../">
        <div class="imagen"><img class="image-column" src="../assets/PastelNapolitano.jpg" alt="Pastel napolitano"></div>
        <h3>Pastel Napolitano</h3>
        <div class="precio">$300.00</div>
      </a>
    </div>
    <div class="column-block" >
      <a href="../">
        <div class="imagen"><img class="image-column" src="../assets/sacher.jpg" alt="Pastel napolitano"></div>
        <h3>Pastel Sacher</h3>
        <div class="precio">$350.00</div>
      </a>
    </div>
    <div class="column-block" >
      <a href="../">
        <div class="imagen"><img class="image-column" src="../assets/flan.jpg" alt="Pastel napolitano"></div>
        <h3>Flan de guayaba</h3>
        <div class="precio">$300.00</div>
      </a>
    </div>
  </div>

<div class="decoList">
  <h2>Menú de decoración</h2>
</div>


  <div class="eecProductContainer2">
    <div class="column-block">
      <a href="../">
        <div class="imagen"><img class="image-column" src="../assets/platoPastel1.jpg" alt="Pastel chunk"></div>
        <h3>Base plato sencillo</h3>
        <div class="precio">$250.00</div>
      </a>
    </div>
    <div class="column-block" >
      <a href="../">
        <div class="imagen"><img class="image-column" src="../assets/platoPastel2.png" alt="Pastel napolitano"></div>
        <h3>Base plato cromo</h3>
        <div class="precio">$300.00</div>
      </a>
    </div>
    <div class="column-block" >
      <a href="../">
        <div class="imagen"><img class="image-column" src="../assets/adornoFeliCumpleaños1.jpg" alt="Pastel napolitano"></div>
        <h3>Adorno aniversario madera</h3>
        <div class="precio">$350.00</div>
      </a>
    </div>
    <div class="column-block" >
      <a href="../">
        <div class="imagen"><img class="image-column" src="../assets/deco50Ani.jpg" alt="Pastel napolitano"></div>
        <h3>Adorno 50 aniversario</h3>
        <div class="precio">$300.00</div>
      </a>
    </div>
        <div class="column-block" >
      <a href="../">
        <div class="imagen"><img class="image-column" src="../assets/decoBebe1.jpg" alt="Pastel napolitano"></div>
        <h3>decoración infantil</h3>
        <div class="precio">$300.00</div>
      </a>
    </div>
  </div>

  <hr class="separador">
  <div class="armaTuPastel">
    <h2>Diseña tu pastel</h2><br><br>
  </div>

  <div class="formularioPastel">
    <h3>Selecciona base de pastel (1 opcion):</h3>
    <input type="radio" id="integral" name="base pastel" value="Integral">
    <label for="Integral">Integral</label><br>
    <input type="radio" id="natural" name="base pastel" value="Natural">
    <label for="Natural">Natural</label><br>
    <input type="radio" id="almendra" name="base pastel" value="Almendra">
    <label for="Almendra">Almendra</label><br>
    <input type="radio" id="chocolate" name="base pastel" value="Chocolate">
    <label for="Almendra">Chocolate</label><br>
    <input type="radio" id="vainilla" name="base pastel" value="Vainilla">
    <label for="Almendra">Vainilla</label><br><br>

    <h4>Selecciona relleno del pastel (2 opciones):</h4>
    <input type="checkbox" id="relleno1" name="relleno1" value="Platano">
    <label for="relleno1">Relleno de platano</label><br>
    <input type="checkbox" id="relleno2" name="relleno2" value="Trozos-chocolate">
    <label for="relleno2">Trozos de chocolate negro</label><br>
    <input type="checkbox" id="relleno3" name="relleno3" value="Fresas">
    <label for="relleno3">Relleno de fresas</label><br><br>

    <h4>Selecciona betun (1 opcion):</h4>
    <input type="radio" id="integral" name="base pastel" value="Integral">
    <label for="Integral">Queso crema con naranja</label><br>
    <input type="radio" id="natural" name="base pastel" value="Natural">
    <label for="Natural">Buttercream</label><br>
    <input type="radio" id="almendra" name="base pastel" value="Almendra">
    <label for="Almendra">Chocolate tipo mousse</label><br>
    <input type="radio" id="almendra" name="base pastel" value="Almendra">
    <label for="Almendra">Crema diplomatica</label><br><br>
    
    <label for="decoracion"><strong>Selecciona opcion decoracion</strong></label>
    <select id="decoracion" name="decoracion">
        <option value="Plato pastel basico">Plato pastel basico</option>
        <option value="Plato de pastel cromado">Plato de pastel cromado</option>
        <option value="Letrero feliz cumpleaños">Letrero feliz cumpleaños</option>
        <option value="Decoración infantil">Decoración infantil</option>
    </select>
    <br>
    <br>
    <hr>
    <h2>Datos del cliente</h2>
    <form action="/accion.js" id="form1" method="post">
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre"><br><br>

        <label for="apellidos">Apellidos:</label><br>
        <input type="text" id="apellidos" name="apellidos"><br><br>

        <label for="direccion">Direccion:</label><br>
        <input type="text" id="direccion" name="direccion"><br><br>

        <label for="tel1">Numero de telefono</label><br>    
        <input type="tel" id="tel1" name="tel1" maxlength="10"><br><br>

        <label for="correo1">Input de Correo</label><br>
        <input type="email" id="correo1" name="correo1"><br><br>

        <input type="submit" value="Submit">
        <input type="reset">
    </form>
    <br>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>



