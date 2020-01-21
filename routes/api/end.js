const express = require("express");
const router = express.Router();
const fs = require('fs');
const { google } = require('googleapis');

const TOKEN_PATH = 'token.json';
const testing = require("../../key");

router.post("/endWork", (req, res) => {
  const range = `A${req.body.range}`;
  const auth = testing.sometest()
  console.log(testing.sometest())
});

function start(range, auth) {
  console.log(range)
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
