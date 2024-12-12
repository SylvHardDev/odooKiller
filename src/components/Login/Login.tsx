import "./Login.css";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F2EB]">
      <div className="bg-white shadow-lg rounded-3xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Login
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Hey, Enter your details to get sign in <br /> to your account
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email / Phone No
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="Enter your email or phone number"
            />
          </div>
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
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-yellow-500 hover:underline">
              Having trouble in sign in?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            Sign in
          </button>
        </form>
        {/* <div className="mt-6 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Or Sign in with</span>
        </div> */}
        {/* <div className="mt-4 grid grid-cols-4 gap-4">
          <button className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg p-3">
            <img src="/icons/google.svg" alt="Google" className="h-6 w-6" />
          </button>
          <button className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg p-3">
            <img src="/icons/apple.svg" alt="Apple ID" className="h-6 w-6" />
          </button>
          <button className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg p-3">
            <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
          </button>
        </div> */}
        {/* <div className="mt-6 text-center">
          <span className="text-gray-500 text-sm">Don't have an account? </span>
          <a
            href="#"
            className="text-yellow-500 hover:underline text-sm font-medium"
          >
            Request Now
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
