/**
import email from '@/config/email'
 */
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
  send (templateParams) {
    return email.send(serviceId, templateId, templateParams, userId)
  }
}
