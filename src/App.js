import React from "react";
import { useState } from "react"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function App() {

  const [Height , setHeight] = useState();
  const [Weight , setWeight] = useState();
  const [BMI , setBMI] = useState();
  const [Information , setinfo] = useState();


  const Cal = () => {
    var calbmi = ((Weight/(Height*Height))*10000).toFixed(2);
    setBMI(calbmi);
    if(calbmi < 18.5){
      setinfo("Gay");
    }else if(18.5< calbmi <24.9){
      setinfo("Binh Thuong");
    }else if( 24.9 < calbmi <29.9){
      setinfo("Thua Can");
    }else{
      setinfo("Beo Phi");
    }
  };

  return (
    <div className="App">
      <div className="BMI-Cal">
        <h1>BMI Tracker</h1>
        <div className="Form">
            <form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Height(cm)</Form.Label>
                <Form.Control onChange={(e) => setHeight(e.target.value)} type="height" placeholder="Enter Height" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Weight(kg)</Form.Label>
                <Form.Control onChange={(e) => setWeight(e.target.value)} type="weight" placeholder="Enter Weight" />
              </Form.Group>           
            </form>
            <Button onClick={Cal}>
                Submit
            </Button>
            
        </div>
        <div className="Result">
          <h3>Chi So BMI:{BMI}</h3>
          <h3>Tinh Trang:{Information}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;