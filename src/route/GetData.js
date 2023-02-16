const appList = [
    {
        class: 8,
        subjectsList: [
            {
                path: '/8-class/eng',
                title: 'Английский язык',
                topicsList: [
                    {
                        title: 'Module 5',
                        path: '/8-class/eng/module-5',
                        materialForPreparation: {
                            path: '/8-class/eng/module-5/material-for-preparation',
                            material: [
                                {
                                    title: 'Лексика',
                                    description: 'Shy - confident / робкий - уверенный\nSelfish - generous / эгоистичный - щедрый\nReliable - unreliable / надёжный - ненадёжный\nStubborn - flexible / упрямый - гибкий'
                                },
    
                                {
                                    title: 'Словообразование',
                                    description: 'Сущ. + ful, al, ic, ish, less, ly = прил.'
                                }
                            ]
                        },
                        
                        quiz: [
                            {
                                type: 'test',
                                title: 'The plane ... showed the passengers what to do in case of an emergency. ',
                                variants: ['team', 'staff', 'crew'],
                                correct: 2
                            },
        
                            {
                                type: 'test',
                                title: 'The terrible fire left dozens of buildings ... ruins.',
                                variants: ['on', 'in', 'by'],
                                correct: 1
                            },
        
                            {
                                type: 'test',
                                title: 'The football match was called ... because it was snowing.',
                                variants: ['out', 'off', 'for'],
                                correct: 1
                            },
        
                            {
                                type: 'test',
                                title: 'Cars and factories produce toxic ... that harm the environment.',
                                variants: ['fog', 'fumes', 'flames'],
                                correct: 1
                            },

                            {
                                type: 'test',
                                title: 'The ... rain caused the driver to lose control of his car and crash into a tree.',
                                variants: ['heavy', 'huge', 'massive'],
                                correct: 0
                            },

                            {
                                type: 'test',
                                title: 'The lead actor felt under the ... and Daniel was asked to replace him in the school play.',
                                variants: ['clouds', 'climate', 'weather'],
                                correct: 2
                            },

                            {
                                type: 'test',
                                title: 'When you go to Paris, don‘t ... the chance to have your portrait painted in the Artist‘s Square.',
                                variants: ['miss', 'lose', 'leave'],
                                correct: 2
                            },

                            {
                                type: 'user-input',
                                title: 'Julia ... (live) in such a hot country only after she had been there for a few months.',
                                correct: 'got used to living'
                            },

                            {
                                type: 'user-input',
                                title: 'I don’t think Ian ... (be) around animals; he’s never even had a pet.',
                                correct: 'is used to being'
                            },

                            {
                                type: 'user-input',
                                title: 'Mr Roberts is a primary school teacher, so he ... (work) with young children.',
                                correct: 'is used to working'
                            },
                            
                            {
                                type: 'user-input',
                                title: 'Sheila ... (drive) to work, but now she takes the bus.',
                                correct: 'used to drive'
                            },

                            {
                                type: 'user-input',
                                title: 'Tammy isn’t too comfortable with the idea of car-pooling yet, but I’m sure she ... (share) a car with other people.',
                                correct: 'will get used to sharing'
                            }
                        ]
                    },
                ]
            }
        ]
    }
]

export default appList