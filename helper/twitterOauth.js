var OAuth = require('oauth');
require('dotenv').config()
var oauth = new OAuth.OAuth(
     'https://api.twitter.com/oauth/request_token',
     'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
     '1.0A',
     null,
     'HMAC-SHA1'
   );

module.exports = oauth;
