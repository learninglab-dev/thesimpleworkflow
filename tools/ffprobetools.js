var fs = require("fs");
var ffmpeg = require('fluent-ffmpeg');
const cp = require('child_process');

// we're going to define two different functions
// one is going to use the fluent-ffmpeg module
// one is going to just use cp.spawnSync

function ffprobe (filePath, array) {
  ffmpeg.ffprobe(filePath, array, function(err, metadata) {
      console.log("in the ffprobe function");
      // console.log(JSON.stringify(metadata));
      array.push(JSON.stringify(metadata));
      // array.push({file: filePath, ffprobe: metadata})
  });
}

function ffprobeSync(videoFilePath){
  // this is equivalent of running "ffprobe -v quiet -print_format json -show_format -show_streams [file]"
  var output = cp.spawnSync(process.env.FFPROBE_PATH, ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', videoFilePath], { encoding : 'utf8' });
  // console.log('\n\n\nGoing to add this, we hope.\n\n');
  // console.log(output.stdout);
  // var video_meta = JSON.parse(output.stdout);
  return output.stdout;
  // console.log(video_meta.streams[0].codec_long_name);
}

module.exports.ffprobe = ffprobe;
module.exports.ffprobeSync = ffprobeSync;
