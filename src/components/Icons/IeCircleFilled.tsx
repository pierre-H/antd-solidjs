import { IeCircleFilled as BaseIeCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const IeCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseIeCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-ie-circle-filled text-xl"
            role="img"
            aria-label="ie-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};