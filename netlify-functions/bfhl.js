// netlify-functions/bfhl.js
exports.handler = async (event, context) => {
    if (event.httpMethod === 'POST') {
        const body = JSON.parse(event.body);
        const inputData = body.data;

        // Input validation
        if (!Array.isArray(inputData)) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    is_success: false,
                    message: "Input data must be an array"
                })
            };
        }

        const numbers = inputData.filter(item => !isNaN(item));
        const alphabets = inputData.filter(item => /^[A-Za-z]$/.test(item));
        const highestLowercaseAlphabet = alphabets.filter(item => item === item.toLowerCase()).sort().slice(-1);

        return {
            statusCode: 200,
            body: JSON.stringify({
                is_success: true,
                user_id: "john_doe_17091999",
                email: "john@xyz.com",
                roll_number: "ABCD123",
                numbers: numbers,
                alphabets: alphabets,
                highest_lowercase_alphabet: highestLowercaseAlphabet,
            }),
        };
    } else if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            body: JSON.stringify({
                operation_code: 1
            }),
        };
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method not allowed" }),
        };
    }
};
