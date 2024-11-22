'use client'

const Tours = [
    {
        tour: 'exampleTour',
        title: "Example Tour",
        steps: [
            {
                id: 'firstStep',
                title: "First Step",
                content: <>You can intereact with this focussed element</>,
                interactable: true,
                route: '/',
                selector: '#interactable-input',
                side: 'bottom'
            },
            {
                id: 'secondStep',
                title: 'Second Step',
                content: <>You can not interact with this focussed element</>,
                interactable: false,
                route: '/',
                selector: '#non-interactable-input',
                side: 'bottom'
            },
            {
                id: 'thirdStep',
                title: 'Third Step',
                content: <>This step is on another page is is routed automatically</>,
                interactable: false,
                route: '/about',
                selector: '#some-content-to-focus',
                side: 'bottom'
            }
        ]
    }
];
export default Tours;