import { useHistory } from "react-router-dom";

function AboutUs() {
    const history = useHistory();
    return (
        <main>
            <h1>About Us</h1>
            <button onClick={() => history.goBack()}>Back</button>
        </main>
    );
}

export default AboutUs;