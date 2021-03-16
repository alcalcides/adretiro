import React, { useEffect, useState } from "react";
import { getPlayersRank } from "../../model/services/getPlayersRank";
import CardPlayers from "./CardPlayers";

export default function PainelPlayersRank() {
  const [players, setPlayers] = useState([]);
  const [playerCount, setPlayerCount] = useState([]);

  useEffect(() => {
    async function getPlayersRankData() {
      const { rank, playerCount } = await getPlayersRank();
      console.log(rank);
      setPlayerCount(playerCount);
      setPlayers(rank);
    }

    getPlayersRankData();
  }, []);

  return (
    <div>
      <p>Número de Participantes: {playerCount}</p>
      {players.map((player) => (
        <CardPlayers
          key={player.place}
          fullName={player.full_name}
          username={player.username}
          place={player.place}
          stickersCount={player.count}
        />
      ))}
    </div>
  );
}
