import React from 'react';

const Notices = () => {
  return (
    <div className="container bg-blue-600 text-white mx-auto p-5 w-full mt-20 mb-20 overflow-auto max-h-60">
      <h1 className="text-3xl font-bold text-center mt-5 mb-5">Notices</h1>
      <p>Important notice 1...</p>
      <p>Important notice 2...</p>
      <p>Important notice 3...</p>
      {/* Add more notices as needed */}
    </div>
  );
};

export default Notices;
