import Form from "./Form";

function Register({ setShowRegister }) {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          Enter Your Name
          <input type="text" placeholder="Enter Username" required />
        </label>
        <br /><br />

        <label>
          Enter Your Email
          <input type="email" placeholder="Enter Email" required />
        </label>
        <br /><br />

        <label>
          Enter Your Password
          <input type="password" placeholder="Enter Password" required />
        </label>
        <br /><br />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account?{" "}
        <button onClick={() => setShowRegister(false)}>Login</button>
      </p>
    </div>
  );
}

export default Register;
