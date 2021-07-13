import { BugTwoTone as BaseBugTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BugTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBugTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bug-two-tone text-xl"
            role="img"
            aria-label="bug-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};