const fs = require("fs");
const path = require("path");
const cp = require('child_process');

function transcode(sourcePath, destinationPath, crfVal){
  console.log('\n\n\nin the transcode function\n\n');
  console.log("transcode will happen here on path \n" + sourcePath);
  console.log("and we'll put it here: \n" + destinationPath);
  console.log(process.env.FFMPEG_PATH);
  var output = cp.spawnSync(process.env.FFMPEG_PATH, ['-i', sourcePath, '-c:v', 'libx264', '-vf', 'format=yuv420p', '-preset', 'slow', '-crf', crfVal, '-c:a', 'aac', '-b:a', '128k', destinationPath]
  , {
    stdio: [
      0, // Use parent's stdin for child
      'pipe', // Pipe child's stdout to parent
      2 // Direct child's stderr to a file
    ]
  }
);
  console.log("done");

  // TODO: if you want, plug your slack username in below and uncomment:

  // var thePayload = 'payload={"channel": "#ll-tests", "username": "theworkflow-bot", "text": "<@marlon>: just transcoded ' + path.basename(sourcePath) + ' and put it here: ' + destinationPath + ' .", "icon_emoji": ":desktop_computer:"}';
  // cp.spawnSync("curl", ['-X', 'POST', '--data-urlencode', thePayload, process.env.SLACK_WEBHOOK_URL]);

  console.log("\n\n");
  }

module.exports.transcode = transcode;
