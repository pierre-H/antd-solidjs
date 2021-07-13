import { RedEnvelopeOutlined as BaseRedEnvelopeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RedEnvelopeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRedEnvelopeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-red-envelope-outlined text-xl"
            role="img"
            aria-label="red-envelope-outlined"
            innerHTML={svgHTMLString}
        />
    );
};