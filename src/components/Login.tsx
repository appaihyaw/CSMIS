import React, { useState } from 'react';

// Mock function to send authentication code to the provided email
function sendAuthenticationCode(email: string): void {
  // Simulating code sending process, replace with actual implementation
  console.log(`Authentication code sent to ${email}`);
}

// Mock function to reset the password
function resetPassword(email: string, newPassword: string): void {
  // Simulating password reset process, replace with actual implementation
  console.log(`Password reset successful for ${email}. New password: ${newPassword}`);
}

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthenticationCodeInput, setShowAuthenticationCodeInput] = useState(false);
  const [authenticationCode, setAuthenticationCode] = useState('');

  const handleLogin = (): void => {
    // Validate email and password, replace with actual validation logic
    if (email && password) {
      // Simulate authentication by sending the authentication code
      sendAuthenticationCode(email);
      setShowAuthenticationCodeInput(true);
    }
  };

  const handleAuthentication = (): void => {
    // Validate authentication code, replace with actual validation logic
    if (authenticationCode) {
      // Simulate successful authentication
      setIsAuthenticated(true);
    }
  };

  const handlePasswordReset = (): void => {
    // Validate new password, replace with actual validation logic
    if (password) {
      // Reset the password
      resetPassword(email, password);
      setPassword('');
      setIsAuthenticated(false);
      setShowAuthenticationCodeInput(false);
    }
  };

  if (isAuthenticated) {
    return (
      <div>
        <h2>Welcome, {email}!</h2>
        <button onClick={() => setIsAuthenticated(false)}>Logout</button>
      </div>
    );
  }

  return (
    <div className=" absolute flex justify-between items-center space-x-2">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='rounded-sm '
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='rounded-sm '
      />
      <br />
      {!showAuthenticationCodeInput ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Authentication Code"
            value={authenticationCode}
            onChange={(e) => setAuthenticationCode(e.target.value)}
          />
          <br />
          <button onClick={handleAuthentication}>Authenticate</button>
        </div>
      )}
      {showAuthenticationCodeInput && (
        <div>
          <br />
          <p>Check your email for the authentication code.</p>
          <button onClick={() => setShowAuthenticationCodeInput(false)}>Cancel</button>
        </div>
      )}
      {isAuthenticated && (
        <div>
          <br />
          <p>Password reset required.</p>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handlePasswordReset}>Reset Password</button>
        </div>
      )}
    </div>
  );
};

export default Login;

{/* <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="University_of_Ghana.png" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <Dropdown />
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          
        </div>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">Register</a>
        </div>
      </div>
    </section> */}