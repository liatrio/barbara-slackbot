const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.message('hello', ({ message, say }) => {
  say({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `Hey there <@${message.user}>!`,
        },
        accessory: {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Click Me',
          },
          action_id: 'button_click',
        },
      },
    ],
  });
});

app.action('button_click', ({ body, ack, say }) => {
  ack();
  say(`<@${body.user.id}> clicked the button`);
});

app.message(/about/, ({ message, say }) => {
  say({
    blocks: [{
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Hello! :waving: I'm Barbara and I will help set up interviews for you!"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "To get started run `@barbara create interview for <candidate name>`"
        }
      }
    ]
  });
});

app.message(/^create interview for [a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)+/, ({ context }) => {
  const applicantName = context.matches[0].replace('create interview for ', '');
  console.log(applicantName);
});


module.exports = app;
