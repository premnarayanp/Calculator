import "../styles/actionBar.css";

 const ActionBar=()=>{
  
  return (
    <div className='action-bar'>
      <table className="action-btn-table">
        <tr>
          <td data-value="C">C</td>
          <td data-value="+/-">+/-</td>
          <td data-value="%">%</td>
          <td data-value="/" className='operators-btn'>/</td>
        </tr>

        <tr>
          <td data-value="7">7</td>
          <td data-value="8">8</td>
          <td data-value="9">9</td>
          <td data-value="*" className='operators-btn'>*</td>
        </tr>

        <tr>
          <td data-value="4">4</td>
          <td data-value="5">5</td>
          <td data-value="6">6</td>
          <td data-value="-" className='operators-btn'>-</td>
        </tr>

        <tr>
          <td data-value="1">1</td>
          <td data-value="2">2</td>
          <td data-value="3">3</td>
          <td data-value="+" className='operators-btn'>+</td>
        </tr>

        <tr>
          <td colspan='2' data-value="0">0</td>
          <td data-value=".">.</td>
          <td data-value="=" className='operators-btn'>=</td>
        </tr>

      </table>

    </div>         
);
  
  }
    export default ActionBar;