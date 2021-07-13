import { CopyrightCircleTwoTone as BaseCopyrightCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CopyrightCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCopyrightCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-copyright-circle-two-tone text-xl"
            role="img"
            aria-label="copyright-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};