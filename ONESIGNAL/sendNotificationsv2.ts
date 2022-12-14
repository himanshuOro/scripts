import axios from "axios";
const API_SECRET = "NWY2NmEyYmMtZGIyYS00Y2IwLWIwZTQtNDNjNjM0NjllMmEz";
const APP_ID = "301cc497-b6a5-44a2-b9b3-3afc5f02e7df";

const createNoticationFunction = async (
  externalID: any,
  message: any,
  campaign_name: any
) => {
  const options = {
    method: "POST",
    url: "https://onesignal.com/api/v1/notifications",
    headers: {
      accept: "application/json",
      Authorization: `Basic ${API_SECRET}`,
      "content-type": "application/json",
    },
    data: {
      app_id: `${APP_ID}`,
      include_external_user_ids: [`${externalID}`],
      channel_for_external_user_ids: "push",
      data: { foo: "bar" },
      contents: { en: `${message}` },
      name: `${campaign_name}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

createNoticationFunction(
  "0xBEf5904a88Ded71a282834Af2F3f4a87723AbfFd",
  "Hi There",
  "INTERNAL_CAMPAIGN_NAME"
);
