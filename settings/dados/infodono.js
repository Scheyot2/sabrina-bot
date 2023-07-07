const { fs, colors } = require('./_index.js');
const infodono = (prefix, numerodn, NomeDoBot, sender) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return `Olá, usuário: @${sender.split("@")[0]} !
Número do meu proprietário: wa.me/${numerodn}`
}

exports.infodono = infodono

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(colors.red(`Alterações salvas - '${__filename}'`))
    delete require.cache[file]
    require(file)
})