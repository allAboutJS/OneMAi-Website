import React, { useState, useEffect } from "react";
import {
  FiArrowLeft,
  FiCopy,
  FiCheck,
} from "react-icons/fi";

const GroupMembers = ({
  groupData,
  setCurrentStep,
  handleCreateGroup,
  loading,
  copyToClipboard,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCopy = () => {
    copyToClipboard();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex items-center justify-center w-[60%] m-auto`}>
      <div className={`bg-white rounded-xl overflow-hidden`}>
        {/* Header Section */}
        <div className="flex items-center mb-2">
          <button
            onClick={() => setCurrentStep(3)}
            className="text-gray-500 hover:text-gray-700 mr-2 transition-colors duration-200"
            aria-label="Go back"
          >
            <FiArrowLeft size={20} />
          </button>
          <h1
            className={`font-bold ${
              isMobile ? "text-xl" : "text-2xl"
            } text-gray-800`}
          >
            Group Invite Code
          </h1>
        </div>

        <p className="sm-para">
          Share this invite code with people you want to join your group
        </p>

        {/* Invite Code Section */}
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Your Group Invite Code
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Anyone with this code can join your group
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300 mb-4">
            <div className="flex justify-between items-center">
              <code className="font-mono text-2xl font-bold text-[#3390d5] tracking-wider">
                {groupData.inviteCode}
              </code>
              <button
                onClick={handleCopy}
                className="p-3 text-[#3390d5] hover:text-white hover:bg-[#3390d5] rounded-lg transition-colors border border-[#3390d5]"
                aria-label="Copy invite code"
              >
                {copied ? (
                  <FiCheck size={20} className="text-green-500" />
                ) : (
                  <FiCopy size={20} />
                )}
              </button>
            </div>
            {copied && (
              <div className="mt-2 text-center">
                <span className="text-sm text-green-600 font-medium">
                  Copied to clipboard!
                </span>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-800">
                  <strong>Keep this code private!</strong> Only share it with people you trust and want in your group.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Use Section */}
        <div className="mb-6 bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-3">
            How to invite members:
          </h4>
          <ol className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-[#3390d5] text-white text-xs rounded-full mr-2 mt-0.5">1</span>
              Copy the invite code above
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-[#3390d5] text-white text-xs rounded-full mr-2 mt-0.5">2</span>
              Send it to people via message, email, or any other way
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-[#3390d5] text-white text-xs rounded-full mr-2 mt-0.5">3</span>
              They can use the code to join your group
            </li>
          </ol>
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => setCurrentStep(3)}
            className={`flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors ${
              isMobile ? "text-sm" : ""
            }`}
          >
            Back
          </button>
          <button
            onClick={handleCreateGroup}
            disabled={loading}
            className={`flex-1 bg-[#3390d5] text-white py-2 rounded-lg hover:bg-[#2a7bc1] transition-colors ${
              isMobile ? "text-sm" : ""
            } ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating...
              </span>
            ) : (
              "Create Group"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupMembers;