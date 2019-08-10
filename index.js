// Importing Required Modules
const Discord = require('discord.js');
const Twit = require('twit')
const log = require('./utils/log');
const config = require('./config.json');

// Initializing Discord Client
const client = new Discord.Client();

// Initializing Twitter Client
var T = new Twit({
  consumer_key:         config.consumer_key,
  consumer_secret:      config.consumer_secret,
  access_token:         config.access_token,
  access_token_secret:  config.access_token_secret,
});

// Ready Event
client.on('ready', () => {
  log.green(`Logged in as ${client.user.tag}!`);

  // Setting Bot Presence
  client.user.setPresence({
    game: { 
      name: '!help | @ethanzolla!' 
    }, 
    status: 'avaliable'  
  }).then(
    log.magenta('Presence Set!')
  )
});

// Message Event
client.on('message', msg => {
  // Initialized Commands and Arguments
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Ping Command
  if (command === 'ping') {
    msg.reply('Pong! :ping_pong:');
  }

  // Help Command
  if (command === 'help') {
    // Sending Embed
    msg.channel.send({embed: {
      color: 0x6FE492,
      title: 'Twitter Lookup Help',
      description: '!twitter <user>',
      timestamp: new Date(),
      footer: {
        icon_url: 'https://pbs.twimg.com/profile_images/1100637986318761989/IT25FwtY_400x400.png',
        text: 'Twitter Lookup | Created by @ethanzolla'
      }
    }});
  }

  // Twitter Lookup Command
  if (command === 'twitter') {
    // Checking for Arugment
    if (args[0]) {
      // Getting User Data
      T.get('/users/show', { screen_name: args[0] }, (err, data, response) => {
        // Checking for Errors
        if (!err) {
          // Created Embed
          const embed = new Discord.RichEmbed()
            .setColor('#6FE492')
            .setTitle(data.name)
            .setThumbnail(data.profile_image_url_https)
            .setTimestamp()
            .setFooter('Twitter Lookup', 'https://pbs.twimg.com/profile_images/1100637986318761989/IT25FwtY_400x400.png');

          // Checking Bio Description
          if (data.description) {
            embed.addField('Bio Description', data.description)
          } 

          // Checking Bio URL
          if (data.url) {
            embed.addField('Bio URL', data.url);
          }

          // Checking Location
          if (data.location) {
            embed.addField('Location', data.location);
          }

          // Checking Created
          if (data.created_at) {
            embed.addField('Created', data.created_at);
          }

          // Sending Embed
          msg.channel.send(embed);
        // Error Occurred
        } else {
          log.red(`Error: ${err}`);
          msg.reply('Error Occurred Contact Admin.');
        }
      });
    // No Arguments Given
    } else {
      log.yellow('No Arguments Given');
      msg.reply(`No Arguments Given | ${config.prefix}help`);
    }
  }
});

// Logging into Client
client.login(config.discordToken);