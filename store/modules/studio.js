const state = {
    boilerplates: {
        elements: [
            {
                name: 'Div',
                icon: 'far fa-square',
                tag: 'div',
                classNames: [
                    'element',
                    'block',
                    'p-4'
                ],
                children: []
            },
            {
                name: 'Image',
                icon: 'far fa-image',
                tag: 'img',
                classNames: [
                    'element',
                    'inline-block'
                ],
                src: '#'
            },
            {
                name: 'Paragraph',
                icon: 'fas fa-font',
                tag: 'div',
                classNames: [
                    'element',
                    'p-4'
                ],
                children: []
            },
            {
                name: 'Button',
                icon: 'far fa-hand-point-up',
                tag: 'button',
                classNames: [
                    'element',
                    'px-6',
                    'py-3'
                ],
                children: []
            },
            {
                name: 'Link',
                icon: 'fas fa-hashtag',
                tag: 'a',
                classNames: [
                    'element',
                    'inline-block',
                    'px-6',
                    'py-3'
                ],
                children: []
            },
            {
                name: 'Span',
                icon: 'fas fa-square',
                tag: 'span',
                classNames: [
                    'element',
                    'inline-block',
                    'px-6',
                    'py-3'
                ],
                children: []
            }
        ],
        components: []
    },
    availableClasses: {
        'Container': [
            {
                className: '.container',
                description: 'A component for fixing an element\'s width to the current breakpoint.'
            }
        ],
        'Display': [
            {
                className: '.block',
                description: 'Create a block-level element.',
                thumbnail: '/static/images/thumbnails/display_block.png'
            },
            {
                className: '.inline-block',
                description: 'Create an inline block-level element',
                thumbnail: '/static/images/thumbnails/display_inline_block.png'
            }
        ],
        'Padding All': [
            {
                className: '.p-0',
                description: 'padding: 0;'
            },
            {
                className: '.p-1',
                description: 'padding: 0.25rem;'
            },
            {
                className: '.p-2',
                description: 'padding: 0.5rem;'
            },
            {
                className: '.p-3',
                description: 'padding: 0.75rem;'
            },
            {
                className: '.p-4',
                description: 'padding: 1rem;'
            },
            {
                className: '.p-5',
                description: 'padding: 1.25rem;'
            },
            {
                className: '.p-6',
                description: 'padding: 1.5rem;'
            },
            {
                className: '.p-8',
                description: 'padding: 2rem;'
            },
            {
                className: '.p-10',
                description: 'padding: 2.5rem;'
            },
            {
                className: '.p-12',
                description: 'padding: 3rem;'
            },
            {
                className: '.p-16',
                description: 'padding: 4rem;'
            },
            {
                className: '.p-20',
                description: 'padding: 5rem;'
            },
            {
                className: '.p-24',
                description: 'padding: 6rem;'
            },
            {
                className: '.p-32',
                description: 'padding: 8rem;'
            },
            {
                className: '.p-40',
                description: 'padding: 10rem;'
            },
            {
                className: '.p-48',
                description: 'padding: 12rem;'
            },
            {
                className: '.p-56',
                description: 'padding: 14rem;'
            },
            {
                className: '.p-64',
                description: 'padding: 16rem;'
            },
            {
                className: '.p-px',
                description: 'padding: 1px;'
            }
        ]
    },
    rootElement: {
        id: 1,
        name: 'Root',
        tag: 'div',
        classNames: [
            'flex',
            'flex-col',
            'h-full',
            'w-full'
        ],
        innerText: 'A Div',
        children: []
    }
}

const actions = {
    setElements: {
        handler(elements){
            return elements
        },
        reducer(state, payload){
            return { ...state, elements: payload }
        }
    }
}

export {
    state,
    actions
}