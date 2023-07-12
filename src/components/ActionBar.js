import "../styles/actionBar.css";

 const ActionBar=()=>{
  
  return (
    <div className='action-bar'>
      <table className="action-btn-table">
        <tr>
          <td>C</td>
          <td>+/-</td>
          <td>%</td>
          <td className='operators-btn'>%</td>
        </tr>

        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td className='operators-btn'>*</td>
        </tr>

        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td className='operators-btn'>-</td>
        </tr>

        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td className='operators-btn'>+</td>
        </tr>

        <tr>
          <td colspan='2'>0</td>
          <td>.</td>
          <td className='operators-btn'>=</td>
        </tr>

      </table>

    </div>         
);
  
  }
    export default ActionBar;