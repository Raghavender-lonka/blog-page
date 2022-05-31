import "./Spinner.css"

export default function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20vh",
        marginBottom: "60vh",
      }}
    >
      <div className="loader hour-glass"></div>
    </div>
  )
}
