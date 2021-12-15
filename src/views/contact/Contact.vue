<template>
  <section
    id="contact"
    class="main-section"
  >
    <div class="contact-container page-container">
      <h1 class="page-title">
        Contact
      </h1>

      <base-section-title>
        Let's keep in touch
      </base-section-title>

      <div class="container__body">
        <div class="card">
          <div class="card__background">
            <img
              src="./assets/svg/contact.svg"
              alt=""
            >
          </div>

          <div class="card__body">
            <div class="card__email">
              <div class="email__item">
                <div class="email__label">
                  Name <span class="label__muted">(optional)</span>
                </div>
                <div class="email__input">
                  <input
                    type="text"
                    placeholder="Karma Blackshaw"
                  >
                </div>
              </div>

              <div class="email__item">
                <div class="email__label">
                  Email
                </div>

                <div class="email__input">
                  <input
                    type="text"
                    placeholder="johndoe@gmail.com"
                  >
                </div>
              </div>

              <div class="email__item">
                <div class="email__label">
                  Message
                </div>

                <div class="email__input">
                  <textarea
                    rows="8"
                    placeholder="Hi there!"
                  ></textarea>
                </div>
              </div>

              <div class="email__item">
                <button class="email__btn">
                  Send
                </button>
              </div>
            </div>

            <div class="card__divider"></div>

            <div class="card__contact-details">
              <div class="details__item">
                <div class="details__heading">
                  Have a project in mind? Let's collaborate with that!
                </div>
              </div>

              <div
                v-for="(currContact, contactKey) in contactDetails"
                :key="contactKey"
                class="details__item"
              >
                <div class="details__logo">
                  <img
                    :src="require(`./assets/images/${currContact.icon}`)"
                    alt=""
                  >
                </div>

                <div class="details__body">
                  <div class="details__title">
                    {{ currContact.name }}
                  </div>

                  <div class="details__content">
                    {{ currContact.value }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',

  title: 'Contact',

  computed: {
    contactDetails () {
      return [
        {
          name: 'Address',
          value: 'Cebu, Cebu City, Philippines',
          icon: 'location.png'
        },
        {
          name: 'Email',
          value: 'irenesejah29@gmail.com',
          icon: 'email.png'
        },
        {
          name: 'Contact Number',
          value: '+63  926  456  6783',
          icon: 'phone-call.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/contact.scss';
</style>
