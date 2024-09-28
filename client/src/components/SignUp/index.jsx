import React, { useState } from "react";

import LandingNav from "../Landing/LandingNav";
import DetailsSignUp from "./DetailsSignUp";
import DocumentsSignUp from "./DocumentsSignUp";
import Navbar from "./Navbar";

function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState([]);

  const handleNextClick = () => {
    if (step === 1) {
      setStep(2); // Go to step 2 (DocumentsSignUp)
    }
  };
  
  return (
    <div>
      <Navbar />
      {step === 1 ?
        <DetailsSignUp
          handleNextClick={handleNextClick}
          step={step}
          setStep={setStep}
          setFormData={setFormData}
        />
      : <DocumentsSignUp setFormData={setFormData} formData={formData}/>}
    </div>
  );
}

export default SignUp;
