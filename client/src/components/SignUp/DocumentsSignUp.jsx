import React from "react";

function DocumentsSignUp({}) {
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
    <>
      <div className="-mt-24 flex h-screen flex-col items-center justify-center gap-6">
        <h1 className="m-6 p-6 text-2xl font-bold">
          Finalise the submission with minimal Paperwork
        </h1>
        <form
          action="get"
          onSubmit={handleSubmit}
          className="border-black -mt-3.5 rounded-2xl border-2 p-6 shadow-lg"
        >
          <label
            htmlFor="Aaadhar"
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
            Enter the disability(if any)
            <select
              name="disability"
              id="disability"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            >
              <option value="default">Select</option>
              <option value="Braille">Braille</option>
              <option value="Interpreter">Interpreter</option>
              <option value="HearingAid">Hearing Aid</option>
            </select>
          </label>
          <label
            htmlFor="file"
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
          <label htmlFor="Submit">
            <div className="flex items-center justify-center p-2">
              <button className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Submit
              </button>
            </div>
          </label>
        </form>
      </div>
    </>
  );
}

export default DocumentsSignUp;
