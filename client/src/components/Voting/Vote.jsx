// src/components/VotingPage.js
import React from "react";

import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  castVote,
  resetVote,
  selectCandidate,
} from "../../context/vote/voteSlice"; // Import actions
import { people } from "../../utils/data";
import { handleAudio } from "../../utils/helper";

function VotingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedCandidate, voteCasted } = useSelector((state) => state.vote);
  const [isModalOpen, setIsModalOpen] = React.useState(false); // Modal state

  //   dispatch(resetVote())
  const handleVote = () => {
    if (selectedCandidate) {
      // Open the modal for confirmation
      setIsModalOpen(true);
      handleAudio(`Are y ou sure you want to vote ${selectedCandidate}`);
    } else {
      alert("Please select a candidate to cast your vote.");
    }
  };

  const confirmVote = () => {
    dispatch(castVote()); // Dispatch action to cast vote
    handleAudio("Your vote has been cast");
    setIsModalOpen(false); // Close the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal without voting
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6 pb-24 md:pb-3">
      <h1 className="mb-6 text-3xl font-bold">Casted Your Vote</h1>
      {voteCasted ?
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600">
            Thank you for voting!
          </h2>
          <p>
            You voted for:{" "}
            <span className="font-semibold">{selectedCandidate.name}</span>
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 rounded-lg bg-gray-600 p-2 text-white"
          >
            Go to home
          </button>
        </div>
      : <>
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {people.map((person, index) => (
              <div
                key={index}
                className={`relative rounded-lg border p-4 shadow-lg transition-all duration-200 ${
                  selectedCandidate?.name === person.name ?
                    "border-4 border-blue-500"
                  : "border-2 border-gray-300"
                }`}
                onClick={() => dispatch(selectCandidate(person))}
                style={{ cursor: "pointer" }}
              >
                {/* Profile Image */}
                <img
                  src={person.profilePicture}
                  alt={person.name}
                  className="mx-auto mb-4 h-20 w-20 rounded-full"
                />

                {/* Candidate Name and Details */}
                <h3 className="text-center text-xl font-bold">{person.name}</h3>
                <p className="text-center">{person.party}</p>
                <p className="text-center text-gray-500">
                  {person.constituencyAssembly}
                </p>

                {/* Check Mark Icon if selected */}
                {selectedCandidate?.name === person.name && (
                  <FaCheckCircle className="absolute right-2 top-2 text-2xl text-blue-500" />
                )}
              </div>
            ))}
          </div>

          <button
            onClick={handleVote}
            className="rounded-lg bg-blue-600 p-3 text-white shadow-md transition duration-150 hover:bg-blue-700"
          >
            Cast Vote
          </button>
        </>
      }

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Confirm Your Vote</h2>
            <p>
              Are you sure you want to vote for{" "}
              <span className="font-semibold">{selectedCandidate?.name}</span>?
            </p>
            <div className="mt-6 flex justify-between">
              <button
                onClick={confirmVote}
                className="rounded-lg bg-green-500 p-2 text-white shadow-md hover:bg-green-600"
              >
                Confirm
              </button>
              <button
                onClick={closeModal}
                className="rounded-lg bg-red-500 p-2 text-white shadow-md hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VotingPage;
