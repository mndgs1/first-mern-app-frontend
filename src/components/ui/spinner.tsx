import { Oval } from "react-loader-spinner";

const Spinner = () => {
    return (
        <Oval
            visible={true}
            height="36"
            width="36"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperClass="h-full w-full flex items-center justify-center"
        />
    );
};

export default Spinner;
