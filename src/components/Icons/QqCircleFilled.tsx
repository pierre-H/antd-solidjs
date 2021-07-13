import { QqCircleFilled as BaseQqCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const QqCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseQqCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-qq-circle-filled text-xl"
            role="img"
            aria-label="qq-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};