import { ReadOutlined as BaseReadOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ReadOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseReadOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-read-outlined text-xl"
            role="img"
            aria-label="read-outlined"
            innerHTML={svgHTMLString}
        />
    );
};