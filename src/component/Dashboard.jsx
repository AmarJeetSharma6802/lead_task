import { useApp } from "../component/AppContext.jsx";


export default function Dashboard() {
  const { tenant, data, role } = useApp();

  return (
    <div className="cards">
  <div className="card">
    <h4>Total Leads</h4>
    <p>{data.leads.length}</p>
  </div>
  <div className="card">
    <h4>Total Calls</h4>
    <p>{data.calls.length}</p>
  </div>
</div>

  );
}
