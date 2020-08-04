module.exports = (tasks)=>{
    console.log(tasks);
    return `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>training</title>
    </head>
    <body>
        <form action="./add" method="POST">
            <input type="text" name="task">
                
            </input>

            <input type="text" name="word">
                
            </input>
            <button type="submit">
                Отправить
            </button>
        </form>
        <div>
            ${tasks.join("\n")}
        </div>
    </body>
    </html>
    `
}