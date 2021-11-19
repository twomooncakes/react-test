import { useState } from "react";

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(null);

    return (
        <form>
            <input type="text" placeholder="Vardas" onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Pavardė" onChange={(e) => setLastName(e.target.value)}/>
            <input type="number" placeholder="Amžius" onChange={(e) => setAge(e.target.value)}/>
            <button>Pateikti</button>
        </form>
    );
}

export default Form;