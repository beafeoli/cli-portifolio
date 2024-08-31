import useHistory from "./history-state";

function Projetcs () {

    const { terminalHistory, setHistory, getCommandReturn } = useHistory();
    const input = terminalHistory.input;
    const inputHistory = terminalHistory.inputHistory;
    const history = terminalHistory.history;
    
    return (
        <>
        <div>
            <span className="projetc-item" tabIndex={0}>
                project
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                description
            </span>
        </div>
        </>
    )
}

export default Projetcs