import { tenants } from "../tenants.js";
import { useApp } from "../component/AppContext.jsx";

export default function Header() {
  const { tenant, switchTenant, role, setRole } = useApp();

  return (
    <div className="header">
      <b>Sales Dashboard</b>

      <select value={tenant} onChange={(e) => switchTenant(e.target.value)}>
        {Object.keys(tenants).map((org) => (
          <option key={org} value={org}>
            Org {org}
          </option>
        ))}
      </select>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Admin</option>
        <option>Agent</option>
      </select>
    </div>
  );
}
