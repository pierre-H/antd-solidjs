import { CodepenCircleFilled as BaseCodepenCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CodepenCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCodepenCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-codepen-circle-filled text-xl"
            role="img"
            aria-label="codepen-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};