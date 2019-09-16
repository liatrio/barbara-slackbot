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
2. ngrok or smee for webhook tunnels

#### Running Locally with ngrok
1. `npm run dev` will start [nodemon](https://nodemon.io/);
2. `ngrok http 3000` will start the tunnel to Localhost 3000
3. Update Request URLs for Slack app. Use the https url and don't forget to append `/slack/events` to the URL.
   1. Event Subscriptions 
   2. Interactive Components
4. _Note: You will have to update the URL's everytime you restart ngrok_

#### Running Locally with smee.io
1. Visit [smee.io](https://smee.io/); to get your payload URL (`SMEE_WEBHOOK_URL`)
2. Create a `.env` file for local development
   1. Add your `SMEE_WEBHOOK_URL`,`SLACK_BOT_TOKEN`,and `SLACK_SIGNING_SECRET` to the `.env` file (It is in the `.gitignore` so don't worry. #trustops)
3. `npm run dev-smee` will start [nodemon](https://nodemon.io/); and [smee.io](https://smee.io/); with the tunnel to http://localhost:3000/slack/events
4. Update Request URLs for the Slack app to your SMEE_WEBHOOK_URL
  1. Event Subscriptions 
  2. Interactive Components




