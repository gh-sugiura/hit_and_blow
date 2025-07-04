// const sayHello = (name: string) => {
//     return `Hello, ${name}!`
// }
// process.stdout.write(sayHello("Hiroki"));


const printLine = (text: string, break_line: boolean = true) => {
    process.stdout.write(text + (break_line ? '\n' : ''));
}


const promptInput = async (text: string) => {
    printLine(`\n${text}\n`, false)
    const input: string = await new Promise((resolve) =>
        process.stdin.once('data', (data) => resolve(data.toString()))
    );
    return input.trim()
}


(async () => {
    const name = await promptInput("名前を入力してください。")
    console.log(name)
    const age = await promptInput("年齢を入力してください。")
    console.log(age)
    process.exit()
})()