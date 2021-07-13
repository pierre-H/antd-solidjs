import { CiTwoTone as BaseCiTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CiTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCiTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-ci-two-tone text-xl"
            role="img"
            aria-label="ci-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};