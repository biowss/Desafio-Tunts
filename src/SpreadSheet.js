const { GoogleSpreadsheet } = require('google-spreadsheet');
const Credentials = require('./credentials.json');
const Settings = require('./settings.json');

exports.editSpreadSheet = async() =>{
  // Id da planilha 
  const DocumentId = Settings['document-id'];

  // Initialize the sheet - doc ID is the long id in the sheets URL
  const document = new GoogleSpreadsheet(DocumentId);

  // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  await document.useServiceAccountAuth(Credentials)

  // loads document properties and worksheets
  await document.loadInfo();

  // get first sheet of the document 
  const sheet = document.sheetsByIndex[0];

  // set the header columns for each row / how many columns
  await sheet.loadHeaderRow()
  sheet.headerValues = Settings['header-names']
    
  // get rows of sheet
  let rows = await sheet.getRows(); 

  // total students of class
  const totalClasses = parseInt(rows[0]._rawData.toString().split(': ')[1])

  // manipulate rows and save
  rows.slice(2).forEach((row) => {
    try {
      let p1 = parseInt(row._rawData[3])
      let p2 = parseInt(row._rawData[4])
      let p3 = parseInt(row._rawData[5])
      let abscence = parseInt(row._rawData[2])

      let averageGrade = ((p1 + p2 + p3) / 3).toFixed()
      let averageAbscence = ( abscence / totalClasses) * 100
        
      
      // test for abscences and averate grade
      if(averageAbscence > Settings['abscence-limit']) {
        row._rawData[6] = 'Reprovado por Falta'        
        row._rawData[7] = 0
      }
      else if(averageGrade < Settings['grade-final']) {
        row._rawData[6] = 'Reprovado por Nota'  
        row._rawData[7] = 0
      }
      else if(averageGrade < Settings['grade-approval']) {
        row._rawData[6] = 'Exame Final'
        row._rawData[7] = 100 - averageGrade
      }
      else {
        row._rawData[6] = 'Aprovado'
        row._rawData[7] = 0
      }

    }
    catch(error){
      console.log("Error", error)
    }
    // save modifications
    row.save()
  })
}