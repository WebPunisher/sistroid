import * as React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

export default function ToolbarGrid() {

  const stu = {
      columns: [{field: "id", hide: true},
                {field: "name", headerName: "Name", width: 160},
                {field: "instructor", headerName: "Instructor", width: 200},
                {field: "crn", headerName: "CRN", width: 160},
                {field: "credits", headerName: "Credits", width: 160},
                {field: "capacity", headerName: "Capacity", width: 160},
                {field: "major_rest", headerName: "Major Restriction", width: 160},
                {field: "time", headerName: "Time", width: 160},
                {field: "letters", headerName: "Letters", width: 160}],
      rows:[
          {id:"1",name:"ISE305",instructor:"Ahmet Cuneyt Tantug",crn:"507", credits: "4",capacity:20,major_rest:"ISE,BLG",time:"PZT 9:30-12:30",letters:"A,F"},
          {id:"2",name:"FIZ204",instructor:"Yusuf Yaslan",crn:"389", credits: "4",capacity:15,major_rest:"FIZ,PHY",time:"CRS 12:30-15:30",letters:"K,L"},
          {id:"3",name:"BLG307",instructor:"Sarp Ozdemir",crn:"585", credits: "3", capacity:30,major_rest:"ISE,ENG",time:"SAL 15:30-17:30",letters:"B,C"},
          
        
        ]
  }
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 30,
    maxColumns: 4,
  });

  return (
    <div>
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            {...data}
            components={{
            Toolbar: GridToolbar,
            }}
        />
        </div>
        <button onClick={console.log(data)}> hi</button>
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            {...stu}
            components={{
            Toolbar: GridToolbar,
            }}
        />
        </div>
    </div>
  );
}