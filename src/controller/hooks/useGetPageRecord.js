import { membersPages } from "../../model/adminAssets.json";  

function useGetPageRecord() {
  
  function getPageRecord() {
    const pathname = window.location.pathname;
    const slug = pathname.split("/")[1];
    const pageRecordData = membersPages.find((page) => page.slug === slug);
    return pageRecordData;
  }

  return { getPageRecord };
}

export default useGetPageRecord;
