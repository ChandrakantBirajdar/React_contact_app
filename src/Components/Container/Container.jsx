
import Button from "../Buttons/Button";
import Style from "./Container.module.css"
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";

function Container() {

    return (
        <div className={Style.Container}>
          
            <div className={Style.left_Container}>
                <div>
                    <Button logo={<BiSolidMessageDetail />} text={"Via Support Chat"} />
                    <Button logo={<IoCallOutline />} text={"Via Call"} />
                </div>
                <Button bigbtn={true} logo={<BiSolidMessageDetail />} text={"Via Email"} />
                <form >
                    <div className={Style.fromData}>
                        <span>name</span>
                        <input type="text"  />
                    </div>
                    <div className={Style.fromData}>
                        <span>Email</span>
                        <input type="text"  />
                    </div>
                    <div className={Style.fromData}>
                        <span>Email</span>
                        <textarea rows={9}  />
                    </div>
                    
                </form>
                <div className={Style.lastbutton}>
                    
                <button>Submit</button>
                </div>



            </div>
            <div className={Style.right_Container}>
                <img src="https://cdn3.vectorstock.com/i/1000x1000/53/52/young-man-calling-with-smartphone-vector-24315352.jpg" alt="Not found" />
            </div>
        </div>
    );
}
export default Container;