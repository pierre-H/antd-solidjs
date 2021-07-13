import { ApiTwoTone as BaseApiTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ApiTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseApiTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-api-two-tone text-xl"
            role="img"
            aria-label="api-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};