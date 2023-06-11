
export const environment = {
    port: process.env.REACT_APP_PORT,
    aws: {
        aws_accesss: process.env.REACT_APP_AWS_ACCESS_KEY,
        aws_sec: process.env.REACT_APP_AWS_SEC_KEY,
        aws_region: process.env.REACT_APP_AWS_REGION,
        aws_bucket: process.env.REACT_APP_AWS_BUCKET
    },
    api_url: process.env.REACT_APP_API_URL
}