import { useState } from 'preact/hooks';

export const Compadre = () => {
    const [value, setValue] = useState(0);
    return (
    <div>
        <p>Counter: {value}</p>
        <button onClick={() => setValue(value+1)}>Mer</button>
        <button onClick={() => setValue(0)}>Nolla</button>
    </div>
    )
};