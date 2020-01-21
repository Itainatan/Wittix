const express = require("express");
const router = express.Router();
const fs = require('fs');
const { google } = require('googleapis');

const TOKEN_PATH = 'token.json';
// const key = require("../../key");

router.post("/startWork", (req, res) => {
  const range = `A${req.body.range}`;
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    const { client_secret, client_id, redirect_uris } = JSON.parse(content).installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      start(range, oAuth2Client)
    });
  });
});

function start(range, auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  let values = [
    [
      "Start"
    ],
    [
      new Date().toJSON()
    ]
  ];
  const resource = {
    values,
  };
  sheets.spreadsheets.values.update({
    valueInputOption: "USER_ENTERED",
    spreadsheetId: '1PH32oA9AEtFW8STV4UrlfKAdy0_ycNo-7A4rydq9ugc',
    resource,
    range,
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    else console.log("succeded Start")
  });
}

module.exports = router;
