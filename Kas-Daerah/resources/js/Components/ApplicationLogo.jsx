import appLogo from "../../../public/image/newlogo.png"

export default function ApplicationLogo(props) {
    return (
        <img src={appLogo} alt="Logo" {...props} />
    );
}
