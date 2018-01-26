const fs = require('fs');
const cp = require('child_process');
const path = require('path');
const slack = require('slack');

require('dotenv').config();

var theDate = new Date;
var token = process.env.SLACK_TOKEN;

function slackMe(username, message){
  var thePayload = 'payload={"channel": "#ll-tests", "username": "theworkflow-bot", "text": "<@' + username + '>: ' + message + ' ", "icon_emoji": ":camera:"}'
  // TODO: replace ":camera:" with an emoji of your choice.  Find the names here: https://www.webpagefx.com/tools/emoji-cheat-sheet/
  console.log(thePayload);
  cp.spawnSync("curl", ['-X', 'POST', '--data-urlencode', thePayload, process.env.SLACK_WEBHOOK_URL]);
}

function listChannels(){
  slack.channels.list({token: token}, (err, data) => {
    var theChannels = data.channels;
    console.log(JSON.stringify(data, null, 4));
  });
}

function getHistory(theChannel, theCount, cb){
  slack.channels.history({token: token, channel: theChannel, count: theCount}, (err, data) => {
    // console.log(JSON.stringify(data, null, 4));
    cb(err, data);
  })
}

module.exports.listChannels = listChannels;
module.exports.slackMe = slackMe;
module.exports.getHistory = getHistory;
