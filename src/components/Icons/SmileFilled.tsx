import { SmileFilled as BaseSmileFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SmileFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSmileFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-smile-filled text-xl"
            role="img"
            aria-label="smile-filled"
            innerHTML={svgHTMLString}
        />
    );
};