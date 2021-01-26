import React, { useEffect, useState } from "react";
import useGetPageRecord from "../../controller/hooks/useGetPageRecord";

import { adminPages } from "../../model/adminAssets.json"
 
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


