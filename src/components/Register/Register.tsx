import "./Register.css";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F2EB] bg-[url('src/assets/landing-bg.webp')] bg-cover bg-center">
      <div className="bg-white shadow-lg rounded-3xl md:w-full max-w-md p-8 w-2/3">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Register
        </h1>
        <form>
          {/* Champ Nom */}
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="Enter your first name"
            />
          </div>

          {/* Champ Prénom */}
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="Enter your last name"
            />
          </div>

          {/* Champ Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Champ Passcode */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Passcode
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="Enter your passcode"
            />
          </div>

          {/* Menu déroulant pour le type d'utilisateur */}
          <div className="mb-4">
            <label
              htmlFor="userType"
              className="block text-sm font-medium text-gray-700"
            >
              User Type
            </label>
            <select
              id="userType"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            >
              <option value="">Select a user type</option>
              <option value="RH">RH</option>
              <option value="Collaborateur">Collaborateur</option>
            </select>
          </div>

          {/* Bouton d'inscription */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
