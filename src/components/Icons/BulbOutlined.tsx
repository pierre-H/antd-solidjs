import { BulbOutlined as BaseBulbOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BulbOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBulbOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bulb-outlined text-xl"
            role="img"
            aria-label="bulb-outlined"
            innerHTML={svgHTMLString}
        />
    );
};