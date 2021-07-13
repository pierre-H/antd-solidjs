import { RestFilled as BaseRestFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RestFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRestFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-rest-filled text-xl"
            role="img"
            aria-label="rest-filled"
            innerHTML={svgHTMLString}
        />
    );
};