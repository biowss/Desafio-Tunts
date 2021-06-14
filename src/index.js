const SpreadSheet = require('./SpreadSheet');

(async function () {
  try {
    await SpreadSheet.editSpreadSheet()
    console.log('Success!');
    console.log('It should take a few seconds for google to update the spreadsheet.')
  } catch (error) {
    console.error('Error:' + error)
  }
})()