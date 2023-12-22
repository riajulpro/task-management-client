const ViewDetailsModal = ({ isOpen, onClose, task }) => {
  const modalClasses = `fixed inset-0 overflow-y-auto ${
    isOpen ? "visible opacity-100" : "invisible opacity-0"
  }`;

  return (
    <div className={modalClasses}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Modal container */}
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* Close button */}
          <div
            className="absolute top-0 right-0 p-4 cursor-pointer"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>

          {/* Modal content */}
          <div className="px-4 pt-5 pb-4">
            {/* Add your modal content here */}
            <h3 className="text-2xl font-semibold">{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
            <p>Deadline: {task.deadline}</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsModal;
