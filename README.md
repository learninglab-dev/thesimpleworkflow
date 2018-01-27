# thesimpleworkflow

This is where to start if you want to contribute to our ongoing project, **thelocalworkflow**.  The goal here is to give you a couple of simplified chunks of the code to play with and build on as you learn javascript.  Tutorials on how to get started can be found on Slack.

Here are the steps to get started:

1. make sure your machine has node and git installed (should be no problem if on one of the LL machines)
2. get into your Development folder if you have one (type `cd Development`)
3. type `git clone https://github.com/ll-dev-team/thesimpleworkflow.git` to clone the repository--it will create a new folder for thesimpleworkflow.  (Alternatively, if you have your own github account you can click the "fork" icon to fork thesimpleworkflow and work on this fork)
4. type `cd thesimpleworkflow` to change dire
5. type `npm install`
5. type `atom .`
6. create a file in the root directory of thesimpleworkflow called `.env` and add all your secret stuff (like `SLACK_TOKEN=XXXXXXXXXXXX` and `MONGODB_URL=XXXXXXXXXX` etc.)
7. most currently existing functions are available by typing `node thesimpleworkflow` + an argument or two.  For example, `node thesimpleworkflow --slackchannels` will list all the Slack channels on the ll-dev slack team (as mk to invite you if you aren't part of it yet).  For more complex commands you need to supply more arguments.   For instance, `node thesimpleworkflow --transcode --input [your file's path] --output [new filepath] --crf [a number like 23, say]` will transcode a file at quality level 23, and it deposit it at [new filepath].

What should you do next?  Here are some fun (and in many cases seriously useful) challenges to get you started:

1. `ffprobeSync` a video and write that out to a .txt file using `fs.writeFileSync`.  Check out [this link](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options) for documentation on that function. If this is too easy, try grabbing some specific bits of data from the `ffprobeSync` output and print out some relevant and elegantly formatted information on the source file.
2. use `fs.readdirSync` to get an array of files in a folder, then loop through that folder to rename the files.  Grab the metadata from each using `ffprobeSync` while you're at it and write some relevant bits of this data out to a `.txt` file.  Documentation on fs.readdirSync can be found in the [same place as the rest of the fs documentation you saw above](https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options).
