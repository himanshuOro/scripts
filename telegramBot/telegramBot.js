const TelegramBot = require("node-telegram-bot-api");
const token = "5946550217:AAGMdwt3NfHBDiWhsg49s4mhsZSc8gM-E0g"; //@himanshu123123_Bot
const bot = new TelegramBot(token, { polling: true });
// console.log(bot)
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// Listen for any kind of message. There are different kinds of
// messages.

function sendMessageOnTelegram(chatID, message) {
  bot.sendMessage(chatID, `Received your message ${chatID} :: ${message}`);
}

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  console.log(msg);
  // send a message to the chat acknowledging receipt of their message
  console.log(chatId);
  bot.sendMessage(chatId, `Received your message ${chatId}`);
  //   bot.sendMessage(1274562484, "3333333333333333333333333333333333 your message");
});

sendMessageOnTelegram("5654031417","Himanshu Singh");
// function getChatIdfromUserID(input = "himanshuoro") {
//   return chatID;
// }

// aditya123;

// HOW TO SEND MESSAGE
// https://www.freecodecamp.org/news/telegram-push-notifications-58477e71b2c2/#:~:text=You%20just%20need%20to%20send%20a%20message%20using%20https%3A%2F%2F,save%20chat_id%20in%20your%20database.
// https://api.telegram.org/bot5984423084:AAFauO8Yd-x2w1qTb_9d9UU0XtWLM64DZM8/sendMessage?chat_id=5654031417&text=fromthejs

/// QUESTION 1

// I will send u my user id ==> can u send me my chat id
// https://t.me/raw_data_bot

//////

// STEP 1 :  GIVE ME CHATID,Customised MESSAGE
//




// STEP 1 :: DETECT MESSAGE 0xwwww
// STEP 2 :: GET CHAT ID FROM WALLET ADDRESS ===> 
// STEP 3 :: SEND MESSAGE ()  bot.sendMessage(chatId, `Received your message ${chatId}`);
