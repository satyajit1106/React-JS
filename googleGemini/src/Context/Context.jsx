import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord)=>{
        setTimeout(() => {
            setResultData(prev => prev+nextWord);
        }, 75*index);
    }

    const onSent = async () => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        try {
            const response = await run(input);
            setResultData(response);
        } catch (error) {
            console.error("Error fetching data:", error);
            setResultData("There was an error processing your request.");
        } finally {
            setLoading(false);
            setInput("");
        }
        let responseArray = response.split("**");
        let newResponse;
        for(let i =0; i<responseArray.length; i++){
                if( i===0 || i%2 !== 1){
                    newResponse+=responseArray[i];
                }
                else{
                    newResponse += "<b>"+responseArray[i]+"</b>"
                }
        }
        let newResponse2 = newResponse.split("*").join("</br>")

        let newResponseArray = newResponse2.split(" ");
        for(let i=0; i<newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ")
        }
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
