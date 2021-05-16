const fs = require('fs')

module.exports.sendEmbed = async (req, res, next) => {
    try {
        const Discord = require('discord.js')
        const client = new Discord.Client()

        client.login(process.env.TOKEN)

        await client.on("ready" , async() => {
            console.log(`${client.user.tag} is Online!`)

            let channel = client.channels.cache.find(ch => ch.id === req.body.channelid)
            if(!channel){
                res.render('home' , {data : "not-found-err" , url : `${process.env.URL}`})
            }

            let embed = new Discord.MessageEmbed()
            .setTitle(req.body.title)
            .setDescription(req.body.description)

            if(req.body.image.length > 5){
                embed.setImage(req.body.image)
            }

            if(req.body.thumbnail.length > 5){
                embed.setThumbnail(req.body.thumbnail)
            }

            if(req.body.footer.length > 1){
                embed.setFooter(req.body.footer)
            }

            if(req.body.timestamp === "yes"){
                embed.setTimestamp()
            }

            embed.setColor('RANDOM')

            await channel.send(embed)
            .then(() =>{
                res.render('home' , {data : "success" , url : `${process.env.URL}`})
            }).catch(() => {
                res.render('home' , {data : "missing" , url : `${process.env.URL}`})
            })
        })
    } catch (err) {
        next(err)
    }
}