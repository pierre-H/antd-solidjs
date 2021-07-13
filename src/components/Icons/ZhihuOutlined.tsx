import { ZhihuOutlined as BaseZhihuOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ZhihuOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseZhihuOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-zhihu-outlined text-xl"
            role="img"
            aria-label="zhihu-outlined"
            innerHTML={svgHTMLString}
        />
    );
};