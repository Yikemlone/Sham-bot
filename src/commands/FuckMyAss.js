module.exports = {
    name: "FuckMyAss", // Name of the command
    description: "This is a very discriptive description", // Tell us what it does
    userPermissions: ['MANAGE_MESSAGES'], // Who can use it
    // This what it will do when it is executed.
    execute(message, args, bot) {
        message.channel.send("ok");
    }
}