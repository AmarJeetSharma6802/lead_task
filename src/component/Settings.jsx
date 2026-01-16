import { useApp } from "../component/AppContext.jsx";

export default function Settings() {
  const { tenant } = useApp();
  return <h3>Settings – Org {tenant}</h3>;
}
