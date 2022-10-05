import React from "react";
import Card from "./Card";

const contacts = [{
        id: 1,
        name: "ButtonPie",
        src: "https://picsum.photos/200",
        alt: "Random Image",
        phone: "+1-234-567-8910",
        email: "awesome@email.com",
    },
    {
        id: 2,
        name: "Turd",
        src: "https://picsum.photos/200",
        alt: "Random Image",
        phone: "+0-987-654-3210",
        email: "poopy@email.com"
    },
    {
        id: 3,
        name: "BumbleBee",
        src: "https://picsum.photos/200",
        alt: "Random Image",
        phone: "+2-468-121-4160",
        email: "buzybee@email.com"
    }
];
function createCard(contact) {
    return <Card
    key={contact.id}
    name={contact.name}
    src={contact.src}
    alt={contact.alt}
    phone={contact.phone}
    email={contact.email} />
}
function App(){
    return (<div className="card-holder">
    <h1>Contacts:</h1>
    {contacts.map(createCard)}
  </div>)
}

export default App;