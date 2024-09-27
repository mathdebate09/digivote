import React from "react";

function DocumentsSignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userDocs = {
      Aadhar: data.get("Aadhar"),
      Disability: data.get("disability"),
      MedicalCertificate: data.get("MedCert"),
    };
    console.log(userDocs);
  };

  return (
    <div className="flex h-screen -mt-20 flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="mb-6 text-2xl font-bold text-center">
        Finalise the submission with minimal Paperwork
      </h1>
      <form
        action="get"
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl border-2 border-black p-6 shadow-lg"
      >
        <label
          htmlFor="Aadhar"
          className="block p-1 text-lg font-medium text-gray-700"
        >
          Enter your Aadhar
          <input
            type="file"
            name="Aadhar"
            id="AadharFile"
            className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <label
          htmlFor="Disability"
          className="block p-1 text-lg font-medium text-gray-700"
        >
          Enter the disability (if any)
          <select
            name="disability"
            id="disability"
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="default">Select</option>
            <option value="Braille">Braille</option>
            <option value="Interpreter">Interpreter</option>
            <option value="HearingAid">Hearing Aid</option>
          </select>
        </label>
        <label
          htmlFor="MedCert"
          className="block p-1 text-lg font-medium text-gray-700"
        >
          Enter your Medical Disability Certificate
          <input
            type="file"
            name="MedCert"
            id="MedCert"
            className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <div className="flex items-center justify-center p-2">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default DocumentsSignUp;
