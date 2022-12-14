var cron = require('node-cron');
// import cron from 'node-cron'

cron.schedule('* * * * * *', () => {
  console.log('running a task every minute');
});





// How to start :
// COMMAND : node cron-job.js