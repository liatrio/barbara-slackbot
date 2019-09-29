const bolt = require('./bolt');

(async () => {
  await bolt.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
