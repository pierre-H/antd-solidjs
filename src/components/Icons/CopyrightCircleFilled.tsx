import { CopyrightCircleFilled as BaseCopyrightCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CopyrightCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCopyrightCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-copyright-circle-filled text-xl"
            role="img"
            aria-label="copyright-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};