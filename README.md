# Twitter Lookup
🔎 Easily search twitter accounts through [Discord](https://discordapp.com).

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
You will need to have [nodejs](https://nodejs.org/en/) installed in order to run. You will also need npm but this is installed with nodejs.

### Install
First you will clone or download this repository, then open your favorite text editor, my recommendation is [vscode](https://code.visualstudio.com/). Then open up the console and do the following command.
```
npm install
```
Now you will need to add your twitter api keys that you can get here by filling out the twitter developer application and created an app. You will also need to get you discord application token, you can find directions to do that [here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)!

## Running the tests
Try running it now with this simple command inside the console.
```
npm start
```

### Commands
If you need help or the users need help direct them to the help command do get the directions.
```
prefix + help 
EX: !help
```

If you are wondering if the bot is online, check it by doing the ping command and see if it responds.
```
prefix + ping
EX: !ping
```

If you want to search a user on twitter, go for it.
```
prefix + twitter + user
EX: !twitter ethanzolla
```

## Deployment
If you would like to run this 24/7 off your personal machine I would reccomend using the free credit given with google cloud, and create a server. You can make sure it runs all the time with a npm package named PM2 which will restart if errors or crashes happen.

## Built With
* [Nodejs](https://nodejs.org/en/) - Javascript Runtime Environment
* [NPM](https://www.npmjs.com/) - Node Package Manager
* [Twit](https://www.npmjs.com/package/twit) - Twitter API Wrapper
* [Discordjs](https://discord.js.org/#/) - Discord Javascript Library
* [Chalk](https://www.npmjs.com/package/chalk) - Logging Colors
* [Moment](https://www.npmjs.com/package/moment) - Logging Timestamps

## Support
If you are stuggling with anything feel free to send my a DM on twitter [here](https://twitter.com/messages/compose?recipient_id=993214465544876032). I will try to reach out as soon as possible, but if you can't wait I would recommend looking into [Google](https://www.google.com/), [youtube](https://www.youtube.com), for the [Discordjs Docs](https://discord.js.org/#/).

## Authors
* **Ethan Zoller** - [Twitter](https://twitter.com/Ethanzolla)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more details.