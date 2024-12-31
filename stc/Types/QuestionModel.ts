export interface IQuestion {
    _id: string;
    question: {
        header: string;
        content: string;
    };
    answer: string;
}