import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  //? Global stateten user bilgisini aldık
  const { user } = useSelector((state) => state.auth);

  return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
