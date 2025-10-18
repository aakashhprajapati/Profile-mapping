import { Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import List from "./List";
// import Register from "./Register";
import StateDemo from "./StateDemo";  // your renamed hook demo
import Color from "./Color";
import Time from "./Time";
import Event from "./Event";
import Todo from "./Todo";
import Prop from "./Prop";
import Toggle from "./Toggle";
import Incre from "./Incre";
import Search from "./Search";

function App() {
  return (
    <div>
      {/* Navigation Menu */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/state">StateDemo</Link> |{" "}
        <Link to="/color">Color</Link> |{" "}
        <Link to="/form">Form</Link> |{" "}
        <Link to="/list">List</Link> |{" "}
        <Link to="/time">Time</Link> |{" "}
        <Link to="/event">Event</Link> |{" "}
        <Link to="/todo">Todo</Link> |{" "}
        <Link to="/Toggle">Toggle</Link> |{" "}
        <Link to="/Prop">Prop</Link> |{" "}
        <Link to="/Search">Search</Link> |{" "}
        <Link to="/Incre">Incre</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<h1>Welcome! Choose a page from above</h1>} />
        <Route path="/state" element={<StateDemo />} />
        <Route path="/color" element={<Color />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<List />} />
        <Route path="/time" element={<Time />} />
        <Route path="/event" element={<Event />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/Prop" element={<Prop />} />
        <Route path="/Toggle" element={<Toggle />} />
        <Route path="/Incre" element={<Incre/>} />
        <Route path="/Search" element={<Search/>} />
      </Routes>
    </div>
  );
}

export default App;
