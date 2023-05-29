import { Component } from '@angular/core';
import { CSVRecord } from './CSVRECORD'
import { SettingService } from './../services/setting.service'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
 CSV : any = File
  constructor(private setting : SettingService){}

  
  ChangeCSV(event : any){
    this.CSV = event.srcElement.files
    let input = event.target
    let CsvReader = new FileReader();
    CsvReader.readAsText(input.files[0])
    CsvReader.onload = () => {
      let resultado = CsvReader.result
      let csvrecordsarray = (<string>resultado).split(/\r\n|\n/)
      let headersRow = this.getHeaderArray(csvrecordsarray)
      this.CSV = this.getDataRecordsArrayFromCSVFile(csvrecordsarray,headersRow.length)
      
      console.log(this.CSV)
      //console.log(csvrecordsarray)
    }
  }

  importCSV(){
    this.CSV.forEach((element :  any) => {
      let item = JSON.parse(JSON.stringify(element))
     this.setting.ImportBD(item).then((el)=> {
      console.log('success')
     }).catch((err)=> {
       console.log('error : ' + err)
     })
     console.log(item)
    });
    
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
      if (curruntRecord.length == headerLength) {  
        let csvRecord: CSVRecord = new CSVRecord();  
        csvRecord.fecha = curruntRecord[0].trim();  
        csvRecord.ID = curruntRecord[1].trim();  
        csvRecord.PLAN_FTTH = curruntRecord[2].trim();  
        csvRecord.TIPODOCUMENTID = curruntRecord[3].trim();  
        csvRecord.DOCUMENTID = curruntRecord[4].trim();  
        csvRecord.NOMBRE = curruntRecord[5].trim();  
        csvRecord.CELULAR = curruntRecord[6].trim();  
        csvRecord.CORREO = curruntRecord[7].trim();  
        csvRecord.DIRECCION = curruntRecord[8].trim();  
        csvRecord.BARRIO = curruntRecord[9].trim();  
        csvRecord.FECHA_ENT = curruntRecord[10].trim();  
        csvRecord.FECHA_INST = curruntRecord[11].trim();  
        csvRecord.ASESOR = curruntRecord[12].trim();  
        csvRecord.WIFI = curruntRecord[13].trim();  
        csvRecord.CLAVE = curruntRecord[14].trim();  
        csvRecord.EQUIPO = curruntRecord[15].trim();
        csvRecord.ESTADO = curruntRecord[16].trim();
        csvRecord.COMENT = curruntRecord[17].trim();    
        csvRecord.CORTES = curruntRecord[18].trim();    
        csvRecord.REFERENCIA_DE_PAGO = curruntRecord[19].trim();  
        csvRecord.ZONA = curruntRecord[20].trim();  
        csvArr.push(csvRecord);  
      }  
    }  
    return csvArr;  
  }  

  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  

}

