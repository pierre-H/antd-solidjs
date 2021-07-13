import { InfoOutlined as BaseInfoOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InfoOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInfoOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-info-outlined text-xl"
            role="img"
            aria-label="info-outlined"
            innerHTML={svgHTMLString}
        />
    );
};