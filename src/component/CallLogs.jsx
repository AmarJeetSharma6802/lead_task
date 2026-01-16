import { useApp } from "../component/AppContext.jsx";

export default function CallLogs() {
  const { data } = useApp();
  return (
    <div>
      <h3>Call Logs</h3>
      {data.calls.map((c, i) => (
        <div key={i}>
          {c.lead} | {c.time} | {c.outcome}
        </div>
      ))}
    </div>
  );
}
