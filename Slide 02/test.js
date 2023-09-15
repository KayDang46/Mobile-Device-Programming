$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    beforeSend: function(xhr) {
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
    },
}).done(function(data) {
    if (console && console.log) {
        result = data.title;
        console.log("Sample of data:", result.slice(0, 100));
    }
});