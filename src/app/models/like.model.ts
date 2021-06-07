

export interface Like {
    _id: string;
    movie: number;
}

export interface LikeResponse {
    status: number;
    message: string;
    payload: Array<Like>;
}
