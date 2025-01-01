import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { authContext } from "../../auth/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
