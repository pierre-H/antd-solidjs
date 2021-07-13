import { FireTwoTone as BaseFireTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FireTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFireTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fire-two-tone text-xl"
            role="img"
            aria-label="fire-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};