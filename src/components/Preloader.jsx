import { useEffect } from "react"
import $ from "jquery"

const Preloader = () => {
    useEffect(() =>{
        /*=============================================
        =    		 Preloader			      =
        =============================================*/
        function preloader() {
            $('#preloader').delay(0).fadeOut();
        };
    
        preloader()
    },[])
    return (
        <>
        {/* <!-- preloader --> */}
        <div id="preloader">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div className="object" id="object_one"></div>
                    <div className="object" id="object_two"></div>
                    <div className="object" id="object_three"></div>
                </div>
            </div>
        </div>
        {/* <!-- preloader-end --> */}
        </>
    )
}

export default Preloader