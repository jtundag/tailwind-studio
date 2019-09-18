import React from 'react'
import Head from 'next/head'
import LeftSidebar from '@components/layouts/default/sidebar/left'
import RightSidebar from '@components/layouts/default/sidebar/right'
import Sortable from 'react-sortablejs'
import { connect } from 'react-redux'
import { dispatchToPropsMapper, stateToPropsMapper } from '@store/mappers'

class Home extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      activeElementId: null
    }
    this.setActiveElement = this.setActiveElement.bind(this)
  }
  
  _generateId() {
    let S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4())
  }

  updateElementsOrder(order){
  }

  setActiveElement(id, e){
    e.stopPropagation()
    this.setState({
      activeElementId: id
    })
  }

  _renderElement(el, withActions = true) {
    const sortableOptions = {
      group: 'elements',
      onAdd: (e) => {
        const { oldIndex } = e
        const id = this._generateId()
        el.children.push({
          ...this.props.boilerplates.elements[oldIndex],
          id,
          children: []
        })
        this.props.setElements(this.props.rootElement)
        this.setState({
          activeElementId: id
        })
      }
    }
    return (
      <Sortable options={ sortableOptions }
        onChange={this.updateElementsOrder}
        tag={el.tag}
        className={`${el.classNames.join(' ')} relative ${this.state.activeElementId == el.id && '-active'}`}
        key={el.id}
        onClick={(e) => this.setActiveElement(el.id, e)}
        onMouseOver={(e) => {
          e.stopPropagation()
          e.target.classList.add('-show-actions')
        }}
        onMouseOut={(e) => {
          e.stopPropagation()
          e.target.classList.remove('-show-actions')
        }}>
        {
          withActions &&
          (
            <div className="flex absolute left-0 -actions items-center">
              <button type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white text-xs flex justify-center items-center w-6 h-6">
                <i className="fas fa-edit"></i>
              </button>
              <button type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white text-xs flex justify-center items-center w-6 h-6">
                <i className="fas fa-trash"></i>
              </button>
              <span className="text-xs text-blue-500 ml-2">
                {el.name}
              </span>
            </div>
          )
        }
        {el.children.map(child => this._renderElement(child))}
      </Sortable>
    )
  }
  
  render(){
    let { rootElement } = this.props
    return (
      <div className="flex w-full h-full">
        <Head>
          <title>Home</title>
        </Head>
        <div className="flex w-full h-full">
          <div className="flex w-1/5">
            <LeftSidebar />
          </div>
          <div className="flex flex-grow p-6">
            <div className="border border-dashed relative border-gray-800 w-full h-full bg-white">
              { this._renderElement(rootElement, false) }
            </div>
          </div>
          <div className="flex w-1/5">
            <RightSidebar />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = stateToPropsMapper({
  rootElement: 'studio/rootElement',
  boilerplates: 'studio/boilerplates'
})

const mapDispatchToProps = dispatchToPropsMapper({
  setElements: 'studio/setElements'
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
