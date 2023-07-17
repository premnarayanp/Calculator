import "../styles/actionBar.css";

 const ActionBar=(props)=>{
  
  return (
    <div className='action-bar'>
      
          <div className="row">
             <button onClick={props.handleClearDisplay} data-value="C">C</button>
             <button onClick={props.changeSign} data-value="+/-">+/-</button>
             <button onClick={props.handleOnClickOperatorBtn} data-value="%">%</button>
             <button onClick={props.handleOnClickOperatorBtn} data-value="/" className='operators'>/</button>
          </div>

          <div className="row">
             <button onClick={props.handleOnClickNumberBtn} data-value="7">7</button>
             <button onClick={props.handleOnClickNumberBtn} data-value="8">8</button>
             <button onClick={props.handleOnClickNumberBtn} data-value="9">9</button>
             <button onClick={props.handleOnClickOperatorBtn} data-value="*" className='operators'>*</button>
          </div>

          <div className="row">
             <button onClick={props.handleOnClickNumberBtn} data-value="4">4</button>
             <button onClick={props.handleOnClickNumberBtn} data-value="5">5</button>
             <button onClick={props.handleOnClickNumberBtn} data-value="6">6</button>
             <button onClick={props.handleOnClickOperatorBtn} data-value="-" className='operators'>-</button>
          </div>

          <div className="row">
             <button onClick={props.handleOnClickNumberBtn} data-value="1">1</button>
             <button onClick={props.handleOnClickNumberBtn} data-value="2">2</button>
             <button onClick={props.handleOnClickNumberBtn} data-value="3">3</button>
             <button onClick={props.handleOnClickOperatorBtn} data-value="+" className='operators'>+</button>
          </div>

          <div className="row"> 
            <button onClick={props.handleOnClickNumberBtn} data-value="0" className='zero-btn'>0</button>
            <button onClick={props.handleOnClickOperatorBtn} data-value=".">.</button>
            <button onClick={props.handleOnClickEqualBtn} data-value="=" className='operators'>=</button>
          </div>

    </div>         
);
  
  }
    export default ActionBar;
