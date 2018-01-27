# thesimpleworkflow

This is where to start if you want to contribute to our ongoing project, **thelocalworkflow**.  The goal here is to give you a couple of simplified chunks of the code to play with and build on as you learn javascript.  Tutorials on how to get started can be found on Slack.

## basic setup

Here are the steps to get started:

1. make sure your machine has node and git installed (should be no problem if on one of the LL machines)
2. get into your Development folder if you have one (type `cd Development`)
3. type `git clone https://github.com/ll-dev-team/thesimpleworkflow.git` to clone the repository--it will create a new folder for thesimpleworkflow.  (Alternatively, if you have your own github account you can click the "fork" icon to fork thesimpleworkflow and work on this fork)
4. type `cd thesimpleworkflow` to change dire
5. type `npm install`
5. type `atom .`
6. create a file in the root directory of thesimpleworkflow called `.env` and add all your secret stuff (like `SLACK_TOKEN=XXXXXXXXXXXX` and `MONGODB_URL=XXXXXXXXXX` etc.)
7. most currently existing functions are available by typing `node thesimpleworkflow` + an argument or two.  For example, `node thesimpleworkflow --slackchannels` will list all the Slack channels on the ll-dev slack team (as mk to invite you if you aren't part of it yet).  For more complex commands you need to supply more arguments.   For instance, `node thesimpleworkflow --transcode --input [your file's path] --output [new filepath] --crf [a number like 23, say]` will transcode a file at quality level 23, and it deposit it at [new filepath].

Take a look at the various files and try to get a sense of how the functions they contain get "required" at the top of thesimpleworkflow.js file, before being used in the various blocks of code that follow. Also note the way we use `if` statements to check for various arguments and to assign values to variables before running the functions.  

## where to go from there

What should you do next?  Here are some fun (and seriously useful) challenges to get you started:

1. add a new `args` option to `thesimpleworkflow` and connect it to a simple function to `console.log`s a message back.  For bonus points, let the user specify the message by specifying an additional argument.
1. hook up `ffprobeSync` to `thesimpleworkflow` so that the user can get the stats on a sample video file by typing `node thesimpleworkflow --ffprobe`.  You can dump all the stats to start, but try working at `console.log`ing out some of its features--what is its width?  bitrate?  starting timecode?  Try logging these out for the user in an easily readable form.  You can hardcode the file path for a sample file and the specified features to start, but ultimately you may want to let the user specify these as additional arguments.
1. now that you have the data on the file, write it out to a .txt file using `fs.writeFileSync`.  Check out [this link](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options) for documentation on that function.
2. use `fs.readdirSync` to get an array of files in a folder, then loop through that folder to rename the files.  Grab the metadata from each file using `ffprobeSync` while you're at it and store it in an array that'll let you write out some interesting notes on the files to a `.txt` file (this file could be part of the "shootnotes" for a given video shoot in our studio).  Documentation on fs.readdirSync can be found in the [same place as the rest of the fs documentation you saw above](https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options).
3. take a look at how we spawn "child processes" like ffprobe in `tools/ffprobetools.js` and ffmpeg in `tools/transcode_sync.js`.  Now spawn your own `ffmpeg` child process that does something else that ffmpeg does well.  Maybe you can make an [animated gif](http://www.bugcodemaster.com/article/convert-video-animated-gif-using-ffmpeg) from a piece of video; maybe you can [export a still](https://ffmpeg.org/ffmpeg.html#Video-Options).
6. find a completely new module on [npmjs.com](https://www.npmjs.com/) and require it at the top of `thelocalworkflow.js`.  Use it to do something useful.  Some ideas = download a media file from [YouTube](https://www.npmjs.com/package/youtube-dl) or [Instagram](https://www.npmjs.com/package/instagram-save), tell us the [date in a pretty format](https://www.npmjs.com/package/dateformat), make some [Trello cards](https://www.npmjs.com/package/trello) that remind you to [make more Trello cards](https://media.giphy.com/media/3o7TKO2211wmPgN3Xi/giphy.gif). 
