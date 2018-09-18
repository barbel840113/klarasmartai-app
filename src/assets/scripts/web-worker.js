

onmessage = async function (e) {
    let actionREsult;
    //trigger
    if (e.data.action == 'search') {
        actionREsult = "welcome" //await searchOnline();
        postMessage({
            action: e.data.action,
            result: actionREsult
        });
    }
}

async function searchOnline() {
    setTimeout(() => {
        return "Welcome After 20000ms";
    }, 20000);
}