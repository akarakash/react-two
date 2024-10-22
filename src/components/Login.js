import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://670e4b65073307b4ee464347.mockapi.io/Uaersapi",
        {
          email,
          password,
        }
      );
      setMessage("Signup successful!");
      console.log(response.data);
    } catch (error) {
      setMessage("Signup failed. Try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        {message && <p>{message}</p>}
        <a href="/forget">Forgot your password?</a>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Login;
