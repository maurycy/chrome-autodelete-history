const days = 3;

chrome.windows.onRemoved.addListener(function() {
    const startTime = 0;
    const endTime = new Date(Date.now() - (86400000 * days)).getTime();
    const range = {startTime: startTime, endTime: endTime};

    console.log(endTime);

    chrome.history.deleteRange(range, function() {
    });
});
