import { h } from 'preact'

const Error = ({ statusDetail, statusCode }) => {
    return (
        <div style={{color: "#000", background: "#fff", fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif', width: "calc(100vh- 16px)", height: "calc(100vh - 16px)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div>
                <h1 style={{display: "inline-block", borderRight: "1px solid rgba(0, 0, 0, 0.3)", margin: "0 20px 0 0", padding: "10px 23px 10px 0px", fontSize: "24px", fontWeight: 500, verticalAlign: "top"}}>
                    {statusCode}
                </h1>
                <div style={{display: "inline-block", textAlign: "left", lineHeight: "49px", height: "49px", verticalAlign: "middle"}}>
                    <h2 style={{fontSize: "14px", fontWeight: "normal", lineHeight: "inherit", margin: 0, padding: 0}}>
                        {statusDetail[statusCode] ? statusDetail[statusCode] : "undefined"}
                    </h2>
                </div>
            </div>
        </div>
    )
}

Error.getInitialProps = async ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    const statusDetail = {
        '400': 'Bad Request',
        '401': 'Unauthorized',
        '402': 'Payment Required',
        '403': 'Forbidden',
        '404': 'This page went missing...',
        '405': 'Method Not Allowed',
        '406': 'Not Acceptable',
        '407': 'Proxy Authentication Required',
        '408': 'Request Timeout',
        '409': 'Conflict',
        '410': 'Gone',
        '411': 'Length Required',
        '412': 'Precondition Required',
        '413': 'Request Entry Too Large',
        '414': 'Request-URI Too Long',
        '415': 'Unsupported Media Type',
        '416': 'Requested Range Not Satisfiable',
        '417': 'Expectation Failed',
        '418': 'I\'m a teapot',
        '500': 'Internal Server Error',
        '501': 'Not Implemented',
        '502': 'Bad Gateway',
        '503': 'Service Unavailable',
        '504': 'Gateway Timeout',
        '505': 'HTTP Version Not Supported',
    };
    return { statusCode, statusDetail }
}

export default Error