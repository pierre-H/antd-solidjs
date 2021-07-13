import { ZhihuSquareFilled as BaseZhihuSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ZhihuSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseZhihuSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-zhihu-square-filled text-xl"
            role="img"
            aria-label="zhihu-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};