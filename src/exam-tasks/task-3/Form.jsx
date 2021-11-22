import { useState } from "react";
import css from './Form.module.css';

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(null);

    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState(false);

    const isAdult = formData.age >= 18;

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!firstName || !lastName || !age) return;
        setFormData({ 
            firstName: firstName,
            lastName: lastName,
            age: age,
        })
        setMessage(true);
    }

    return (
        <form className={css['reg-form']} onSubmit={handleSubmit}>
            <h3>Registracija</h3>
            <input type="text" placeholder="Vardas" onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Pavardė" onChange={(e) => setLastName(e.target.value)}/>
            <input type="number" placeholder="Amžius" onChange={(e) => setAge(e.target.value)}/>
            <button className={css['reg-btn']}>Pateikti</button>
            {message && <div className={`${css.message} ${isAdult ? css.success : css.error}`}>{isAdult ? "Dėkojame, kad užsiregistravote" : "Deja, registracija negalima. Registruotis galima tik nuo 18 metų"}</div>}
        </form>
    );
}

export default Form;