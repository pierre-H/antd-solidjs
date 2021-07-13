import { SisternodeOutlined as BaseSisternodeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SisternodeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSisternodeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-sisternode-outlined text-xl"
            role="img"
            aria-label="sisternode-outlined"
            innerHTML={svgHTMLString}
        />
    );
};