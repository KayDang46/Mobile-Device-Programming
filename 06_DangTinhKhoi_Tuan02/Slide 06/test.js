$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    beforeSend: function (xhr) {
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }
})
.done(function (data) {
    if (console && console.log) {
        document.getElementById("demo").innerHTML = "Sample of data:"+ (data.slice(0, 100));
        console.log("Sample of data:", data.slice(0, 100));
    }
});
