import { HomeOutlined as BaseHomeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HomeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHomeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-home-outlined text-xl"
            role="img"
            aria-label="home-outlined"
            innerHTML={svgHTMLString}
        />
    );
};