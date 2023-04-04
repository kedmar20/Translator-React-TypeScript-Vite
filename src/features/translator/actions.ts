import { useState} from "react";
import {Language} from "lib/models";
import {APP_CONFIG} from "lib/config";
import {SelectedLanguages} from "./types";

export const useSupportedLanguages = (
    onSuccess: (languages:Array<Language>)=>void
)=>{
    const[isLoading, setIsLoading]=useState<boolean>(false)
    const[hasError, setHasError]=useState<boolean>(false)

    return{
        isLoading,
        hasError,
        fetch: ()=>{
            setIsLoading(true)
            setHasError(false)
    console.log(isLoading, hasError)

            fetch(`${APP_CONFIG.API_URL}/languages`)
                .then(response=>{
    console.log(response)
                    if (response.ok) {
                        return response
                    }
                    throw response
                })
                .then(response=>response.json())
                .then(onSuccess)
                .catch(()=>{
                    setHasError(true)
                })
                .finally(()=>{
                    setIsLoading(false)
                })
        }
    }
}


export const useTranslateText = (
    onSuccess: (translatedText:string)=>void
)=>{
    const[isLoading, setIsLoading]=useState<boolean>(false)
    const[hasError, setHasError]=useState<boolean>(false)

    return{
        isLoading,
        hasError,
        fetch: (query: string, selectedLanguages: SelectedLanguages)=>{
            setIsLoading(true)
            setHasError(false)
    console.log(isLoading, hasError)

            fetch(`${APP_CONFIG.API_URL}/translate`,{
                method:'POST',
                body: JSON.stringify({
                    q:query,
                    source: selectedLanguages.source,
                    target: selectedLanguages.target,
                    format: 'text'
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(response=>{
    console.log(response)
                    if (response.ok) {
                        return response
                    }
                    throw response
                })
                .then(response=>response.json())
                .then(({translatedText})=> onSuccess(translatedText))
                .catch(()=>{
                    setHasError(true)
                })
                .finally(()=>{
                    setIsLoading(false)
                })
        }
    }
}
