import { CiCircleTwoTone as BaseCiCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CiCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCiCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-ci-circle-two-tone text-xl"
            role="img"
            aria-label="ci-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};