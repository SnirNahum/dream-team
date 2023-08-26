import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fplService } from "../services/fplService";
import { loadGeneralInfo } from "../store/actions/generalInfo.actions";
import DashboardList from "../cmps/dashboard/DashboardList";

export default function Dashboard() {
  const generalInfo = useSelector((state) => state.fplModule.generalInfo);

  useEffect(() => {
    loadGeneralInfo();
  }, []);

  if (!generalInfo) return <div>Loading...</div>;
  return (
    <div className="teams">
      <DashboardList players={generalInfo.elements} />
    </div>
  );
}
