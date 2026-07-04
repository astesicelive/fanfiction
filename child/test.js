import axios from 'axios';
let sheetId = ${{ secrets.JP_SHEET }}
const sheet_data = await ( 
  await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?includeGridData=true&key=AIzaSyA_FFL4muIlo-rOMT1ribmrOJ3_MwDr9o8`)
).data;
