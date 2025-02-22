export const dataState: DataStateType = {
    pages: [
        {
            heading: "Циклы while",
            about: " Цикл while имеет следующий синтаксис: ",
        },
        {
            heading: "Циклы for",
            about: " Цикл for имеет следующий синтаксис: ",
        },
        {
            heading: "Конструкция switch",
            about: " Конструкция switch заменяет собой сразу несколько if. ",
        },
    ],
};

export type DataStateType = {
    pages: Array<PagesType>
}

export type PagesType = {
    heading: string
    about: string
}
