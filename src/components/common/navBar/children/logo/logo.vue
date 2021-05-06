<template>
  <div class="logo">
    <img src="@/assets/image/logo.png" alt="云音乐" title="云音乐">
    <span>云音乐</span>
  </div>
</template>

<script>
	export default {
		name: "logo"
	}
</script>

<style scoped lang="scss">
.logo{
  flex: 1;
  img{
    width: 24px;
    height: 24px;
    box-shadow: 3px 3px 3px rgba(133, 76, 58, 0.6);
    border-radius: 50%;
    padding: 6px;
    margin: 3px;
  }
  span{
    position: relative;
    top: -5px;
    left: 5px;
    color: #ffffff;
  }
}
</style>