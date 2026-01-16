import { useState } from "react";
import { useApp } from "../component/AppContext.jsx";

export default function Leads() {
  const { data, setData, role } = useApp();
  const [editIndex, setEditIndex] = useState(null);

  const updateStatus = (index, status) => {
    const updated = [...data.leads];
    updated[index].status = status;
    setData({ ...data, leads: updated });
    setEditIndex(null);
  };

  return (
    <div>
      <h3>Leads</h3>
      {data.leads.map((l, i) => (
        <div key={i} className="list-item">
          {l.name} | {l.phone} | {l.status}

          {role === "Admin" && (
            <>
              <button onClick={() => setEditIndex(i)}>Edit</button>
              {editIndex === i && (
                <select onChange={(e) => updateStatus(i, e.target.value)}>
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Converted</option>
                </select>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
