import { PushpinOutlined as BasePushpinOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PushpinOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePushpinOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pushpin-outlined text-xl"
            role="img"
            aria-label="pushpin-outlined"
            innerHTML={svgHTMLString}
        />
    );
};