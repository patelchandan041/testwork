import React,{useState} from 'react'
import './App.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
function App() {
  const [show,setShow]=useState(false)
  const [vow,setVow]=useState(false)
  const [comp,setComp]=useState(false)
  const [selectedDate, setSelectedDate] = useState(null);

  const data = [
      { value: 'Commercial', label: 'Commercial' },
      { value: 'Residental', label: 'Residental' },
      { value: 'Govermental', label: 'Govermental' },
    ];

  return (
     <div className="App">
     
       <div className="header">
            <div className="header__left">
              <img className="header__img" src="Layer2.png" alt="dadadadadad" />
            </div>
            <div className="header__mid">
                <h3>Globalive3D</h3>
            </div>
            <div className="header__right">
                <div className="header__right1">
                    <img className="right1__img"  src="speedometer.svg" alt="" />
                    <img className="right1__img" src="Path4.svg" alt="" />
                    <img className="right1__img" src="database.svg" alt="" />
                    <img className="right1__img" src="calendar.svg" alt="" />
                </div>
                <img className="circle" src="circle.svg" alt="" />
            </div>
        </div>

         <div style={{height:"86.4vh",width:"auto",backgroundColor:"#242331"}}>

           <div style={{}} className="midContainer">
         {
           show?
           <div className="calender">
            <div className="calender__top">
            <h2>Attribute</h2>
            <img className="top__img" src="cross.svg" onClick={()=> setShow(false)} alt="" />
            </div>
            <img style={{width:"230px",marginLeft:"50px"}} src="1.png" alt="" />
            <p style={{color:"white",marginRight:"15px",marginLeft:"50px",fontSize:"0.7rem"}}>Type of property</p>

            <div  className="dropdown">
                 <Select
                 style={{backgroundColor:"#66392E"}}
                 className="dropdown__select"
                 options={data}
                 />
             </div>

            <p style={{color:"white",marginRight:"178px",marginLeft:"50px",fontSize:"0.7rem"}}>Description</p>

            <div className="div">
            <small style={{color:"#D5B493",}}>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit.Minima natus suscipit 
                delectus culpa perspiciatis quae 
                 quos, enim optio quidem provident minus 
                 quos, enim optio quidem provident minus  
                </small>
            </div>

            <div className="date" >
            <p style={{color:"white",marginLeft:"40px",marginRight:"118px",fontSize:"0.7rem"}}>Record date :</p>
            <DatePicker 
            placeholderText="select date"
            className="datepicker"
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat='dd/MM/yyyy'
            filterDate={date => date.getDay() !== 6 && date.getDay() !==0}
            showYearDropdown
            scrollableMonthYearDropdown
            />
            </div>
            <button style={{backgroundColor:"#D5B493",padding:"5px 15px",marginLeft:"120px",marginTop:"10px"}}>Submit</button>
       
        </div> :null
        }
        {
          vow?
          <div className="charts">
          <div className="top">
              <h3>Charts</h3>
              <img className="top__img" src="cross.svg" onClick={()=> setVow(false)} alt="" />
          </div>
          <img style={{width:"300px",marginTop:"30px"}} clasName="chart" src="chart0.svg" alt="" />
          <img style={{width:"300px",marginTop:"30px"}} clasName="chart" src="chart.svg" alt="" />
          
          <img style={{width:"300px",marginTop:"30px"}} clasName="chart" src="dart.svg" alt="" />
      </div> :null
        }
       
        </div>
        
         </div>

         <div className="bottom">
            <div className="bottom__left">
           <img className="bottom__img" src="wp.svg" onClick={()=>setShow(!show) } alt="" />
           <img className="bottom__img" src="chart-pie.svg" onClick={()=>setVow(!vow) } alt="" />
            </div>
            <div className="bottom__right">
                 
            </div>
        </div>
        
   <img style={{color:"#D5B493",height:"20px",position:"fixed",right:"0",bottom:"0",
   marginRight:"10px",marginBottom:"10px"}} src="fullscreen.svg"  onClick={()=>setComp(!comp)} alt=""
  />
      
         </div>
  );
}

export default App;
