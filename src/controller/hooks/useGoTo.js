import { useNavigate } from "react-router-dom"

function useGoTo() {
    const navigate = useNavigate();
    
    function goTo (url) {
        window.scroll(0, 0);
        navigate(url);
    }
    return { goTo };
}

export default useGoTo;