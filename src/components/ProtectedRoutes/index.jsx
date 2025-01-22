import { Outlet, useNavigate } from "react-router-dom";

import React, { useContext, useEffect } from "react";

import { UserContext } from "../../providers/UserContext";
import { StyledLoading } from "../../styles/Containers";
import {ImSpinner6} from "react-icons/im"

const ProtectedRoutes = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <>
      {user ? (
        <Outlet />
      ) : (
        <StyledLoading>
           <ImSpinner6 className="loading"/>
        </StyledLoading>
      )}
    </>
  );
};

export default ProtectedRoutes;
