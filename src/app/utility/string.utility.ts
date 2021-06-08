
export const formatDate = (date: string): string => {
    const base = new Date(date);
    return base.getFullYear().toString();
};
