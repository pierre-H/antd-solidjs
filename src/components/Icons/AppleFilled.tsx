import { AppleFilled as BaseAppleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AppleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAppleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-apple-filled text-xl"
            role="img"
            aria-label="apple-filled"
            innerHTML={svgHTMLString}
        />
    );
};