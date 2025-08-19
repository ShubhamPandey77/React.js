import React from "react";
import { useParams } from "react-router";

function ContactDetails() {
  const { name, subject, phoneNumber, high, enter, status } = useParams(); // 👈 grabs "Shubham", "Shaan", etc. from URL

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {name}</p>
      <p>Age: 22</p>
      <p>Subject: {subject}</p>
      <p>Phone number -{phoneNumber}</p>
      <p>10th Score: {high}</p>
      <p>12th Score:{enter}</p>
      <p>Graduation:80</p>
      <p>Adress: {status}</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea nemo aliquid sed numquam iste veritatis dolorum quia corrupti voluptatem.</p>
    </div>
  );
}

export default ContactDetails;