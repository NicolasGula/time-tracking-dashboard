import { useState } from "react";
import Options from "./Options";

export default function CardUser(props) {

  const periods = ['Daily', 'Weekly', 'Monthly'];
  const [isActive, setActive] = useState('Daily');

  const toggleClass = (val) => {
    setActive(val)
  }

  const wrapperFunctions = (val) => {
    props.change(val);
    toggleClass(val);
  }

  const options = periods.map(period => (
    <Options
      option={period}
      changeOption={wrapperFunctions}
      active={isActive}
    />
  ))

  return (
    <div className='card-user'>
      <div className='profile'>
        <img src="../img/image-jeremy.png" alt="userPicture" />
        <div className='content'>
          <p>Report for</p>
          <h1 id='name'>Jeremy Robson</h1>
        </div>
      </div>
      <div className='options'>
        {options}
      </div>
    </div>
  )
}