// 1
fetch("https://jsonplaceholder.typicode.com/comments/1")
.then((response) => response.json())
.then((json) => console.log(json));

// 2
fetch("https://jsonplaceholder.typicode.com/comments",{
	method: "POST",
	body: JSON.stringify({
		title: 'foo',
		body: 'bar',
		userId: 1,
	  }),
	  headers: {
		'Content-type': 'application/json; charset=UTF-8',
	  },
	})
.then((response) => response.json())
.then((json) => console.log(json));

