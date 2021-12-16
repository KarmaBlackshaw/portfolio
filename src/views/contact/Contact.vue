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
            <form
              class="card__email"
              @submit.prevent="handleFormSubmit"
            >
              <div
                class="email__item"
                data-aos="fade-right"
                data-aos-delay="0"
              >
                <div class="email__label">
                  Name <span class="label__muted">(optional)</span>
                </div>

                <div class="email__input">
                  <input
                    v-model="forms.email.data.from_name"
                    type="text"
                    placeholder="Karma Blackshaw"
                    @input="handleOnInput"
                  >
                </div>
              </div>

              <div
                class="email__item"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div class="email__label">
                  Email
                </div>

                <div class="email__input">
                  <input
                    v-model="forms.email.data.from_email"
                    type="text"
                    placeholder="johndoe@gmail.com"
                    @input="handleOnInput"
                  >
                </div>
              </div>

              <div
                class="email__item"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div class="email__label">
                  Message
                </div>

                <div class="email__input">
                  <textarea
                    v-model="forms.email.data.message"
                    rows="8"
                    placeholder="Hi there!"
                    @input="handleOnInput"
                  ></textarea>
                </div>
              </div>

              <div class="email__item">
                <button
                  data-aos="fade-right"
                  data-aos-delay="300"
                  class="email__btn"
                  type="submit"
                  :disabled="!forms.email.is_valid"
                >
                  Send
                </button>
              </div>
            </form>

            <div class="card__divider"></div>

            <div class="card__contact-details">
              <div
                class="details__item"
                data-aos="flip-down"
                data-aos-delay="0"
              >
                <div class="details__heading">
                  Have a project in mind? Let's collaborate with that!
                </div>
              </div>

              <div
                v-for="(currContact, contactKey) in contactDetails"
                :key="contactKey"
                class="details__item"
                data-aos="fade-left"
                :data-aos-delay="100 * (contactKey + 1)"
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
import Joi from 'joi'

import _debounce from 'lodash/debounce'
import email from '@/config/email'

export default {
  name: 'Contact',

  title: 'Contact',

  data: () => ({
    forms: {
      email: {
        is_valid: false,
        data: {
          from_name: undefined,
          from_email: undefined,
          message: undefined
        }
      }
    }
  }),

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
  },

  methods: {
    handleOnInput: _debounce(function () {
      const form = this.forms.email

      const schema = Joi.object({
        from_name: Joi.string()
          .optional()
          .label('Name'),
        from_email: Joi.string()
          .email({ tlds: { allow: false } })
          .required()
          .label('Email'),
        message: Joi.string()
          .required()
          .label('Message')
      })

      schema.validateAsync(form.data)
        .then(() => this.$set(this.forms.email, 'is_valid', true))
        .catch(() => this.$set(this.forms.email, 'is_valid', false))
    }, 300),

    async handleFormSubmit () {
      try {
        const form = this.forms.email

        await email.send({
          from_name: form.data.from_name,
          from_email: form.data.from_email,
          message: form.data.message
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/contact.scss';
</style>
