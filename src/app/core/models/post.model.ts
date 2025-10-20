/*
* Interfaz que define la estructura de una publicacion
 */

export interface Post{
    id: string;
    userId: string;
    username: string;
    content: string;
    userAvater: string;
    image?: string;
    likes: string;
    commentCount: string;
    createdAt?: Date;
    updatedAt?: Date;
}

/**
 * Interfaz para crear una nueva publicación
 */

export interface createPost{
    content: string;
    image?: string;
}

/**
 * Interfaz para actualizar una publicación
 */

export interface updatePost{
    content?: string;
    image?: string;
}
