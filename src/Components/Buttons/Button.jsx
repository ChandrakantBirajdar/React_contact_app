import Style from "./Button.module.css"

function Button({logo,text,bigbtn})
{
    return <button className={bigbtn? Style.btnbig : Style.btn}>{logo}{text}</button>
}
export default Button;