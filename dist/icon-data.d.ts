export interface IconData {
    viewBox: string;
    paths: string[];
    circles?: {
        cx: number;
        cy: number;
        r: number;
    }[];
    lines?: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }[];
    stroke?: boolean;
}
export declare const iconData: Record<string, IconData>;
