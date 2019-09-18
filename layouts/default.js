import React from 'react'

class DefaultLayout extends React.Component {
    render(){
        return (
            <div className="w-full h-full flex bg-gray-900">
                {this.props.children}
            </div>
        )
    }
}

export default DefaultLayout