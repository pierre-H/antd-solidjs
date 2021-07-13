import { BugFilled as BaseBugFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BugFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBugFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bug-filled text-xl"
            role="img"
            aria-label="bug-filled"
            innerHTML={svgHTMLString}
        />
    );
};