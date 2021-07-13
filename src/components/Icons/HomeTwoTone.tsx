import { HomeTwoTone as BaseHomeTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HomeTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHomeTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-home-two-tone text-xl"
            role="img"
            aria-label="home-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};