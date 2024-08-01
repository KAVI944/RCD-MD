//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkNrVEo2dnYrNWUzYnlDZENNbUMzTWFJc2huaHlodWMzTWJONk1sUkUzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2gvcWhJMGl5R1ZmM3ZwOEcrSGVrZEdsQXZFdkk3eVU2R3NhVURETDJ6Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSUN6OUNxRU04YTRxTUU1WWtyZ0xGYitKYUdpSlRaN2JtdGovYjFNakhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvYmRYMm0yTjlqRXp3NmZIQnU3dituYkJ4Zk1LYVRlU2JlY0NuYXlKL0MwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFSWJVbzFlbElOUkJ0d2cvZVJDdjg2Q2w1K2Mxcjh0S2JOVlpiWFJ5M0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImN1eWJSa3ZNOXBPb0R6b2ZtMFlGTG9PVm5pR0F1Y2tlV2JybjdObVUyZ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZtSHhsbU5CSC92KzNwLzNFRllkTmJNMlZ3akZsbkdIbktrd2x1aVJuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXR6N2d2dEw5aWl6REJGRkZsaEIzOElReVZJWXMrNXNOSGs4dGtwZFJuVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklBaU5lUWpjcWw4WDdHU21pMFRUL1ZITFZ3SS8rYUNGVEZKZWZuanlNdEJ1alcvOEh3Wkxnb1Y3N1lDMjdlQzlTbk9yNlV2bXQ3NzhRUnlnenNPNmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJWUU9YRWgzMnVmNXN0VW51RzFrRmQyNVpLaklyRjIwR0J1ekIySFhtTjZnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI4MjU3MTA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc0NDBEQjRDQTUwNTBGNjgzOEI4MUZEMUI3RkJCOTUxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI0ODc1MDl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI4MjU3MTA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZCQjVBN0YxOEFEN0FCREEyQzY1MkE1REMzN0JBNEMyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI0ODc1MDl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI4MjU3MTA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRBM0NENzA0OTE1NTNERDY2OENDREUwODhCOTg1MDYyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI0ODc1MTF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI4MjU3MTA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRBNjBBRTRFNkI1QjFCRTA5NDdFMEVBRjYyMTgzQ0NFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI0ODc1MTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImRWSk1Jdmt3Uk42bGF0aVhVYTFPTkEiLCJwaG9uZUlkIjoiNjI0ZTY2YTQtNjQyNy00YTY4LWFkNDYtMThmYzQ1MWY1NDQ1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFpdUt4cEpOQ1dqNHZQUGh5K25WMXpNME5jMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJENkFzQWE4dGpBclhUQk1iWW4rRlZTUGc5Uzg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMjRZQ0JMNzgiLCJtZSI6eyJpZCI6Ijk0NzI4MjU3MTA3OjI5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkhpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYnByNTRCRU1hbHJMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxanFZTkczaXVpUytYbGtRVzJ0YkJabnlHTUZDemcyTDRrSUpLRE9EbEd3PSIsImFjY291bnRTaWduYXR1cmUiOiJhUmxIV1NBU0tRL1B1NDEvTkphV2ZlOExjbEcrMVlhR2cxTlhrQjJzVkRSQ2NmTnhQS0VXeHJBVVVFY2RJQXJPbkJ0ZUl3ajhsVU1yNlY1eXZVTG9Cdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoia2h5QzEyUnN3RkpWUklEWDRGMjc4SlFhVEUveFMxL3IzS3pURnl1cGVxcFFzdnJ1RHJEb3JhSHNyQTZvb2Y5M2VBM0YxMW1oU2sxQzU1Yy9uSlVIanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyODI1NzEwNzoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhbzZtRFJ0NHJva3ZsNVpFRnRyV3dXWjhoakJRczROaStKQ0NTZ3pnNVJzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNDg3NTA3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgzdyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
