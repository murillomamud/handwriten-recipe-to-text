const { TextractClient, DetectDocumentTextCommand } = require("@aws-sdk/client-textract");
const { OpenAI } = require('openai');
const dotenv = require('dotenv');

dotenv.config();
const openai = new OpenAI(process.env.OPENAI_API_KEY);
const client = new TextractClient({ region: "us-east-1" });

function buildText(data) {
    let text = '';
    data.Blocks.forEach(block => {
        if (block.BlockType === 'LINE') {
            text += block.Text + '\n';
        } else if (block.BlockType === 'WORD') {
            text += block.Text + ' ';
        }
    });
    return text;
}

exports.handler = async (event, context) => {
    try {
        const base64Image = event.body;
        const bufferImage = Buffer.from(base64Image, 'base64');

        const params = {
            Document: {
                Bytes: bufferImage,
            },
        };

        const data = await client.send(new DetectDocumentTextCommand(params));
        const text = buildText(data);

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: `In the context of recipes in Portuguese - Brazilian language, could you make this text better: ${text}.` }],
            model: "gpt-3.5-turbo",
        });

        return {
            statusCode: 200,
            body: completion.choices[0].message.content,
        };
    } catch (err) {
        console.log("Error", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        };
    }
};