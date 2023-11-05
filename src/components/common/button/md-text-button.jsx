import "../../../css/common/button.css";

export default function MDTextButton({ value, color }) {
  return (
    <div
      className={"md button"}
      style={{ backgroundColor: color }}
      onClick={() => console.log("clicked")}
    >
      <p>{value}</p>
    </div>
  );
}
