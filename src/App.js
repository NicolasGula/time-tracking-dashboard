import '../src/styles/App.css';
import { useState } from 'react';
import data from './data.json';
import CardUser from './components/CardUser';
import CardActivity from './components/CardActivity';

export default function App() {
//Por default se despliega la tabla con 
  const [period, setPeriod] = useState('Daily');
//Intercambia entre "Daily",'Weekly' y "Monthly" 
//dependiendo de la eleccion del usuario.
  function changePeriod(value){
    setPeriod(value)
  }

  const datos = data.map(data => 
    (<CardActivity 
      key={data.id} 
      title={data.title}
      icon={data.icon}
      current={data.timeframes[period].current}
      previous={data.timeframes[period].previous}
    />))

  return (
    <div className='container'>
      <div className='dashboard'>
        <CardUser change={changePeriod}/>
        <div className='card-activities'>
          <div className='wrap-cards'>
            {datos}
          </div>
        </div>
      </div>
    </div>
  );
};