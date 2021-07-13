import { ZhihuCircleFilled as BaseZhihuCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ZhihuCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseZhihuCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-zhihu-circle-filled text-xl"
            role="img"
            aria-label="zhihu-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};