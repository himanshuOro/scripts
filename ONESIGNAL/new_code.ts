import axios from "axios";

const API_KEY = "NWY2NmEyYmMtZGIyYS00Y2IwLWIwZTQtNDNjNjM0NjllMmEz";
const ONESIGNAL_APP_ID = "301cc497-b6a5-44a2-b9b3-3afc5f02e7df";
const BASE_URL = "https://onesignal.com/api/v1";

const optionsBuilder = (method: any, path: any, body: any) => {
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

const createNotication = async (data: any) => {
  const options: any = optionsBuilder("post", "notifications", data);
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

createNotication(body);
