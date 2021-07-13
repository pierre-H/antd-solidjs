import { FunctionOutlined as BaseFunctionOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FunctionOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFunctionOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-function-outlined text-xl"
            role="img"
            aria-label="function-outlined"
            innerHTML={svgHTMLString}
        />
    );
};