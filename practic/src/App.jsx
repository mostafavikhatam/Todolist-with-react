import "../public/style.css";
import Button from "../src/Components/Button";
import Email from "../src/Components/Email";
import Name from "../src/Components/Name";
import Phone from "../src/Components/Phone";
import Save from "./Components/Save";
import Search from "./Components/Search";
import { useEffect, useState } from "react";

function App() {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const numberRegex = /^[0-9]/;

  const [email, setemail] = useState("");
  const [name, setName] = useState("");
  const [number, setnumber] = useState("");
  const [search, setSearch] = useState("");
  const [task, setTask] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  const changeEmailHandler = (e) => {
    setemail(e.target.value);
  };

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeNumberHandler = (e) => {
    setnumber(e.target.value);
  };
  const changeSearchhandler = (e) => {
    setSearch(e.target.value);
  };

  const addhandler = () => {
    if (name && email.match(emailRegex) && number.match(numberRegex))
      if (!task.some((item) => item.title == name)) {
        setTask((prev) => [
          ...prev,
          {
            id: task.length ? task[task.length - 1].id + 1 : 1,
            title: name,
            Email: email,
            phone: number,
          },
        ]);

        setName("");
        setnumber("");
        setemail("");
      } else {
        alert("name is exist");
      }
      else{alert("complete all information")};
  };

  useEffect(() => {
    search == "" ? setIsFilter(false) : setIsFilter(true);
  }, [search]);

  return (
    <div className="container">
      <div className="search-container">
        <Search search={search} changeSearchhandler={changeSearchhandler} />
      </div>
      <div className="info-container">
        <Name changeName={changeNameHandler} name={name} />
        <Phone changeNumber={changeNumberHandler} number={number} />
        <Email changeemail={changeEmailHandler} email={email} />
        <Button click={addhandler} />
      </div>
      <div className="search-container">
        <Save task={task} isFilter={isFilter} search={search}/>
      </div>
    </div>
  );
}
export default App;
