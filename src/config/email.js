import email from 'emailjs-com'

const serviceId = process.env.VUE_APP_EMAIL_SERVICE_ID
const templateId = process.env.VUE_APP_EMAIL_TEMPLATE_ID
const userId = process.env.VUE_APP_EMAIL_USER_ID

export default {
  /**
   * from_name
   * from_email
   * message
   */
  async send (templateParams) {
    try {
      const response = await email.send(serviceId, templateId, templateParams, userId)

      return response
    } catch (error) {
      throw error
    }
  }
}
