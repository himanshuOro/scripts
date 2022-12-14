const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://onesignal.com/api/v1/notifications',
  headers: {
    accept: 'application/json',
    Authorization: 'Basic OWFmM2JlNDAtYTJiZi00YTBlLTg4MzYtZGU1OWRkNjVlNTFi',
    'content-type': 'application/json'
  },
  data: {
    included_segments: ['Subscribed Users'],
    contents: {en: 'VIPIN', es: 'Spanish Message'},
    name: 'INTERNAL_CAMPAIGN_NAME',
    app_id: '8551def4-985f-4af2-9cb5-99fc5a32ce3d'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });