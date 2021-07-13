import { CopyrightTwoTone as BaseCopyrightTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CopyrightTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCopyrightTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-copyright-two-tone text-xl"
            role="img"
            aria-label="copyright-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};