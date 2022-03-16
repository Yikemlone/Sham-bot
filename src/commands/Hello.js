module.exports = {
    name: "hello", 
    description: "Says hello", 
    userPermissions: ['MANAGE_MESSAGES'], 
    execute(message, args, bot) {
        message.channel.send("Hello");
    }
}