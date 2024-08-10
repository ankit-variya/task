const cron = require('node-cron');
const knex = require('./db/knex');
const nodemailer = require('nodemailer');

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER || 'add your mail',
    pass: process.env.PASSWORD || 'generate your app password'
  }
});

// Function to clean up old records
async function cleanUpOldRecords() {
  try {
    const result = await knex('users')
      .where('createdAt', '<', knex.raw('NOW() - INTERVAL 30 DAY'))
      .del();

    console.log(`Cleaned up ${result} old records.`);
  } catch (error) {
    console.error('Error cleaning up old records:', error);
  }
}

// Function to send summary report = 
async function sendSummaryReport() {
  try {
    const newUsers = await knex('users')
      .where('createdAt', '>=', knex.raw('NOW() - INTERVAL 1 DAY'))
      .select('*');

    const userEmails = newUsers.map(user => user.email).join(', ');
    console.log('userEmails', userEmails)

    const mailOptions = {
      from: process.env.USER || 'add your mail',
      to: process.env.ADMIN || 'add admin mail',
      subject: 'Daily New Users Summary',
      text: `New users added today: ${userEmails}`
    };

    await transporter.sendMail(mailOptions);
    console.log('Summary report sent.');
  } catch (error) {
    console.error('Error sending summary report:', error);
  }
}

// Schedule the cron job to run at midnight
cron.schedule('0 0 * * *', async () => {
  console.log('Running cron job at midnight');
  
  await cleanUpOldRecords();
  await sendSummaryReport();
});
