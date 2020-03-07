<template>
  <div class="global-spinner-container">
    <img
      src="/assets/logo-new.png"
      class="global-spinner-image"
      width="60"
      alt=""
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
.global-spinner-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.global-spinner-image {
  animation: rotation 0.5s infinite linear;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg) scale(0.7);
  }
  50% {
    transform: rotate(180deg) scale(1);
  }
  100% {
    transform: rotate(359deg) scale(0.7);
  }
}
</style>
