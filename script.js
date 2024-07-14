const WEBHOOK_LINK = "LINK_WEBHOOK_AQUI";

function onSubmit(e) {
    const response = e.response.getItemResponses();
    let items = [];

    for (const responseAnswer of response) {
        const question = responseAnswer.getItem().getTitle();
        const answer = responseAnswer.getResponse();
        let parts = []

        try {
            parts = answer.match(/[\s\S]{1,1024}/g) || [];
        } catch (e) {
            parts = answer;
        }

        if (!answer) {
            continue;
        }

        for (const [index, part] of Object.entries(parts)) {
            if (index == 0) {
                items.push({
                    "name": question,
                    "value": part,
                    "inline": false
                });
            } else {
                items.push({
                    "name": question.concat(" (cont.)"),
                    "value": part,
                    "inline": false
                });
            }
        }
    }

    const options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
        },
        "payload": JSON.stringify({
            "content": "‌",
            "embeds": [{
                "title": "Novo Formulário Recebido", // titulo da embed
                "color": 33023, // decimal color
                "fields": items,
                "footer": {
                    "text": "formulário recebido" // texto footer
                },
                "timestamp": new Date().toISOString()
            }]
        })
    };

    UrlFetchApp.fetch(WEBHOOK_LINK, options);
};
