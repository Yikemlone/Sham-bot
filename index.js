const Discord = require("discord.js");
const { config } = require("dotenv");
const bot = new Discord.Client({ intents: 32757 });

config({
    path: __dirname + "/.env"
});

bot.on("ready", () => {
    console.log("The bot is online.");

    // bot.user.setPresence({
    //     status: "Booba",
    //     game: {
    //         name: "Boing",
    //         type: "WATCHING"
    //     }
    // })

    // console.log (`I'm online!, my name is ${client.user.username}`);
     
    bot.user.setPresence({
        status: "Online",
        game: {
            name: "you being quiet",
            type: "WATCHING"
        }
    });
})
var msg = "cool";
var leigh = "HENeedsMOREMilk";
var john = "JohnDev";
bot.on("messageCreate", (message) => {
    console.log(`Some one stupid said: ${message}`);
    
    //var gameName = message.author.activity.name;
    var guild = bot.get_guild(int(entry['guild_id']));
    var member = guild.get_member(int(entry['user_id']));


    
    if (member.activity.name.lower() == 'league of legends')
    {
        member.send('League Ban!');
        member.ban(reason='Being a nerd');
        message.channel.send($member + " has been banned for playing "+ member.activity.name);
    }

    // if(message.author.id === leigh){
    //     message.channel.send("Shut the fuck up Leigh!");
    // }
    // // if message includes a certain word
    // if (message.content.includes(msg)){
    //     message.channel.send(msg);
    //     msg="";
        
    // }
})

bot.login(process.env.TOKEN)