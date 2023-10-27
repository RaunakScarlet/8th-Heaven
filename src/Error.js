import { useRouteError } from "react-router-dom";



const Error = () => {

    const err = useRouteError();
    console.log(err);

    return (
        <div className=" flex flex-col items-center justify-center">
            <h3 className="font-bold text-3xl p-4 m-4">
                {err.status + " " + err.statusText}
            </h3>
            <h1 className="font-bold text-3xl p-4 m-4">
                Please Open In The DeskTop Mode If You Are On Mobile View
            </h1>
            <button
                className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={() => {
                    window.location.href = "/";
                }}
            >
                Back 2 Home
            </button>
        </div>
    );
}
export default Error;