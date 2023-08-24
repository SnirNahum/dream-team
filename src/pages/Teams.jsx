import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fplService } from "../services/fplService";
import { loadGeneralInfo } from "../store/actions/generalInfo.actions";

export default function Teams() {
  const generalInfo = useSelector((state) => state.fplModule.generalInfo);

  const [team, setTeams] = useState({});

  useEffect(() => {
    loadGeneralInfo();
  }, []);

  if (!generalInfo) return <div>Loading...</div>;
  return (
    <div className="teams">
      <h2>Select a team</h2>
      <section className="card-grid">
        {generalInfo.teams.map((team) => (
          <ul className="team-card clean-list" key={team.id}>
            <img
              src={`https://yvrzozsmicwmxmhmjjty.supabase.in/storage/v1/object/public/public/badges/t${team.code}.png`}
              alt=""
            />
            <li>
              <h3>{team.name}</h3>
              <p>{team.short_name}</p>
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
}
