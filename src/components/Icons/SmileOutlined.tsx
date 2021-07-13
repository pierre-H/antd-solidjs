import { SmileOutlined as BaseSmileOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SmileOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSmileOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-smile-outlined text-xl"
            role="img"
            aria-label="smile-outlined"
            innerHTML={svgHTMLString}
        />
    );
};