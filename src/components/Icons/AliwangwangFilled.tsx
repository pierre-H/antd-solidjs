import { AliwangwangFilled as BaseAliwangwangFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AliwangwangFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAliwangwangFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-aliwangwang-filled text-xl"
            role="img"
            aria-label="aliwangwang-filled"
            innerHTML={svgHTMLString}
        />
    );
};