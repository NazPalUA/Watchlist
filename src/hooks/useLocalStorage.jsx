import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}


// --- usage example --- //

// function App() {
//     const [name, setName] = useLocalStorage('name', '');

//     const handleNameChange = (event) => {
//         setName(event.target.value);
//     };

//     return (
//         <div>
//             <label htmlFor="name">Name:</label>
//             <input id="name" type="text" value={name} onChange={handleNameChange} />
//             <p>Hello, {name || 'stranger'}!</p>
//         </div>
//     );
// }
