import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function CreatCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/b8dd1d8464741368e1a6e1c648f885fa.jpg" />
      {contacts.map(CreatCard)}
    </div>
  );
}

export default App;
