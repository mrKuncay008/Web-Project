import appLogo from "../../../public/image/file.png"

export default function ApplicationLogo(props) {
    return (
        <img src={appLogo} alt="Logo" {...props} />
    );
}
