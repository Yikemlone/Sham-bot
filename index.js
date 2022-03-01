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

bot.on("messageCreate", (message) => {
    console.log(`This is what message I read: ${message}`);
})

bot.login(process.env.TOKEN)