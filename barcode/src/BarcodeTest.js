var React = require('react');
var ReactDOM = require('react-dom');
var Barcode = require('react-barcode');



const BarcodeTest = () => {
  const current = new Date();
  const date = `${current.getDate()}${current.getMonth()+1}${current.getFullYear()}${current.getHours()}${current.getMinutes()}`;
 
  return (
    
    <div className=''>
      <Barcode value={"TSR_"  +  date} 
      />
      </div>
  )
}

export default BarcodeTest