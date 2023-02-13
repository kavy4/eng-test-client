const appList = [
    {
        path: '/eng',
        title: 'Английский язык',
        topicsList: [
            {
                title: 'topic1',
                path: '/eng/topic1',
                materialForPreparation: {
                    quiz: [
                        {
                            title: 'Quiz 1',
                            variants: ['variant1', 'variant2', 'variant3'],
                            correct: 0
                        },

                        {
                            title: 'Quiz 2',
                            variants: ['variant1', 'variant2', 'variant3'],
                            correct: 2
                        }
                    ]
                }
            },

            {
                title: 'topic2',
                path: '/eng/topic2',
                materialForPreparation: {
                    quiz: [
                        {
                            title: 'Quiz 1',
                            variants: ['variant1', 'variant2', 'variant3'],
                            correct: 0
                        },

                        {
                            title: 'Quiz 2',
                            variants: ['variant1', 'variant2', 'variant3'],
                            correct: 2
                        }
                    ]
                }
            }
        ]
    }
]

export default appList