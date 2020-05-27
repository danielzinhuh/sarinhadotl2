const Discord = require("discord.js")
const jimp =require("jimp")
const client = new Discord.Client()
const config = require("./config.json")


client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
});

client.on("guildMemberAdd", async member => {
 
  let canal = client.channels.cache.get("694655917735542897")
   canal.send([`Escondam as Diabéticas porque o(a) ${member} Chegooou!<:yellow_docinhoTL:696429927138066482>`,`Nossa ein, ${member} Achei que tu ia demorar mais pra vir. <:white_cat:696437459315327016> `,`${member} Mais um(a) corno(a) chegou pra família <:white_brinksTL:700482271638978749>`,`Oi Amor ${member}, que tal você logar na call e na minha mente? <:pink_gatinhaTL:696448103049330709> `,`Ei ${member} seja bem vindo ao meu servidor, tá convidado(a) pro meu coração também! <:rosa_loveTL:699299706727301120>`,`Que isso ${member}? você por aqui? Tava te procurando a um tempão.. <:rosa_oi:696479946360488019>`,`Seja bem vindo(a) ${member}, fique a vontade, tem GIN com tônica no isopor e uns petiscos ali no balcão. <:orange_oclinTL:701267164484599848>`,`Aaaaai olha que coisinha mais fofa desse mundooooo ${member}, aqui com a gente, vem cá pessoal!! <:rosa_oclinTL:696478635074256986>`,`Não acredito que até tu tá aqui amor ${member} <:green_risada:703311876335075360>  `,`Falaram que tu geme gostosinho, é verdade ${member}? <:rosa_cafeTL:696475386862632960>`,`Pena de urubu, pena de galinha, se você já deu o bumbum ${member}, manda uma risadinha <:green_risada:703311876335075360>`,`To meio tristinha, posso dar uma gemidinha pra você, ${member}? <:rosa_anjinhaTL:696478489976766496>`,`Minha mãe disse pra eu correr atrás da felicidade, me passa teu endereço ${member}? <:pink_coracaoTL:701263879094665346>`,`Anjo ${member}, Fique longe da @Deusa「ᴏʟᴅ」#0103, ela faz GF.. <:yellow_mamei:696489789104324699>  `,`Oooooi amor ${member}, tu joga alguma coisa? que tal me jogar na cama? <:yellow_docinhoTL:696429927138066482>  `,`Que saudade de dormir call contigo amor ${member} <:orange_dormindoTL:700574131900645456>  `,`Bem vindo(a) ${member}, tua mãe sabe que tu geme no App Cinza? <:rosa_affTL:699500941769965608>`][Math.floor(Math.random() * 17)])
  
    
  console.log('Bem vindo Enviado pro novo membro')
  })
 
  

client.login(config.token);
