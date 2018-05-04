import React from 'react'
import ShowDetails from '../ShowDetails/ShowDetails';

function ShowList(props) {
    if (props.onState.resultsList.length > 0) {
        let results = props.onState.resultsList.map(v =>

            <li key={v.login}>
                <img onClick={() => {
                    props.onShowDetails(v.login)
                }}
                    src={v.avatar_url} />
                <p>{v.login}</p>
            </li>
        )
        return <div>
            <h2> User List </h2>
            <ul >
                {results}
            </ul>
        </div>
    }
    return <div></div>

}

export default ShowList