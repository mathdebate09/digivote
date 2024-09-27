import React from "react";

function DetailsSignUp({ handleNextClick, step, setStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const checkPass = (password, confirmpass) => {
      if (password === confirmpass) {
        setStep(2);
        handleNextClick();
      } else {
        alert("Passwords do not match. Please try again.");
        setStep(1);
      }
    };
    const userInfo = {
      Name: data.get("name"),
      Email: data.get("email"),
      Password: data.get("password"),
      confirmpass: data.get("confirmpass"),
    };

    console.log(userInfo);
    checkPass(userInfo.Password, userInfo.confirmpass);
  };

  return (
    <>
      <div className="-mt-24 flex h-screen flex-col items-center justify-center shadow-lg">
        <h1 className="m-6 p-6 text-2xl font-bold">
          Let's set-up your DigiVote Account
        </h1>
        <form
          onSubmit={handleSubmit}
          className="border-black -mt-3.5 w-96 rounded-2xl border-2 p-6 shadow-lg"
        >
          <label
            htmlFor="name"
            class="block p-1 text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="eg. Mandeep Singh"
            required
            className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <label
            htmlFor="email"
            className="block p-1 text-lg font-medium text-gray-700"
          >
            Enter your Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="eg. mandips@gmail.com"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label htmlFor="password">
            <p className="block p-1 text-lg font-medium text-gray-700">
              Enter your Password
            </p>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label htmlFor="confirmpass">
            <p className="block p-1 text-lg font-medium text-gray-700">
              Confirm Password
            </p>
            <input
              type="password"
              name="confirmpass"
              id="confirmpass"
              placeholder="Confirm Password"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition duration-300 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
          <div className="flex items-center justify-center p-2">
            {/* Next Button, only visible at step 1 */}
            {step === 1 && (
              <button
                type="submit"
                className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default DetailsSignUp;
