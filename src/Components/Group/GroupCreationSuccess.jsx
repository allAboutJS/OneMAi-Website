import React, { useState, useEffect } from 'react';
import { FiCheck, FiCopy, FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const GroupCreationSuccess = ({ groupData }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const copyInviteCode = () => {
    navigator.clipboard.writeText(groupData.inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-gray-50 flex items-center justify-center ${isMobile ? 'p-4 min-h-screen' : 'p-6 min-h-screen'}`}>
      <div className={`bg-white rounded-xl shadow-md overflow-hidden ${isMobile ? 'w-full p-6' : 'max-w-md w-full p-8'} text-center`}>
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <FiCheck className="w-8 h-8 text-green-500" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className={`font-bold ${isMobile ? 'text-xl' : 'text-2xl'} text-gray-800 mb-3`}>
          Group Created Successfully!
        </h1>
        <p className="text-gray-600 mb-6">
          Your new group <span className="font-medium text-[#3390d5]">"{groupData.name}"</span> is ready to use.
        </p>

        {/* Group Info Card */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center mb-3">
            <FiUsers className="text-[#3390d5] mr-2" />
            <span className="font-medium text-gray-700">Group Invite Code</span>
          </div>
          <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300 mb-3">
            <div className="flex justify-between items-center">
              <code className="text-lg font-mono font-bold text-[#3390d5] tracking-wider">
                {groupData.inviteCode}
              </code>
              <button 
                onClick={copyInviteCode}
                className="ml-3 p-2 text-[#3390d5] hover:text-white hover:bg-[#3390d5] rounded-lg transition-colors border border-[#3390d5]"
                aria-label="Copy invite code"
              >
                <FiCopy size={18} />
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
          <p className="text-xs text-gray-600">
            Share this code with people you want to invite to your group
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            className={`w-full flex items-center justify-center py-3 px-4 bg-[#3390d5] text-white rounded-lg hover:bg-[#2a7bc1] transition-colors ${
              isMobile ? 'text-sm' : ''
            }`}
            onClick={() => navigate(`/groups/${groupData.inviteCode}`)}
          >
            Go to Group Dashboard
          </button>
          
          <button
            className={`w-full flex items-center justify-center py-3 px-4 border border-[#3390d5] text-[#3390d5] rounded-lg hover:bg-blue-50 transition-colors ${
              isMobile ? 'text-sm' : ''
            }`}
            onClick={copyInviteCode}
          >
            <FiCopy className="mr-2" size={18} />
            Copy Invite Code
          </button>
        </div>

        {/* Security Notice */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-xs text-yellow-800">
                <strong>Keep this code secure!</strong> Only share it with people you trust.
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Next Steps:</h3>
          <ul className="text-sm text-gray-600 space-y-2 text-left">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-[#3390d5] text-white text-xs rounded-full mr-2 mt-0.5">1</span>
              <span>Share the invite code with members via message or email</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-[#3390d5] text-white text-xs rounded-full mr-2 mt-0.5">2</span>
              <span>Set up your first savings target</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-[#3390d5] text-white text-xs rounded-full mr-2 mt-0.5">3</span>
              <span>Schedule your first contribution</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GroupCreationSuccess;