# barbara-slackbot

A Slackbot designed to help automate a Liatrio style technical exercise. 

## Tech Stack
* [⚡️ Bolt App](https://slack.dev/bolt/tutorial/getting-started)

## Standards
We will be using ESLint with AirBnB style guidelines being enforced.

## Local Development 
#### Requirements
1. Environment Variables:
  1. `SLACK_SIGNING_SECRET`
  2. `SLACK_BOT_TOKEN` which will start with `xoxb-`
2. ngrok

#### Running Locally
1. `npm run dev` will start [nodemon](https://nodemon.io/);
2. `ngrok http 3000` will start the tunnel to Localhost 3000
3. Update Request URLs for Slack app. Use the https url and don't forget to append `/slack/events` to both URLs.
  1. Event Subscriptions 
  2. Interactive Components
4. You must _Subscribe to Bot Events_ under _Event Subscriptions_. Add the following:
  1. `message.channels`
  2. `message.groups`
  3. `message.im`
  4. `message.mpim`

_Note: You will have to update the URL's everytime you restart ngrok_

#### Future Goals
[ ] Update Readme to use SMEE or another tunnelling service
