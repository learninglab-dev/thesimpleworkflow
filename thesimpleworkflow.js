const fs = require('fs');
const cp = require('child_process');
const path = require('path');
const transcode = require("./tools/transcode_sync").transcode;
const slackTools = require("./tools/slack_tools");
const ffprobeSync = require("./tools/ffprobetools").ffprobeSync;
const slack = require('slack');

require('dotenv').config();

var args = require('minimist')(process.argv.slice(2));
var theDate = new Date;
var token = process.env.SLACK_TOKEN;

if (args.transcode) {
  // for now, just hard code in your file names as defaults

  var destFilename = '/Volumes/mk2/_test_materials/sadikshya_trimmed_compressed.mov'
  var sourceFilename = '/Volumes/mk2/_test_materials/sadikshya_trimmed.mov'
  var crfVal = 23;

  // if user is plugging in arguments, change the defaults

  if (args.crf) {
    crfVal = args.crf
  }
  if (args.input) {
    sourceFilename = args.input
  }
  if (args.output) {
    destFilename = args.output
  }

  // do the transcode operation
  // (see function in transcode_sync file that we are requiring above)
  transcode(sourceFilename, destFilename, crfVal);
}

if (args.slack) {

  // set defaults for user and message
  var message = "default message";
  var user = "marlon";

  // if user passed in args for message and user,
  // then change variable values,
  // otherwise we'll go with defaults

  if (args.message) {
    message = args.message
  }
  if (args.user) {
    user = args.user
  }

  // run the slackMe method with user and message
  // take a look at slack_tools.js
  // to see what happens to these values once
  // they are passed in.

  slackTools.slackMe(user, message)
}

if (args.slackchannels) {
  slackTools.listChannels();
}

if (args.slackhistory) {
  if (!args.channel) {
    console.log("you need to specify a channel");
  }
  else if (args.channel) {
    slackTools.getHistory(args.channel, 200, (err, data)=>{
      console.log(JSON.stringify(data, null, 4));
      console.log("\n\nThat's it.\n\n");
    })
  }
}
