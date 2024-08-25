import Style from "./Navigation.module.css"
function Navigation()
{
    return(
        <div className={Style.Navigation}>
            <img src="https://cdn.worldvectorlogo.com/logos/sports.svg" alt="Logo Not Found" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>contact</li>
            </ul>
        </div>
    );
}
export default Navigation;