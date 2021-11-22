import React, { useRef } from 'react';
import css from './Task7.module.css';

function Task7() {
    const task7Ref = useRef(null);

    const lightTheme = () => {
        task7Ref.current.style.backgroundColor = '#f1f1f1';
        task7Ref.current.style.color = '#000';
    };
    const darkTheme = () => {
        task7Ref.current.style.backgroundColor = '#000';
        task7Ref.current.style.color = '#f1f1f1';
    };

    return (
        <div ref={task7Ref}>
            <h3>Task 7</h3>
            <div className={css.container}>
                <h1>Lorem ipsum catticus</h1>
                <p>Birman. Scottish fold cheetah leopard yet persian but siberian, and cornish rex but kitty. Siberian kitty abyssinian or american bobtail birman. Cheetah kitty for bobcat and tomcat. Munchkin tiger and tom but leopard yet jaguar, bengal. Kitty cheetah, tom. Kitten jaguar, russian blue yet singapura jaguar. Siberian kitty abyssinian or american bobtail birman.</p>
                <div className={css['task7-btns']}>
                    <button  onClick={lightTheme}>Light theme</button>
                    <button onClick={darkTheme}>Dark theme</button>
                </div>
            </div>
        </div>
    );
}

export default Task7;

/* Task 7
Task 7 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
