import React from "react";
import { ImUser } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Save(props) {
  return (
    <table className="save-container">
      <thead>
        <tr className="title">
          <th className="title-container">
            <ImUser />
            <p className="text">Name</p>
          </th>

          <th className="title-container">
            <BsFillTelephoneFill />
            <p className="text">Phone</p>
          </th>
          <th className="title-container">
            <MdEmail />
            <p className="text"> Email </p>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* Main person information */}

        {!props.isFilter &&
          props.task.map((item) => (
            <tr className="title" key={item.id}>
              <th className="data-container">{item.title}</th>
              <th className="data-container">{item.phone}</th>
              <th className="data-container">{item.Email}</th>
            </tr>
          ))}

{props.isFilter &&
          props.task
            .filter((item) => item.title.includes(props.search))
            .map((tasks) => (
              <tr className="title" key={tasks.id}>
                <th className="data-container">{tasks.title}</th>
                <th className="data-container">{tasks.phone}</th>
                <th className="data-container">{tasks.Email}</th>
              </tr>
            ))}
      </tbody>
    </table>
  );
}
