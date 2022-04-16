 import { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';

import BarChart from './BarChart';
import PieChart from './PieChart'
import NavbarHome from '../Components/NavbarHome'
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

function Chart() {
  const [data, setData] = useState({
    datasets: [{
        label: "CHART INCREASE TRANSACTION",
        data: [],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  labels: [], 
});


  useEffect(()=> {
    const fetchData = () =>  {
      fetch('https://company-transaction-server.herokuapp.com/report').then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        
        const label =[];
        const data = [];
          const formatDate =(value) => {
    
  let timeData = new Date(value) 
  const timeDate = timeData.getDate()
  const timeMonth = timeData.getMonth() + 1
  const timeYear = timeData.getFullYear()
  return `${timeDate}-${timeMonth}-${timeYear}`
}

        for(var i of res) {
           
            label.push(formatDate(i.Transaction.date));
            data.push(i.Transaction.total)
        }
        // data.push(balance)

        setData(
          {
            datasets: [{
                label: "CHART INCREASE TRANSACTION",
                data:data,
                backgroundColor:[
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                    "red"
                ]
            },
          ],
          labels:label, 
        }
        )

       

      }).catch(e => {
        console.log("error", e)
      }) 
    }
  fetchData();
  }, [])

  


  return (
    <section>
      <NavbarHome />
       <div className="home">
      <h2>REPORT CHART</h2>
    <div className="table"></div>
    <div   style={{display:'flex'}}>
       <div style={{ width: 500 }}>
        <PieChart data={data} />
      </div>
      <div style={{ width: 800, margin:"10px"}}>
        <BarChart data={data} />
      </div>
    </div>
    </div>
    </section>
  );
}

export default Chart;
