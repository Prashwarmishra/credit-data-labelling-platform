import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.root}>
      <div className={s.child} />
      <FontAwesomeIcon icon={faPenNib} />
    </div>
  );
}

export default App;
