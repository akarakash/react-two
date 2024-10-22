import React, { useEffect, useState } from "react";
import axios from "axios";

function Forget() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://670e4b65073307b4ee464347.mockapi.io/Uaersapi")
      .then((response) => {
        setAllUser(response.data);
      });
  }, []);
  console.log(allUser);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit button is clicked");
    console.log(email);
    let userFilter = allUser.filter((item) => item.email == email);
    console.log(userFilter);
    if(userFilter.length != 0){
        let getUserPassword = userFilter[0].password
        console.log(getUserPassword);
        const OTP = Math.floor(1000 + Math.random() * 9000);
        console.log(OTP);
        
    } else {
        setMessage('you are not register here')
    }
  };

  return (
    <div>
      <h2>Forget</h2>
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
        {message && <p>{message}</p>}
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Forget;
