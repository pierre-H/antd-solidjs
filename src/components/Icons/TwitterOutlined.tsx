import { TwitterOutlined as BaseTwitterOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TwitterOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTwitterOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-twitter-outlined text-xl"
            role="img"
            aria-label="twitter-outlined"
            innerHTML={svgHTMLString}
        />
    );
};