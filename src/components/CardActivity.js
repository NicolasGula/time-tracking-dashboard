export default function CardActivity(props){
    
    return(
        <div className={'card ' + props.title.toLowerCase()}>
        <div className='icon-holder'>
          <img src={props.icon} alt='work-icon' />
        </div>
        <div className='data-holder'>
          <span className='title'>
            <p>{props.title}</p>
            <img className='ellipsis-img' src="../img/icon-ellipsis.svg" alt='ellipsis-icon' />
          </span>
          <div className='data'>
            <p className="hours">{props.current}hrs</p>
            <p className="timeframe">Last Week - {props.previous}hrs</p>
          </div>
        </div>
      </div>
    )
}