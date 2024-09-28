// src/components/VotingPage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { selectCandidate, castVote, resetVote } from "../../context/vote/voteSlice"; // Import actions
import { people } from "../../utils/data";
import { useNavigate } from "react-router-dom";

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
    } else {
      alert("Please select a candidate to cast your vote.");
    }
  };

  const confirmVote = () => {
    dispatch(castVote()); // Dispatch action to cast vote
    setIsModalOpen(false); // Close the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal without voting
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 pb-24 md:pb-3">
      <h1 className="text-3xl font-bold mb-6">Casted Your Vote</h1>
      {voteCasted ? (
        <div className="text-center">
          <h2 className="text-2xl text-green-600 font-bold">Thank you for voting!</h2>
          <p>
            You voted for: <span className="font-semibold">{selectedCandidate.name}</span>
          </p>
          <button onClick={() => navigate('/')} className="mt-4 bg-gray-600 text-white p-2 rounded-lg">
            Go to home 
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {people.map((person, index) => (
              <div
                key={index}
                className={`relative p-4 border rounded-lg shadow-lg transition-all duration-200 ${
                  selectedCandidate?.name === person.name ? "border-4 border-blue-500" : "border-2 border-gray-300"
                }`}
                onClick={() => dispatch(selectCandidate(person))}
                style={{ cursor: "pointer" }}
              >
                {/* Profile Image */}
                <img
                  src={person.profilePicture}
                  alt={person.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />

                {/* Candidate Name and Details */}
                <h3 className="text-xl font-bold text-center">{person.name}</h3>
                <p className="text-center">{person.party}</p>
                <p className="text-center text-gray-500">{person.constituencyAssembly}</p>

                {/* Check Mark Icon if selected */}
                {selectedCandidate?.name === person.name && (
                  <FaCheckCircle className="absolute top-2 right-2 text-blue-500 text-2xl" />
                )}
              </div>
            ))}
          </div>

          <button
            onClick={handleVote}
            className="bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-150"
          >
            Cast Vote
          </button>
        </>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Confirm Your Vote</h2>
            <p>
              Are you sure you want to vote for <span className="font-semibold">{selectedCandidate?.name}</span>?
            </p>
            <div className="flex justify-between mt-6">
              <button
                onClick={confirmVote}
                className="bg-green-500 text-white p-2 rounded-lg shadow-md hover:bg-green-600"
              >
                Confirm
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white p-2 rounded-lg shadow-md hover:bg-red-600"
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
