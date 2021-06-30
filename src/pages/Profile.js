import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/auth_context";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <Wrapper className="page-100">
      <h2 className="text-center mb-4">Profile</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <strong>Email: {currentUser.email}</strong>
      <div className="w-100 text-center mt-3">
        <Link to="/update" className="btn btn-primary  mt-3">
          Update Profile
        </Link>
      </div>

      <div className="w-100 text-center mt-2">
        <Button type="button" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 30px;
`;
