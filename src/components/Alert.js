import React from 'react'

export default function Alert(props) {
    return (
        <div style={{ height: '50px' }}>
            {/* // dont use the below statement, but community prefer */}
            {props.alert && <div>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{props.alert.type}</strong>: {props.alert.message}
                </div>
            </div>}
        </div>
    )
}
