'use strict'

// function click() {
//     console.log('clicked on me')
// }

function main() {
    return <main>
        {/* <Title text={'Hello, World!'} /> */}
        {/* <Title text={'Hola, Mundo!'} /> */}

        {/* <Operation a={2} b={3} symbol={'+'} /> */}
        {/* <Operation a={2} b={3} symbol={'-'} /> */}

        {/* <button onClick={click}>click me</button> */}

        <Calculator operation={'+'}/>
        <Calculator operation={'-'}/>
        <Calculator operation={'*'}/>
        <Calculator operation={'/'}/>
    </main>
}

function render() {
    ReactDOM.render(main(), document.getElementById('root'))
}

render()