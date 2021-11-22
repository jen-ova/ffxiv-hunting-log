import React, { createContext, useState } from "react";

export const RankContext = createContext();

const RankProvider = ({ children }) => {
  const [rank, setRank] = useState(1);

  const handleRank = (e) => {
    e.preventDefault();
    setRank(parseInt(e.target.value));
  };

  const rankData = { rank, setRank, handleRank };

  return (
    <RankContext.Provider value={rankData}>{children}</RankContext.Provider>
  );
};

export default RankProvider;
