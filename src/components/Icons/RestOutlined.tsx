import { RestOutlined as BaseRestOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RestOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRestOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-rest-outlined text-xl"
            role="img"
            aria-label="rest-outlined"
            innerHTML={svgHTMLString}
        />
    );
};