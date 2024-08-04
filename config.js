const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348102711149";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_12_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDYyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NixcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTExLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQyLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5LFxuICAgICAgICA1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3OSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMixcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc0LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInIrbU5pYnN3V2FKZGFiRUF4Q2xEL1l1MXlUNTZZbkplTmg4c1R0OFJLcWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImk5aFB3bHhBUXJxRk92eW5URWRoMndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGY3MzhmZDQtYTMxNy00MWUzLTg4YTktYzZiNzk2ZmU5Y2NkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDMsXG4gICAgICA5MCxcbiAgICAgIDM3LFxuICAgICAgMTk3LFxuICAgICAgNzEsXG4gICAgICAxODgsXG4gICAgICAxMSxcbiAgICAgIDE1OCxcbiAgICAgIDUyLFxuICAgICAgMjEwLFxuICAgICAgMTA3LFxuICAgICAgMTgyLFxuICAgICAgMSxcbiAgICAgIDI1NSxcbiAgICAgIDI0OCxcbiAgICAgIDI1MSxcbiAgICAgIDIyMCxcbiAgICAgIDI0NixcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAxMDUsXG4gICAgICA0OCxcbiAgICAgIDIxOSxcbiAgICAgIDIyOSxcbiAgICAgIDE5NCxcbiAgICAgIDIxMCxcbiAgICAgIDc0LFxuICAgICAgMTMwLFxuICAgICAgMTI0LFxuICAgICAgODcsXG4gICAgICAxMTIsXG4gICAgICA4MixcbiAgICAgIDE1MSxcbiAgICAgIDIyNCxcbiAgICAgIDE0MCxcbiAgICAgIDM1LFxuICAgICAgMjI4LFxuICAgICAgMTUwLFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1NOTRSQVFXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAyNzExMTQ5OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjk3NTg2NjYyODkyNTc6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUdjeHYwTEVMYTN2TFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsSFZEMDhzL1JPR0tHcmYyOFZWUkdnaTFFWUUyL0ZtdndJMnB5Q3lFekdFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk53ODdsWmpMamJmcEtVSnk2SmFWRHEyQUtxTzZnRzNvNHVqSnJhdTZyTERLazNScVBwLzU2d0FnVWNmTTBHS3FNTjlLVDhzbGUvNTBLZHUyZjkwaWdBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIko0eE1VNTBlcXROYmlZcFAwUVFaK1QzdlFRalE5SkVJbzcxeEtFMWV0TjlkV2RjbHB2dENhREhtRXlYQU5jUys1YXFseFVxNUNSYXFWTzdkY2pTMmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDI3MTExNDk6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3NTE5MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCamdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJqZy5qc29uIjogIntcImtleURhdGFcIjpcImtSaVo5RmRvVDZhY2VRT0h0REFoZkwyQ0NYUzd3eklnRW5scXVLMzFSa3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIxNjA4NDU0NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIyNzUxOTMyNTk3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
