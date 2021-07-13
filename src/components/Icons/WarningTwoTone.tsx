import { WarningTwoTone as BaseWarningTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WarningTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWarningTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-warning-two-tone text-xl"
            role="img"
            aria-label="warning-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};