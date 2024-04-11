import {Page} from "../util/config";
import {useState} from "react";
import validator from "validator/es";
import {successToast, Toast} from "../util/toast";
import axios from "axios";
import {api} from "../static/config";

export default function Footer(props) {

    const[email, setEMail] = useState("")

    function handleChange(event) {
        setEMail(event.target.value)
    }

    function handleSubmit() {
        if (validator.isEmail(email)) {
            axios.post(`${api.url}/api/digest`, {email: email})
                .then(() => {
                    successToast("Thank You For Subscribing!")
                    clearData()
                })
                .catch(err => {
                    Toast(err.response.data.message)
                    clearData()
                })
        }
        else Toast("Invalid Email")
    }

    function clearData() {
        setEMail("")
    }

    return (
        <div className="bg-[#392845]">
            <div className="bg-[#392845] mt-24 flex justify-around flex-col sm:flex-row">

                <div className="ml-4 sm:ml-12 mt-6">
                    <div className="flex">
                        <img className="" width="24px" src="https://img.icons8.com/arcade/64/cyber-security.png" alt=""/>
                        <p className="sm:text-xl text-white ml-2 font-['Chelsea_Market']">Graphical Password for Underaged</p>
                    </div>
                    <p className="text-gray-300 font-['Chelsea_Market'] mt-2 sm:mt-4">A Password Scheme for Underaged.</p>
                </div>

                <div className="ml-4 sm:ml-0 text-white mt-6">
                    <p className="font-['Chelsea_Market'] sm:text-xl">Explore</p>
                    <p onClick={() => props.setPage(Page.ABOUT)} className="text-gray-300 font-['Chelsea_Market'] mt-2 sm:mt-4 cursor-pointer">About Us</p>
                    <p onClick={() => props.setPage(Page.CONTACT)} className="text-gray-300 font-['Chelsea_Market'] cursor-pointer">Contact</p>
                </div>

                <div className="hidden sm:block text-white mt-6">
                    <p className="font-['Chelsea_Market'] text-xl">Join Our Monthly Digest</p>
                    <p className="text-gray-300 font-['Chelsea_Market'] mt-4">Get Exclusive Promotions & Updates.</p>

                    <div className="flex font-['Chelsea_Market']">
                        <input value={email} onChange={handleChange} className="text-black mt-4 rounded-lg px-4 z-10" placeholder="Your Email"/>
                        <button onClick={handleSubmit} className="transition duration-300 ease-in w-1/3 bg-[#A259FF] rounded-lg mt-4 border-[#A259FF] px-1 border-2 hover:bg-transparent z-20 hover:z-0 -ml-4">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <p className="font-['Chelsea_Market'] mt-2 text-[#9b9b9b] sm:text-md text-sm text-center pb-4">© rao, EHU</p>
        </div>

    )
}