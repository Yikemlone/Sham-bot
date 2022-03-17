# Sham-bot

## Sham-bot is a Discord bot using JavaScript.
This is developed in collaboration with HeIsMilkMan, JohnDev and Myself(Yikemlone).
<br><br>

***NOTE: YOU NEED TO MAKE A ".env" FILE AND PUT IT IN YOUR REPO YOU PULL, IT WILL NEED TO HAVE THE TOKEN. DON'T UPLOAD THE ".env" FILE***
<br><br>

# Dependencies

We are developing using Node.js, so have it installed before running the bot. If you don't have it installed, you can download it from here https://nodejs.org/en/

The module we are using is:

* discord.js

The Documentation for discord.js is here https://discord.com/developers/docs/intro

Here is another useful website https://discordjs.guide/#before-you-begin

**Make sure you use "npm install" before you try to run the bot.**
<br><br>

# Styling

We wanna try and keep the styling of code consistent.

Try and follow these:

1. Camelcase for methods and variables
2. Uppercase for classes 
3. constants upper case

Let me know if you think we should add anything else here.
<br><br>


## How I think we should design
<br>

I think if we all want to add our own functions, we should make classes for them, then import them into the main "index.js", so it makes it so we all aren't stepping on each others toes. 

We can work on the same file if we are doing similar things, just let each other know what you are gonna do.


## Adding new commands
<br>

I have added a command template inside of the commands folder, which we can add new commands for.

Each command will have it's own JavaScript file, following the template. We can change the template to contain more or less information as we go, 
but for now this is enough.
<br><br>

```
module.exports = {
    name: "Template", // Name of the command
    description: "This is a very discriptive description", // Tell us what it does
    userPermissions: ['MANAGE_MESSAGES'], // Who can use it
    // This what it will do when it is executed.
    execute(message, args, client) {
        message.channel.send("This is a test command.");
    }
}
```

This is the template file I have added, if you change all the values on the right, it should work they way you want it too. 

*Make sure you give the JavaScript file name something meaningful to the command.*