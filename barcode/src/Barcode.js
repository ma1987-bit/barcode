import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect ,useParams} from "react";
import { useBarcode } from '@createnextapp/react-barcode';
 
 
function Barcode()
 
{
    const [barcod,setBarcod] = useState({
      productName:'',
      productNumber:''
    });
 
    const [getbarcode,setGetbarcode] = useState([]);
   
    const { productName, productNumber} = barcod; // Array Destructutring
 
   
   // Handling Input values here 
 
    const onInputChange = e => {
      setBarcod({ ...barcod, [e.target.name]: e.target.value });
    };
  
   // Code for fetching Barcode Number from database  on window load
    const  loadBrcode =()=>
    {
      var response = fetch('http://localhost/react_projects/react_barcod/load_barcode.php')
      .then(function(response){
           return response.json();
        })
      .then(function(myJson) 
        {
        setGetbarcode(myJson);
        });
    }
 
    useEffect(() => {
      loadBrcode();
    }, []);
 
      const { inputRef } = useBarcode({
        value:getbarcode.ProductNumber, //Product Number from database 
        options: {
          background: '#ffffff',
          fontSize: 20,
          margin: 30,
          fontOptions: "bold",
          width: 1,
          height:70
        }
      });
     
    // Code for Inserting barcode into database
    const submitResult = (e) =>
    {
        var proName = barcod.productName;
        var proNum = barcod.productNumber;
        let sendReqData = barcod;
        var response = fetch('http://localhost/react_projects/react_barcod/generate_barcode.php',{
          method:"POST",
          headers: {
           "Content-Type": "application/json",
          },
          body: JSON.stringify({ barCodeProductName:proName, barCodeProNum:proNum }), // This will send to php 
          }).then(function(response){
           return response.json();
          })
          .then(function(myJson) 
          {
            loadBrcode();
          });
    }      
  return(
   
    <div class="container">
      <h4 class="mt-3 text-success mb-4">Generate Barcode using ReactJS</h4>
      <div class="row">  
        <div class="col-sm-4" style={{border:"1px solid rgb(206 200 200)"}}>
       
        <h4 style={{color:"green"}} id="success"></h4>
        <h5 class="text-center  ml-4 mb-5 mt-4">Generate Barcode</h5>
          <div class="form-group">
           <input type="text" class="form-control  mb-4" value={productName} name="productName" onChange={e => onInputChange(e)}   placeholder="Enter Product Name" required=""/>
         </div>
 
         <div class="form-group">
          <input type="text" class="form-control  mb-4"  value={productNumber}  name="productNumber" onChange={e => onInputChange(e)}  placeholder="Enter Barcode Number" required=""/>
         </div>
 
        <button type="submit" class="btn btn-primary" onClick={submitResult} name="submit">Generate Barcode</button>  
      </div>    
      <div class="col-sm-8" style={{border:"1px solid rgb(206 200 200)"}}>
      <h5 class="text-center  ml-4 mb-5 mt-4">Barcodes</h5>
         <table class="table table-hover mb-5">
         <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Barcode Number</th>
          </tr>
        </thead>
        <tbody id="output">
           <tr>
             <td>1</td>
             <td><h5>{getbarcode.ProductName}</h5></td>
             <td><svg ref={inputRef}/></td>
           </tr>    
        </tbody>
        </table>
     
        </div>
      </div>
    </div>    
  
 
  );
}
 
export default Barcode;