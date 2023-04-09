let hack = [
    `Initializing hack program.`,
    `Program initialized. Connecting to the device.`,
    `Device connected.`,
    `Device username: XXXXXXXXXX`,
    `Unlocking the device.`,
    `100 passwords tried.`,
    `Another 100 passwords tried.`,
    `Device unlocked.`,
    `Connecting to the server.`,
    `Server connected.`,
    `Copying device data to the server.`,
    `Copy in progress.`,
    `Copy completed.`,
    `Hack successful.`
]

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 2000)
    })
}

const showHack = async (message) => {
    await sleep(2)
    hack_texts.innerHTML = hack_texts.innerHTML + message + "<br>"
}

(async () => {
    for (let i = 0; i < hack.length; i++) {
        await showHack(hack[i])
    }
})()




