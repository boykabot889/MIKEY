import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
    let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => welcome)
    let pp2 = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => adios)
  let img = await (await fetch(`${pp}`)).buffer()
  let img2 = await (await fetch(`${pp2}`)).buffer()

  let chat = global.db.data.chats[m.chat]

 if (chat.welcome && m.messageStubType == 27) {
    let welcome = ` 🌸≺ مـــايــکــي \n「 الترحيب」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 منور/ه في جروب」\n「 ${groupMetadata.subject} 」\n\n  مــايــکــي`
await conn.sendMini(m.chat, packname, textbot, welcome, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = ` 🌸≺ مــايــکي \n「 المغادره 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 خرجت ليه بس  」\n「 هتوحشنا」\n\n  مـــايکــي`
await conn.sendMini(m.chat, packname, textbot, bye, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = ` 🌸≺ مــايــکي \n「 المغادره 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 خرجت ليه بس  」\n「 هتوحشنا」\n\n  مـــايکــي`
await conn.sendMini(m.chat, packname, textbot, kick, img, img, redes, fkontak)
}}

/*import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  let vn = 'https://qu.ax/cUYg.mp3';
  let vn2 = 'https://qu.ax/cTDa.mp3';
  let welc = welcome;
  let adi = adios;
  let chat = global.db.data.chats[m.chat];
  const getMentionedJid = () => {
    return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
  };

  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];

  let userName = user ? user.name : await conn.getName(who);

  if (chat.welcome && m.messageStubType === 27) {
    this.sendMessage(m.chat, {
      audio: { url: vn },
      contextInfo: {
        mentionedJid: getMentionedJid(),
        "externalAdReply": {
          "thumbnail": welc,
          "title": "ೃ⁀➷ الـــتــرحــيــب .ೃ࿐",
          "body": `${userName}!`,
          "previewType": "PHOTO",
          "thumbnailUrl": null,
          "showAdAttribution": true,
          sourceUrl: [yt, md, channel].sort(() => 0.5 - Math.random())[0]
        }
      },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: 'welcome.mp3'
    }, { quoted: fkontak });
  }

  if (chat.welcome && (m.messageStubType === 28 || m.messageStubType === 32)) {
    this.sendMessage(m.chat, {
      audio: { url: vn2 },
      contextInfo: {
        mentionedJid: getMentionedJid(),
        "externalAdReply": {
          "showAdAttribution": true,
          "containsAutoReply": true,
          "title": 'ೃ⁀➷ الـــمــغــادره .ೃ࿐',
          body: `${userName}, se despide.`,
          "previewType": "PHOTO",
          "thumbnailUrl": '',
          "thumbnail": adi,
          "sourceUrl": redes
        }
      }
    }, { quoted: fkontak });
  }
}*/
