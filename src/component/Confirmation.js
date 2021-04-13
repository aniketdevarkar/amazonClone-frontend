import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { confirmation } from "../apicalls";

function Confirmation() {
  const { token } = useParams();
  const [status, setStatus] = useState("");
  useEffect(async () => {
    try {
      const confirm = await confirmation(token);
      setStatus(confirm);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Container>
      <div className="confirm">{status}</div>
      <Link to="/login">Sign In</Link>
    </Container>
  );
}

export default Confirmation;
