const { App } = require('@slack/bolt');

if (process.env.DEV_ENV == 'dev-smee') {
  require('dotenv').config();
  const SmeeClient = require('smee-client')

  const smee = new SmeeClient({
    source: process.env.SMEE_WEBHOOK_URL,
    target: 'http://localhost:'+ (process.env.PORT || 3000) + '/slack/events',
    logger: console
  })
  const events = smee.start()
}

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

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
