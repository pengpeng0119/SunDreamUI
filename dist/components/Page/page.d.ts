import { FC } from 'react';
export interface PageProps {
    currentPage?: number;
    groupCount?: number;
    startPage?: number;
    totalPage?: number;
    pageCallbackFn?: (current: number) => void;
}
declare const Page: FC<PageProps>;
export default Page;
