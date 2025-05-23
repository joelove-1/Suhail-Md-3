const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "replit"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+233591007891";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_14_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExLFxuICAgICAgICA5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgODgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4LFxuICAgICAgICA2MixcbiAgICAgICAgMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY0LFxuICAgICAgICA1NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NyxcbiAgICAgICAgODksXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4LFxuICAgICAgICA5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDY0LFxuICAgICAgICAzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzksXG4gICAgICAgIDk2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg5LFxuICAgICAgICAzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMixcbiAgICAgICAgNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmhiQmRvanlNbC9yOEM2cy94WXV1MXkzU1Q0RHlwZUtKckdIRmlLQmhYaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRW9CNGt2VjFRRjJtc1loQmk5LXR1Z1wiLFxuICBcInBob25lSWRcIjogXCI3MGVkZWQ4NC05MWRhLTRkNWUtOTM3NC0xOGQxNjVkNDk3ODJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgMjIwLFxuICAgICAgMjMwLFxuICAgICAgMTc2LFxuICAgICAgNTMsXG4gICAgICAyMzUsXG4gICAgICAxMDQsXG4gICAgICAxNDcsXG4gICAgICAxLFxuICAgICAgODgsXG4gICAgICAxNjksXG4gICAgICAxMDcsXG4gICAgICAyOSxcbiAgICAgIDIzMixcbiAgICAgIDE3NixcbiAgICAgIDE3MCxcbiAgICAgIDEzNSxcbiAgICAgIDM4LFxuICAgICAgODUsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgOTYsXG4gICAgICA5MyxcbiAgICAgIDI4LFxuICAgICAgMTY5LFxuICAgICAgMTg5LFxuICAgICAgOTMsXG4gICAgICAyNyxcbiAgICAgIDExMCxcbiAgICAgIDE5NSxcbiAgICAgIDIzNSxcbiAgICAgIDg3LFxuICAgICAgMjU1LFxuICAgICAgMTM3LFxuICAgICAgMTgwLFxuICAgICAgMTMsXG4gICAgICAxMCxcbiAgICAgIDE1OCxcbiAgICAgIDI2LFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT084d284RkVJRE53Y0VHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5MHNnQmtWZVQrK1BUbzdRd0xrdldDS05LcFB1TWRMeENPdFRiYXJpajI0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlYR3JWTXNmaUMva21VdmRaNDN2b0hZR2RrZW1OMzF4bkdlUlh2NTVDcTJPa29vTk1yVUlFTTRRSGpqUHBKaE03R2hEdEVzTVUrVTZJQmRTVE50cUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1DVUdRZG4xWVNhaDliemZOdXZNTDJFcVFIZlBrTlZ3elJIR3RLYldiTjc5YUQ2N0lVZnNWeUFZdFFHUG84Y2lqMTE3OFFsK05vT1Zqcm9UUUt5NUJnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTkxMDA3ODkxOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDM3MTUzNDAwNzExMTU6MTJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1OTEwMDc4OTE6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0ODAwMjQzN1xufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
