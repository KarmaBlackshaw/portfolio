
<template>
  <nav class="navbar">
    <div class="logo">
      <img
        src="@/assets/images/logo.svg"
        alt
      />
      <div class="title-container">
        <h1>ERNIE JEASH VILLAHERMOSA</h1>
        <span>Web Developer</span>
      </div>
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
        <button class="btn btn--portfolio">MY PORTFOLIO</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:500|ABeeZee&display=swap");
.navbar {
  overflow: hidden;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  background: #24252a80;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: #24252ae5;
  }

  & > * {
    text-decoration: none;
  }

  .logo {
    max-width: 50px;
    display: flex;
    align-items: center;

    img {
      max-width: 50px;
    }

    .title-container {
      margin-left: 10px;

      h1 {
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

      span {
        color: #9b9b9b;
        font-family: "Montserrat", sans-serif;
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
      font-family: "ABeeZee";

      &:hover,
      &:focus {
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
    font-family: "ABeeZee", sans-serif;

    &.btn--portfolio {
      background-color: rgba(0, 136, 169, 1);
    }

    &:hover {
      background-color: rgba(0, 136, 169, 0.8);
    }
  }
}
</style>
