<template>
  <div class="banner-container">
    <router-link to="/item">
      <img alt="banner" src="@/assets/banner.png" class="banner-image" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BannerPage",
  // Other component options
};
</script>

<style scoped>
.banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height as needed */
}

.banner-image {
  cursor: pointer;
}
</style>
