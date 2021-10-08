import { init } from 'emailjs-com'
const axios = require('axios').create({
  baseUrl: 'https://api.emailjs.com/api/v1.0/email'
})

init('user_lsCDj8iNa6sBV8mWNkwiT')

const data = {
  template_id: 'template_q3mpmnp',
  service_id: 'service_k3twis8',
  user_id: 'user_lsCDj8iNa6sBV8mWNkwiT'
};

(async () => {
  const response = await axios.post('/send', data)
  console.log(response)
})()
