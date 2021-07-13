import { UpCircleTwoTone as BaseUpCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UpCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUpCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-up-circle-two-tone text-xl"
            role="img"
            aria-label="up-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};