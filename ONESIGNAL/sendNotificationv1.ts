import axios from "axios";

const options = {
  method: "POST",
  url: "https://onesignal.com/api/v1/notifications",
  headers: {
    accept: "application/json",
    // Authorization: "Basic OWFmM2JlNDAtYTJiZi00YTBlLTg4MzYtZGU1OWRkNjVlNTFi",
    Authorization: "Basic NWY2NmEyYmMtZGIyYS00Y2IwLWIwZTQtNDNjNjM0NjllMmEz",
    "content-type": "application/json",
  },
  data: {
    // app_id: "8551def4-985f-4af2-9cb5-99fc5a32ce3d",
    app_id: "301cc497-b6a5-44a2-b9b3-3afc5f02e7df",
    include_external_user_ids: ["HIMANSHU"],
    channel_for_external_user_ids: "push",

    // included_segments: ["Subscribed Users"],
    // include_player_ids: [
    //   // "98fed312-d3fb-467b-8f46-9acfc30a5166",
    //   "78486731-53f3-47ed-9b7c-75b610d7799a",
    //   "b37068cd-819a-4f74-a1c0-91a619bd0419",
    // ],
    data: { foo: "bar" },
    contents: { en: "HI THERE" },
    name: "INTERNAL_CAMPAIGN_NAME",
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

//   let externalUserId = "123456789"; // You will supply the external user id to the OneSignal SDK
