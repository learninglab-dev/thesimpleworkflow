# thesimpleworkflow

This is where to start if you want to contribute to our ongoing project, **thelocalworkflow**.

Here are the steps to get started:

1. make sure your machine has node and git installed (should be no problem if on one of the LL machines)
2. get into your Development folder (type "cd Development")
3. type `git clone https://github.com/ll-dev-team/thesimpleworkflow.git`
4. type `cd thesimpleworkflow`
5. type `npm install`
5. type `atom .`
6. create a file in the root directory of thesimpleworkflow called `.env` and add all your secret stuff (specifically your slack token, mongo url, etc.)
7. most currently existing functions are available by typing `node thesimpleworkflow` + an argument or two.  For example, `node thesimpleworkflow --slackchannels` will list all the Slack channels on the ll-dev slack team (as mk to invite you if you aren't part of it yet).  For more complex commands you need to supply more arguments.   For instance, `node thesimpleworkflow --transcode --input [your file's path] --output [new filepath] --crf [a number like 23, say]` will transcode a file at quality level 23, and it deposit it at [new filepath].
