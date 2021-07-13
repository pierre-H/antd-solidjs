import { SaveTwoTone as BaseSaveTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SaveTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSaveTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-save-two-tone text-xl"
            role="img"
            aria-label="save-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};