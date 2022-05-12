import React, { useEffect, useState } from "react";
import useGetPageRecord from "../../controller/hooks/useGetPageRecord";

import adminAssets from "../../model/adminAssets.json";

const { adminPages } = adminAssets;
 
export default function TitleAdmins() {
  const [title, setTitle] = useState('');
  const { getPageRecord } = useGetPageRecord();

  useEffect(() => {
    const pageRecord = getPageRecord(adminPages);
    setTitle(pageRecord.title);
  }, [getPageRecord]);

  return (
    <h2 className="d-inline my-0 h3">{title}</h2>
  );
}


