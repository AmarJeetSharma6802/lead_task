import { useState } from "react";
import Header from "./component/Header.jsx";
import Sidebar from "./component/Sidebar.jsx";
import Dashboard from "./component/Dashboard.jsx";
import Leads from "./component/Leads.jsx";
import CallLogs from "./component/CallLogs.jsx";
import Settings from "./component/Settings.jsx";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <>
      <Header />
     <div className="app">
  <Sidebar page={page} setPage={setPage} />
  <div className="main">
    {page === "dashboard" && <Dashboard />}
    {page === "leads" && <Leads />}
    {page === "calls" && <CallLogs />}
    {page === "settings" && <Settings />}
  </div>
</div>
    </>
  );
}
