import { adminPages } from "../../model/adminAssets.json";  

function useGetPageRecordAdmin() {
  
  function getPageRecordAdmin() {
    const pathname = window.location.pathname;
    const slug = pathname.split("/")[1];
    const pageRecordData = adminPages.find((page) => page.slug === slug);
    return pageRecordData;
  }

  return { getPageRecordAdmin };
}

export default useGetPageRecordAdmin;
