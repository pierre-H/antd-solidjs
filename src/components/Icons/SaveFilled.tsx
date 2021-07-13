import { SaveFilled as BaseSaveFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SaveFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSaveFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-save-filled text-xl"
            role="img"
            aria-label="save-filled"
            innerHTML={svgHTMLString}
        />
    );
};