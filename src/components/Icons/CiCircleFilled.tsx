import { CiCircleFilled as BaseCiCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CiCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCiCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-ci-circle-filled text-xl"
            role="img"
            aria-label="ci-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};