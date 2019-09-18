import React from 'react'
import Tabs from '@components/tabs'
import { connect } from 'react-redux'
import { dispatchToPropsMapper, stateToPropsMapper } from '@store/mappers'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

class Sidebar extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
    
    _renderAvailableClasses(){
        return (
            Object.keys(this.props.availableClasses).map((cat, i) => (
                <div className="flex flex-col text-xs"
                    key={i}>
                    <div className="flex border-b border-gray-800 px-4 py-2 items-center cursor-pointer hover:bg-gray-800 justify-between">
                        <span>{cat}</span>
                        <span>
                            <i className="fas fa-caret-down"></i>
                        </span>
                    </div>
                    <div className="flex flex-wrap px-4 py-2 border-b border-gray-800">
                        { this.props.availableClasses[cat].map(cls => (
                            <div className="flex flex-col w-1/2 items-center p-1"
                                key={cls.className}>
                                <div className="border rounded flex justify-center items-center p-2 border-gray-800 w-full h-24 mb-2">
                                    {
                                        cls.thumbnail && 
                                        (
                                            <img src={cls.thumbnail}/>
                                        )
                                    }
                                </div>
                                <span>{cls.className}</span>
                            </div>
                        )) }
                    </div>
                </div>
            ))
        )
    }
    
    render(){
        return (
            <div className="sidebar select-none shadow-xl border-l border-gray-800 bg-gray-900 text-white w-full h-full flex flex-col justify-between">
                <div className="flex flex-col" style={{height: '50%'}}>
                    <div className="flex border-b border-gray-800 px-4 py-2">
                        <span className="font-bold">
                            Element Classes
                        </span>
                    </div>
                    <SimpleBar className="h-full overflow-auto">
                        <div className="flex px-4 py-2">
                    
                        </div>
                    </SimpleBar>
                </div>
                <div className="flex flex-col" style={{height: '50%'}}>
                    <div className="flex border-b border-t border-gray-800 px-4 py-2 justify-between">
                        <span className="font-bold">Available Classes</span>
                        <div className="flex items-center">
                            <input type="text" placeholder="Search..."
                                className="bg-transparent text-xs outline-none focus:outline-none"/>
                            <span>
                                <i className="fas fa-search text-xs"></i>
                            </span>
                        </div>
                    </div>
                    <SimpleBar className="h-full overflow-auto">
                        <div className="flex flex-col overflow-auto h-full">
                            { this._renderAvailableClasses() }
                        </div>
                    </SimpleBar>
                </div>
            </div>
        )
    }
}

const mapStateToProps = stateToPropsMapper({
    availableClasses: 'studio/availableClasses'
})

export default connect(mapStateToProps)(Sidebar)