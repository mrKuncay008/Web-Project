import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { useEffect, useState } from "react";
import LoadingCard from "./componens/loadingcard";
import { Toaster } from "react-hot-toast";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/dashboard")) {
      setLoading(false);
    } else {
      setLoading(true); 
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 2000);
      
    return () => clearTimeout(timer);
  }
  }, [location]);

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    {loading ? (
      <LoadingCard />
      
    ) : (
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
      </Routes>
    )}
    </>
  );
}

export default App;
