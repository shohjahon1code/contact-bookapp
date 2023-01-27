import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Contact from "./components/Contact";

function App() {
  const [infos, setInfos] = useState([
    {
      id: "1",
      text: "Lorem ipsum dolor.",
      tel: "998939997601",
      relation: "Qarindosh",
    },
  ]);

  const callback = (payload) => {
    setInfos((prev) => [...prev, payload]);
  };

  const deleteHandler = (id) => {
    const filteredArr = infos.filter((info) => info.id !== id);
    setInfos(filteredArr);
  };

  return (
    <Fragment>
      <Header />
      <div className="d-flex">
        <Form onCallback={callback} />
        <Contact infos={infos} onDelete={deleteHandler} />
      </div>
    </Fragment>
  );
}

export default App;
