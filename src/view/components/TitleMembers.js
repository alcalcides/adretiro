import React, { useEffect, useState } from "react";
import useGetPageRecord from "../../controller/hooks/useGetPageRecord";

export default function TitleMembers() {
  const [title, setTitle] = useState('');
  const { getPageRecord } = useGetPageRecord();

  useEffect(() => {
    const pageRecord = getPageRecord();
    setTitle(pageRecord.title);
  }, [getPageRecord]);

  return (
    <h2 className="d-inline my-0 h3">{title}</h2>
  );
}


