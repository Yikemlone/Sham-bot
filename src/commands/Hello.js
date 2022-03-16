module.exports = {
    name: "hello", 
    description: "Says hello", 
    userPermissions: ['MANAGE_MESSAGES'], 
    execute(message, args, client) {
        message.channel.send("Hello");
    }
}