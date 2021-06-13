const SpreadSheet = require('./SpreadSheet');

(async function () {
  try {
    await SpreadSheet.editSpreadSheet()
    console.log('Success!');
  } catch (error) {
    console.error('Error:' + error)
  }
})()