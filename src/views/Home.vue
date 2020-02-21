
<template>
  <div class="home">
    <nav class="navbar">
      <div class="logo">
        <img
          src="@/assets/images/logo.svg"
          alt
        />
        <h1>ERNIE JEASH VILLAHERMOSA</h1>
      </div>
      <ul>
        <li class="nav__links">
          <a href="#">Home</a>
        </li>
        <li class="nav__links">
          <a href="#">Projects</a>
        </li>
        <li class="nav__links">
          <a href="#">Services</a>
        </li>
        <li class="nav__links">
          <a href="#">About</a>
        </li>
        <li class="nav__links">
          <button class="btn btn--portfolio">PORTFOLIO</button>
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

    & > * {
      font-family: "Montserrat", sans-serif;
      text-decoration: none;
    }

    .logo {
      max-width: 50px;
      display: flex;
      align-items: center;

      img {
        max-width: 50px;
      }

      h1 {
        margin-left: 10px;
        color: #ecf0f1;
        text-transform: uppercase;
        letter-spacing: 2px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: #0088a9;
          font-weight: 900;
        }
      }
    }

    .nav__links {
      list-style: none;
      display: inline-block;
      text-transform: uppercase;
      transition: all 0.3s ease-in-out;

      &:last-child {
        padding-left: 20px;
      }

      & a {
        color: #ecf0f1;
        text-decoration: none;
        transition: color 0.5s ease 0s;
        font-size: 1.2rem;
        padding: 15px;

        &:hover {
          color: #0088a9;
          font-weight: 900;
          border-bottom: 2px solid #0088a9;
        }
      }
    }

    .btn {
      color: #ecf0f1;
      padding: 9px 25px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.5s ease 0s;

      &.btn--portfolio {
        background-color: rgba(0, 136, 169, 1);
      }

      &:hover {
        background-color: rgba(0, 136, 169, 0.8);
      }
    }
  }
}
</style>
