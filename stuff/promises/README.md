[Promises explained with simple real life analogies](https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138)

[JavaScript Promises for Dummies](https://scotch.io/tutorials/javascript-promises-for-dummies)

[Promesas de JavaScript: introducción](https://developers.google.com/web/fundamentals/primers/promises?hl=es)

demos

* retrieving users from list sequencially (one after each)
```js
const headers = { headers: { Authorization: 'Bearer 316f8c330c989ac16e9c3a0a6fa1a2b8c3c18935'}}

fetch('https://api.github.com/search/users?q=abc&per_page=10', headers)
.then(res => res.json())
.then(data => {
	let p = Promise.resolve()

	data.items.forEach(item => {
		console.log(item.login)

    	const user = item.login

		p = p.then(() => fetch(`https://api.github.com/users/${user}`, headers)
                .then(res => res.json())
                .then(data => {
                    console.log(data.login, data.following, data.followers)
                })
			)
	})

	return p
})
.catch(err => {debugger})

console.log('continue...')

// -> output

continue...
realslimshanky
abcdabcd987
colingourlay
abcminiuser
abcsds
aabc
Coder-ZJQ
wanesta
abcang
Aqours
realslimshanky 34 69
abcdabcd987 176 173
colingourlay 235 148
abcminiuser 3 158
abcsds 226 71
aabc 3 19
Coder-ZJQ 48 18
wanesta 28 6
abcang 29 52
Aqours 10 39
```

