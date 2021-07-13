import { BellOutlined as BaseBellOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BellOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBellOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bell-outlined text-xl"
            role="img"
            aria-label="bell-outlined"
            innerHTML={svgHTMLString}
        />
    );
};