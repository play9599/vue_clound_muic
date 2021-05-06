<template>
  <div class="content">
    <div class="sculpture"/>
    <div class="login_txt">未登录
    <span></span></div>
    <a href="/pay">开通vip</a>
  </div>
</template>

<script>
	export default {
		name: "smallCommon"
	}
</script>

<style scoped lang="scss">
$hover_color:#ffff;
@mixin hover{
  &:hover{
    color: $hover_color;
  }
}
.content{
  flex: 2;
  .sculpture{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: relative;
    top: 5px;
    background-color: aquamarine;
  }
  .login_txt{
    color: silver;
    margin-left: 10px;
    cursor: pointer;
    @include hover;
    span{
      width: 0;
      height: 0;
      display: inline-block;
      border-width: 8px;
      position: relative;
      top: 7px;
      border-style: solid;
      border-color: silver transparent transparent transparent;
      &:hover{
        border-color: $hover_color transparent transparent transparent;
      }
    }
  }
  >a{
    color: silver;
    margin-left: 10px;
    @include hover;
  }
}
</style>