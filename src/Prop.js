function Akash({ name, age }) {
  return (
    <h2>I am {name} and my age is {age}</h2>
  );
}

function Prop() {
  return (
    <div>
      <Akash name="Akash" age={22} />
     
    </div>
  );
}

export default Prop;
