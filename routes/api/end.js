const express = require("express");
const router = express.Router();
const { google } = require('googleapis');

const key = require("../../key");

router.post("/endWork", (req, res) => {
  const range = `E${req.body.range}`;
  key(end, range);
});

function end(range, auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  let values = [
    [
      "End"
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
  });
}

module.exports = router;
