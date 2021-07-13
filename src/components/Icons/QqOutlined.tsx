import { QqOutlined as BaseQqOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const QqOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseQqOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-qq-outlined text-xl"
            role="img"
            aria-label="qq-outlined"
            innerHTML={svgHTMLString}
        />
    );
};