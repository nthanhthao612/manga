import "../../../css/spec/search-bar.css";
import LGIconButton from "../button/lg-icon-button";

export default function LGSearchBarInput({ value, onChange, onFocus, onBlur }) {
  return (
    <div className="lg search-bar-input">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <LGIconButton image={"https://i.imgur.com/DXN19KG.png"}/>
      <LGIconButton image={"https://i.imgur.com/Bo2l1Z8.png"}/>
    </div>
  );
}
