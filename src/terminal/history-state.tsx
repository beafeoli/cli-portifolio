import { useState } from 'react'
import { IHistory, IInput } from './types'
import { lineDespacer } from '../utils/line-utils'
import commands from './commands'

function useHistory() {

    const inputInitial: IInput = {
        value: '',
        index: null,
        disabled: false
    };

    const [terminalHistory, setHistory] = useState<IHistory>({
        input: inputInitial,
        inputHistory: [],
        history: [commands["welcome"]],
    })

    function getCommandReturn(ps1: JSX.Element) {

        const command = terminalHistory.input.value;
        const commandDespaced = lineDespacer(command);
        let newHistoryItem: JSX.Element = <></>;

        switch(commandDespaced) {
            case '':
                newHistoryItem = (
                    <div key={'hist-'+terminalHistory.history.length} id={'hist-'+terminalHistory.history.length}>
                        <div className='command-line'>{ps1}<span className='command-input'></span></div>
                     </div>
                );

                setHistory({
                    ...terminalHistory,
                    history: [...terminalHistory.history, newHistoryItem],
                    input: inputInitial 
                });

                break;

            case 'clear':
                setHistory({
                    history: [],
                    input: inputInitial,
                    inputHistory: [...terminalHistory.inputHistory, terminalHistory.input.value]
                });
                break;

            case 'projetcs':
            break;

            default:
                if (commands[commandDespaced as keyof typeof commands]) {
                    newHistoryItem = (
                            <div key={'hist-'+terminalHistory.history.length} id={'hist-'+terminalHistory.history.length}>
                                <div className='command-line'>{ps1}<span className='command-input'>{terminalHistory.input.value}</span></div>
                                <div>{commands[commandDespaced as keyof typeof commands]}</div>
                            </div>
                    );

                    } else {
                        newHistoryItem = (
                            <div key={'hist-'+terminalHistory.history.length} id={'hist-'+terminalHistory.history.length}>
                                <div className='command-line'>{ps1}<span className='command-input'>{terminalHistory.input.value}</span></div>
                                 <div>{command}: not found</div>
                             </div>
                        );
                    }

                    setHistory({
                        inputHistory: [...terminalHistory.inputHistory, terminalHistory.input.value],
                        history: [...terminalHistory.history, newHistoryItem],
                        input: inputInitial 
                    });
                break;
        }

        // if (commandDespaced == 'clear') {
        //     setHistory({
        //         history: [],
        //         input: inputInitial,
        //         inputHistory: [...terminalHistory.inputHistory, terminalHistory.input.value]
        //     });

        // } else {
        //     if (!commandDespaced) {
        //         newHistoryItem = (
        //             <div key={'hist-'+terminalHistory.history.length} id={'hist-'+terminalHistory.history.length}>
        //                 <div className='command-line'>{ps1}<span className='command-input'></span></div>
        //              </div>
        //         );

        //         setHistory({
        //             ...terminalHistory,
        //             history: [...terminalHistory.history, newHistoryItem],
        //             input: inputInitial 
        //         });

        //     } else {
        //         if (commands[commandDespaced as keyof typeof commands]) {
        //         newHistoryItem = (
        //                 <div key={'hist-'+terminalHistory.history.length} id={'hist-'+terminalHistory.history.length}>
        //                     <div className='command-line'>{ps1}<span className='command-input'>{terminalHistory.input.value}</span></div>
        //                     <div>{commands[commandDespaced as keyof typeof commands]}</div>
        //                 </div>
        //         );

        //         } else {
        //             newHistoryItem = (
        //                 <div key={'hist-'+terminalHistory.history.length} id={'hist-'+terminalHistory.history.length}>
        //                     <div className='command-line'>{ps1}<span className='command-input'>{terminalHistory.input.value}</span></div>
        //                      <div>{command}: not found</div>
        //                  </div>
        //             );
        //         }

        //         setHistory({
        //             inputHistory: [...terminalHistory.inputHistory, terminalHistory.input.value],
        //             history: [...terminalHistory.history, newHistoryItem],
        //             input: inputInitial 
        //         });
        //     }
        // }
    }

    return {
        terminalHistory,
        setHistory,
        getCommandReturn
    };
}

export default useHistory