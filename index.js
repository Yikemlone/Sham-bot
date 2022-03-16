const {Client, Collection, Intents} = require("discord.js"); // We only need the Client and collection for this right now
const { readdirSync } = require('fs'); // We use this to read commands from folders
const { config } = require("dotenv"); // We need this to read the .env file

// 32757 is the max value for intents, which adds up to all the FLAGS below, but if we don't want the bot to do something we will
// take them out of this list.
const intentsList = [
    Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_SCHEDULED_EVENTS, Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_WEBHOOKS
];


const bot = new Client({ intents: intentsList}); // Creating the bot 
config({ path: "../.env" }); // Reading the .env file
const prefix = "!"; // Command prefix for the bot, so all commands should use this
bot.commands = new Collection(); // Setting up a collection to add commands


// Setting up the bot and it's status
bot.on("ready", () => {
    console.log("The bot is online.");
    bot.user.setActivity("you play with my tits", {type: "WATCHING"});
});

const commandsDir = "./commands/";

// Populating the list of commands that are in file in the commands folder
readdirSync(commandsDir).forEach(dir => {
    const pull = require(commandsDir + dir);
    if(typeof pull.name !== undefined) bot.commands.set(pull.name, pull);
});


// When a message is sent it will check if it is a valid command, if so it will excute it.
bot.on("messageCreate", (message) => {
    if(message.author.bot) return; // This will not allow for the bot to talk to itself or other bots

    console.log(`${message.author.username} said: ${message}`);

    if(message.content.indexOf(prefix) !== 0) return; // This makes sure the user typed a command

    const args = message.content.split(/\s+/g); // Don't ask me, it's a regex or something 
    const commandName = args.shift().split(prefix)[1]; 
    const command = bot.commands.get(commandName);

    try {
        command.execute(message, args, bot);
    } catch(error) {
        console.log("An error occured when trying to run a command. Error message: " + error.message);
        message.reply("That's not a command we can use, idiot.");
    }

});

bot.login(process.env.TOKEN);