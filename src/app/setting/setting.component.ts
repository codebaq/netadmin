import { Component } from '@angular/core';
import { CSVRecord } from './CSVRECORD'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
 CSV : any = File
  constructor(){}

  
  ChangeCSV(event : any){
    this.CSV = event.srcElement.files
    let input = event.target
    let CsvReader = new FileReader();
    CsvReader.readAsText(input.files[0])
    CsvReader.onload = () => {
      let resultado = CsvReader.result
      console.log(resultado)
    }
  }

  GetDataCSV(){
    let CSVArray = []     
  }

}

