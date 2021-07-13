import { MehOutlined as BaseMehOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MehOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMehOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-meh-outlined text-xl"
            role="img"
            aria-label="meh-outlined"
            innerHTML={svgHTMLString}
        />
    );
};