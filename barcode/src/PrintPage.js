
import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import BarcodeTest from "./BarcodeTest";
import ComponentToPrint from "./ComponentPrint";


export default function PrintComponent() {
  let componentRef = useRef();

  return (
    <>
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <Button>Print barcode</Button>}
          content={() => componentRef}
        />
        

        {/* component to be printed */}
        <div ><ComponentToPrint ref={(el) => (componentRef = el)} /></div>
        
      </div>
    </>
  );
}
