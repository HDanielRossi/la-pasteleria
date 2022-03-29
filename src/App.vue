<template>
  <nav>
    <router-link to="/"><img id="logo" src="./assets/logo1LaPasteleria.png"></router-link> 
    <div class="nav-right">
      <router-link to="/Productos">Productos</router-link>
      <router-link to="/Sucursales">Sucursales</router-link>
      <router-link to="/ArmaTuPastel">Arma tu pastel</router-link>
      <router-link to="/Contacto">Contacto</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>

*{ 
  box-sizing: border-box;
  margin: 10px;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4e4e4e;
  background-color: #fcfcfc;
  
}

nav {
  overflow: hidden;
  background-color: #bfffef;
}

nav a {
  float: left;
  color: rgb(134, 134, 134);
  text-align: center;
  padding: 20px;
  text-decoration: none;
  font-size: 40px; 
  line-height: 25px;
  border-radius: 4px;
  
}

nav a:hover {
  background-color: black;
  color: rgb(66, 150, 98);
}

#logo{
  height: 250px;
}

.nav-right{
  float: right;
  margin-top: 120px;
  padding: 0 20px 0 0;
}


h1{
  font-size: 80px;
  color: rgb(134, 134, 134);
}

h2{
  font-size: 45px;
  color: rgb(134, 134, 134);
}

h3{
  font-size: 35px;
  color: rgb(134, 134, 134);
}

.cakeList{
  padding: 60px;
}


.eecProductContainer{
  display:grid;
  grid-template-columns: repeat(4, auto);
  gap: 20px;
  justify-items: stretch;
  margin: 0 10px 80px 10px;
  }

.column-block{
  padding: 18px;
  background-color: #bfffef;
}

.column-block a{
  text-decoration: none;
  color: rgb(26, 26, 26);
}

.image-column{
  width: 300px;
  
}

.precio{
  font-size: 20px;
  font-weight: bold;
  background-color:rgba(0,0,0,.2);
  color: rgba(247, 247, 247, 1);
  margin: 5px 15px 5px 15px;
}

.decoList{
  padding: 60px;
}

.eecProductContainer2{
  display:grid;
  grid-template-columns: repeat(5, auto);
  gap: 20px;
  margin: 0 0 80px 0;
  
}

@media screen and (max-width: 1030px) {
  .eecProductContainer {
    display:grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
    margin: 0 10px 80px 10px;
  }

  nav a {
    display: flex;
    float: left;
  
  }
  

}


  



</style>
