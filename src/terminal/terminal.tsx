import { useEffect, useRef, ChangeEvent, useCallback, KeyboardEvent } from 'react'
import './terminal.css'
import useHistory from './history-state'

function Terminal() {
    const { terminalHistory, setHistory, getCommandReturn } = useHistory();
    const input = terminalHistory.input;
    const inputHistory = terminalHistory.inputHistory;
    const history = terminalHistory.history;
    const refInput: any = useRef<HTMLLinkElement>(null);

    const scrollTo = (() => {
      const offsetBottom = refInput.current.offsetTop + refInput.current.offsetHeight;
      window.scrollTo({ top: offsetBottom });
    });

    const focusInput = useCallback(() => {
      refInput.current.focus();
    }, []);
  
    useEffect(() => {
      focusInput();
      scrollTo();
    }, [refInput,history]);

    const handleChange = ((e: ChangeEvent<HTMLInputElement>) => {
      const newInput = e.target.value;
      setHistory({...terminalHistory, input: {...input, value: newInput, valueLastChange: newInput}})
    });

    const handleKey = ((e: KeyboardEvent<HTMLInputElement>) => {
      const historyLength = inputHistory.length
      const historyLastIndex = historyLength - 1

      focusInput();

      if (e.key == 'Enter') {
        getCommandReturn(ps1);
      }

      if (e.key == 'ArrowUp' && inputHistory.length > 0) {
        e.preventDefault(); 
        if (input.index == null) {
          setHistory({...terminalHistory, input: {...input, value: inputHistory[historyLastIndex], index: historyLastIndex}});
        } else if (input.index > 0) {
          setHistory({...terminalHistory, input: {...input, value: inputHistory[input.index - 1], index: input.index - 1}});
        }
      }

      if (e.key == 'ArrowDown' && historyLength > 0) {
        if (input.index != null) {
          if (historyLastIndex - input.index > 0) {
            setHistory({...terminalHistory,input: {...input, value: inputHistory[input.index + 1], index: input.index + 1}});
          } else if (historyLastIndex - input.index == 0) {
            setHistory({...terminalHistory, input: {...input, value: input.valueLastChange || '', index: null}});
          }
        }
      }
    });

    const ps1 = <span><span className='PS1 primary-color'>beoli@beoli.dev</span>:<span className='secondary-color'>~</span>$</span>

    return (
      <>
      <div className="terminal" onClick={focusInput}>
        {history}
        <div className='command-line' key='command-line' id='command-line'>
          {ps1}
          <input type="text" className='command-input' ref={refInput} onChange={handleChange} onKeyDown={handleKey} value={input.value} disabled={input.disabled} />
        </div>
      </div>
      </>
    );
}   

export default Terminal