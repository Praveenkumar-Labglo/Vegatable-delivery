import React, { useRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, TextField, InputAdornment, IconButton } from "@mui/material";

import vegdeliveryLogo from "../assets/images/vegdeliveryLogo.png";
import loginBg from "../assets/images/loginbg.jpg";
import loginAvatar from "../assets/images/avatar.png";

export default function LoginScreen() {
  const [view, setView] = useState(false);
  const [inputValues, setInputValues] = useState({
    userid: "",
    password: "",
  });

  const inputElement1 = useRef({});

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    // setError("")
  };

  const formValidation = () => {
    if (inputValues.userid === "") {
      inputElement1.current.userid.focus();
    } else if (inputValues.password === "") {
      inputElement1.current.password.focus();
    }
  };

  const handleLogin = () => {
    const data = {
      username: inputValues.userid,
      password: inputValues.password,
    };
    // loginApiCall(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValues.userid && inputValues.password) {
      handleLogin();
    } else {
      formValidation();
    }
  };

  return (
    <>
      <center className="loginDiv">
        <div className="loginBox">
          <div className="loginImg">
            <img src={vegdeliveryLogo} alt="Logo" />
          </div>
          <div className="loginContaier">
            {/* <img src={vegdeliveryLogo} alt="Logo" /> */}

            <form onSubmit={handleSubmit}>
              <img src={loginAvatar} alt="Logo" />
              <TextField
                sx={{ width: "250px" }}
                variant="outlined"
                type="text"
                placeholder="Staff Id/User Name"
                name="userid"
                value={inputValues.userid}
                onChange={handleChange}
                inputRef={(ref) => (inputElement1.current.userid = ref)}
                required
              />

              <TextField
                sx={{ width: "250px" }}
                variant="outlined"
                type={view ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={inputValues.password}
                onChange={handleChange}
                inputRef={(ref) => (inputElement1.current.password = ref)}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setView(!view)}>
                        {view ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
              <Button
                type="submit"
                variant="contained"
                // disabled={isLoading}
                sx={{ textTransform: "none" }}
              >
                {/* {isLoading ? "Logging In..." : "Login"} */}
                Login
              </Button>
            </form>
          </div>
        </div>
      </center>
    </>
  );
}
