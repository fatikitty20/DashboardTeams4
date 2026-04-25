import { Navigate, useLocation } from "react-router-dom";
import { authService } from "./authService";

/** Guard nativo: equivalente al middleware de Next 13+. */
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  if (!authService.isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  return <>{children}</>;
};
