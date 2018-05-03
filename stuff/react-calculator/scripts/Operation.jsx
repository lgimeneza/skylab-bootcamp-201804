'use strict'

function Operation(props) { // dumb
    return <section>
        <h2>{props.operator === '+' ? 'Addition' : 'Subtraction'}</h2>
        {props.a} {props.operator} {props.b} = {props.operator === '+' ? props.a + props.b : props.a - props.b}
    </section>
}