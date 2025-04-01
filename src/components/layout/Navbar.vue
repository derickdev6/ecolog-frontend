<!-- Navbar.vue - Main navigation component with scroll behavior -->
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(true);
let lastScrollY = 0;

/**
 * Handles scroll events to show/hide navbar
 * @param {Event} event - Scroll event
 */
const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Show navbar when scrolling up or at the top
  if (currentScrollY < lastScrollY || currentScrollY < 10) {
    isVisible.value = true;
  } else {
    // Hide navbar when scrolling down
    isVisible.value = false;
  }

  lastScrollY = currentScrollY;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    class="navbar"
    :class="{ 'navbar--hidden': !isVisible }"
    role="navigation"
    aria-label="Main navigation"
  >
    <router-link to="/" class="logo" aria-label="Home"> GEF </router-link>

    <div class="link-set">
      <router-link
        v-for="(link, index) in [
          { to: '/empresas', text: 'Empresas' },
          { to: '/proyectos', text: 'Proyectos' },
          { to: '/actividades', text: 'Actividades' },
        ]"
        :key="index"
        :to="link.to"
        class="nav-link"
        :class="{ 'nav-link--active': $route.path.startsWith(link.to) }"
      >
        {{ link.text }}
      </router-link>
    </div>
  </nav>
</template>

// Scoped styles
<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  background-color: #003b2c;
  color: #ffffff;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &--hidden {
    transform: translateY(-100%);
  }

  .logo {
    font-size: 2rem;
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.9;
    }
  }

  .link-set {
    display: flex;
    gap: 1rem;
  }

  .nav-link {
    color: #f1f1f1;
    text-decoration: none;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    background-color: #ffffff22;
    transition: all 0.2s ease;
    position: relative;

    &:hover {
      background-color: #ffffff44;
      transform: translateY(-2px);
    }

    &--active {
      background-color: #ffffff44;
      font-weight: 500;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 2px;
        background-color: #ffffff;
        border-radius: 2px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: 6rem;
    padding: 1rem 2rem;

    .logo {
      font-size: 1.6rem;
    }

    .nav-link {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
  }
}
</style>
