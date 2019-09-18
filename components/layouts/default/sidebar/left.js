import React from 'react'
import Tabs from '@components/tabs'
import { connect } from 'react-redux'
import { dispatchToPropsMapper, stateToPropsMapper } from '@store/mappers'
import Sortable from 'react-sortablejs'
import Tree from 'react-ui-tree'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

class Sidebar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            outlineTree: {
                module: 'Body',
                children: [
                    {
                        collapsed: true,
                        module: "Div",
                        children: [
                            {
                            module: "Text",
                            leaf: true
                        }]
                    }
                ]
            },
            activeOutlineNode: null
        }
        this._renderOutlineNode = this._renderOutlineNode.bind(this)
        this.onClickNode = this.onClickNode.bind(this)
    }
    
    _elementsTabContent(){
        const {boilerplates} = this.props
        const sortableOptions = {
            sort: false,
            group: {
                name: 'elements',
                put: false,
                pull: 'clone'
            }
        }
        return (
            <SimpleBar className="h-full overflow-auto">
                <Sortable options={sortableOptions}>
                    { boilerplates.elements.map((el, i) => (
                        <div className="px-4 py-2 border-b border-gray-800 cursor-pointer select-none" 
                            key={i}>
                            <span className="mr-4">
                                <i className={el.icon}></i>
                            </span>
                            {el.name}
                        </div>
                    )) }
                </Sortable>
            </SimpleBar>
        )
    }

    _componentsTabContent(){
        return (
            <SimpleBar className="h-full overflow-auto">
                <div className="px-4 py-2">
                    Components
                </div>
            </SimpleBar>
        )
    }
    
    _renderOutlineNode(node){
        return (
            <span
                className={`node ${node === this.state.activeOutlineNode && 'is-active'}`}
                onClick={this.onClickNode.bind(null, node)}
            >
                {node.module}
            </span>
        )
    }

    onClickNode(node){
        this.setState({
            activeOutlineNode: node
        })
    }
    
    render(){
        return (
            <div className="sidebar shadow-xl border-r border-gray-800 bg-gray-900 text-white w-full h-full flex flex-col justify-between">
                <div className="flex flex-col" style={{height: '50%'}}>
                    <Tabs tabs={[{ name: 'elements', title: 'Elements', content: this._elementsTabContent() }, { name: 'components', title: 'Components', content: this._componentsTabContent() }]} />
                </div>
                <div className="flex flex-col mt-2" style={{height: '50%'}}>
                    <div className="flex border-b border-gray-800 border-t px-4 py-2">
                        <span className="font-bold">
                            Outline
                        </span>
                    </div>
                    <SimpleBar className="h-full overflow-auto">
                        <div className="flex flex-col px-4 py-2">
                            <Tree
                                paddingLeft={20}
                                tree={this.state.outlineTree}
                                renderNode={ this._renderOutlineNode }
                            />
                        </div>
                    </SimpleBar>
                </div>
            </div>
        )
    }
}

const mapStateToProps = stateToPropsMapper({
    boilerplates: 'studio/boilerplates',
    elements: 'studio/elements'
})

export default connect(mapStateToProps)(Sidebar)