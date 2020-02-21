
<template>
  <div>
    <div class="landing">
      <div class="screen"></div>
      <div class="introduction">
        <h1>I build websites for better experience!</h1>
        <span>FULL STACK DEVELOPER from Cebu, Philippines</span>
        <div class="divider"></div>
        <div class="introduction__paragraph">
          Hi! I am
          <b>Ernie Jeash C. Villahermosa</b>, a Cebu based full stack developer with less than a year of experience in a professional field. I like to play Mobile Legends during my free time 😎
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
$bg-image: url("../assets/images/night.jpg");
@import url("https://fonts.googleapis.com/css?family=ABeeZee|Overpass|Quicksand|Righteous|Roboto&display=swap");
.landing {
  height: 100vh;
  width: 100vw;
  background-image: $bg-image;
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  position: relative;

  .screen {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #000;
    opacity: 0.6;
  }

  .introduction {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: default;

    & > * {
      margin-bottom: 10px;
    }

    h1 {
      color: rgb(236, 236, 236);
      font-family: "Righteous";
      font-size: 5rem;
      letter-spacing: 3px;
      display: block;
    }

    span {
      font-size: 2rem;
      font-family: "Roboto";
      font-weight: lighter;
      color: rgb(179, 179, 179);
      transition: all 0.5s ease-in-out;

      &:hover {
        color: white;
      }
    }

    .divider {
      width: 50%;
      border-top: 0.5px solid white;
      height: 2px;
      background: rgba(36, 36, 36, 0.452);
    }

    .introduction__paragraph {
      text-align: center;
      font-size: 1.2rem;
      letter-spacing: 1.5px;
      width: 20%;
      color: rgb(224, 222, 222);
      font-family: "Quicksand";
    }
  }
}
</style>
