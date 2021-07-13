import { PoundCircleOutlined as BasePoundCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PoundCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePoundCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pound-circle-outlined text-xl"
            role="img"
            aria-label="pound-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};