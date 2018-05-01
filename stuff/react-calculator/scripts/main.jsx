'use strict'

const main = <main>
    <Title text={'Hello, World!'} />
    <Operation a={9} operator={'+'} b={1} />
    <Calculator operation={'*'} />
</main>

ReactDOM.render(main, document.getElementById('root'))