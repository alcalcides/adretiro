import { useLocation } from "react-router-dom";

function useQueryParams() {
  function getQueryParams() {
    return new URLSearchParams(useLocation().search);
  }
  const queryParams = getQueryParams();
  return { queryParams };
}

export default useQueryParams;
