import { Navigate } from "react-router-dom";
import { authService } from "@/features/auth/authService";

const Index = () => (
  <Navigate to={authService.isAuthenticated() ? "/dashboard" : "/login"} replace />
);

export default Index;
