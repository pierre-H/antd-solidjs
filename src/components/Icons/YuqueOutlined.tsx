import { YuqueOutlined as BaseYuqueOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const YuqueOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseYuqueOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-yuque-outlined text-xl"
            role="img"
            aria-label="yuque-outlined"
            innerHTML={svgHTMLString}
        />
    );
};