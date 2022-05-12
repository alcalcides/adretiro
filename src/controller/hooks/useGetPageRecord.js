import adminAssets from "../../model/adminAssets.json";

const { membersPages } = adminAssets;

function useGetPageRecord() {
  function getPageRecord(pageCollection = membersPages) {
    const pathname = window.location.pathname;
    const slug = pathname.split("/")[1];
    const pageRecordData = pageCollection.find((page) => page.slug === slug);
    return pageRecordData;
  }

  return { getPageRecord };
}

export default useGetPageRecord;
