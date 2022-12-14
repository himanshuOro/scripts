import * as OneSignal from "onesignal-node";
const client = new OneSignal.Client(
  "8551def4-985f-4af2-9cb5-99fc5a32ce3d",
  "OWFmM2JlNDAtYTJiZi00YTBlLTg4MzYtZGU1OWRkNjVlNTFi"
);
OneSignal.UserClient.
const createNoticationFunction = async () => {
  // See all fields: https://documentation.onesignal.com/reference/create-notification
  const notification = {
    contents: {
      en: "New notification1111",
    },
    included_segments: ["Subscribed Users"],
  };

  // using async/await
  try {
    console.log(client)
    client.signUserExternalId("1111")
    const response = await client.createNotification(notification);
    console.log(response.body.id);
  } catch (e) {
    if (e instanceof OneSignal.HTTPError) {
      // When status code of HTTP response is not 2xx, HTTPError is thrown.
      console.log(e.statusCode);
      console.log(e.body);
    }
  }

  // or you can use promise style:
  client
    .createNotification(notification)
    .then((response) => {})
    .catch((e) => {});
};

createNoticationFunction()


// OneSignal.push(function () {
//     OneSignal.setExternalUserId(externalUserId);
//   });
  