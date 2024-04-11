import {useState} from "react";
import validator from "validator/es";
import {successToast, Toast} from "../util/toast";
import axios from "axios";
import {api} from "../static/config";

export default function Contact(props) {

    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })

    function handleChange(event) {
        setData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit() {
        if (!validateData()) return
        props.setLoading(true)
        axios.post(`${api.url}/api/contact`, data)
            .then(res => {
                props.setLoading(false)
                successToast("Message Sent")
                clearData()
            })
            .catch(err => Toast(err.response.data.message))
    }

    function clearData() {
        setData({
            name: "",
            email: "",
            message: ""
        })
    }

    function validateData() {
        if (data.name.length < 3) {
            Toast("Invalid Name")
            return false
        }
        if (!validator.isEmail(data.email)) {
            Toast("Invalid Email")
            return false
        }
        if (data.message.length < 3) {
            Toast("Enter a valid message")
            return false
        }
        return true
    }

    return (
        <div className="h-full flex sm:flex-row flex-col justify-center font-['Chelsea_Market'] mt-12">

            <div className="sm:w-2/5">
                <p className="text-2xl sm:text-5xl text-white px-6">Contact Us...</p>
                <p className="text-xl sm:text-2xl text-gray-300 px-6">We would love to respond to your queries.</p>
                <p className="text-xl sm:text-2xl text-gray-300 px-6">Feel free to get in touch with us.</p>
                <div className="flex flex-col px-6 py-6 mt-4">
                    <div className="mb-4">
                        <p className="sm:text-xl text-white mb-1">Full Name</p>
                        <input onChange={handleChange} name="name" value={data.name} className="bg-gray-300 rounded-full h-8 sm:h-12 px-6 font-3xl sm:w-3/4 w-[90%]" type="text"/>
                    </div>
                    <div className="mb-4">
                        <p className="sm:text-xl text-white mb-1">Email</p>
                        <input onChange={handleChange} name="email" value={data.email} className="bg-gray-300 rounded-full h-8 sm:h-12 px-6 font-3xl sm:w-3/4 w-[90%]" type="email"/>
                    </div>
                    <div>
                        <p className="sm:text-xl text-white mb-1">Message</p>
                        <textarea onChange={handleChange} name="message" value={data.message} rows="4" className="bg-gray-300 rounded-xl px-2 sm:px-6 font-3xl py-2 sm:w-3/4 w-[90%]" />
                    </div>
                </div>
                   <button onClick={handleSubmit} class="flex-col md:flex-row flex justify-around px-6 py-6 mt-4 font-['Chelsea_Market'] font-bold">
                    <div class="items-start justify-center">
                     <div class="relative group">
                      <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                         <button class="relative px-20 py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600">
                             <span class="flex items-center space-x-5">
                             <span class="pl-6 text-indigo-400 group-hover:text-gray-100 font-bold transition duration-200">Submit &rarr;</span>
                            </span>
                         </button>
                     </div>
                    </div>
                   </button>
            </div>

            <div className="hidden sm:flex items-center w-2.5/5">
                <img className="transition duration-500 ease-in-out hover:scale-95 rounded-xl" alt="" src="https://d12jofbmgge65s.cloudfront.net/wp-content/uploads/2021/07/How_Create_Safe_Email_Account_Kids_Square.jpg"/>
            </div>
        </div>
)
}