import { RestTwoTone as BaseRestTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RestTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRestTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-rest-two-tone text-xl"
            role="img"
            aria-label="rest-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};