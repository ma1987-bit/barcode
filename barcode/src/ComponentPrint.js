import React from "react";
import Barcode from "react-barcode";
import './PrintPage.css'
class ComponentToPrint extends React.Component {
    render() {
        const current = new Date();
  const date = `${current.getDate()}${current.getMonth()+1}${current.getFullYear()}${current.getHours()}${current.getMinutes()}`;

      return (
        <div className="const_pageStyle ">
           <Barcode value={"TSR_"  +  date} 
      />
        </div>
      );
    }
  }
  export default ComponentToPrint;