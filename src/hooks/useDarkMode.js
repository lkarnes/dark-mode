import {useLocalStorage} from './useLocalStorage.js';
import {useEffect} from 'react';

export const useDarkMode = (key, intVal) => {
    const [value, setValue] = useLocalStorage(key, intVal)
    useEffect(()=> {
        if(value) {
            const body = document.querySelector('body')
            body.classList.add('dark-mode');
        }else{
            const body = document.querySelector('body')
            body.classList.remove('dark-mode')
        }
    }, [value]);

    return [value, setValue]
}