module.exports = {
    name: "FuckYouJon",
    description: "Tells Jon Fuck you",
    userPermissions: ['MANAGE_MESSAGES'],
    execute(message, args, bot) {
        message.channel.send("This is a message, That I have sent with a command");
    }
}