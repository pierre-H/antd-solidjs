import { CopyrightOutlined as BaseCopyrightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CopyrightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCopyrightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-copyright-outlined text-xl"
            role="img"
            aria-label="copyright-outlined"
            innerHTML={svgHTMLString}
        />
    );
};