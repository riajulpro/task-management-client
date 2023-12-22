const ClientCategory = () => {
  const userTypes = [
    {
      title: "Developers",
      description:
        "For software developers who want to organize their tasks and manage project timelines efficiently.",
    },
    {
      title: "Corporate Professionals",
      description:
        "Ideal for corporate professionals to stay on top of their daily tasks, meetings, and deadlines.",
    },
    {
      title: "Bankers",
      description:
        "Tailored for banking professionals to manage financial tasks, transactions, and client interactions.",
    },
    {
      title: "Students",
      description:
        "Perfect for students to keep track of assignments, deadlines, and project tasks.",
    },
    {
      title: "Freelancers",
      description:
        "Designed for freelancers to manage multiple projects, deadlines, and client communications.",
    },
    {
      title: "Entrepreneurs",
      description:
        "Suits entrepreneurs who need to juggle various aspects of their business, from planning to execution.",
    },
  ];

  return (
    <div>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Who Can Benefit from Our Website?
          </h2>
          <div className="md:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {userTypes.map((userType, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{userType.title}</h3>
                <p className="text-gray-700">{userType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCategory;
