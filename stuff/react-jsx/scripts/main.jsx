'use strict'

const main = <main>
    <section>
        <h1>Hello, World!</h1>
    </section>
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4
            <ul>
                <li>item 4.1</li>
                <li>item 4.2</li>
                <li>item 4.3</li>
            </ul>
        </li>
    </ul>
</main>

ReactDOM.render(main, document.getElementById('root'))