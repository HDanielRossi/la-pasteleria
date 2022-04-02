<template>
  <header :class="{'scrolled-nav' : scrolledNav }">
    <nav>
      <div class="branding">
        <img src="@/assets/logo1LaPasteleria.png" alt="">
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{name: 'home'}">Home</router-link></li>
        <li><router-link class="link" :to="{name: 'productos'}">Productos</router-link></li>
        <li><router-link class="link" :to="{name: 'sucursales'}">Sucursales</router-link></li>
        <li><router-link class="link" :to="{name: 'armaTuPastel'}">Crea tu pastel</router-link></li>
        <li><router-link class="link" :to="{name: 'contacto'}">Contacto</router-link></li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="fas fa-bars" :class="{ 'icon-active': mobileNav }"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="link" :to="{name: 'home'}">Home</router-link></li>
          <li><router-link class="link" :to="{name: 'productos'}">Productos</router-link></li>
          <li><router-link class="link" :to="{name: 'sucursales'}">Sucursales</router-link></li>
          <li><router-link class="link" :to="{name: 'armaTuPastel'}">Crea tu pastel</router-link></li>
          <li><router-link class="link" :to="{name: 'contacto'}">Contacto</router-link></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },

  methods: {
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50){
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    checkScreen(){
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
};
</script>

<style lang="scss" scoped>

header{
  background-color: rgba(82, 204, 175, 0.3);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: .5s ease all;
  color: rgb(78, 78, 78);
  
  nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link{
      font-weight: 700;
      color: rgb(63, 63, 63);
      list-style: none;
      text-decoration: none;
    }

    li{
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px; 
    }

    .link{
      font-size: 19px;
      transition: 0.5s;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover{
        color: rgb(255, 255, 255);
        border-color: rgb(124, 124, 124);
      }
    }

    .branding{
      display: flex;
      align-items: center;
    }

    img{
      width: 200px;
      transition: 0.5s ease all;
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;

    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;
      color: rgb(58, 58, 58)
    }

    i {
      cursor: pointer;
      font-size: 50px;
      transition: 0.8s ease all;
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #fff;
      top: 0;
      left: 0;

      li {
        margin-left: 0;
        .link {
          color: #000;
        }
      }
    };

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    };

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
};

.scrolled-nav {
  background-color: rgba(195, 226, 219, 0.9);
  box-shadow: 2px 2px 20px;

  nav {
    padding: 20px 0;

    .branding {
      img {
        widows: 100px;
      }
    }
  }
}




</style>