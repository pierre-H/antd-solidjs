import { UpCircleFilled as BaseUpCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UpCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUpCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-up-circle-filled text-xl"
            role="img"
            aria-label="up-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};