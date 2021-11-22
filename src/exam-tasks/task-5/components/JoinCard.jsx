import Button from "./Button";
import css from './JoinCard.module.css'

function JoinCard({fontFam, iconClass}) {
    return (
        <section className={css['join-card']}>
            <i className={`fa fa-${iconClass} ${css.icon}`}></i>
            <h1 style={{fontFamily: fontFam}}>Happening now</h1>
            <h2 style={{fontFamily: fontFam}}>Join Twitter today.</h2>
            <div className={css['col-btns']}>
                <Button text="Sign up" btnClass="btn-filled"/>
                <Button text="Log in" btnClass="btn-outlined"/>
            </div>
        </section>
    );
}

export default JoinCard;