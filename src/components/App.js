import React, { useState,useRef,useEffect } from 'react';
import "../styles/App.css";
import {Display,ActionBar} from './index';

function App(){

const [operator,setOperator]=useState(false);
const [operandStartIndex,setOperandStartIndex]=useState(0);
const [query,setQuery]=useState('');
const [queries,setQueries]=useState(['']);
const [result,setResult]=useState('');

//set query and results when any number clicked/any operands presents for calc
const onClickNumberBtn=(event)=>{
    const digit=event.target.getAttribute('data-value');
    if(query.charAt(query.length-1)===')'){
      const newQuery=query.substring(0,query.length-1);
      const finalQuery=newQuery.concat(digit+')');

      setQuery(finalQuery);
      setResult(eval(finalQuery));
      setOperator(false);
      return;
    }
   //setQuery(query+digit);
    setQuery(query.concat(digit));
    setResult(eval(query+digit));
    setOperator(false);
}

//set only query when any operator clicked like -,+,*,/,%
const onClickOperatorBtn=(event)=>{
   
  if(operator|| query===''){
      return;
  }
  setQuery(query.concat(event.target.getAttribute('data-value')));
  setOperator(true);
  setOperandStartIndex(query.length);
}

//set only query in queries array when  clicked "="
const onClickEqualBtn=(event)=>{
  if(query===''){
    return;
  }
    setResult(result);
    setQuery(result.toString());
    setQueries([...queries,query,"="+result]);
    //setQueries([...queries,query+event.target.getAttribute('data-value')]);
    setOperandStartIndex(0);
    setOperator(false);
}

//clear Display
const clearDisplay=(event)=>{
  setResult('');
  setQuery('');
  setQueries(['']);
  setOperator(false);
  setOperandStartIndex(0);
}


//clear Display
const changeSign=(event)=>{
if(query===''){
  return;
}

  //if  there only single operands in query,not any operator=> just change whole query sign 
  if(operandStartIndex===0){
    const newQuery=eval('-1*'+query)
    const finalQuery=newQuery<0?`(${newQuery})`:newQuery;
    setQuery(finalQuery.toString());
    setResult(eval(finalQuery.toString()));
    return;
  }

  const newQuery=query.substring(0,operandStartIndex+1);
  const operands=query.substring(operandStartIndex+1);

  //if in query is long but in last ,operands='' means nothing have any number ofter operator=>Don,t required calculation,so return
  if(operands===''){
     return;
  }
  // console.log(newQuery);
  // console.log(operands);
 const finalOperands=eval('-1*'+operands)
 const finalQuery=finalOperands<0?newQuery.concat(`(${finalOperands})`):newQuery.concat(finalOperands);
  setQuery(finalQuery);
  setResult(eval(finalQuery));
}

// const tableRef = useRef(null)
//   const scrollToBottom = () => {
//     // tableRef.current.scrollIntoView({block: "top", inline: "nearest"});
//   }

//   useEffect(() => {
//     scrollToBottom()
//   }, [queries]);

 return (
         <div className="app">
             <Display 
                query={query?query:0}
                result={result?result:0} 
                queries={queries}
              />

             <ActionBar
                handleOnClickNumberBtn={onClickNumberBtn}
                handleOnClickOperatorBtn={onClickOperatorBtn}
                handleOnClickEqualBtn={onClickEqualBtn}
                handleClearDisplay={clearDisplay}
                changeSign={changeSign}
               />
         </div>
  );
}
  export default App;