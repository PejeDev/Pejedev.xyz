<template>
  <nav class="navbar" :class="showMobileMenu ? 'toggle' : ''">
    <div class="navbar-content">
      <a href="/" class="navbar-brand">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M14.003 17.23c-.178.247-1.456.922-1.462-.396v-.464c.43-.208.731-.634.731-1.015 0-.526-.571-.762-1.272-.762-.701 0-1.271.236-1.271.762 0 .377.294.796.717 1.007v.472c-.008 1.227-1.18.829-1.392.453-.404-.716-1.249-.153-.94.423.29.541 1.001.918 1.73.918.446 0 .848-.146 1.149-.416.302.27.703.416 1.15.416.727 0 1.439-.377 1.729-.918.316-.584-.417-1.105-.869-.48zm.997-5.73c-.459 0-.833.374-.833.834 0 .459.374.833.833.833.459 0 .833-.374.833-.833 0-.46-.374-.834-.833-.834zm0 2.667c-1.011 0-1.833-.823-1.833-1.833 0-1.012.822-1.834 1.833-1.834 1.011 0 1.833.822 1.833 1.834 0 1.01-.822 1.833-1.833 1.833zm-6-2.667c-.459 0-.833.374-.833.834 0 .459.374.833.833.833.46 0 .834-.374.834-.833 0-.46-.374-.834-.834-.834zm0 2.667c-1.011 0-1.833-.823-1.833-1.833 0-1.012.822-1.834 1.833-1.834 1.011 0 1.834.822 1.834 1.834 0 1.01-.823 1.833-1.834 1.833zm1.545-5.66c.772-.195 2.101-.198 2.909 0 .977-1.478 1.643-2.298 3.03-3.507 2.7 3.301 3.762 9.095 4.196 13.732-2.015 2.591-5.152 4.268-8.68 4.268-3.56 0-6.721-1.708-8.733-4.339.347-4.718 1.237-10.618 3.733-13.661 1.469 1.16 2.426 2.15 3.545 3.507zm1.455-8.507c-6.623 0-12 5.376-12 12 0 6.623 5.377 12 12 12s12-5.377 12-12c0-6.624-5.377-12-12-12z"
          />
        </svg>
        <span>PejeDev</span>
      </a>
      <div class="navbar-menu">
        <div class="navbar-desktop">
          <a
            v-for="link in links"
            :key="link.name"
            :href="link.url"
            class="navbar-item"
            :class="isCurrentTab(link.url) ? 'active' : ''"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
      <div class="navbar-menu-mobile">
        <div
          id="hamburger"
          @click="showMobileMenu = !showMobileMenu"
          :class="showMobileMenu ? 'open' : ''"
        >
          <svg width="24" height="24" viewBox="0 0 100 100">
            <path
              class="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path class="line line2" d="M 20,50 H 80" />
            <path
              class="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="navbar-mobile-content" :class="showMobileMenu ? 'toggle' : ''">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        class="navbar-item"
        :class="isCurrentTab(link.url) ? 'active' : ''"
      >
        {{ link.name }}
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  data() {
    return {
      showMobileMenu: false,
      links: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Blog",
          url: "/blog",
        },
        {
          name: "Projects",
          url: "/projects",
        },
        {
          name: "About Me",
          url: "/about-me",
        },
      ],
    };
  },
  methods: {
    isCurrentTab(url: string) {
      const currentPath = this.$route.path || "/";
      return currentPath === url;
    },
  },
});
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0; /* required */
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(16px);
  background-color: rgba(16, 16, 20, 0.45);
  padding: 0 15px;
  height: 54px;
}

.navbar-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0px;
  max-width: 900px;
  width: 100%;
}

.navbar-item {
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  margin: 0 15px;
  font-size: 16px;
  line-height: 16px;
}

.navbar-item:last-child {
  margin-right: 0;
}

.navbar-item:hover {
  color: rgba(255, 255, 255, 1);
}

.navbar-menu {
  display: flex;
  flex-direction: row;
}

.navbar-menu-mobile {
  display: none;
}

.navbar-mobile-content {
  display: none;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: rgba(16, 16, 20, 0.95);
  width: 100%;
  height: calc(100vh - 54px);
  top: 54px;
}

.toggle {
  backdrop-filter: none;
  display: flex;
  background: rgba(16, 16, 20, 0.95);
}

.navbar-mobile-content .navbar-item {
  margin: auto 0;
  font-size: 32px;
}

@media screen and (max-width: 720px) {
  .navbar-menu {
    display: none;
  }
  .navbar-menu-mobile {
    display: block;
  }
}

.navbar-brand {
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  fill: rgba(255, 255, 255, 0.65);
}

.navbar-brand:hover,
.navbar-brand span:hover {
  fill: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
}

.navbar-brand span {
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  margin-left: 10px;
  line-height: 24px;
}

.active {
  color: rgba(255, 255, 255, 1);
  text-decoration: underline;
  text-underline-offset: 5px;
}

#hamburger {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  fill: #fff;
}
#hamburger .line {
  fill: none;
  stroke: #fff;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
#hamburger .line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
#hamburger .line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
#hamburger .line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
#hamburger.open .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
#hamburger.open .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
#hamburger.open .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
</style>
