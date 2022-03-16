module.exports = {
    name: "Template", // Name of the command
    description: "This is a very discriptive description", // Tell us what it does
    userPermissions: ['MANAGE_MESSAGES'], // Who can use it
    // This what it will do when it is executed.
    execute(message, args, client) {
        message.channel.send("This is a test command.");
    }
}