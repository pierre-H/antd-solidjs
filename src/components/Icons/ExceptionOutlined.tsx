import { ExceptionOutlined as BaseExceptionOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ExceptionOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseExceptionOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-exception-outlined text-xl"
            role="img"
            aria-label="exception-outlined"
            innerHTML={svgHTMLString}
        />
    );
};