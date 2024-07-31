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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pzMEQwT3FvOThpRWFPdnN2ZkRIWVhZLzJFc0FxZXFqaVMya1ZQVTlFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibktWaXptZm96OWlMdTVseUt6MG5nbDY0RGRWNlFoZUJKajJoU2xLSFB6bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SEtWUUF1cURHdzhZMHBDbUh3MFBXZlVjMDE0SVJFRFJEVklWSUFyZ21RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWOThiR2xMMm9LaGVIbDdVaHhXKzJ6TkxzODhxM1NaN1ZMWDF4d0oxUlVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9OKzgyN3hDczVNU1haOEZVVElqZTdrL1JCZndzOGZ4WENZdUw1M0h6Vnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRXazg1c2pRdzNXY0pwaXNFZWJKb3NKeVNOeHRTTkhlejMySjFVbzloa2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0llaVd1VXpJcXg2b0VEbEU1OWZmSkJJZ1ZxOUxyN2tTMkVXaXJqT3Qydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialBxaDhqc2taSEY4bUxBdlZoRzkzb0l0RjcvYlVlOThkZ2pmMnFFdnYzVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVpd2JHTytHN3pJTG1UTlJ2eEU1Z3p6NnVGeVFBVWlNaFRPSktyZ2MrR2tWWlUrbVdwbjVPOEg2VEF5dUdNbElXSGtsYXZtZkpzTmlsbEMraTd3L0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6InhuZ1FWNFdMZ20rWnBnS1hpRjVSTXJlRGgrSWkyWVZLck9vcHVNZWhqb0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjY5ODA1NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzJGNjQ1RUY3MjlEOUY0MjRDQzdGNDg0QzFDMDZBNUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjQzMzUxM30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjY5ODA1NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUQ2MUY4RjZDQkU3MkJBNzgzRUZDQ0VGREREMUZDNzYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjQzMzUxM30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjY5ODA1NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0VEMzAyM0UwQzY0RjlFM0Q0NTQ4QkMxNjU5OThEQTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjQzMzUxNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjY5ODA1NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzkzRDZDNkQ2NTlGRTdBNDQzMEIyRTJERTM3MUIzOTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjQzMzUxNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieHByOFpnVGhUb1NFdTcyeHpwS1RGQSIsInBob25lSWQiOiJmMjA5ZTc3Yy00M2I5LTRkZWItYTUwMC0zYmE5NGJhYTA0MzMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUpSVkkyT3JOQUsxTHhqOE00d1BMUmJaNVdJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM2eXFFUnVCc1hNMGJack1sSGtlbE91NlVTdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJHNVFDWFo5NCIsIm1lIjp7ImlkIjoiOTQ3NjY5ODA1NTM6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+lgCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTm5Fc2VnREVOci9xTFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYi9GU0dmcUNSZHJFbWtJakRkUTlxOUsyMjNaU2J4NmEwNDhwZ3gxVmVRRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRjlqSjhGTS8rdkhFRU1lT0pGUTFzSnIrcEZEbm1qMHBJWUhCenFkZjd1dW1manpRdElFWVE5V0VQSWdjcWp0dkNXNVhnVTlubE1XNmVKZnJ6Mm9ZRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlFkaFRrV3BjaEdFcDBaQlZVRktZU1d5MVRJbndCUjE4QjVXaHpqZEUzeU9WVk5XSStydzU3dmhTci9YR3ZBMTFDRGt1bWRUVGlDUUVrcTNFR1NYdUF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjY5ODA1NTM6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVy94VWhuNmdrWGF4SnBDSXczVVBhdlN0dHQyVW04ZW10T1BLWU1kVlhrQiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjQzMzUxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNYnEifQ=="
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
