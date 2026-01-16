import { useApp } from "../component/AppContext.jsx";

export default function Sidebar({page,setPage }) {
  const { role } = useApp();

  return (
    <div className="sidebar">
      <button onClick={() => setPage("dashboard")} className={page==="dashboard" ? "active" : ""}>Dashboard</button>
      <button onClick={() => setPage("leads")} className={page==="leads" ? "active" : ""}>Leads</button>
      <button onClick={() => setPage("calls")} className={page==="calls" ? "active" : ""}>Call Logs</button>
      {role === "Admin" && (
        <button onClick={() => setPage("settings")}>Settings</button>
      )}
    </div>
  );
}
