import { useEffect } from "react"
import { getCSRFToken } from "../actions/csrftoken"

const csrftoken = await getCSRFToken()
const CSRFTokenField = ({ token, setToken }) => {
    useEffect(() => {
        setToken(csrftoken)
        // eslint-disable-next-line
    }, [csrftoken])
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={token ? token : ""} />
    )
}
export default CSRFTokenField