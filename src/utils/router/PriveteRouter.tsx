import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

const PrivateRoute = () => {
  const [init, setInit] = useState(false);
  const navigate = useNavigate();

  const checkUserToken = () => {
    const userToken = localStorage.getItem("token");
    if (!userToken || userToken === "undefined") {
      setInit(false);
      return navigate("registration", { replace: true });
    }
    setInit(true);
  };
  useEffect(() => {
    checkUserToken();
  }, [init]);
  return <React.Fragment>{init && <Outlet />}</React.Fragment>;
};

export default PrivateRoute;