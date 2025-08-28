<template>
  <t-layout-page>
    <div class="scss">
      <div class="square" v-for="index in 10" :key="index" :style="`--i: ${index - 1}`"></div>
      <div class="content">
        <div :class="`star${index}`" v-for="index in 6" :key="index"></div>
      </div>
    </div>
  </t-layout-page>
</template>

<style lang="scss">
@keyframes animate {
  100% {
    transform: translateY(100vh);
    -webkit-transform: translateY(100vh);
  }
}
@function getShadows($n) {
  $shadows: "#{random(100)}vw #{random(100)}vh #fff";
  @for $i from 2 through $n {
    $shadows: "#{$shadows},#{random(100)}vw #{random(100)}vh #fff";
  }
  @return unquote($shadows);
}
@keyframes moveUp {
  100% {
    transform: translateY(-100vh);
  }
}
@keyframes expand {
  from {
    letter-spacing: -20px;
    filter: blur(2px);
  }
  to {
    letter-spacing: 0px;
    filter: blur(0px);
  }
}
$duration: 600s;
$count: 1400;
.scss {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(#4d3af9, #255fff, #3f89fb, #5088ff, #1a68ff);
  background-size: cover;
  position: relative;
  .square {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #4d86ff;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-right: 1px solid #3f89fb;
    border-bottom: 1px solid #3f89fb;
    border-radius: 10px;
    animation: animate 12s linear infinite;
    animation-delay: calc(-1s * var(--i));
    &:nth-child(1) {
      top: -10px;
      right: 50%;
    }
    &:nth-child(2) {
      top: 10%;
      right: 20%;
    }
    &:nth-child(3) {
      top: 10%;
      right: 10px;
    }
    &:nth-child(4) {
      bottom: 10%;
      right: 15%;
      width: 80px;
      height: 80px;
    }
    &:nth-child(5) {
      top: 180px;
      left: 20px;
    }
    &:nth-child(6) {
      bottom: 80px;
      left: 20px;
      width: 70px;
      height: 70px;
    }
    &:nth-child(7) {
      bottom: 40%;
      right: 50px;
      width: 60px;
      height: 60px;
      background: rgba(255, 255, 255, 0.2);
    }
    &:nth-child(8) {
      top: 120px;
      left: 220px;
      width: 70px;
      height: 70px;
    }
    &:nth-child(9) {
      bottom: 10%;
      right: 40%;
    }
    &:nth-child(10) {
      bottom: 40%;
      right: 45%;
    }
  }
  .content {
    position: relative;
    @for $i from 1 through 6 {
      $duration: floor(calc($duration / 2));
      $count: floor(calc($count / 2));
      .star#{$i} {
        $size: #{$i}px;
        position: absolute;
        top: 0;
        left: 0;
        width: $size;
        height: $size;
        border-radius: 50%;
        box-shadow: getShadows($count);
        animation: moveUp $duration linear infinite;
        &::after {
          position: absolute;
          top: 100vh;
          left: 0;
          width: $size;
          height: $size;
          content: "";
          border-radius: inherit;
          box-shadow: inherit;
        }
      }
    }
  }
  @media screen and (max-width: 1150px) {
    .content {
      justify-content: center;
      .login-left {
        display: none;
      }
    }
  }
}
</style>
