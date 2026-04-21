import Form from "./components/Form";

export default function App() {
  return (
    <div>
      {/* Page Title */}
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Experiment-6 : Handle Forms and Validations in Frontend (MUI)
      </h2>

      {/* Form */}
      <Form />

      {/* Name + UID */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h3>Name : Abhishek Sewda</h3>
        <h3>UID : 23BIS70027</h3>
      </div>
    </div>
  );
}
