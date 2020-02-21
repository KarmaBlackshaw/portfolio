
<template>
  <div class="home">
    <nav class="navbar">
      <div class="logo">
        <img
          src="@/assets/images/logo.svg"
          class="logo"
          alt
        />
        <h1>KARMA BLACKSHAW</h1>
      </div>
      <ul>
        <li class="nav__links">
          <a href="#">Home</a>
        </li>
        <li class="nav__links">
          <a href="#">Projects</a>
        </li>
        <li class="nav__links">
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:500");

.home {
  background-image: "../assets/images/night.jpg";
  width: 100%;
  height: 100%;

  .navbar {
    background: #24252a;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5%;
    margin: 0;
    transition: all 0.3s ease-in-out;

    & > * {
      font-family: "Montserrat", sans-serif;
      text-decoration: none;
    }

    .logo {
      max-width: 50px;
      display: flex;
      align-items: center;

      h1 {
        margin-left: 10px;
        color: #ecf0f1;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
    }

    .nav__links {
      list-style: none;
      display: inline-block;
      padding: 0 20px;

      & a {
        color: #ecf0f1;
        text-decoration: none;
        transition: color 0.5s ease 0s;
        font-size: 1.2rem;

        &:hover {
          color: #0088a9;
        }
      }
    }

    .btn {
      color: #ecf0f1;
      padding: 9px 25px;
      background-color: rgba(0, 136, 169, 1);
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.5s ease 0s;

      &:hover {
        background-color: rgba(0, 136, 169, 0.8);
      }
    }
  }
}
</style>
