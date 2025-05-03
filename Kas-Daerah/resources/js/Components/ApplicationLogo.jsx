import appLogo from "../../../public/image/new.png"

export default function ApplicationLogo(props) {
    return (
        <img src={appLogo} alt="Logo" {...props} />
    );
}
