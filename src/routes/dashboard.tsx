import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard page</h1>
      <p>This is a protected page.</p>
      <div className="bg-white">
        <UserButton />
      </div>
      <ul>
        <li>
          <Link to="/dashboard/invoices">Invoices</Link>
        </li>
        <li>
          <Link to="/">Return to index</Link>
        </li>
      </ul>
    </>
  );
}
