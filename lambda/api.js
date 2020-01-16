module.exports.handler = async function (event, context) {
    console.log("queryStringParameters", event.queryStringParameters)
    const questionsPayload={
        version: 1,
        data:[
            {
                id: 1,
                question:"Are you drunk?",
                answers:[
                    {
                        value:"yes",
                        label:"Yes"
                    },
                    {
                        value:"of_cours",
                        label:"Of cours"
                    },
                ]
            }
        ]
    }
    return {
        // return null to show no errors
        statusCode: 200, // http status code
        body: JSON.stringify(questionsPayload)
    }
}