const form = document.getElementById('get-color-scheme')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const selectedColor = document.getElementById('selected-color').value.slice(1)
    const schemeSelector = document.getElementById('scheme-selector').value

fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${schemeSelector}&count=5`)
    .then(res => res.json())
    .then(data => {
            let hexHtml = ''
            for(let color of data.colors){
                const hexValue = color.hex.value
                hexHtml += `
                <div>
                    <div style="background-color: ${hexValue}" class="color"></div>
                    <h1>${hexValue}</h1>
                </div>
                `
        }
        document.getElementById('colors').innerHTML = hexHtml
    })
})
        