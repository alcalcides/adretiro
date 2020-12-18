import { useHistory } from "react-router-dom";

function useGoTo() {
    const history = useHistory();
    
    function goTo (url) {
        window.scroll(0, 0);
        history.push(url);
    }

    return { goTo };
}

export default useGoTo;