let items = [{
    // FULL
        "id": "full",
        "typeP": "FullWeb",
        "descripcion": "full",
    },

    {
        "id": "standar",
        "typeP": "FullWeb",
        "descripcion": "full",
    },
    {
        "id": "premium",
        "typeP": "FullWeb",
        "descripcion": "full",
    },
    {

        "id": "mensual",
        "typeP": "Mensuales",
        "descripcion": "mensual",
    },

    // mensual

    {
        "id": "standar",
        "typeP": "Mensuales",
        "descripcion": "mensual",
    },
    {
        "id": "premium",
        "typeP": "Mensuales",
        "descripcion": "mensual",
    },
]

export function fetchData(typeP, descripcion) {

    const data = new Promise((resolve, reject) => {

        if (typeP && descripcion) {
            setTimeout(() => {
                resolve(items.filter(modelo => modelo.typeP === typeP && modelo.descripcion === descripcion))
            }, 2000);;


        } else {
            setTimeout(() => {
                reject({
                    error: "error en resolver"
                })
            }, 2000)
        }
    })
    return data
}

export function fetchItemData(id) {
    const ItemData = new Promise((resolve, reject) => {
        if (id) {
            setTimeout(() => {
                resolve(items.find(modelo => modelo.id === id))
            }, 2000);;
        } else {
            setTimeout(() => {
                reject({
                    error: "error en resolver"
                })
            }, 2000)
        }
    })
    return ItemData

}

export function fullData() {

    const data = new Promise((resolve, reject) => {

        if (items) {
            setTimeout(() =>
                resolve(items), 2000);;



        } else {
            setTimeout(() => {
                reject({
                    error: "error en resolver"
                })
            }, 2000)
        }
    })

    return data

}