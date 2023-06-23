import React from 'react'
// import * as nodemailer from 'nodemailer';

//  class AuthenticationComponent {
//     private emailTransporter: nodemailer.Transporter;

//         constructor() {
//             // Initialize the email transporter
//             this.emailTransporter = nodemailer.createTransport({
//             // Configure your email provider here
//             // For example, if you're using Gmail, you can use the Gmail SMTP server
//             service: 'Gmail',
//                 auth: {
//                     user: 'your-email@gmail.com',
//                     pass: 'your-email-password'
//                 }
//    });
// }
// public async login(email: string, password: string): Promise<void> {
//     try {
//       // Verify the user's email and password
//       const isAuthenticated = await this.verifyCredentials(email, password);
      
//         if (isAuthenticated) {
//             // Generate a random authentication code
//             const authenticationCode = Math.floor(100000 + Math.random() * 900000).toString();

//             // Send the authentication code to the user's email
//             await this.sendAuthenticationCode(email, authenticationCode);

//             // Prompt the user to reset their password using the authentication code
//             await this.promptPasswordReset(authenticationCode);

//             console.log('Password reset prompted successfully.');
//         } else {
//             console.log('Invalid email or password.');
//         }
//     }

//     catch (error) {
//       console.log('An error occurred:', error);
//     }
// }


//   private async verifyCredentials(email: string, password: string): Promise<boolean> {
//     // Add your logic to verify the user's email and password here
//     // For demonstration purposes, this always returns true
//     return true;
//   }
//    private async sendAuthenticationCode(email: string, code: string): Promise<void> {
//     const mailOptions = {
//       from: 'your-email@gmail.com',
//       to: email,
//       subject: 'Authentication Code',
//       text: `Your authentication code is: ${code}`
//     };

//     await this.emailTransporter.sendMail(mailOptions);
// }
//  private async promptPasswordReset(authenticationCode: string): Promise<void> {
//     // Implement the logic to prompt the user to reset their password here
//     // This could involve displaying a UI with input fields for the new password and the authentication code
//     console.log('Prompting password reset...');
//   }
// }

function Login() {

  return (
    
    <div>
        
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
  )
}

export default Login
