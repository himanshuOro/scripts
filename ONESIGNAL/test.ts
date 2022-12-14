import axios from "axios";

const API_KEY = "OWFmM2JlNDAtYTJiZi00YTBlLTg4MzYtZGU1OWRkNjVlNTFi";
const ONESIGNAL_APP_ID = "8551def4-985f-4af2-9cb5-99fc5a32ce3d";
const BASE_URL = "https://onesignal.com/api/v1";

const optionsBuilder = (method, path, body) => {
  return {
    method,
    url: `${BASE_URL}/${path}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${API_KEY}`,
    },
    body: body ? JSON.stringify(body) : null,
  };
};

const createNotication = async (data) => {
  const options = optionsBuilder("post", "notifications", data);
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const body = {
  app_id: ONESIGNAL_APP_ID,
  included_segments: ["Subscribed Users"],
  data: {
    foo: "bar",
  },
  contents: {
    en: "Sample Push Message",
  },
};

// const get_transfer_id: any = async function (transferId: any) {
//   const baseURL = `https://api.testwyre.com/v3/transfers/${transferId}`;
//   const config = {
//     method: "get",
//     url: baseURL,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${BEARER_TOKEN}`,
//     },
//   };
//   let response = await axios(config);
//   return response.data;
// };

const testing = async (data) => {
  await createNotication();
};

testing();
