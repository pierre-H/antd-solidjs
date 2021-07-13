import { DingdingOutlined as BaseDingdingOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DingdingOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDingdingOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dingding-outlined text-xl"
            role="img"
            aria-label="dingding-outlined"
            innerHTML={svgHTMLString}
        />
    );
};