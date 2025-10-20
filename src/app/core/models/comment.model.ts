/**
 * Interfaz que defina la estructura de un comentario
 */

export interface Comment{
    id: string;
    postId: string;
    userId: string;
    username: string;
    userAvatar?: string;
    content: string;
    likes: string;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * Interfaz para crear un comentario
 */

export interface createComment{
    postId: string;
    content: string;
}

/**
 * Interfaz para actualizar un comentario
 */

export interface updateComment{
    content?: string;
}