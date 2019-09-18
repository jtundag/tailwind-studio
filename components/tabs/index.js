import { useState } from 'react'
import Content from './content'

export default function(props){
    const { tabs } = props
    const [activeTab, setActiveTab] = useState(tabs[0])
    
    return (
        <div className="flex flex-col w-full">
            <div className="flex border-b border-gray-800">
                {tabs.map(tab => (
                    <div className={`flex px-4 py-3 cursor-pointer select-none ${activeTab.name == tab.name ? 'text-white font-bold' : 'text-gray-500 hover:text-gray-100'}`}
                        key={tab.name}
                        onClick={() => setActiveTab(tab)}>
                        {tab.title}
                    </div>
                ))}
            </div>
            <Content>
                {activeTab.content}
            </Content>
        </div>
    )
}