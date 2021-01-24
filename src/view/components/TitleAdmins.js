import React, { useEffect, useState } from "react";
import useGetPageRecordAdmin from "../../controller/hooks/useGetPageRecordAdmin";

export default function TitleAdmins() {
  const [title, setTitle] = useState('');
  const { getPageRecordAdmin } = useGetPageRecordAdmin();

  useEffect(() => {
    const pageRecord = getPageRecordAdmin();
    setTitle(pageRecord.title);
  }, [getPageRecordAdmin]);

  return (
    <h2 className="d-inline my-0 h3">{title}</h2>
  );
}


