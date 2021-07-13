import { EllipsisOutlined as BaseEllipsisOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EllipsisOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEllipsisOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-ellipsis-outlined text-xl"
            role="img"
            aria-label="ellipsis-outlined"
            innerHTML={svgHTMLString}
        />
    );
};