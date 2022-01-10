document.querySelectorAll('li>a').forEach(link => {
	const content = document.getElementById('content')
	const arrow = document.getElementById('arrow')
	link.onclick = function(e) {
		e.preventDefault()
		fetch(link.href)
			.then(resp => resp.text())
			.then(html => content.innerHTML = html)

		arrow.style.display = 'block'
	}
})