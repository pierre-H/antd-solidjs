import { CopyrightCircleOutlined as BaseCopyrightCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CopyrightCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCopyrightCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-copyright-circle-outlined text-xl"
            role="img"
            aria-label="copyright-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};