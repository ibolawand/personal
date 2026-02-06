interface Note {
    title: string,
    content: string,
    categoryID: number,
    folderID: number,
}
interface Category {
    id: number,
    name: string,
}

interface Folder {
    id: number,
    name: string,
    colour: string,
}
interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    logged_in: boolean,
}