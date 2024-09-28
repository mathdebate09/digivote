import React, { useEffect, useState } from "react";

import { handleAudio } from "../../utils/helper";
import DetailsSignUp from "./DetailsSignUp";
import DocumentsSignUp from "./DocumentsSignUp";
import Navbar from "./Navbar";

function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    handleAudio(
      "To register a voter for your nearest constituency, keep you aadhar card and disability records if any ready, if any"
    );
  });

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
      : <DocumentsSignUp setFormData={setFormData} formData={formData} />}
    </div>
  );
}

export default SignUp;
