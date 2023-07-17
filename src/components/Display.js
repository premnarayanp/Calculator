import "../styles/display.css";
 const Display=(props)=>{
  return (
    <div className='display'>
        <ul className="query-list">
         {//purpose of reversing order of map to ,align latest query show/scroll on bottom side,that again reverse by flex-column-reverse property
          props.queries.map((query,index)=>(
            <li>{props.queries[props.queries.length - 1 - index]}</li>
          ))
         }
       </ul>
        <input className='query' value={props.query}/>
       <p className='result'>{props.result}</p>
    </div>
  ); 
  }

  console.log(document.getElementById('abc'));
    export default Display;
    
    // <p id='query'  className='display-items'>{props.query}</p>
    //   <p id='result' className='display-items'>{props.result}</p>