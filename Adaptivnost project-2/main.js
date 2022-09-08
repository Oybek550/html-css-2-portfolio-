 fetch('http://app.sportdataapi.com/api/v1/soccer/leagues', {
    headers: {
        apikey: '96776110-4cf9-11ec-bb01-cd059df67e1f'
    },
    referrerPolicy: "no-referrer-when-downgrade",
    referrer: "",
    mode: "cors",
    credentials: "same-origin"
}).then((Response) => {
    return Response.json();

}).then((data) => {
console.log(data);
});