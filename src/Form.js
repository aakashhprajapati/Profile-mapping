import { useState } from "react";

function LoginForm({ switchToRegister }) {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Enter Your Name
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />
        </label>
        <br /><br />
        <label>
          Enter Your Password
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
        </label>
        <br /><br />
        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account?{" "}
        <button onClick={switchToRegister}>Register</button>
      </p>
    </div>
  );
}

function RegisterForm({ switchToLogin }) {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          Enter Your Name
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />
        </label>
        <br /><br />
        <label>
          Enter Your Email
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
          />
        </label>
        <br /><br />
        <label>
          Enter Your Password
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
        </label>
        <br /><br />
        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account?{" "}
        <button onClick={switchToLogin}>Login</button>
      </p>
    </div>
  );
}

function Form() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? (
        <LoginForm switchToRegister={() => setIsLogin(false)} />
      ) : (
        <RegisterForm switchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default Form;
