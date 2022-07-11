import Vue from "vue";
import "./styles.scss";
interface IPageData {
    showFirst: boolean;
    showLast: boolean;
    isOverPage: boolean;
    disabledFirstBack: boolean;
    disabledForwardLast: boolean;
    arrayNumber?: number[];
}
export declare const minSection = 3;
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {}, {
    fixPageNumber(): void;
    makePager(): IPageData;
    makeFirstLastclass(isOverPage: boolean, show: boolean): string;
    makePageclass(isActive: boolean): string;
    onChangepage(page: number): void;
}, {
    hasData: boolean;
    numberPages: number;
    pageData: IPageData;
    isDefault: boolean;
}, {
    totalCount: string | number;
    value: string | number;
    limit: string | number;
    section: string | number;
    type: string;
    labelFirst: string;
    labelLast: string;
    labelBack: string;
    labelForward: string;
    showFirstLast: boolean;
    showForwardBack: boolean;
    hideFirstLastIfActive: boolean;
}, {}>;
export default _default;
