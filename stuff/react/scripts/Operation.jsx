'use strict'

function Operation(props) { // dumb
    return <section>
        <h2>{props.symbol === '+' ? 'Addition' : 'Subtraction'}</h2>
        {props.a} {props.symbol} {props.b} = {props.symbol === '+' ? props.a + props.b : props.a - props.b}
    </section>
}