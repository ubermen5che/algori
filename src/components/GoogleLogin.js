import { GoogleLogin } from "react-google-login";

const base = require('../utils/base.json')
const clientId = base.client_id;

export default function GoogleLoginBtn(props) {
    console.log(props)
    const onSuccess = (response) => {
        console.log(response.accessToken);

        sessionStorage.setItem("access_token", response.accessToken);
        // server에 등록되어있는 
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure} />
        </div>
    )
}